// find cheapest phone 
const phones = [
    {name: 'samsung s10', price: 100000, Camera: 60, Storage: 32},
    {name: 'walton w50', price: 1000, Camera: 5, Storage: 16},
    {name: 'iphone max', price: 120000, Camera: 20, Storage: 64},
    {name: 'oneplus op9', price: 85000, Camera: 64, Storage: 256},
    {name: 'Xiaomi', price: 50000, Camera: 60, Storage: 128}
    
];
let cheapest = phones[0];
for(const phone of phones){
    // compare price only
    if(phone.price<cheapest.price)
    {
        cheapest = phone;
    }
}
console.log(cheapest);