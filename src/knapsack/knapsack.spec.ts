// tslint:disable object-literal-sort-keys
import { knapsack } from './knapsack'

test('knapsack', () => {
  expect(knapsack(1, {})).toEqual({ items: [], value: 0 })

  expect(knapsack(4, {
    food: { value: 2_000, weight: 3 },
    rope: { value: 1_500, weight: 1 },
    tent: { value: 3_000, weight: 4 },
  })).toEqual({ items: [ 'food', 'rope' ], value: 3_500 })

  expect(knapsack(4, {
    rope: { value: 1_500, weight: 1 },
    water: { value: 1_500, weight: 3 },
    phone: { value: 4_000, weight: 1 },
    tent: { value: 3_000, weight: 4 },
  })).toEqual({ items: [ 'rope', 'phone'  ], value: 5_500 })

  expect(knapsack(5, {
    beer: { value: 200, weight: 3 },
    book: { value: 2_000, weight: 1 },
    laptop: { value: 8_000, weight: 3 },
    phone: { value: 2_000, weight: 2 },
  })).toEqual({ items: [ 'book', 'laptop' ], value: 10_000 })
})
