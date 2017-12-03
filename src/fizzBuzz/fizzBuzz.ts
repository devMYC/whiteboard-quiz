/**
 * Print numbers from 1 to n.
 * But for multiples of three print "fizz" and for multiples
 * of five print "buzz". For numbers that are multiples of both
 * three and five print "fizzbuzz".
 *
 * @examples
 *  fizzBuzz(15)
 *  output:
 *    1
 *    2
 *    fizz
 *    4
 *    buzz
 *    .
 *    .
 *    .
 *    14
 *    fizzbuzz
 */
export const fizzBuzz = (n: number): void => {
  for ( let i = 1; i <= n; i++ ) {
    // tslint:disable no-console
    if ( i % 15 === 0 ) {
      console.log('fizzbuzz')
    } else if ( i % 3 === 0 ) {
      console.log('fizz')
    } else if ( i % 5 === 0 ) {
      console.log('buzz')
    } else {
      console.log(i)
    }
    // tslint:enable no-console
  }
}
