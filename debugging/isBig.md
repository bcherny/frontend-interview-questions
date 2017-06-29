## Original code

```js
function isBig(thing) {
  if (thing == 0 || thing == 1 || thing == 2) {
    return false
  }
  return true
}
isBig(1)    // false
isBig([2])  // false
isBig([3])  // true
```

## Explanation

JavaScript is a weakly typed language. What this means is under the hood, JavaScript defines methods for converting from every type to every other type. When a variable needs to be converted to another type, JavaScript invokes the appropriate implicit to do the conversion. For example, if you run the code `1 + '2'`, JavaScript will (roughly):

1. Notice that you are using `+` to concatenate two strings
2. Notice that `1` is a number, not a string
3. Call the `toString()` method on `1` to convert it to the string `'1'`
4. Concatenate `'1'` and `'2'`, resulting in `'12'`

Back to the original code - JavaScript tries to be helpful by converting `[2]` and `[3]` to numbers before comparing them to the numbers `0`, `1`, and `2` (you can try it yourself by running `Number([2])` in your REPL). Since `[2]` implicitly converts to `2`, `isBig([2])` returns `false`. Since `[3]` implicitly converts to `3`, `isBig([3])` returns `true`.

As you can probably see, while having lots of pre-defined implicits is convenient, it can be also be a source of errors. This is a popular critique of the JavaScript language: it's *too* helpful when implicitly converting between types for you.

For a full list of JavaScript's implicits, see page 25 ("Type Conversion") in the [original ECMAScript 1 specification](https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf), written back in 1997.
