/**
 * Checks if a value is empty.
 * An array or object is considered empty if it has no own enumerable properties.
 * @param value - The value to check.
 * @returns True if the value is empty, false otherwise.
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true // null or undefined
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}
