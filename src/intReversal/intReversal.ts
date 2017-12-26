/**
 * Return an integer that is reverse ordering the numbers of the given integer
 *
 * @example
 *  reverseInt(10) -> 1
 *  reverseInt(-321) -> -123
 */
export const reverseInt = (n: number): number => {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed, 10) * Math.sign(n)
}
