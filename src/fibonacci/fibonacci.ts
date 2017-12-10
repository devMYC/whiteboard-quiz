/**
 * Return the nth entry in the fibonacci series.
 * The fibonacci series is an series of numbers where
 * each number is the sum of the preceeding two. i.e: [ 0, 1, 1, 2, 3, 5, 8 ... ]
 *
 * @examples
 *  fib(6) -> 5
 */
export const fib = (n: number): number => {
  let [ a, b ] = [ 0, 1 ]

  if ( n <= 1 ) {
    return a
  }

  for ( let i = 2; i < n; i++ ) {
    [ a, b ] = [ b, a + b ]
  }

  return b
}
