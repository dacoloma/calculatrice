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
});

function updateDisplay(x){
  document.getElementById("result").innerHTML = x;
  document.getElementById("symbol").innerHTML = '';
}
