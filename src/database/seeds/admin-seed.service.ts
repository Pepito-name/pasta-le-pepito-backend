import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

const newAdmin = {
  role: Role.Admin,
  email: 'pastalapepito315@gmail.com',
  password: '315pepito!',
  name: 'admin',
  isRegistered: true,
};
@Injectable()
export class AdminSeedService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async run() {
    const user = await this.userRepository.findOneBy({
      role: Role.Admin,
    });
    if (!user) {
      const admin = new User();

      admin.name = newAdmin.name;
      admin.email = newAdmin.email;
      admin.password = await bcrypt.hash(newAdmin.password, 10);
      admin.role = newAdmin.role;
      admin.isRegistered = newAdmin.isRegistered;

      await this.userRepository.save(admin);
    }
  }
}
