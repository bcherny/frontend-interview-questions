/// solution

/**
 * LinkedList has 2 members, head and tail:
 * - head is a value
 * - tail is either another LinkedList, or null
 */
export class LinkedList {
  constructor(head, ...tail) {
    this.head = head
    this.tail = tail.length
      ? new LinkedList(...tail)
      : null
  }
  add(item) {
    if (this.tail) {
      this.tail.add(item)
    } else {
      this.tail = new LinkedList(item)
    }
  }
  has(item) {
    if (this.head === item) {
      return true
    }
    if (this.tail === null) {
      return false
    }
    return this.tail.has(item)
  }
}

// tests

import test from 'ava'

test('LinkedList', t => {
  let list = new LinkedList(1, 2, 3)
  list.add(4)
  list.add(5)
  t.is(list.has(1), true)
  t.is(list.has(4), true)
  t.is(list.has(6), false)
})
