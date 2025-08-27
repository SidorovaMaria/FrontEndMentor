const radioButtons = document.querySelectorAll('input[name="unit-system"]');
const metricOption = document.getElementById("metric-inputs");
const imperialOption = document.getElementById("imperial-inputs");
const metricKg = document.getElementById("metric-weight");
const metricCM = document.getElementById("metric-height");
const imperialFT = document.getElementById("imperial-height-feet");
const imperialIN = document.getElementById("imperial-height-inches");
const imperialST = document.getElementById("imperial-weight-stones");
const imperialLBS = document.getElementById("imperial-weight-lbs");
const ValueInputs = document.querySelectorAll(".input-box input");
const BMIresult = document.querySelector(".bmi-result");
const bmiWelcome = document.querySelector(".BMI-welcome");
const BMIdisplayResult = document.querySelector(".BMI");
const BMIsugesstion = document.getElementById("bmi-suggestion");
const bmiRange = document.getElementById("bmi-range");
let UnitSystem = "metric";
let BMI;

radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    UnitSystem = this.value;
    metricOption.classList.toggle("hide");
    imperialOption.classList.toggle("hide");
  });
});

const calculateBMI = () => {
  if (UnitSystem === "metric") {
    const weight = parseFloat(metricKg.value);
    const height = parseFloat(metricCM.value) * 0.01; /*in meters*/
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      BMI = (weight / height ** 2).toFixed(1);
      const lowerLimit = (18.5 * height ** 2).toFixed(1);
      const upperLimit = (24.9 * height ** 2).toFixed(1);
      bmiRange.textContent = `${lowerLimit}kg - ${upperLimit}kg`;
    } else {
      BMI = null;
    }
  } else if (UnitSystem === "imperial") {
    const weight =
      parseFloat(imperialST.value) * 14 + parseFloat(imperialLBS.value);
    const height =
      parseFloat(imperialFT.value) * 12 + parseFloat(imperialIN.value);
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      BMI = ((weight / height ** 2) * 703).toFixed(1);
      const lowerLimit = Math.floor((18.5 / 703) * height ** 2);
      const lowerSt = Math.floor(lowerLimit / 14);
      const upperLimit = Math.floor((24.9 / 703) * height ** 2);
      const upperSt = Math.floor(upperLimit / 14);
      bmiRange.textContent = `${lowerSt}st ${
        lowerLimit - 14 * lowerSt
      }lbs - ${upperSt}st ${upperLimit - 14 * upperSt}lbs `;
    } else {
      BMI = null;
    }
  }
  if (BMI) {
    bmiWelcome.classList.add("hide");
    BMIdisplayResult.classList.remove("hide");
    BMIresult.textContent = String(BMI);
    getBMIInfo(BMI);
  } else {
    bmiWelcome.classList.remove("hide");
    BMIdisplayResult.classList.add("hide");
  }
};

const getBMIInfo = (bmi) => {
  let within;
  if (bmi < 18.5) {
    within = "underweight";
  } else if (bmi < 24.9) {
    within = "a healthy weight ";
  } else if (bmi < 29.9) {
    within = "overweight";
  } else {
    within = "obese";
  }
  BMIsugesstion.textContent = within;
};
const getIdealWeight = (height) => {
  const lowerLimit = 18.5 * height ** 2;
};
ValueInputs.forEach((input) => {
  input.addEventListener("input", calculateBMI);
});
