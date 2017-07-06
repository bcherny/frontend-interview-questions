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

/// solution 2
const isBalanced2 = string => {
  const stack = []
  const token = string
    .replace(/[^\{\}]+/g, '') // not necessary but can reduce forEach item
    .split('')
  token.forEach(t => {
    if (t === '{') stack.push(t)
    else if (t === '}' && stack[stack.length - 1] === '{') stack.pop()
    else if (t === '}')stack.push(t)
  })
  return stack.length === 0
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced('}{'), false))
test(t => t.is(isBalanced('{{}'), false))
test(t => t.is(isBalanced('{}{}'), true))
test(t => t.is(isBalanced('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced('foo { bar { baz }'), false))
test(t => t.is(isBalanced('foo { bar } }'), false))

test(t => t.is(isBalanced2('}{'), false))
test(t => t.is(isBalanced2('{{}'), false))
test(t => t.is(isBalanced2('{}{}'), true))
test(t => t.is(isBalanced2('foo { bar { baz } boo }'), true))
test(t => t.is(isBalanced2('foo { bar { baz }'), false))
test(t => t.is(isBalanced2('foo { bar } }'), false))
