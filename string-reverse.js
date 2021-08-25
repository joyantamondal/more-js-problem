// reverse order 
function reverseString(textString){
    let reverse = [];
    for(const letter of textString){
        // reverse order set here
        reverse = letter + reverse;
    }
    return reverse;
}
const stringNames = reverseString('This is Joyanta Mondal');
console.log(stringNames);