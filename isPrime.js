/**
 * This is a lightly optimized version of a naive primality test. We make a few optimizations:
 *
 * - We only need to check up to the square root of our number
 * - We can increment by 2 at a time
 * - We use an iterative solution instead of a recursive one so we are not susceptible to stack overflows
 *
 * Note that much more efficient solutions exist, but are harder to understand. Eg. Google "AKS primality test".
 */

/// solution

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

/// tests

import { test } from 'ava'

test(t => t.is(isPrime(0), false))
test(t => t.is(isPrime(1), false))
test(t => t.is(isPrime(17), true))
test(t => t.is(isPrime(10000000000000), false))
