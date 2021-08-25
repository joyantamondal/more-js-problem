// total price calculation 
/*
const products = [
    {name: 'laptop', price: 4300, quantity:1},
    {name: 'shirt', price: 500, quantity:8},
    {name: 'watch', price: 3680, quantity:3},
    {name: 'phone', price: 5500, quantity:7}
];

let totalPrice = 0;
for(const product of products){
    console.log(product);
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice); 
*/
// total shopping payable money , product and quantity calculation
const cart = [
    {name: 'laptop', price: 4300, quantity:1},
    {name: 'shirt', price: 500, quantity:5},
    {name: 'watch', price: 3680, quantity:4},
    {name: 'phone', price: 5500, quantity:2}
];
let totalShoppingPrice =0;
for(const product of cart ){
    totalShoppingPrice = totalShoppingPrice + (product.price * product.quantity);
}
console.log(totalShoppingPrice);