/// solution

function missing(array) {

  // sum the array, and keep track of the maximum number in it
  let max = array[0]
  let sum = 0
  array.forEach(number => {
    sum += number
    if (number > max) {
      max = number
    }
  })

  // the maximum tells us how long the array should be.
  // we plug it into the formula to sum a series to see
  // what we should expect the sum to be.
  let expectedSum = max * (max + 1) / 2
  let difference = expectedSum - sum

  if (difference > 0) {
    return difference
  } else {
    return undefined
  }

}

/// tests

import { test } from 'ava'

test(t => t.is(missing([]), undefined))
test(t => t.is(missing([1, 4, 3]), 2))
test(t => t.is(missing([2, 3, 4]), 1))
test(t => t.is(missing([5, 1, 4, 2]), 3))
test(t => t.is(missing([1, 2, 3, 4]), undefined))
