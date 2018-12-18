/**
 * Sort array using quick sort algorithm
 *
 * @example
 *  quickSort([ 3, 5, 1, 4, 2 ]) -> [ 1, 2, 3, 4, 5 ]
 */
export const quickSort = (arr: number[]): number[] => {
  if ( arr.length < 2 ) { return arr }

  _partition(arr, 0, arr.length)
  return arr
}

function _partition(arr: number[], start: number, end: number): void {
  const range = end - start
  if ( range < 2 ) { return }

  const pivotIdx = start + Math.floor( Math.random() * range )
  _swap(arr, start, pivotIdx)

  const pivot = arr[start]
  let pivotRank = start
  for ( let i = start + 1; i < end; i++ ) {
    if ( arr[i] >= pivot ) { continue }
    pivotRank++
    _swap(arr, i, pivotRank)
  }

  _swap(arr, start, pivotRank)
  _partition(arr, start, pivotRank)
  _partition(arr, pivotRank + 1, end)
}

function _swap(arr: number[], i: number, j: number): void {
  if ( i === j ) { return }
  arr[i] += arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] = arr[i] - arr[j]
}
