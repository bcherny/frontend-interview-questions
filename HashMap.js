/// solution

// hash function (provided)
let hash = string =>
  string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)

import { LinkedList } from './LinkedList'

class HashMap {

}

/// tests

import { test } from 'ava'

let hash = new HashMap
hash.set('abc', 123)    // undefined
hash.set('foo', 'bar')  // undefined
hash.set('foo', 'baz')  // THROW ERROR because 'foo' is already set
hash.get('abc')         // 123
hash.get('def')         // undefined

test(async t => {
  let a = Promise.resolve('a')
  let b = Promise.resolve('b')
  let c = Promise.resolve('c')
  t.deepEqual(await seq([a, b, c]), ['a', 'b', 'c'])
  t.deepEqual(await seq([a, c, b]), ['a', 'c', 'b'])
})
