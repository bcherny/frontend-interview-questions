/// solution

let reduceAsync = async (as, fn, init) => {
  for (let a of as) {
    init = fn(init, await a())
  }
  return init
}

/// tests

import { test } from 'ava'

test(async t => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => Promise.resolve('c')

  t.deepEqual(
    await reduceAsync([a, b, c], (acc, value) => [...acc, value], []),
    ['a', 'b', 'c']
  )
  t.deepEqual(
    await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']),
    ['d', 'a', 'c', 'b']
  )
})
