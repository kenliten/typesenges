/**
 * @function reverser
 * @param str String string to reverse
 * @return String reversed input string
 */
export function reverser (str: string | any): string | null {
  if (typeof str === 'object') {
    return null
  }

  str = String(str)

  return str.split('')
    .reverse()
    .join('')
}
