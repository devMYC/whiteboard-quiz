import LinkedList, { INode } from './linkedList'


test('should be able to iterate list using for..of loop', () => {
  const list = new LinkedList()
  list.insertLast('A')
  list.insertLast('B')
  list.insertLast('C')
  const result: string[] = []
  for ( const { data } of list ) {
    result.push(data)
  }
  expect( result ).toEqual([ 'A', 'B', 'C' ])
})


test('should clear the entire list', () => {
  expect.assertions(2)
  const list = new LinkedList()
  list.insertFirst('C')
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.size ).toBe(3)
  list.clear()
  expect( list.size ).toBe(0)
})


test('should manipulate each node with the given function', () => {
  expect.assertions(2)
  const list = new LinkedList()
  list.insertFirst('A')
  list.insertLast('B')
  list.forEach((node: INode, i: number) => node.data = `${node.data}${i}`)
  expect( list.size ).toBe(2)
  expect([
    list.getAt(0).data,
    list.getAt(1).data,
  ]).toEqual([ 'A0', 'B1' ])
})


test('should return node at specific position', () => {
  expect.assertions(4)
  const list = new LinkedList()
  expect( list.getAt(-1) ).toBe(null)
  expect( list.getAt(0) ).toBe(null)
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.getAt(1).data ).toBe('B')
  expect( list.getAt(2) ).toBe(null)
})


test('should return first node from the list', () => {
  expect( new LinkedList().head ).toBe(null)
})


test('should insert new node at specific position', () => {
  expect.assertions(2)
  const list = new LinkedList()
  list.insertAt(0, 'C')
  list.insertAt(0, 'A')
  list.insertAt(1, 'B')
  list.insertAt(3, 'D')
  list.insertAt(-1, 'X')
  list.insertAt(10, 'Y')
  expect( list.size ).toBe(4)
  expect([
    list.getAt(0).data,
    list.getAt(1).data,
    list.getAt(2).data,
    list.getAt(3).data,
  ]).toEqual([ 'A', 'B', 'C', 'D' ])
})


test('should insert new node to the head', () => {
  expect.assertions(3)
  const list = new LinkedList()
  expect( list.head ).toBe(null)
  list.insertFirst('C')
  expect( list.head.data ).toBe('C')
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.head.data ).toBe('A')
})


test('should insert new node to the tail', () => {
  expect.assertions(2)
  const list = new LinkedList()
  list.insertLast('A')
  list.insertLast('B')
  expect( list.size ).toBe(2)
  expect( list.tail.data ).toBe('B')
})


test('should remove node at specific position', () => {
  expect.assertions(3)
  const list = new LinkedList()
  list.insertFirst('A')
  list.insertLast('B')
  list.insertLast('C')
  expect( list.size ).toBe(3)
  list.removeAt(0)
  list.removeAt(2)
  list.removeAt(1)
  expect( list.size ).toBe(1)
  expect( list.head.data ).toBe('B')
})


test('should remove head node from list', () => {
  expect.assertions(4)
  const list = new LinkedList()
  list.removeFirst()
  expect( list.size ).toBe(0)
  list.insertFirst('C')
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.size ).toBe(3)
  list.removeFirst()
  expect( list.size ).toBe(2)
  expect( list.head.data ).toBe('B')
})


test('should remove tail node from list', () => {
  const list = new LinkedList()
  list.removeLast()
  expect( list.size ).toBe(0)
  list.insertFirst('C')
  expect( list.tail.data ).toBe('C')
  list.removeLast()
  expect( list.tail ).toBe(null)
  list.insertFirst('C')
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.size ).toBe(3)
  list.removeLast()
  expect( list.tail.data ).toBe('B')
})


test('should return the current size of list', () => {
  expect.assertions(2)
  const list = new LinkedList()
  expect( list.size ).toBe(0)
  list.insertFirst('C')
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.size ).toBe(3)
})


test('should return the last node of list', () => {
  expect.assertions(3)
  const list = new LinkedList()
  expect( list.tail ).toBe(null)
  list.insertFirst('C')
  expect( list.tail.data ).toBe('C')
  list.insertFirst('B')
  list.insertFirst('A')
  expect( list.tail.data ).toBe('C')
})
