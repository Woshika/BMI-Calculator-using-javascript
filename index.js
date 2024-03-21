var bmi = bmiCalculator(65, 1.8);

function bmiCalculator(weight, height){
    var pow = Math.pow(height,2);
    var result = Math.floor(weight / pow);
    return result;
}