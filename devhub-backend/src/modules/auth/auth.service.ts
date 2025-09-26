import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email).catch(() => null);
    if (!user) return null;
    const isMatch = await bcrypt.compare(pass, user.password);
    if (isMatch) {
      // return user without password
      const { password, ...result } = user.toObject ? user.toObject() : user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // user is expected to be the user object (or at least id and email)
    const payload = { sub: user._id ?? user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      expires_in: 10600,
    };
  }

  async register(name: string, email: string, password: string) {
    // Delegar para UsersService.create (já faz hash)
    const created = await this.usersService.create(name, email, password);
    const { password: _p, ...userWithoutPassword } = created.toObject
      ? created.toObject()
      : created;
    return userWithoutPassword;
  }
}
