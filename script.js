let billAmount = document.querySelector('#bill-amount');

const service = document.querySelector('option');

const howManyPeople = document.querySelector('#how-many-people');

const button = document.querySelector('.button');

const total = document.querySelector('.total');

const select = document.querySelector('#select');

let howMany = document.querySelector('#how-many-people');



button.addEventListener('click', function() {

  
  let option = select.options[select.selectedIndex].value;
  
  if(option === 'great') {
    option = 0.2;
  } else if(option === "good") {
    option = 0.15;
  } else if (option === "average") {
    option = .1; 
  } else if (option === 'below-average') {
    option = .08;
  } else {
    option = 0;
  }


  let amount = billAmount.value;
  let tipAmount = billAmount.value * option;
  let totalAmount = Number(tipAmount) + Number(amount);

  if(howMany.value === '0' || howMany.value === '') {
    total.textContent = '$' + totalAmount.toFixed(2);
  } else {
    total.textContent = '$' + (totalAmount / howMany.value).toFixed(2);
  }

});
 



