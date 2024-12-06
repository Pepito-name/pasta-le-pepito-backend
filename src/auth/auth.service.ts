import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOneOrFail({
      where: {
        email,
        isRegistered: true,
      },
    });
    if (!user.password) {
      throw new BadRequestException('You must set a password for your account');
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async adminLogin(user: any) {
    const admin = user as User;
    admin.isLoggedIn = true;
    await this.userRepository.save(admin);

    const { accessToken, refreshToken } = await this.generateTokens(
      user.email,
      user.role,
      user.id,
    );
    return { user, accessToken, refreshToken };
  }

  async generateTokens(email: string, role: string, id: number) {
    const [accessToken, refreshToken] = await Promise.all([
      await this.jwtService.signAsync({
        email: email,
        role: role,
        sub: id,
      }),

      await this.jwtService.signAsync(
        {
          email: email,
          role: role,
          sub: id,
        },
        {
          expiresIn: '7d',
          secret: this.configService.get<string>('REFRESH_JWT_SECRET'),
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(prevRefresh: string) {
    const payload = await this.jwtService.verifyAsync(prevRefresh, {
      secret: this.configService.get<string>('REFRESH_JWT_SECRET'),
    });
    console.log('payload :>> ', payload);

    const now = Math.floor(Date.now() / 1000);

    if (payload.exp < now) {
      const admin = await this.userRepository.findOneBy({ id: payload.sub });
      admin.isLoggedIn = false;
      await this.userRepository.save(admin);
      throw new UnauthorizedException('Expired refresh token');
    }
    const { accessToken, refreshToken } = await this.generateTokens(
      payload.email,
      payload.role,
      payload.sub,
    );
    return { accessToken, refreshToken };
  }
}
