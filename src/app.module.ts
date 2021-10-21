import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebasRxjsModule } from './pruebas-rxjs/pruebas-rxjs.module';

@Module({
  imports: [PruebasRxjsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
