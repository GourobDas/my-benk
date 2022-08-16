// Step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //    step-2 get the deposit valu from the deposit input field
    const depositFild = document.getElementById('diposit-field');
    const newDepositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //   step-3 get the current deposit totel
    const depositTotelElements = document.getElementById('deposit-totel');
    const previousDepositTotelString = depositTotelElements.innerText;
    const previousDepositTotel = parseFloat(previousDepositTotelString);

    // step-3 add the totel number intu the deposit value
    const newCurrentDepositAmount = previousDepositTotel + newDepositAmount;
    // set the valus tofixed by 2
    const currentDepositAmount = parseFloat(newCurrentDepositAmount).toFixed(2);

    depositTotelElements.innerText = currentDepositAmount;

    // step-5 get the blance currten  totel
    const blanceTotelElements = document.getElementById('blance-totel');
    const privousBlanceTotelString = blanceTotelElements.innerText;
    const privousBlanceTotel = parseFloat(privousBlanceTotelString);

    // step-6 calculte toltel current blance
    const currentBlanceToltel = privousBlanceTotel + newDepositAmount;
    const newCurrentBlanceToltel = parseFloat(currentBlanceToltel).toFixed(2);

    blanceTotelElements.innerText = newCurrentBlanceToltel;

    // step- 7 clear enput fild
    depositFild.value = '';

})