/// solution

function debounce(fn, delay = 0) {
  let timer;
  
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay);    
  }
}

/// tests

import { test } from 'ava'

test.cb(t => {
  t.plan(1)
  let count = 0
  let a = () => {
    count++
    t.is(count, 1)
    t.end()
  }
  let b = debounce(a, 100)
  b()
  b()
  b()
})
