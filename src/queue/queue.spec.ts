import 'jest'
import Queue from './queue'


test('should list entries currently in the queue', () => {
  expect.assertions(1)
  const q = new Queue()
  expect( q.list ).toEqual([])
})


test('should add new entry to the queue', () => {
  expect.assertions(1)
  const q = new Queue()
  q.enqueue(100)
  q.enqueue(200)
  expect( q.list ).toEqual([ 100, 200 ])
})


test('should remove entry from head of queue and return the value', () => {
  expect.assertions(1)
  const q = new Queue()
  q.enqueue(100)
  q.enqueue(200)
  q.enqueue(300)
  q.dequeue()
  expect( q.list ).toEqual([ 200, 300 ])
})
