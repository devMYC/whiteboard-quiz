import PriorityQueue from './priorityQueue'

test('priority queue', () => {
  const q = new PriorityQueue()
  expect(q.size).toBe(0)
  expect(q.isEmpty).toBe(true)
  expect(q.entries).toEqual([])

  q.enqueue('A')
  q.enqueue('B', true)
  q.enqueue('C')
  q.enqueue('D', true)
  expect(q.size).toBe(4)
  expect(q.isEmpty).toBe(false)
  expect(q.entries).toEqual([ 'B', 'D', 'A', 'C' ])

  expect(q.dequeue()).toBe('B')
  q.enqueue('E', true)
  expect(q.dequeue()).toBe('D')
  expect(q.dequeue()).toBe('E')
  expect(q.dequeue()).toBe('A')
  expect(q.dequeue()).toBe('C')

  expect(q.size).toBe(0)
  expect(q.isEmpty).toBe(true)
  expect(q.entries).toEqual([])
  expect(q.dequeue()).toBe(null)
})
