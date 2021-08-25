
const names = ['Abul', 'Mokbul', 'Rofiq', 'Sofiq', 'Abul', 'Rofiq', 'Joy', 'Moy', 'Koy', 'Moy'];
console.log(names.indexOf('Rofiq'));

function removeDuplicate(names){
    const unique = [];
    // for(let i = 0; i<names.length; i++){
    //     const element = names[i];
    //     console.log(element);
    // }

    // for of loop here element catch names[i] all indexs value one by one just like  const element = names[i];
    
    for(const element of names){
        console.log(element);
        if(unique.indexOf(element)==-1)
        {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);