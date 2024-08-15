import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginAdminDto } from 'src/admin/dto/login-admin.dto';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    readonly adminService: AdminService,
  ) {}

  async adminLogin(payload: LoginAdminDto) {
    const admin = await this.adminService.adminlogin(payload);

    const { accessToken, refreshToken } = await this.generateTokens(
      admin.email,
      admin.role,
      admin.id,
    );
    return { admin, accessToken, refreshToken };
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
