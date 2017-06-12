/// solution

function debounce(fn, delay = 0) {

  // keep track of the last call to the debounced function
  let last = {
    time: null,
    timerId: null
  }

  // return a debounced version of fn
  return () => {
    let time = Date.now()

    // if the debounced function was called again before the delay elapsed,
    // cancel the timer (started in the previous call) that would have called
    // fn, and start a new timer.
    if (last.time && (time - last.time) < delay) {
      clearTimeout(last.timerId)
    }

    // start a timer to call fn after the given delay
    last = {
      time,
      timerId: setTimeout(fn, delay)
    }
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
