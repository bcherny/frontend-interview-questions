/**
 * This is an implementation of the mergesort algorithm.
 * There are other O(N * log(N)) sort algorithms, but
 * this is probably the simplest.
 */

/// solution

function sort(array) {
  if (array.length < 2) {
    return array
  }

  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)

  return merge(sort(left), sort(right))
}

function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    result.push(
      left[indexLeft] < right[indexRight]
        ? left[indexLeft++]
        : right[indexRight++]
    )
  }

  return result
    .concat(left.slice(indexLeft))
    .concat(right.slice(indexRight))
}

/// tests

import { test } from 'ava'

test(t => t.deepEqual(sort([]), []))
test(t => t.deepEqual(sort([-4, 1, Infinity, 3, 3, 0]), [-4, 0, 1, 3, 3, Infinity]))
