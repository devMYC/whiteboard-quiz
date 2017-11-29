/**
 * Check if the given string is a palindrome.
 * Palindromes are strings that reads the same backward as forward.
 *
 * @examples
 *  isPalindrome('taco cat') -> true
 *  isPalindrome('hello') -> false
 */
export const isPalindrome = (str: string): boolean => {
  const purified = str.replace(/\W/, '')
  for ( let i = 0; i < purified.length / 2; i++ ) {
    if ( purified[i] !== purified[purified.length - 1 - i] ) {
      return false
    }
  }
  return true
}
