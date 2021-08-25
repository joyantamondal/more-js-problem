function animalCount(miles){
    const animaleDensityFirst10Miles = 10;
    const animaleDensitySecond10Miles = 50;
    const animalDensityRestMiles= 100;
    if(miles<=10)
    {
        const count = miles * animaleDensityFirst10Miles;
        return count;
    }
    else if(miles <=20){
        const firstDenseAnimals = 10 * animaleDensityFirst10Miles;
        const restMiles = miles -10;
        const secondDenseAnimals = restMiles * animaleDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;

    }
    else{
        const firstDenseAnimals = 10 * animaleDensityFirst10Miles;
        const secondDenseAnimals = 10 * animaleDensitySecond10Miles;
        const restMiles = miles-20;
        const RestDeneseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDeneseAnimals;
        return totalAnimals;

    }
}
const animals = animalCount(25);
console.log(animals);