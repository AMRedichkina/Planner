import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './dto/user.dto';
import { DEFAULT_WORK_INTERVAL, DEFAULT_BREAK_INTERVAL, DEFAULT_INTERVAL_COUNT } from 'src/constants/settings.constants';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  async getUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    const { password, ...rest } = user
    return rest
  }

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      },
    })
  }

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      password: await hash(dto.password),
      settings: {
        create: {
          workInterval: DEFAULT_WORK_INTERVAL,
          breakInterval: DEFAULT_BREAK_INTERVAL,
          intervalCount: DEFAULT_INTERVAL_COUNT
        }
      }
    }
    return this.prisma.user.create({
      data: user,
      include: {
        settings: true
      }
    })
  }

  async update(id: string, dto: UserDto) {
    let data = dto;

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }
    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        name: true,
        email: true
      }
    })
  }
}
