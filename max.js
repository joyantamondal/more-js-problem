function maxNumber(numbers){
    let max = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        const element = numbers[i];
        if(element>max){
            max = element;
            
        }
    }
    return max;
}
const num = maxNumber([10, 20, 30, 40]);
console.log(num);