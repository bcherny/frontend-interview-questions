/// solution

let reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a())
  }
  return value
}

/// tests

import { test } from 'ava'

test(async t => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

  t.deepEqual(
    await reduceAsync([a, b, c], (acc, value) => [...acc, value], []),
    ['a', 'b', 'c']
  )
  t.deepEqual(
    await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']),
    ['d', 'a', 'c', 'b']
  )
})
