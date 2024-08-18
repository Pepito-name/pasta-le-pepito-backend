import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/common';
import { LoginAdminDto } from './dto/login-admin.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async adminlogin(payload: LoginAdminDto) {
    const admin = await this.userRepository.findOneByOrFail({
      email: payload.email,
    });

    if (!admin || !(await bcrypt.compare(payload.password, admin.password))) {
      throw new UnauthorizedException('wrong email or password');
    }
    return admin;
  }

  async getMe(id: number) {
    const admin = await this.userRepository.findOneByOrFail({
      id,
      role: Role.Admin,
    });
    return admin;
  }

  update(id: number, payload: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
