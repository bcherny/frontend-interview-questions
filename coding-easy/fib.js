/// solution

function fib (n) {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
}

function memoize(fn) {
  const memo = {};

  return function(...args) {
    if (!memo[args]) memo[args] = fn(...args);
    return memo[args];
  }
}

fib = memoize(fib);

/// tests

import { test } from 'ava'

test(t => t.is(fib(0), 0))
test(t => t.is(fib(1), 1))
test(t => t.is(fib(10), 55))
test(t => t.is(fib(20), 6765))
