/**
* Note: This solution aims for clarity, but does not give correct results when given unicode characters
* from the supplementary planes (including Chinese characters, emojis, etc.). See discussion here:
* https://github.com/bcherny/frontend-interview-questions/issues/6.
*/

/// solution

function reverse(string) {
  let index = string.length - 1
  let result = ''
  while (index > -1) {
    result += string[index]
    index--
  }
  return result
}

/// tests

import { test } from 'ava'

test(t => t.is(reverse(''), ''))
test(t => t.is(reverse('abcdef'), 'fedcba'))
