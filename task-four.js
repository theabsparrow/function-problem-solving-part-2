function findAveragePhonePrice (thePhones){
    let total = 0;
    const length = thePhones.length;
   
    for(let i = 0; i < thePhones.length; i++){
        const value = thePhones[i];
        const price = value.price;
        total = total + price;
    }
    const avarage = total / length;
    const round = Math.round(avarage);
    return round;
    
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const result = findAveragePhonePrice(phones);
console.log(result);
