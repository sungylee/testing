let total = 0;

const addValue = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total + newValue;
  if(isNaN(sum)){
    return total;
  }
  return sum;
}

const subValue = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total - newValue;
  if(isNaN(sum)){
    return total;
  }
  return sum;
}
const mulValue = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total * newValue;
  if(isNaN(sum)){
    return total;
  }
  return sum;
}

const setText = function(content){
  $('#total').text(content);
}

const clickHandler = function (event) {
  event.preventDefault();
  let value = $(this).val();
  total = addValue(total, value);
  const displayTotal = total.toFixed(2)
  setText(displayTotal);
}

const clickHandler2 = function (event) {
  event.preventDefault();
  let value = $(this).val();
  total = subValue(total, value);
  const displayTotal = total.toFixed(2)
  setText(displayTotal);
}

const clickHandler3 = function (event) {
  event.preventDefault();
  let value = $(this).val();
  total = mulValue(total, value);
  const displayTotal = total.toFixed(2)
  setText(displayTotal);
}


$('.btn').on('click', clickHandler);
$('.sbtn').on('click', clickHandler2);
$('.mbtn').on('click', clickHandler3);