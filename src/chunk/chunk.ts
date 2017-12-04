/**
 * Divide the given array into many chunks where
 * each chunk is of length size (at most)
 *
 * @examples
 *  chunk([ 1, 2, 3, 4 ], 2) -> [ [ 1, 2 ], [ 3, 4 ] ]
 *  chunk([ 1, 2, 3, 4 ], 3) -> [ [ 1, 2, 3 ], [ 4 ] ]
 */
export function chunk<T>(arr: ReadonlyArray<T> | T[], size: number): T[][] {
  const chunks: T[][] = []
  if ( size < 1 ) {
    return chunks
  }
  for ( let i = 0; i < arr.length; i += size ) {
    chunks.push( arr.slice(i, i + size) )
  }
  return chunks
}
