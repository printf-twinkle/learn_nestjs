import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateTodoDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;
}
