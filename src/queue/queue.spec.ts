import Queue from './queue'


test('should list entries currently in the queue', () => {
  const q = new Queue()
  expect(q.size).toBe(0)
  expect(q.isEmpty).toBe(true)
  expect( q.entries ).toEqual([])
})


test('should add new entry to the queue', () => {
  const q = new Queue()
  q.enqueue(100)
  q.enqueue(200)
  expect(q.size).toBe(2)
  expect(q.isEmpty).toBe(false)
  expect( q.entries ).toEqual([ 100, 200 ])
})


test('should remove entry from head of queue and return the value', () => {
  const q = new Queue()
  q.enqueue(100)
  q.enqueue(200)
  q.enqueue(300)
  expect( q.dequeue() ).toBe(100)
  expect( q.entries ).toEqual([ 200, 300 ])
})
