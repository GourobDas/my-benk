// step-1 add click event listener with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 get email value from email input field
    const emailFild = document.getElementById('user-email');
    const userEmail = emailFild.value;
    // console.log(userEmail);

    // step-2 get password value from password input field
    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;
    // console.log(userPassword);

    // Don't do that like this
    // step-4 verify email & password
    if (userEmail == 'gourobdas@gmail.com' && userPassword == '1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Enter a valid USER');
    }

})