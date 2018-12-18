/**
 * Sort array using merge sort algorithm
 *
 * @example
 *  mergeSort([ 3, 2, 5, 9, 7 ]) -> [2, 3, 5, 7, 9]
 */
export const mergeSort = (arr: number[]): number[] => {
  if ( arr.length < 2 ) { return arr }

  const mid = Math.floor( arr.length / 2 )
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return _merge( mergeSort(left), mergeSort(right) )
}

function _merge(left: number[], right: number[]): number[] {
  const arr = []
  let leftIdx = 0
  let rightIdx = 0

  while ( leftIdx + rightIdx < left.length + right.length ) {
    const leftElem = left[leftIdx]
    const rightElem = right[rightIdx]

    if ( leftElem == null ) { // tslint:disable-line triple-equals
      arr.push(rightElem)
      rightIdx++
    } else if ( rightElem == null ) { // tslint:disable-line triple-equals
      arr.push(leftElem)
      leftIdx++
    } else if ( leftElem < rightElem ) {
      arr.push(leftElem)
      leftIdx++
    } else {
      arr.push(rightElem)
      rightIdx++
    }
  }

  return arr
}
