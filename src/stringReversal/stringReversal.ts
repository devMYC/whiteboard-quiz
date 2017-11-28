/**
 * Reverse the given string
 *
 * @examples
 *  reverseStr('') -> ''
 *  reverseStr('abcd') -> 'dcba'
 */
export const reverseStr = (str: string): string => (
  str.split('').reduce((reversed, char) => char + reversed, '')
)
