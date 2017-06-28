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
