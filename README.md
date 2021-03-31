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
🚨 Type checking will show an error, because `querySelector` might return `undefined`, and undefined has no `.value`.