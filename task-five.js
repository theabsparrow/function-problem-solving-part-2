function totalSallary (number){
    let totalSallaryGiven = 0;
    for(let i = 0; i < number.length; i++){
        const value = number[i];
        const startingSallary = value.starting;
        const experience = value.experience;
        const increment = value.increment;
        const totalIncrement = experience * increment;
        const presentSallary = startingSallary + totalIncrement;
        totalSallaryGiven = totalSallaryGiven + presentSallary;
    }
    return totalSallaryGiven;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const result = totalSallary(employees);
console.log(result);