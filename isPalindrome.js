/// solution

function isPalindrome(string) {
  let _string = string.replace(/\s/g, '').toLowerCase()
  return reverse(_string) === _string
}

function reverse(string) {
  return string.split('').reverse().join('')
}

/// tests

import { test } from 'ava'

test(t => t.is(isPalindrome(''), true))
test(t => t.is(isPalindrome('abcdcba'), true))
test(t => t.is(isPalindrome('abcd'), false))
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true))
