interface ICharMap<T> {
  [ key: string ]: T
}

/**
 * Return most frequently occurred character from the given string
 *
 * @example
 *  mostFreqChar('') -> ''
 *  mostFreqChar('abcd') -> 'a'
 *  mostFreqChar('abcdefacbbb') -> 'b'
 */
export const mostFreqChar = (str: string): string => {
  const charMap: ICharMap<number> = {}
  let result: string = ''
  let max: number = 0

  for ( const char of str ) {
    charMap[char] = charMap[char] + 1 || 1
    if ( charMap[char] > max ) {
      max = charMap[char]
      result = char
    }
  }
  return result
}
