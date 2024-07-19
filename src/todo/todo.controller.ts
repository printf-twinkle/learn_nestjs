import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { userEmail } from 'src/common/decorator/user-email.decorator';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'To add a new task wrt to the user email.', summary: 'add a new task'})

  @ApiBearerAuth()
  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @userEmail()
  userEmail: string) {
    console.log("output")
    return this.todoService.create(createTodoDto, userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'To get all the tasks set by the user', summary: 'to get all user tasks'})
  @Get()
  async findAll(@userEmail()
  userEmail: string) {
    return this.todoService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'To find that task', summary: 'find one task'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'To update all user tasks', summary: 'update all tasks'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ description: 'To delete that user task', summary: 'to delete that task'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
