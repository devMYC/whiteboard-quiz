/**
 * find target item from an sorted array
 * using binary search and return its index (return -1 if target not found)
 *
 * @example
 *  binarySearch([ 0, 3, 7, 8, 10 ], 7) -> 2
 */
export const binarySearch = (arr: number[], target: any): number => {
  if ( arr.length < 1 ) { return -1 }
  if ( arr.length === 1 ) {
    return arr[0] === target ? 0 : -1
  }

  let low = 0
  let high = arr.length - 1
  let mid = Math.floor( (low + high) / 2 )
  do {
    if ( arr[mid] === target ) { return mid }
    if ( target < arr[mid] ) {
      high = mid - 1
    } else {
      low = mid + 1
    }
    mid = Math.floor( (low + high) / 2 )
  } while ( high > low )

  return -1
}
