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

  let i = Math.floor((arr as T[]).length / 2 - 1)
  let c: number
  let r: number

  // heapify
  for ( ; i >= 0; i-- ) {
    for ( r = i; r * 2 + 1 < (arr as T[]).length; r = c ) {
      c = r * 2 + 1
      c < (arr as T[]).length - 1 && fn((arr as T[])[c], (arr as T[])[c + 1]) < Compare.EQUAL && c++
      if ( fn((arr as T[])[r], (arr as T[])[c]) >= Compare.EQUAL ) {
        break
      }
      swap((arr as T[]), r, c)
    }
  }

  // sort
  for ( i = (arr as T[]).length - 1; i > 0; i-- ) {
    swap((arr as T[]), 0, i)
    for ( r = 0; r * 2 + 1 < i; r = c ) {
      c = r * 2 + 1
      c < i - 1 && fn((arr as T[])[c], (arr as T[])[c + 1]) === Compare.LESS && c++
      if ( fn((arr as T[])[r], (arr as T[])[c]) >= Compare.EQUAL ) {
        break
      }
      swap((arr as T[]), r, c)
    }
  }

  return (arr as T[])
}

function cmp<T>(a: T, b: T): Compare {
  return a < b ? Compare.LESS : a === b ? Compare.EQUAL : Compare.GREATER
}

function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
