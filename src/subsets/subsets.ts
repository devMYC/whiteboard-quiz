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
