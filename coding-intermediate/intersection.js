/// solution

function intersection(left, right) {

  // first build an object from the left array,
  // because checking if an object has a certain key
  // is cheap (it takes O(1) time).
  //
  // if we didn't use this object, we'd have to check
  // if result contains current on every turn of the
  // loop, which would take up to O(N * log(N)) time.
  //
  // "new Set()" doesn't allow duplicates
  const seen = new Set(left)

  const result = right.reduce((result, num) => {
    if (seen.has(num)) {
      return result.add(num)
    }
    return result
  }, new Set())

  return Array.from(result)
}

/// tests

import { test } from 'ava'

test(t => t.deepEqual(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]), [4, 1]))
test(t => t.deepEqual(intersection([1, 5, 4, 2], [7, 12]), []))
