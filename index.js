const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const reducer = function (batteryBatches, reducer, init){
//     let totalBatteries = init; 
//     for (const el of batteryBatches){
//         accum = reducer(acucum, element)
//     }

//     return accum;
// }

// function batteryCount(totalAmount, location){
//     return totalAmount + location.ammount
// }

const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element + accumulator}, 0)