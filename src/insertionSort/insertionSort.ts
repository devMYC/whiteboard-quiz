/**
 * Sort array using insertion sort algorithm
 *
 * @example
 *  insertionSort([ 3, 2, 5, 9, 7 ]) -> [2, 3, 5, 7, 9]
 */
export const insertionSort = (arr: number[]): number[] => {
  if ( arr.length < 2 ) { return arr }

  for ( let i = 1; i < arr.length; i++ ) {
    const curr = arr[i]
    let j = i - 1
    while ( j >= 0 && arr[j] > curr ) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }

  return arr
}
