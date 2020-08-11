const form = {
  setColor(rValue, gValue, bValue) {
    var formBody = document.querySelector(".container"),
        FirstValue = document.getElementById("formControlRangeR").value,
        SecondValue = document.getElementById("formControlRangeG").value,
        ThirdValue = document.getElementById("formControlRangeB").value,
        FirstNumber = document.getElementById("outputR"),
        SecondNumber = document.getElementById("outputG"),
        ThirdNumber = document.getElementById("outputB"),
        grayBoxvalue = document.querySelector(".gray-box"),
        rValue = parseInt(FirstValue, 10).toString(16),
        gValue = parseInt(SecondValue, 10).toString(16),
        bValue = parseInt(ThirdValue, 10).toString(16),
        hexValue = "#";
    if (rValue.length == 1 && gValue.length > 1 && bValue.length > 1) {
      hexValue += "0" + rValue + gValue + bValue;
    } else if (rValue.length > 1 && gValue.length == 1 && bValue.length > 1) {
      hexValue += rValue + "0" + gValue + bValue;
    } else if (rValue.length > 1 && gValue.length > 1 && bValue.length == 1) {
      hexValue += rValue + gValue + "0" + bValue;
    } else if (rValue.length == 1 && gValue.length == 1 && bValue.length > 1) {
      hexValue += "0" + rValue + "0" + gValue + bValue;
    } else if (rValue.length > 1 && gValue.length == 1 && bValue.length == 1) {
      hexValue += rValue + "0" + gValue + "0" + bValue;
    } else if (rValue.length == 1 && gValue.length > 1 && bValue.length == 1) {
      hexValue += "0" + rValue + gValue + "0" + bValue;
    } else if (rValue.length == 1 && gValue.length == 1 && bValue.length == 1) {
      hexValue += "0" + rValue + "0" + gValue + "0" + bValue;
    } else {
      hexValue += rValue + gValue + bValue;
    }
    formBody.style.backgroundColor = hexValue;
    grayBoxvalue.innerHTML = hexValue;
    FirstNumber.innerHTML = FirstValue;
    SecondNumber.innerHTML = SecondValue;
    ThirdNumber.innerHTML = ThirdValue;
  }
}

document.querySelectorAll(".form-control-range").forEach((slider) => {
  slider.addEventListener("change", (event) => {
    form.setColor(slider);
    console.log(slider)
  })
})