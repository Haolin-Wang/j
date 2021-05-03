function Isstring(firstvalue, secondvalue) {
  var onevalue = firstvalue;
  var twovalue = secondvalue;
  var onevalue = Number(onevalue);
  var twovalue = Number(twovalue);
  if (
    typeof onevalue === "string" ||
    typeof twovalue === "string" ||
    onevalue === "NaN" ||
    twovalue === "NaN"
  ) {
    alert("输入错误，请输入数字!!!");
  } else {
    Getanswer(firstvalue, secondvalue);
  }
}
function Getanswer(firstvalue, secondvalue, answer) {
  var onevalue = firstvalue;
  var twovalue = secondvalue;
  var onevalue = Number(onevalue);
  var twovalue = Number(twovalue);
  if (onevalue >= 2000 || twovalue >= 2000) {
    alert("数字大于2000!!!");
    return;
  }
  var answer = firstvalue * firstvalue + secondvalue * secondvalue;
  var finalanswer = (document.getElementById("answer").value = answer);
}
function ClearFirstDefultValue(value) {
  var clearvalue = (document.getElementById("firstvalue").value = "");
}
function ClearSecondDefultValue(value) {
  var clearvalue = (document.getElementById("secondvalue").value = "");
}
