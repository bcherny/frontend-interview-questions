/// solution

function isBalanced2(string) {
  let stack = new Stack
  for (let letter of string) {
    switch (letter) {
      case '{':
      case '[':
      case '(':
        stack.push(letter)
        break
      case '}':
      case ']':
      case ')':
        if (pairOf(stack.peek()) === letter) {
          stack.pop()
        } else {
          return false
        }
    }
  }
  return stack.size() === 0
}

let pairs = {
  '(': ')',
  '[': ']',
  '{': '}'
}
function pairOf(letter) {
  return pairs[letter]
}

class Stack {
  constructor() {
    this.items = []
  }
  peek() {
    return this.items[this.size() - 1]
  }
  push(item) {
    this.items.push(item)
  }
  pop() {
    return this.items.pop()
  }
  size() {
    return this.items.length
  }
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced2('(foo { bar (baz) [boo] })'), true))
test(t => t.is(isBalanced2('foo { bar { baz }'), false))
test(t => t.is(isBalanced2('foo { (bar [baz] } )'), false))
