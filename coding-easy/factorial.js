/// solution

function factorial(n) {
  switch (n) {
    case 0: return 1
    case 1: return 1
    default: return n * factorial(n - 1)
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
