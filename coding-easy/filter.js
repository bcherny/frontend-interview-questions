/// solution

function filter(array, fn) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    if (fn(current)) {
      result.push(current)
    }
  }
  return result
}

const filter2 = ([x, ...xs], fn) => x
	? fn(x) ? [x, ...filter2(xs, fn)] : filter2(xs, fn) 
	: []

/// tests

import { test } from 'ava'

test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]))
test(t => t.deepEqual(filter2([1, 2, 3, 4], n => n < 3), [1, 2]))
