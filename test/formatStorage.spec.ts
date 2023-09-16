import { formatStorageNumberToObj } from '../src/index'

describe('formatStorageNumberToObj', () => {
  it('should format 0Byte with 0 decimal places', () => {
    const result = formatStorageNumberToObj(0)
    expect(result).toEqual({ number: 0, unit: 'B' })
  })

  it('should format size to KB with 0 decimal places', () => {
    const result = formatStorageNumberToObj(1058, 0)
    expect(result).toEqual({ number: 1, unit: 'KB' })
  })

  it('should format size number to MB with 2 decimal places but rounding only leaves 0', () => {
    const result = formatStorageNumberToObj(1048576, 2)
    expect(result).toEqual({ number: 1, unit: 'MB' })
  })

  it('should format size number to MB with 2 decimal places', () => {
    const result = formatStorageNumberToObj(1248576, 2)
    expect(result).toEqual({ number: 1.19, unit: 'MB' })
  })
})
