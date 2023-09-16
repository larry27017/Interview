import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorageService } from './storage/storage.service';
import { StorageController } from './storage/storage.controller';

@Module({
  imports: [],
  controllers: [AppController, StorageController],
  providers: [AppService, StorageService],
})
export class AppModule {}
