function calculateElectronicsBudget (laptop, mobile, tablet){
    const totalNum = laptop + mobile + tablet;
    const laptopPrice = 35000;
    const mobilePrice = 20000;
    const tabletPrice = 15000;
    const totalLaptopPrice = laptop * laptopPrice;
    const totalMobilePrice = mobile * mobilePrice;
    const totalTabletPrice = tablet * tabletPrice;
    const totalMoneyRequired = totalLaptopPrice + totalMobilePrice + totalTabletPrice;
    return totalMoneyRequired;
}
const laptopNUm = 1;
const mobileNum = 1;
const tabletNum = 1;
const result = calculateElectronicsBudget(laptopNUm, mobileNum, tabletNum);
console.log(result);