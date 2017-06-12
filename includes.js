/**
 * We use a binary search to quickly search the given sorted array for the given number.
 */

/// solution

function includes(array, number) {
  let index = binarySearch(array, number, 0, array.length - 1)
  return index !== undefined
}

function binarySearch(array, number, leftIndex, rightIndex) {
  let midIndex = Math.floor((rightIndex + leftIndex) / 2)
  let current = array[midIndex]
  if (rightIndex < leftIndex) {
    return undefined
  }
  if (number === current) {
    return midIndex
  }
  if (number < current) {
    return binarySearch(array, number, leftIndex, midIndex - 1)
  }
  return binarySearch(array, number, midIndex + 1, rightIndex)
}

/// tests

import { test } from 'ava'

test(t => t.is(includes([1, 3, 8, 10], 8), true))
test(t => t.is(includes([1, 3, 8, 8, 15], 15), true))
test(t => t.is(includes([1, 3, 8, 10, 15], 9), false))
