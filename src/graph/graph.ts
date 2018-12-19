import Queue from '../queue/queue'

/**
 * Graph is a collection of nodes (aka vertices)
 * Nodes may point to other nodes, known as edges
 */
interface INode {
  key: string
  neighbors: INode[]
  addNeighbors(node: INode): void
}

export default class Graph {
  private directed: boolean
  private nodes: INode[]
  private edges: Set<string>

  constructor(directed = false) {
    this.directed = directed
    this.nodes = []
    this.edges = new Set()
  }

  public addNode(key: string): void {
    this.nodes.push(this.createNode(key))
  }

  public getNode(key: string): INode | undefined {
    return this.nodes.find(node => node.key === key)
  }

  public addEdge(nodeXKey: string, nodeYKey: string) {
    const x = this.getNode(nodeXKey)
    if ( x == null ) { // tslint:disable-line triple-equals
      throw new Error(`Could not add edge: ${nodeXKey} not found`)
    }
    const y = this.getNode(nodeYKey)
    if ( y == null ) { // tslint:disable-line triple-equals
      throw new Error(`Could not add edge: ${nodeYKey} not found`)
    }

    const relation = this.directed
      ? `${x.key}->${y.key}`
      : x.key < y.key
        ? `${x.key}<->${y.key}`
        : `${y.key}<->${x.key}`

    if ( this.edges.has(relation) ) { return }

    x.addNeighbors(y)
    this.edges.add(relation)

    this.directed || y.addNeighbors(x)
  }

  public bfs(nodeKey: string, predicate: (node: INode) => boolean): INode | undefined {
    const node = this.getNode(nodeKey)
    if ( node == null ) { return } // tslint:disable-line triple-equals
    if ( predicate(node) ) {
      return node
    }

    const q = new Queue()
    const visited = new Set()
    q.enqueue(node)
    visited.add(node.key)

    let currNode: INode
    while ( !q.isEmpty ) {
      currNode = q.dequeue() as INode

      let neighbor: INode
      for ( neighbor of currNode.neighbors ) {
        if ( visited.has(neighbor.key) ) {
          continue
        }
        if ( predicate(neighbor) ) {
          return neighbor
        }
        visited.add(neighbor.key)
        q.enqueue(neighbor)
      }
    }
    return
  }

  public dfs(nodeKey: string, predicate: (node: INode) => boolean): INode | undefined {
    const node = this.getNode(nodeKey)
    if ( node == null ) { return } // tslint:disable-line triple-equals
    if ( predicate(node) ) {
      return node
    }

    const q = new Queue()
    const visited = new Set()
    q.enqueue(node)
    visited.add(node.key)

    let found: INode | undefined
    const _fn = (n: INode): void => {
      let neighbor: INode
      for ( neighbor of n.neighbors ) {
        if ( found ) { return }
        if ( visited.has(neighbor.key) ) {
          continue
        }
        if ( predicate(neighbor) ) {
          found = neighbor
          return
        }
        visited.add(neighbor.key)
        q.enqueue(neighbor)
        _fn(neighbor)
      }
    }

    let currNode: INode
    while ( !q.isEmpty ) {
      currNode = q.dequeue() as INode
      _fn(currNode)
      if ( found ) {
        return found
      }
    }
    return
  }

  public print(): string {
    let result: string
    return this.nodes
      .map(({ key, neighbors }) => {
        result = key
        neighbors.length && (result += ` -> ${neighbors.map(({ key: k }) => k).join(' ')}`)
        return result
      })
      .join('\n')
  }

  private createNode(key: string): INode {
    const newNode: INode = {
      key,
      neighbors: [],
      addNeighbors(node) { this.neighbors.push(node) },
    }
    newNode.addNeighbors = newNode.addNeighbors.bind(newNode)
    return newNode
  }
}
