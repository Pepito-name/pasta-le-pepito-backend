import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/common';

import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from './dto/create-admin.dto';
import { ChangeAdminPasswordDto } from './dto/update-admin-password.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  async create(payload: CreateAdminDto) {
    const newAdmin = new User();
    const { name, email, phone, role } = payload;
    newAdmin.name = name;
    newAdmin.email = email;
    newAdmin.phone = phone;
    newAdmin.role = role;
    newAdmin.password = await bcrypt.hash(payload.password, 10);

    return await this.userRepository.save(newAdmin);
  }

  async getMe(id: number) {
    const admin = await this.userRepository.findOneByOrFail({
      id,
      role: Role.Admin,
    });
    return admin;
  }

  async update(id: number, payload: UpdateAdminDto) {
    const admin = await this.userRepository.findOneByOrFail({
      id,
      role: Role.Admin,
    });
    return admin;
  }

  async changePassword(id: number, payload: ChangeAdminPasswordDto) {
    const { oldPassword, newPassword, repeatNewPassword } = payload;

    const admin = await this.userRepository.findOneByOrFail({
      id,
    });

    if (!(await bcrypt.compare(oldPassword, admin.password))) {
      throw new BadRequestException('wrong old password');
    }

    if (oldPassword === newPassword) {
      throw new ConflictException(
        'the new password must be different from the old one',
      );
    }

    if (newPassword !== repeatNewPassword) {
      throw new ConflictException('passwords do not match');
    }

    admin.password = await bcrypt.hash(newPassword, 10);

    await this.userRepository.save(admin);

    const { accessToken, refreshToken } = await this.authService.generateTokens(
      admin.email,
      admin.role,
      admin.id,
    );

    return { accessToken, refreshToken };
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
