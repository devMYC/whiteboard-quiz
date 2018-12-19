/**
 * Implement a queue where elements with high priority
 * is served before an element with low priority.
 *
 * @example
 *  q.enqueue('A', highPriority=false)
 *  q.enqueue('B', highPriority=true)
 *  q.dequeue() -> 'B'
 *  q.dequeue() -> 'A'
 */
export default class PriorityQueue<T> {
  private highQ: T[]
  private lowQ: T[]

  constructor() {
    this.highQ = []
    this.lowQ = []
  }

  get entries(): T[] {
    return [ ...this.highQ, ...this.lowQ ]
  }

  get isEmpty(): boolean {
    return this.highQ.length === 0 && this.lowQ.length === 0
  }

  get size(): number {
    return this.highQ.length + this.lowQ.length
  }

  public enqueue(entry: T, high: boolean = false): void {
    (high ? this.highQ : this.lowQ).push(entry)
  }

  public dequeue(): T | null {
    if ( this.isEmpty ) { return null }
    let elem
    if ( this.highQ.length ) {
      [ elem ] = this.highQ.splice(0, 1)
      return elem
    }
    [ elem ] = this.lowQ.splice(0, 1)
    return elem
  }
}
