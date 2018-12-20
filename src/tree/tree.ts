/**
 * Tree is a collection of nodes in a hierarchical structure
 * where each node may have zero or more child nodes
 *
 * @example
 *         A
 *      /  |  \
 *    B    C    D
 *         |    |  \
 *         E    F   G
 */
interface INode {
  key: string
  children: INode[]
  appendChild: (key: string) => INode
}

interface ITree {
  rootNode: INode
  print(): string
}

interface ITreeConstructor {
  new (rootKey: string): ITree
}

export const createTree = (ctor: ITreeConstructor, rootKey: string): ITree => {
  return new ctor(rootKey)
}

export class Tree implements ITree {

  private root: INode

  constructor(rootKey: string) {
    this.root = this.createNode(rootKey)
  }

  get rootNode() {
    return this.root
  }

  public print() {
    let result = ''
    this.traverse(
      this.rootNode,
      (node, depth) => {
        result += result
          ? `\n${' '.repeat(depth * 4)}${node.key}`
          : node.key
      },
      0
    )
    return result
  }

  private createNode(key: string): INode {
    const self = this
    const node: INode = {
      children: [],
      key,
      appendChild(childKey) {
        const child = self.createNode(childKey)
        this.children.push( child )
        return child
      },
    }
    node.appendChild = node.appendChild.bind(node)
    return node
  }

  private traverse(
    node: INode,
    fn: (node: INode, depth: number) => void,
    depth: number
  ): void {
    fn(node, depth)
    if ( !node.children.length ) { return }
    node.children.forEach(child => this.traverse(child, fn, depth + 1))
  }

}
