function smallestName (nameArray){
    let j = nameArray.length;
    let smallName = "";
    for(let i = 0; i < nameArray.length; i++){
        const value = nameArray[i];
        const valueLength = value.length;
        if(valueLength < j){
            j = valueLength;
            smallName = value;
        }
    }
    return smallName;
}
const friendsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = smallestName(friendsName);
console.log(result);