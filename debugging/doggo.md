## Original code

```js
let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()
```

## Corrected code

```js
let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName.bind(dog)
sayName()
```

## Explanation

In JavaScript `this` is dynamically scoped, which means `this` inside a function is defined *based on the way you call that function*. Unless you explicitly bind `this` using the `call`, `apply`, or `bind` functions, `this` is generally set to the thing that's to the left of the dot when you call your function.

When the code calls `sayName()` there's nothing to the left of the dot, so `this` is set to its default value: `undefined` if we're in strict mode, or the global object otherwise. But for `this.name` to be defined, `this` has to point to `dog`. There are a few ways we could do that:

1. Explicitly bind `dog` to `this` using the `bind` function when we define `sayName`.
2. Explicitly bind `dog` to `this` using the `call` function when we call `sayName`.
3. Explicitly bind `dog` to `this` using the `apply` function when we call `sayName`.

I chose option (1) because `sayName` can *only* be called when `this` is set to `dog`, otherwise the code will not give the correct result. I didn't want to leave it up to the consumer to do that correctly, so I used `bind` to make sure `this` will always be set correctly when calling `sayName()`.
