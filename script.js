function clearDisplay() {
  document.getElementById("display").value = "";
}
function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function appendNumber(number) {
  document.getElementById("display").value += number;
}

function appendOperator(operator) {
  let display = document.getElementById("display");
  const lastChar = display.value.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function calculate() {
  let display = document.getElementById("display").value;
  try {
    display = eval(display);
    document.getElementById("display").value = display;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}
