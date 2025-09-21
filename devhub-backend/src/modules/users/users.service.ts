import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(name: string, email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ name, email, password: hashedPassword });
    return user.save();
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        //404
        throw new NotFoundException(`User with email ${email} not found`);
      }
      return user;
    } catch (error) {
      //500
      throw new InternalServerErrorException(error.message);
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ id }).exec();
      if (!user) {
        //404
        throw new NotFoundException(`User with email ${id} not found`);
      }
      return user;
    } catch (error) {
      //500
      throw new InternalServerErrorException(error.message);
    }
  }
}
