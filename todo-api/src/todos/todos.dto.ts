import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateTodoDto implements Prisma.TodoCreateInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  title: string;
}

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @IsBoolean()
  completed: boolean;
}
