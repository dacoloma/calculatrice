var array_num = [];
var num=[];
var result;
var symbol;

$(document).ready(() => {
  const $numButton = $('.number');
  const $opButton = $('.symbol');
  const $resultButton = $('.result');
  const $clearButton = $('.clear');

  $numButton.on('click', event => {
    var x = $(event.currentTarget).html();
    array_num.push(x);
    updateDisplay(array_num.join(''));
    console.log(array_num);
  });

  $opButton.on('click', event => {
    console.log("[DEBUG] num length : ", num.length);
    num[num.length] = parseInt(array_num.join(''));
    console.log("[DEBUG] num length after join(): ", num.length);
    symbol = $(event.currentTarget).html();
    array_num=[];
  });

  $resultButton.on('click', () => {
    console.log("[DEBUG] num length : ", num.length);
    num[num.length] = parseInt(array_num.join(''));
    console.log("[DEBUG] num length after join(): ", num.length);
    array_num=[];
    switch(symbol) {
    case '+':
        result = num[0] + num[1];
        break;
    case '-':
        result = num[0] - num[1];
        break;
    case 'x':
        result = num[0] * num[1];
        break;
    case '/':
        result = num[0] / num[1];
        break;
    default:
        break;
    }
    updateDisplay(result);
    num=[];
  });

  $clearButton.on('click', () => {
    result=0;
    updateDisplay(result);
  });
})

function updateDisplay(x){
  document.getElementById("result").innerHTML = x;
  document.getElementById("symbol").innerHTML = '';
}

/*

function doWithNumber(number) {

    if (number !== 0){
      //console.log(number);
      getNumber(number);
      //console.log("Array : ", array_num);
    }else if (array_num.length > 0){
      console.log(number);
      getNumber(number);
      //console.log("Array : ", array_num);
    }

}

function doWithOperator(operator) {
    //console.log(operator)
    collectNumber();
    symbol=operator;
    document.getElementById("symbol").innerHTML = operator;
}

function collectNumber(){
  num[num.length] = parseInt(array_num.join(''));
  //console.log("num", num.length," = ", num[num.length - 1]);
  array_num=[];
}

function add(x,y){
  return x + y;
}

function multiply(x,y){
  return x * y;
}

function substract(x,y){
  return x - y;
}

function divide(x,y){
  return x / y;
}

function updateDisplay(x){
  document.getElementById("result").innerHTML = x;
  document.getElementById("symbol").innerHTML = '';
}

function getNumber(x){
  array_num.push(x);
  updateDisplay(array_num.join(''));
}

function display(){
  collectNumber();
  switch(symbol) {
  case '+':
      result = add(num[0],num[1]);
      break;
  case '-':
      result = substract(num[0],num[1]);
      break;
  case 'x':
      result = multiply(num[0],num[1]);
      break;
  case '/':
      result = divide(num[0],num[1]);
      break;
  default:
      break;
  }
  updateDisplay(result);
  clearVar();
}

function clearVar(){
  array_num = [];
  num=[];
  result=0;
}

function clearAll(){
  clearVar();
  symbol='';
  updateDisplay(result);
  console.log(array_num);
  console.log(num);
  console.log(result);
  console.log(symbol);
}
*/
