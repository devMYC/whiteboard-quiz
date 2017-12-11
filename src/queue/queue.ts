/**
 * Implement a queue structure
 *
 * @examples
 *  const q = new Queue()
 *  q.enqueue(3)
 *  q.list -> [ 3 ]
 *  q.dequeue() -> 3
 *  q.list -> []
 */
export default class Queue<T> {

  private entries: T[]

  constructor() {
    this.entries = []
  }

  public get list() {
    return this.entries
  }

  public dequeue() {
    const removed: T = this.entries[0]
    this.entries = this.entries.slice(1)
    return removed
  }

  public enqueue(entry: T) {
    this.entries = this.entries.concat(entry)
  }

}
