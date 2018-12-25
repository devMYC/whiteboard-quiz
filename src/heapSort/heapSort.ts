/**
 * Sort array of numbers using heap sort algorithm
 *
 * @example
 *  heapSort(null, [ 6, 5, 3, 1, 8, 7, 2, 4 ]) -> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 *  heapSort()([ 5, 4, 3, 2, 1 ]) -> [ 1, 2, 3, 4, 5 ]
 *  heapSort(
 *    (a, b) => a.v > b.v ? 1 : a.v == b.v ? 0 : -1,
 *    [ {v:3}, {v:4}, {v:4}, {v:1}, {v:2} ]
 *  ) -> [ 1, 2, 3, 4, 4 ]
 */
export enum Compare {
  LESS = -1,
  EQUAL = 0,
  GREATER = 1,
}
type CmpFunc<T> = (a: T, b: T) => Compare

export function heapSort<T>(fn?: CmpFunc<T>|null): (arr: T[]) => T[]
export function heapSort<T>(fn: CmpFunc<T>|null|undefined, arr: T[]): T[]
export function heapSort<T>(fn: CmpFunc<T>|null|undefined, arr?: T[]): any {
  fn == null && ( fn = cmp ) // tslint:disable-line triple-equals
  if ( arguments.length < 2 ) {
    return heapSort.bind(null, fn)
  }

  arr = arr as T[]
  let i = Math.floor(arr.length / 2 - 1)
  let c: number
  let r: number


  // heapify
  for ( ; i >= 0; i-- ) {
    for ( r = i; r * 2 + 1 < arr.length; r = c ) {
      c = r * 2 + 1
      c < arr.length - 1 && fn(arr[c], arr[c + 1]) < Compare.EQUAL && c++
      if ( fn(arr[r], arr[c]) >= Compare.EQUAL ) {
        break
      }
      swap(arr, r, c)
    }
  }

  // sort
  for ( i = arr.length - 1; i > 0; i-- ) {
    swap(arr, 0, i)
    for ( r = 0; r * 2 + 1 < i; r = c ) {
      c = r * 2 + 1
      c < i - 1 && fn(arr[c], arr[c + 1]) === Compare.LESS && c++
      if ( fn(arr[r], arr[c]) >= Compare.EQUAL ) {
        break
      }
      swap(arr, r, c)
    }
  }

  return arr
}

function cmp<T>(a: T, b: T): Compare {
  return a < b ? Compare.LESS : a === b ? Compare.EQUAL : Compare.GREATER
}

function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
