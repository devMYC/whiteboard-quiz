/**
 * Sort array using bubble sort algorithm
 *
 * @example
 *   bubbleSort([ 3, 2, 5, 9, 7 ]) -> [2, 3, 5, 7, 9]
 */
export const bubbleSort = (arr: number[]): number[] => {
  if (arr.length < 2) { return arr }

  let swapped = true
  let sorted = 0
  while ( swapped ) {
    swapped = false
    for ( let i = 0, j = i + 1; i < arr.length - sorted - 1; i++, j++ ) {
      if ( arr[i] <= arr[j] ) { continue }
      swapped = true
      arr[i] += arr[j]
      arr[j] = arr[i] - arr[j]
      arr[i] = arr[i] - arr[j]
    }
    sorted++
    if ( !swapped ) { break }
  }

  return arr
}
