/// solution

function tailFactorial(n, total) {
  switch (n) {
    case 0: return 1
    case 1: return 1
    default: return tailFactorial(n-1, n * total)
  }
}

function factorial(n) {
  tailFactorial(n, 1)
}

/// tests

import { test } from 'ava'

test(t => t.is(factorial(0), 1))
test(t => t.is(factorial(1), 1))
test(t => t.is(factorial(6), 720))
