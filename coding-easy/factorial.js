/**
 * Note: We put the recursive call in tail position, so
 * that it can be optimized by the JavaScript compiler.
 */

/// solution

function tailFactorial(n, total) {
  switch (n) {
    case 0: return 1
    case 1: return total
    default: return tailFactorial(n - 1, n * total)
  }
}

function factorial(n) {
  return tailFactorial(n, 1)
}

/// tests

import { test } from 'ava'

test(t => t.is(factorial(0), 1))
test(t => t.is(factorial(1), 1))
test(t => t.is(factorial(6), 720))
