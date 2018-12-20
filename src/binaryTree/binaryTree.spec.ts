import { BinTree, createBinTree, Side, TraversalType } from './binaryTree'

test('binary tree', () => {
  /**
   *         a
   *      /     \
   *     b       c
   *   /  \     /  \
   *  d     e  f    g
   *       /    \
   *      h      i
   */
  const tree = createBinTree(BinTree, 'a')
  const b = tree.rootNode.addChild(Side.LEFT, 'b')
  const c = tree.rootNode.addChild(Side.RIGHT, 'c')
  const d = b.addChild(Side.LEFT, 'd')
  const e = b.addChild(Side.RIGHT, 'e')
  const f = c.addChild(Side.LEFT, 'f')
  const g = c.addChild(Side.RIGHT, 'g')
  e.addChild(Side.LEFT, 'h')
  f.addChild(Side.RIGHT, 'i')

  expect(() => e.addChild(Side.LEFT, 'x')).toThrow()
  expect(tree.traversal(TraversalType.IN_ORDER)).toBe('d, b, h, e, a, f, i, c, g')
  expect(tree.traversal(TraversalType.PRE_ORDER)).toBe('a, b, d, e, h, c, f, i, g')
  expect(tree.traversal(TraversalType.POST_ORDER)).toBe('d, h, e, b, i, f, g, c, a')
})
