// step-1 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2 get the value from withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);

    // step-3 get privous withdraw totel
    const withdrawTotelElement = document.getElementById('withdraw-totel');
    const privousWithdrawTotelString = withdrawTotelElement.innerText;
    const previousDepositTotle = parseFloat(privousWithdrawTotelString);


    // step-4  calculet totel withdraw amount
    const currentWithedrseTotel = previousDepositTotle + newWithdrawAmount;
    const currentWithedrseTotelFoot = parseFloat(currentWithedrseTotel).toFixed(2);
    //     step-5 set the value intu the withdraw value
    withdrawTotelElement.innerText = currentWithedrseTotelFoot;

    // step-6
    // step-5 get the blance currten  totel
    const blanceTotelElements = document.getElementById('blance-totel');
    const privousBlanceTotelString = blanceTotelElements.innerText;
    const privousBlanceTotel = parseFloat(privousBlanceTotelString);

    // step-6 

    const newTotelBlance = privousBlanceTotel - currentWithedrseTotelFoot;
    blanceTotelElements.innerText = newTotelBlance;




    // step-7 
    withdrawField.value = '';


})

