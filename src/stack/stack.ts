/**
 * Implement a stack structure
 *
 * @example
 *  const s = new Stack()
 *  s.push('A')
 *  s.push('B')
 *  s.size -> 2
 *  s.pop() -> 'B'
 *  s.size -> 1
 */
export default class Stack<T> {

  private entries: T[]

  constructor() {
    this.entries = []
  }

  public get size() {
    return this.entries.length
  }

  public pop() {
    const top: number = this.entries.length - 1
    const popped: T = this.entries[top]
    this.entries = this.entries.slice(0, top)
    return popped
  }

  public push(entry: T) {
    this.entries = this.entries.concat(entry)
  }

}
