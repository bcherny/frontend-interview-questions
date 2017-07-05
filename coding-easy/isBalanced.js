/// solution

function isBalanced(string) {
  let count = 0
  for (let letter of string) {
    if (letter === '{') {
      count++
    }
    if (letter === '}') {
      count--

      // if a closing bracket doesn't have a matching
      // opening bracket, we should return early.
      if (count < 0) {
        return false
      }

    }
  }
  return count === 0
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced('}{'), false))
test(t => t.is(isBalanced('{{}'), false))
test(t => t.is(isBalanced('{}{}'), true))
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced('foo { bar { baz }'), false))
test(t => t.is(isBalanced('foo { bar } }'), false))
