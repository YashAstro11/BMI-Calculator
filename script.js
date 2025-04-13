let button = document.getElementById('btn');
let resetButton = document.getElementById('reset');
let result = document.getElementById('result');

button.addEventListener('click', convertBMI);
resetButton.addEventListener('click', resetFields);

function convertBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (weight > 0 && height > 0) {
    let bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    result.innerHTML = `
      <p>Your BMI is: <strong>${bmi.toFixed(2)}</strong></p>
      <p>Category: <strong>${category}</strong></p>
    `;
  } else {
    result.innerHTML = "❗ Please enter valid weight and height.";
  }
}

function resetFields() {
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  result.innerHTML = '';
}


