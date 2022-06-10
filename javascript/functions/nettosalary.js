
// //salary calculate
// var bruto=3000;
// var tax=0.21; //or 21/100 for20%
// var neto= bruto-(bruto*tax)
// console.log(neto)

function nettoSalaryCalc(brutto,tax){
    var netto=brutto-(brutto*tax)
    console.log("Your netto salary is",netto);
    return netto
}

nettoSalaryCalc(3000,0.21)


// Arrow function

const nettoSalaryCalcArrow=(brutto,tax)=>{
    var netto=brutto-(brutto*tax)
    console.log("Your netto salary from Arrow is",netto);
    return netto
}

nettoSalaryCalcArrow(2000,0.21)