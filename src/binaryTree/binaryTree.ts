/**
 * Binary tree is a collection of nodes in a hierarchical structure
 * where each node can only have up to two children
 *
 * @example
 *         A
 *       /   \
 *      B     C
 *    /      /  \
 *   D      E    F
 *           \
 *            G
 */
export enum Side {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum TraversalType {
  IN_ORDER,
  PRE_ORDER,
  POST_ORDER,
}

interface INode {
  key: string
  children: {
    left?: INode
    right?: INode
  }
  addChild(side: Side, key: string): INode
}

interface IBinTree {
  rootNode: INode
  traversal(type: TraversalType): string
}

interface IBinTreeConstructor {
  new (rootKey: string): IBinTree
}

export const createBinTree = (ctor: IBinTreeConstructor, rootKey: string): IBinTree => {
  return new ctor(rootKey)
}

export class BinTree implements IBinTree {

  private root: INode

  constructor(rootKey: string) {
    this.root = this._createNode(rootKey)
  }

  get rootNode() {
    return this.root
  }

  public traversal(t: TraversalType) {
    const nodes: Array<INode['key']> = []
    this._traverse(t, this.rootNode, node => nodes.push(node.key))
    return nodes.join(', ')
  }

  private _createNode(key: string): INode {
    const self = this
    const node: INode = {
      children: {},
      key,
      addChild(side, childKey) {
        if ( this.children[side] ) {
          throw new Error(`${this.key} already had ${side} child.`)
        }
        return this.children[side] = self._createNode(childKey)
      },
    }
    node.addChild = node.addChild.bind(node)
    return node
  }

  private _traverse(t: TraversalType, node: INode | undefined, fn: (node: INode) => any) {
    if ( node == null ) { return } // tslint:disable-line triple-equals

    switch ( t ) {
    case TraversalType.IN_ORDER:
      this._traverse(t, node.children.left, fn)
      fn(node)
      this._traverse(t, node.children.right, fn)
      return
    case TraversalType.PRE_ORDER:
      fn(node)
      this._traverse(t, node.children.left, fn)
      this._traverse(t, node.children.right, fn)
      return
    case TraversalType.POST_ORDER:
      this._traverse(t, node.children.left, fn)
      this._traverse(t, node.children.right, fn)
      fn(node)
      return
    }
  }

}
