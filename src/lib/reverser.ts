/**
 * @function reverser
 * @param str String string to reverse
 * @return String reversed input string
 */
export function reverser(str: string): string | null {
  if (typeof str === 'object') {
    return null;
  }
  const str = String(str);
  return str.split("").reverse().join("");
}
