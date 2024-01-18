let button = document.getElementById('btn');
let result = document.getElementById('result');

button.addEventListener('click', convertBMI);

function convertBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight && height) {
        let bmi = weight / ((height / 100) ** 2);
        result.innerHTML = "Hey there Your BMI is: " + bmi.toFixed(2);
    } else {
        result.innerHTML = "Please Enter Valid Information";
    }
}

