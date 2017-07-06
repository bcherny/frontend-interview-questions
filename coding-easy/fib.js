/// solution 1

function fib (n) {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
}
// solution 2 when n >= 17, this solution will calls stack overflow
const fibonaciiContination = (n, continuation) =>
	n < 2
	? continuation(n)
	: fibonaciiContination(n - 1, r1 => fibonaciiContination(n - 2, r2 => continuation(r1 + r2)))

const fib2 = n => fibonaciiContination(n, r => r)

// solution 3
const fibonaciiTailRecursion = (n, acc1, acc2) =>
	n === 0
	? acc1
	: fibonaciiTailRecursion(n - 1, acc2, acc1 + acc2)

const fib3 = n => fibonaciiTailRecursion(n, 0, 1)

/// tests

import { test } from 'ava'

test(t => t.is(fib(0), 0))
test(t => t.is(fib(1), 1))
test(t => t.is(fib(10), 55))
test(t => t.is(fib(20), 6765))

test(t => t.is(fib2(0), 0))
test(t => t.is(fib2(1), 1))
test(t => t.is(fib2(10), 55))
// test(t => t.is(fib2(20), 6765)) will calls stack overflow

test(t => t.is(fib3(0), 0))
test(t => t.is(fib3(1), 1))
test(t => t.is(fib3(10), 55))
test(t => t.is(fib3(20), 6765))
