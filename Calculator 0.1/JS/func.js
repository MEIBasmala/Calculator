let OutPutScreen = document.getElementById("output-screen");

function display(num) {
  OutPutScreen.value += num;
}
function Calc() {
  try {
    OutPutScreen.value = eval(OutPutScreen.value);
  } catch (err) {
    alert("INVALID, TRY AGAIN");
  }
}
function Clear() {
  OutPutScreen.value = "";
}
function del() {
  OutPutScreen.value = OutPutScreen.value.slice(0, -1);
}
