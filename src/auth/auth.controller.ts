import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginAdminDto } from 'src/admin/dto/login-admin.dto';
import { LocalAuthGuard } from './guards/local.guard';
import { User } from 'src/common';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginAdminDto })
  async adminLogin(@User() user: any) {
    return await this.authService.adminLogin(user);
  }
}
