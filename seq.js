/// solution

async function seq([promise, ...promises]) {
  if (!promise) {
    return []
  }
  return [
    await promise,
    ...await seq(promises)
  ]
}

/// tests

import { test } from 'ava'

test(async t => {
  let a = Promise.resolve('a')
  let b = Promise.resolve('b')
  let c = Promise.resolve('c')
  t.deepEqual(await seq([a, b, c]), ['a', 'b', 'c'])
  t.deepEqual(await seq([a, c, b]), ['a', 'c', 'b'])
})
