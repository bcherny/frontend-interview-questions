/// solution

function isBalanced(string) {
  let countClosing = 0
  let countOpening = 0
  for (let letter of string) {
    if (letter === '{') {
      countOpening++
    }
    if (letter === '}') {
      countClosing++

      // if a closing bracket doesn't have a matching
      // opening bracket, we can return early.
      if (countOpening < countClosing) {
        return false
      }

    }
  }
  return countOpening === countClosing
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced('}{'), false))
test(t => t.is(isBalanced('{{}'), false))
test(t => t.is(isBalanced('{}{}'), true))
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced('foo { bar { baz }'), false))
test(t => t.is(isBalanced('foo { bar } }'), false))
