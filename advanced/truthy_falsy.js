const products = [1]
const product = products[0]

// truthy - values that resolve to true in boolean context
// falsy - values that resolve to false in a boolean context
// Falsey values - false, 0, empty string, null, undefined, NaN



if (product) {
  console.log("Product found")
} else {
  console.log("Product not found")
}