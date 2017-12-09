/**
 * Returns the number of vowels in the given string.
 * Vowels are the character 'a', 'e', 'i', 'o', 'u'.
 *
 * @examples
 *  vowels('Hello world') -> 3
 *  vowels('random') -> 2
 */
export const vowels = (str: string): number => {
  let count: number = 0
  for ( const char of str ) {
    /[aeiou]/i.test(char) && count++
  }
  return count
}
