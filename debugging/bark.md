## Original code

```js
function Dog(name) {
  this.name = name
}
Dog.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
```

## Corrected code

```js
function Dog(name) {
  this.name = name
}
Dog.prototype.bark = function() {
  console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()
```

## Explanation

When you `new` a function in JavaScript, it creates a new object whose methods are inherited from the `prototype` of the function you `new`'d. This is called prototypal inheritance. Defining something on the prototype vs. on the function directly is analogous to defining something as an instance property vs. as a static property on a `class`.

This code incorrectly defined `bark` directly on `Dog`. So when you `new` a `Dog`, the resulting object won't inherit the `bark` property. For it to inherit `bark`, we need to move `bark` to `Dog`'s `prototype`.
