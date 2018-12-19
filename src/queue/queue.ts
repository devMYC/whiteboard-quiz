/**
 * Implement a queue structure
 *
 * @example
 *  const q = new Queue()
 *  q.enqueue(3)
 *  q.entries -> [ 3 ]
 *  q.dequeue() -> 3
 *  q.entries -> []
 */
export default class Queue<T> {
  private q: T[]

  constructor() {
    this.q = []
  }

  get entries(): T[] {
    return [ ...this.q ]
  }

  get isEmpty(): boolean {
    return this.q.length === 0
  }

  get size(): number {
    return this.q.length
  }

  public dequeue(): T {
    const [ elem ] = this.q.splice(0, 1)
    return elem
  }

  public enqueue(entry: T): void {
    this.q.push(entry)
  }
}
