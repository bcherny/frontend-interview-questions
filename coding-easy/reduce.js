/// solution

function reduce(array, fn, value) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    value = fn(value, current, i, array)
  }
  return value
}

/// solution 2
const reduce2 = ([x, ...xs], fn, value) => x
	? reduce2(xs, fn, fn(value, x))
	: value

/// tests

import { test } from 'ava'

test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10))
test(t => t.is(reduce2([1, 2, 3, 4], (a, b) => a + b, 0), 10))
