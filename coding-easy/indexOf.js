/// solution

function indexOf(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i
    }
  }
  return -1
}

/// solution2
const indexOf2 = (array, item) => array.reduce((acc, i, ii) => {
	return i === item ? ii : acc
}, -1)

/// tests

import { test } from 'ava'

test(t => t.is(indexOf([1, 2, 3], 1), 0))
test(t => t.is(indexOf([1, 2, 3], 4), -1))

test(t => t.is(indexOf2([1, 2, 3], 1), 0))
test(t => t.is(indexOf2([1, 2, 3], 4), -1))
