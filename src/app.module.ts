import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [DatabaseModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
