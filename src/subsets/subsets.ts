/**
 * Return all subsets of the given set
 *
 * @example
 *  subsets([ 1, 2 ]) -> [ [], [1], [2], [1, 2] ]
 *  subsets([ 1, 2, 3 ]) -> [ [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ]
 */
export const subsets = (arr: number[]): number[][] => {
  const result: number[][] = [ [] ]
  let container: number[][] = []
  for ( const n of arr ) {
    container = [ ...result ]
    for ( const subset of container ) {
      result.push([ ...subset, n ])
    }
  }
  return result
}
