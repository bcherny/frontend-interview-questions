## Original code

```js
function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })
```

## Corrected code

```js
function greet(person) {
  if (person.name == 'amy') {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
greet({ name: 'amy' })
```

## Explanation

In JavaScript, every type is either a value type or a reference type. When comparing two types, value types are compared by value, while reference types are compared by reference. So when the code compares `person` to `{ name: 'amy' }`, it compares the passed in `person` again the *reference* to the object `{ name: 'amy' }`. Since the object is declared on the same line where the comparison is made, nothing that we pass in will ever be reference-equal to it.

Here are two possible fixes:

1. Compare `person.name` to `'amy'`. They are both strings, which will be compared by value rather than by reference.
2. Do a deep comparison between `person` and `{ name: 'amy' }`. This means we check each property of each object, and make sure they all match.

I chose option (1) for its simplicity and performance. It works here because in this case `name` is the only property on our object - if there were more properties, a deep comparison might be the better option.
