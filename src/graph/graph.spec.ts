import Graph from './graph'
type Edge = [ string, string ]; // tslint:disable-line semicolon


test('graph [undirected]', () => {
  const graph = new Graph()
  graph.addNode('A')
  graph.addNode('B')
  graph.addNode('C')
  graph.addNode('D')

  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('B', 'A')
  graph.addEdge('B', 'C')
  graph.addEdge('B', 'D')
  graph.addEdge('C', 'B')
  graph.addEdge('D', 'A')

  expect(`\n${graph.print()}`).toBe(`
A -> B C D
B -> A C D
C -> A B
D -> A B`)
})


test('graph [directed]', () => {
  const graph = new Graph(true)
  expect(() => graph.addEdge('A', 'B')).toThrow()
  graph.addNode('A')
  expect(() => graph.addEdge('A', 'B')).toThrow()
  graph.addNode('B')
  graph.addNode('C')
  graph.addNode('D')

  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('A', 'D')
  graph.addEdge('B', 'A')
  graph.addEdge('B', 'C')
  graph.addEdge('B', 'D')
  graph.addEdge('C', 'B')
  graph.addEdge('D', 'A')

  expect(`\n${graph.print()}`).toBe(`
A -> B C D
B -> A C D
C -> B
D -> A`)
})


test('graph breadth-first search', () => {
  const graph = new Graph(true)
  const nodes = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
  const edges: Edge[] = [
    [ 'a', 'b' ],
    [ 'a', 'e' ],
    [ 'a', 'f' ],
    [ 'b', 'd' ],
    [ 'b', 'e' ],
    [ 'c', 'b' ],
    [ 'd', 'c' ],
    [ 'd', 'e' ],
  ]
  nodes.forEach(graph.addNode.bind(graph))
  edges.forEach(tuple => graph.addEdge(...tuple))

  let result = []
  let target

  expect(
    graph.bfs('x', /* istanbul ignore next */node => { fail(); return false })
  ).toBe(undefined)
  expect(result.length).toBe(0)

  expect(graph.bfs('a', node => node.key === 'x')).toBe(undefined)

  target = graph.bfs('a', node => {
    result.push(node.key)
    return node.key === 'a'
  })
  expect(target.key).toBe('a')
  expect(result.join(', ')).toBe('a')

  result = [] // reset to empty array
  target = graph.bfs('a', node => {
    result.push(node.key)
    return node.key === 'c'
  })
  expect(target.key).toBe('c')
  expect(result.join(', ')).toBe('a, b, e, f, d, c')
})


test('graph depth-first search', () => {
  const graph = new Graph(true)
  const nodes = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
  const edges: Edge[] = [
    [ 'a', 'b' ],
    [ 'a', 'e' ],
    [ 'a', 'f' ],
    [ 'b', 'd' ],
    [ 'b', 'e' ],
    [ 'c', 'b' ],
    [ 'd', 'c' ],
    [ 'd', 'e' ],
  ]
  nodes.forEach(graph.addNode.bind(graph))
  edges.forEach(tuple => graph.addEdge(...tuple))

  let result = []
  let target

  expect(
    graph.dfs('x', /* istanbul ignore next */node => { fail(); return false })
  ).toBe(undefined)
  expect(result.length).toBe(0)

  expect(graph.dfs('a', node => node.key === 'x')).toBe(undefined)

  target = graph.dfs('a', node => {
    result.push(node.key)
    return node.key === 'a'
  })
  expect(target.key).toBe('a')
  expect(result.join(', ')).toBe('a')

  result = [] // reset to empty array
  target = graph.dfs('a', node => {
    result.push(node.key)
    return node.key === 'c'
  })
  expect(target.key).toBe('c')
  expect(result.join(', ')).toBe('a, b, d, c')

  result = [] // reset to empty array
  target = graph.dfs('a', node => {
    result.push(node.key)
    return node.key === 'f'
  })
  expect(target.key).toBe('f')
  expect(result.join(', ')).toBe('a, b, d, c, e, f')
})
