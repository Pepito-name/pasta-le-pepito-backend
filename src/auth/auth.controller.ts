import {
  Controller,
  Post,
  Res,
  UseGuards,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginAdminDto } from 'src/admin/dto/login-admin.dto';
import { LocalAuthGuard } from './guards/local.guard';
import { setRefreshTokenCookie, User } from 'src/common';
import { Response, Request as req } from 'express';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginAdminDto })
  async adminLogin(
    @Res({ passthrough: true }) response: Response,
    @User() user: any,
  ) {
    const {
      user: admin,
      accessToken,
      refreshToken,
    } = await this.authService.adminLogin(user);

    setRefreshTokenCookie(response, refreshToken);

    return { admin, accessToken };
  }

  @Post('refresh-token')
  async refreshToken(
    @Request() request: req,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (!request.headers.cookie)
      throw new BadRequestException('Cookei is required!');

    const { accessToken, refreshToken } = await this.authService.refreshTokens(
      request.headers.cookie.split('=')[1],
    );

    setRefreshTokenCookie(response, refreshToken);

    return { accessToken };
  }
}
