/**
 * Sort array using selection sort algorithm
 *
 * @example
 *  selectionSort([ 3, 5, 1, 4, 2 ]) -> [ 1, 2, 3, 4, 5 ]
 */
export const selectionSort = (arr: number[]): number[] => {
  if ( arr.length < 2 ) { return arr }

  let length = arr.length
  while ( length ) {
    const last = length - 1
    const largestIdx = findTheLargest(arr, length)
    if ( last !== largestIdx ) {
      arr[last] += arr[largestIdx]
      arr[largestIdx] = arr[last] - arr[largestIdx]
      arr[last] = arr[last] - arr[largestIdx]
    }
    length--
  }

  return arr
}

function findTheLargest(arr: number[], end: number): number {
  let largestIdx = 0
  let largest = arr[largestIdx]
  for ( let i = 1; i < end; i++ ) {
    if ( arr[i] <= largest ) { continue }
    largestIdx = i
    largest = arr[largestIdx]
  }
  return largestIdx
}
