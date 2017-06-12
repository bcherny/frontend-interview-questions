/// solution

export class LinkedList {
  constructor(item, ...items) {
    this.head = item
    if (items) {
      this.tail = new LinkedList(...items)
    }
  }
  add(item) {
    if (this.tail) {
      this.tail.add(item)
    } else {
      this.tail = new LinkedList(item)
    }
    return this
  }
  has(item) {
    return this.head === item
      || Boolean(this.tail && this.tail.has(item))
  }
  get(index) {
    if (index === 0) {
      return this.head
    } else if (this.tail) {
      return this.tail.get(index - 1)
    } else {
      return undefined
    }
  }
}

// tests

import test from 'ava'

let list = new LinkedList(1, 2, 3)

test('#get', t => {
  t.true(list.get(2) === 3)
  t.true(list.get(5) === undefined)
})

test('#has', t => {
  t.true(list.has(3))
  t.false(list.has(4))
})

test('#add', t => {
  t.true(list.add(4).add(5).get(4) === 5)
})