/// solution

let reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a())
  }
  return value
}

let seq = array =>
  reduceAsync(array, (acc, value) => [...acc, value], [])

/// tests

import { test } from 'ava'

test(async t => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => Promise.resolve('c')

  t.deepEqual(await seq([a, b, c]), ['a', 'b', 'c'])
  t.deepEqual(await seq([a, c, b]), ['a', 'c', 'b'])
})
