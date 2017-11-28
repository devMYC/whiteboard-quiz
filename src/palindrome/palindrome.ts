/**
 * Check if the given string is a palindrome.
 * Palindromes are strings that reads the same backward as forward.
 *
 * @examples
 *  isPalindrome('taco cat') -> true
 *  isPalindrome('hello') -> false
 */
export const isPalindrome = (str: string): boolean => {
  for ( let i = 0; i < str.length / 2; i++ ) {
    if ( str[i] !== str[str.length - 1 - i] ) {
      return false
    }
  }
  return true
}
