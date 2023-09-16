import { Injectable } from '@nestjs/common';

enum Unit {
  b = 'B',
  kb = 'KB',
  mb = 'MB',
  gb = 'GB',
  tb = 'TB',
  pb = 'PB',
  ev = 'EB',
  zb = 'ZB',
  yb = 'YB',
}
export interface IStorage {
  number: number;
  unit: Unit;
  test?: boolean;
}

@Injectable()
export class StorageService {
  formatStorageNumberToObj(size: number, decimal: number = 0): IStorage {
    // body接收的参数为字符串
    size = typeof size === 'number' ? size : Number(size);
    const units = Object.values(Unit);
    let unitIndex = 0;
    // 循环检查是否需要升级单位
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    // 四舍五入到指定的小数位数
    const roundedNumber = Number(size.toFixed(decimal));
    return {
      number: roundedNumber,
      unit: units[unitIndex],
    };
  }
}
