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
interface IStorage {
  number: number
  unit: Unit
}

/**
 * @description 将按字节存储的内存格式化
 * @param {number}size 内存容量字节
 * @param {number} decimal 小数位数
 * @returns
 */
export function formatStorageNumberToObj (size: number, decimal: number = 0): IStorage {
  const units = Object.values(Unit)
  let unitIndex = 0
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  const roundedNumber = Number(size.toFixed(decimal))
  return {
    number: roundedNumber,
    unit: units[unitIndex]
  }
}
