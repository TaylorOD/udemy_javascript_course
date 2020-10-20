// Primitive value: string, number , boolean, null, undefined - everything not in this list is an object

// myObject -> Object.prototype -> null
// Array: myArray -> Array.prototype ->  Object.prototype -> null
// Function: myFunction -> Function.prototype -> Object.prototype -> null
// both arrays and functions are modified versions of objects
// string is not an object but it can use methods because it has an object wrapper. It gets converted to an object by javascript.
// This makes almost everything in javaScript an object but in reality string, number, and boolean are not but they act like them.
// String: myString -> String.prototype -> Object.prototype -> null
// Number: myNumber -> Number.prototype  -> Object.prototype -> null
// Boolean: myBoolean -> Boolean.prototype -> Object.prototype -> null

const product = "computer"
console.log(product.split(""))

const otherProduct = new String("Phone")
console.log(otherProduct)