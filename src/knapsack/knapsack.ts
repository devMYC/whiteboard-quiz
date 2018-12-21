/**
 * Given a set of items, each with a weight and a value,
 * determine the items to be included in a collection
 * so that the total weight is less than or equal to a given limit
 * and the total value is as large as possible.
 *
 * @example
 *  items = {
 *    rope: { value: 1500, weight: 1 },
 *    food: { value: 2000, weight: 3 },
 *    tent: { value: 3000, weight: 4 },
 *  }
 *  weightLimit = 4
 *  knapsack(weightLimit, items) -> { items: [ 'rope', 'food' ], value: 3500 }
 */
interface IItems {
  [key: string]: {
    value: number
    weight: number
  }
}

interface ICell {
  included: Set<string>
  value: number
}

export const knapsack = (
  weightLimit: number,
  items: IItems
): { items: string[], value: number } => {

  const itemTypes = Reflect.ownKeys(items) as string[]
  if ( itemTypes.length < 1 ) {
    return { items: [], value: 0 }
  }

  const constraint: number[] = Array(weightLimit).fill(null).map((_, i) => i + 1)
  const grid: ICell[][] = Array(itemTypes.length).fill(0).map(_ =>
    Array(weightLimit).fill(0).map(__ => ({ included: new Set(), value: 0 }))
  )

  grid.forEach((row, i) => {
    const item = items[itemTypes[i]]

    row.forEach((_, j) => {
      const prevRowSameCol: ICell = i === 0
        ? { included: new Set(), value: 0 }
        : grid[i - 1][j]

      if ( item.weight > constraint[j] ) {
        grid[i][j] = {
          ...prevRowSameCol,
          included: new Set(prevRowSameCol.included.values()),
        }
        return
      }
      if ( item.weight === constraint[j] ) {
        grid[i][j] = prevRowSameCol.value > item.value
          ? { ...prevRowSameCol, included: new Set(prevRowSameCol.included.values()) }
          : {
            included: prevRowSameCol.value === item.value
              && item.weight > getTotalWeight(items, prevRowSameCol.included)
              ? new Set(prevRowSameCol.included.values())
              : new Set([ itemTypes[i] ]),
            value: item.value,
          }
        return
      }
      const diff = constraint[j - 1] - item.weight
      const value = item.value + ( i === 0 ? 0 : grid[i - 1][diff].value )
      grid[i][j] = prevRowSameCol.value > value
        ? { ...prevRowSameCol, included: new Set(prevRowSameCol.included.values()) }
        : i === 0
          ? { included: new Set([ itemTypes[i] ]), value }
          : { included: new Set([ ...grid[i - 1][diff].included.values(), itemTypes[i] ]), value }
    })

  })

  const lastRow = grid[itemTypes.length - 1]
  let idx = weightLimit - 1
  let lowestWeight = getTotalWeight(items, lastRow[idx].included)

  for ( let i = 0; i < weightLimit; i++ ) {
    if ( lastRow[i].value !== lastRow[weightLimit - 1].value ) {
      continue
    }
    const weight = getTotalWeight(items, lastRow[i].included)
    if ( weight < lowestWeight ) {
      lowestWeight = weight
      idx = i
    }
  }

  return {
    items: [ ...lastRow[idx].included.values() ],
    value: grid[itemTypes.length - 1][weightLimit - 1].value,
  }
}

function getTotalWeight(items: IItems, iter: Set<string>) {
  return [ ...iter.values() ].reduce((sum, name) => sum += items[name].weight, 0)
}
