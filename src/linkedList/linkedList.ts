/**
 * Implement a linked list structure
 *
 * @example
 *  const list = new LinkedList()
 *  list.insertFirst('A')
 *  list.insertLast('B')
 *  list.head -> 'A'
 *  list.tail -> 'B'
 *  list.size -> 2
 */
export interface INode {
  data: any
  next: INode|null
}


class Node {

  private _data: any
  private _next: INode|null

  constructor(data: any, next: INode|null = null) {
    this._data = data
    this._next = next
  }

  public get data(): any {
    return this._data
  }

  public set data(data: any) {
    this._data = data
  }

  public get next(): INode|null {
    return this._next
  }

  public set next(node: INode|null) {
    this._next = node
  }

}

/*tslint:disable-next-line max-classes-per-file*/
export default class LinkedList {

  private list: INode|null

  constructor() {
    this.list = null
  }

  public *[Symbol.iterator]() {
    let node = this.head
    while ( node ) {
      yield node
      node = node.next
    }
  }

  public clear(): void {
    this.list = null
  }

  public forEach(f: (node: INode, i: number) => void): void {
    let node = this.head
    let index = 0
    while ( node ) {
      f(node, index++)
      node = node.next
    }
  }

  public getAt(n: number): INode|null {
    let i: number = 0
    let node = this.head

    if ( n < i || !node ) {
      return null
    }

    while ( i < n ) {
      node = (node as INode).next
      if ( !node ) {
        return node
      }
      i++
    }
    return node
  }

  public get head(): INode|null {
    return this.list
  }

  public insertAt(n: number, data: any): boolean {
    if ( !this.head && n === 0 ) {
      this.list = new Node(data)
      return true
    } else if ( n === 0 ) {
      this.list = new Node(data, this.head)
      return true
    }

    const node = this.getAt(n - 1)
    if ( node && node.next ) {
      node.next = new Node(data, node.next)
      return true
    } else if ( node ) {
      node.next = new Node(data)
      return true
    }
    return false
  }

  public insertFirst(data: any): void {
    this.insertAt(0, data)
  }

  public insertLast(data: any): void {
    if ( this.tail ) {
      this.tail.next = new Node(data)
      return
    }
    this.list = new Node(data)
  }

  public removeAt(n: number): void {
    if ( this.head && n === 0 ) {
      this.list = this.head.next
      return
    }

    const node = this.getAt(n - 1)
    if ( node && node.next ) {
      node.next = node.next.next
    }
  }

  public removeFirst(): void {
    this.removeAt(0)
  }

  public removeLast(): void {
    if ( !this.head ) {
      return
    }

    let node = this.head
    if ( !node.next ) {
      this.list = null
      return
    }
    while ( (node.next as INode).next ) {
      node = node.next as INode
    }
    node.next = null
    return
  }

  public get size(): number {
    if ( !this.head ) {
      return 0
    }

    let n = 1
    let node = this.head
    while ( node.next ) {
      n++
      node = node.next
    }
    return n
  }

  public get tail(): INode|null {
    if ( !this.head ) {
      return this.head
    }

    let node = this.head
    while ( node.next ) {
      node = node.next
    }
    return node
  }

}
