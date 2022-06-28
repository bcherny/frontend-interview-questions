/// solution

function debounce(func, timeout = 300){
  
  // keep track of the last call to the debounced function
  let timer;
  
  // return a debounced version of fn
  return function(...args) {
    
    // if the debounced function was called again before the delay elapsed,
    // cancel the timer (started in the previous call) that would have called
    // fn, and start a new timer.
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
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
