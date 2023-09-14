import { formatStorageNumberToObj } from '../src/index'

describe('formatStorageNumberToObj', () => {
  it('should format storage number to KB with 0 decimal places', () => {
    const result = formatStorageNumberToObj(1024, 0)
    expect(result).toEqual({ number: 1, unit: 'KB' })
  })

  it('should format storage number to MB with 2 decimal places', () => {
    const result = formatStorageNumberToObj(1248576, 2)
    expect(result).toEqual({ number: 1.19, unit: 'MB' })
  })

  // Add more test cases as needed
})
