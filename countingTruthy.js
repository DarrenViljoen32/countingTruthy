// counting truths and false values in an array

//declare an array
let myArray = [true, true, true, false, true, false];

//count truths
function countValues(array){
    let trueValues = array.filter(value => value === true);
    return trueValues.length;

}

//count false
function tellValues(array){
    let falseValues = array.filter(value => value === false);
    return falseValues.length;

} //display them
let trueCount = countValues(myArray);
console.log(`The Number of True values : ${trueCount}`);

let falseCount = tellValues(myArray);
console.log(`The Number of False values : ${falseCount}`);
