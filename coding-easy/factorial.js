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
/// solution 2
const preFactorial2 = (n, result) => {
	switch(n) {
		case 0:
		case 1: return result
		default: return preFactorial2(n - 1, n * result)
	}
}
const factorial2 = n => preFactorial2(n, 1)

/// solution 3
const preFactorial3 = (n, continuation) =>
	n === 1 || n === 0
	? continuation(1)
	: preFactorial3(n - 1, r => continuation(n * r))

const factorial3 = n => preFactorial3(n, r => r)

function factorial(n) {
  return tailFactorial(n, 1)
}

/// tests

import { test } from 'ava'

test(t => t.is(factorial(0), 1))
test(t => t.is(factorial(1), 1))
test(t => t.is(factorial(6), 720))

test(t => t.is(factorial2(0, 1), 1))
test(t => t.is(factorial2(1, 1), 1))
test(t => t.is(factorial2(6, 1), 720))

test(t => t.is(factorial3(0, 1), 1))
test(t => t.is(factorial3(1, 1), 1))
test(t => t.is(factorial3(6, 1), 720))
