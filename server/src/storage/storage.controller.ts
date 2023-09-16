import { Controller, Post, Body } from '@nestjs/common';
import { StorageService, IStorage } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('/formatStorage')
  // 取body中的数据，返回格式化后的数据
  formatStorage(@Body() body: { size: number; decimal: number }): IStorage {
    const { size, decimal } = body;
    return this.storageService.formatStorageNumberToObj(size, decimal);
  }
}
