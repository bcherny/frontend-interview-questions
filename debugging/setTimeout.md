## Original code

```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
```

## Corrected code

```js
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
```

## Explanation

There are two types of variable declarations in JavaScript: block-level declarations (using `let`, `const`, and in `catch` clauses), and function-level declarations (using `var`). Since this code uses `var`, it declares a single variable `i` that is shared by all four calls to `setTimeout`; by the time the first `setTimeout` is actually fired, the loop has already run four times and `i` equals `4`.

The fix is to make sure each call to `setTimeout` has its own instance of `i`, which doesn't change between the time when we set the timeout and the timeout is actually fired. There are a few ways we can do this:

1. Change `var` to `let`, which is a block-level declaration
2. Pass `i` to `setTimeout` as its third argument, so `i` is passed in as the argument in `setTimeout`'s callback
3. Wrap the `setTimeout` in an Immediately-Invoked-Function-Expression and pass `i` into it

I chose option 1 for its minimal code change, and positive effect on readability.
