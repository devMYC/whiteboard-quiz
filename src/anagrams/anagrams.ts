/**
 * Check if the two given strings are anagrams. (punctuations are ignored)
 *
 * @examples
 *  anagrams('rail safety', 'fairy tales') -> true
 *  anagrams('slient', 'listen') -> true
 *  anagrams('puppy', 'kitty') -> false
 */
const cleanSort = (str: string): string => (
  str
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
)

export const areAnagrams = (a: string, b: string): boolean => (
  cleanSort(a) === cleanSort(b)
)
