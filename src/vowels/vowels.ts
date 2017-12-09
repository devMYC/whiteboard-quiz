/**
 * Returns the number of vowels in the given string.
 * Vowels are the character 'a', 'e', 'i', 'o', 'u'.
 *
 * @examples
 *  vowels('Hello world') -> 3
 *  vowels('random') -> 2
 */
export const vowels = (str: string): number => {
  const matches: string[] | null = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}
