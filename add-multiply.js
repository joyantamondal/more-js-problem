/*
chairWood = 3cft/chair
tableWood = 10 cft/table
bedwood = 50cft/bed

*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQyantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQyantity + bedWoodQuantity;
    return totalWood;

}
const firstOption = woodCalculator(0,0,5);
console.log(firstOption);