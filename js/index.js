//  donation and history button

document.getElementById('History-btn').addEventListener('click',function(){
     document.getElementById('Donation-btn').classList.remove('bg-[#B4F461]');
     document.getElementById('History-btn').classList.add('bg-[#B4F461]');
});


document.getElementById('Donation-btn').addEventListener('click',function(){
     document.getElementById('History-btn').classList.remove('bg-[#B4F461]');
     document.getElementById('Donation-btn').classList.add('bg-[#B4F461]');
});
//common functions;
 function isNum(string){
    for (let ch of string){
    if(ch>=0 && ch<=9){
        continue;
    }
    else {
        return false;
    }
   }
   return true;

 }

function inputElementById(id){
    const x=document.getElementById(id).value;

      if(!isNum(x)){
        return -1;
      }
    const d=parseFloat(x);
    return d;
}
function textElementByID(id){
    const x=document.getElementById(id).innerText;
    const d=parseFloat(x);
    return d;
}




// donate for Noakhali

document.getElementById('donateNoakhali')
            .addEventListener('click',function(event){
    event.preventDefault();
  const Amount=inputElementById('amountForNoakhli');
  const currentAmmount= textElementByID('noakhali-current-amount');
  const MyCurrentAmount=textElementByID('Your-current-amount');


 console.log(Amount,currentAmmount);
 if(Amount>MyCurrentAmount || Amount<0){
    alert('Not Enough for Donate!!');
 }

 else{
    const totalAmountforNoakhali=currentAmmount+Amount;
    const MyNewbalane=MyCurrentAmount-Amount;

    document.getElementById('noakhali-current-amount').innerText=totalAmountforNoakhali;
    document.getElementById('Your-current-amount').innerText=MyNewbalane;

    document.getElementById('my_modal_1').showModal();
 }
 



});



// donate for flood;

document.getElementById('Donate-btnFlood')
            .addEventListener('click',function(event){
    event.preventDefault();
  const amountFlood=inputElementById('amountForFlood');
  const FloodCurrentAmount= textElementByID('flood-current-amount');
  const MyCurrentAmount=textElementByID('Your-current-amount');

  console.log(amountFlood,FloodCurrentAmount,MyCurrentAmount);
  if(amountFlood>MyCurrentAmount || amountFlood<0){
    alert('Not enough for flood');
    return;
  }
  else{
    document.getElementById('flood-current-amount').innerText=FloodCurrentAmount+amountFlood;
    document.getElementById('Your-current-amount').innerText=MyCurrentAmount-amountFlood;
document.getElementById('my_modal_1').showModal();

  }


 



});

document.getElementById('donate-Q')
            .addEventListener('click',function(event){
    event.preventDefault();
  const amountQ=inputElementById('input-Q');
  const QCurrentAmount= textElementByID('current-Q');
  const MyCurrentAmount=textElementByID('Your-current-amount');

  console.log(amountQ,QCurrentAmount,MyCurrentAmount);
  if(amountQ>MyCurrentAmount || amountQ<0){
    alert('Not enough for flood');
    return;
  }
  else{
    document.getElementById('current-Q').innerText=QCurrentAmount+amountQ;
    document.getElementById('Your-current-amount').innerText=MyCurrentAmount-amountQ;
document.getElementById('my_modal_1').showModal();

  }


});