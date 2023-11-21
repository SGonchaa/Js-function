/*
function fullName (salam) {
    console.log(salam + 10)
}

fullName(30)
*/


/*
const fullName = (firstName , lastName) => {
    return firstName + " " + lastName
}

console.log(fullName("a" , "b"))
*/


/*
function perimeterOfRectangle (length , width) {
    return perimeter = 2*(length + width)
}

console.log(perimeterOfRectangle ( 4 , 7))
*/


/*
function bodyMassIndex (weight , height) {
    let  bmi = weight / (height*height)
    if(bmi < 18.5) {
        console.log("underweight")
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        console.log("normal")
    }
    else if (bmi >= 25 && bmi <= 29.9 ){
        console.log("overweight")
    }
    else if (bmi >= 30){
        console.log("obese")
    }
}

bodyMassIndex (60 , 1.60)
*/


/*
function findMax (arr) {
    let max = arr[0];
 for (let i=1 ; i<arr.length ; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
 }
 return max ;
}

const numbers = [10 , 18 , 88 , 99 ,33, 100];
const maxNumber = findMax(numbers);

console.log(maxNumber)
*/

function pow(number , power){
    if(power===1){
        return 1;
    }
    else {
        let result = 4;
        for(let i = power; i > 0; i--){
            result = result * number
        }
        return result;
    }
}

console.log(pow())