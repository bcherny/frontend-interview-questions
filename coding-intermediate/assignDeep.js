/// solution
//  got rid of the spread operator
function assignDeep(target, source) {
//  got rid of the first loop here
  for (let key in source) {
    if (isObject(source[key])) {
      if (!isObject(target[key])) {
        target[key] = {}

      }
      assignDeep(target[key], source[key])
    } else {

      target[key] = source[key]
    }
  }
  return target

  function isObject(val) {

    return typeof val === 'object' && val != null
  }

}

/// tests

import { test } from 'ava'

test(t => t.deepEqual(assignDeep({ a: 1 }, {}), { a: 1 }))
test(t => t.deepEqual(assignDeep({ a: 1 }, { a: 2 }), { a: 2 }))
test(t => t.deepEqual(assignDeep({ a: 1 }, { a: { b: 2 } }), { a: { b: 2 } }))
test(t => t.deepEqual(assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }), { a: { b: { c: 1, d: 2 } }, e: 3 }))
