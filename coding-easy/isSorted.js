/// solution

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    let next = array[i + 1]
    if (next && current > next) {
      // exit as soon as we know the array isn't sorted
      return false
    }
  }
  return true
}

/// tests

import { test } from 'ava'

test(t => t.is(isSorted([]), true))
test(t => t.is(isSorted([-Infinity, -5, 0, 3, 9]), true))
test(t => t.is(isSorted([3, 9, -3, 10]), false))
