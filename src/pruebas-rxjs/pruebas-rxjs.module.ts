import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApicallService } from './apicall/apicall.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [HttpModule],
  providers: [ApicallService],
  controllers: [UsersController],
})
export class PruebasRxjsModule {}
