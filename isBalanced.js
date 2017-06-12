/// solution

function isBalanced(string) {
  let count = 0
  for (let letter of string) {
    if (letter === '{') {
      count++
    }
    if (letter === '}') {
      count--
    }
  }
  return count === 0
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced('foo { bar { baz }'), false))
test(t => t.is(isBalanced('foo { bar } }'), false))
