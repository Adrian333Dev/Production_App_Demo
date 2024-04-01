import { Injectable } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './todos.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  // create(createTodoDto: CreateTodoDto) {
  //   return 'This action adds a new todo';
  // }

  // findAll() {
  //   return `This action returns all todos`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} todo`;
  // }

  // update(id: number, updateTodoDto: UpdateTodoDto) {
  //   return `This action updates a #${id} todo`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} todo`;
  // }

  async create(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.todo.delete({ where: { id } });
  }

  async removeAll() {
    return this.prisma.todo.deleteMany();
  }
}
