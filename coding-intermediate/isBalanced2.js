/// solution
function isBalanced2(string) {
  let stack = [];
  let pairs = {'}': '{', ']': '[', ')': '('};

  for (let letter of string) {
    switch(letter) {
      case '{':
      case '[':
      case '(':
        stack.push(letter); 
        break;
      case '}':
      case ']':
      case ')':
        if (stack.length === 0 || stack.pop() !== pairs[letter]) return false;
    }
  }

  return stack.length === 0;
}

/// tests

import { test } from 'ava'

test(t => t.is(isBalanced2('(foo { bar (baz) [boo] })'), true))
test(t => t.is(isBalanced2('foo { bar { baz }'), false))
test(t => t.is(isBalanced2('foo { (bar [baz] } )'), false))
