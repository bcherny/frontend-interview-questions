/**
 * We memoize the fib function to avoid an exponential number of repeated computations.
 */

/// solution

let fib2 = memoize(n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib2(n - 1) + fib2(n - 2)
  }
})

function memoize(fn) {
  let cache = new Map
  return _ => {
    if (!cache.has(_)) {
      cache.set(_, fn(_))
    }
    return cache.get(_)
  }
}

/// tests

import { test } from 'ava'

test(t => t.is(fib2(0), 0))
test(t => t.is(fib2(1), 1))
test(t => t.is(fib2(10), 55))
test(t => t.is(fib2(50), 12586269025))
