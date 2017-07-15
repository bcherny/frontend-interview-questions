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

test(async t => {

  let delay = 100;
  
  let resolved = new Promise(res => setTimeout(res, delay))
  let rejected = Promise.reject()

  let start = Date.now()
  try {
    await seq([resolved, rejected])
  } catch(e) {
    t.true(Date.now() - start >= delay)
  }
})
