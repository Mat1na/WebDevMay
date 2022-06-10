function bmiCalc(weight, height){
    var bmi=weight/Math.pow(height,2);
    console.log("Your BMI is",bmi);
    return bmi
}

bmiCalc(65,1.75)
console.log(bmiCalc(65,1.75))