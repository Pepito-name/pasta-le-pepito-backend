import { BadRequestException, Injectable } from '@nestjs/common';
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
}
