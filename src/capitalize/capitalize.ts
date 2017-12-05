/**
 * Return a string that capitalized each word of the given string
 *
 * @examples
 *  capitalize('hi, there!') -> 'Hi, There!'
 */
export const capitalize = (str: string): string => (
  str.length
    ? str
      .split(' ')
      .map(([ firstLetter, ...rest ]) => (
        firstLetter.toUpperCase() + rest.join('')
      ))
      .join(' ')
    : str
)
