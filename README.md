# OOP Javascript with Type checking

This is a test to see how private fields and static type checking work in Javascript.

## Private fields

```javascript
class Ball {
    
    // private fields
    #x = 0
    #y = 0

    constructor() {
        this.#x = 50
        this.#y = 50
    }
}

let b = new Ball()
b.#x = 10 // 🚨 ERROR! #x is private
```

Private fields work in Chrome and Edge, but you need code compilation if you want to [support private fields in all browsers](https://caniuse.com/mdn-javascript_classes_private_class_fields)

<br>
<br>

## Static type checking

You can enable static type checking by including a `tsconfig.json` file:

```json
{
    "compilerOptions": {
        "alwaysStrict":true,
        "target": "ES2020",
        "outDir": "./output",
        "checkJs": true,
        "allowJs": true
    }
}
```
For example, it will detect this common error:`

```javascript
let field = document.querySelector("#myformfield")
if(field.value === "Erik") {
    console.log("hi there")
} 
```
Because `querySelector` might return `undefined`, you shouldn't use `.value` directly without a null check.

## Type checking

Once you declare a variable to be of a certain type, you can't change it afterwards.

```javascript
let a = 5
a  = "boink" // 🚨 ERROR a must be of type number
```

## Code completion

Type checking will provide better code completion:

```javascript
let b = new Ball()
b. // intellisense will show b.update() and b.removeBall()
```
It will show an error if you call a method that doesn't exist.
```javascript
let b = new Ball()
b.bounce() // 🚨  ERROR ball has no bounce method
```



😭 static type checking does not always seem to work if a variable is initialised empty, and it doesn't check the types inside an array?