const signupComponent = document.querySelector(".newsletter-sign-up-component");
const signupSuccessComponent = document.querySelector(".newsletter-sign-up-success-component");

const btnSubscribe = document.querySelector(".btn-subscribe");
const btnDismiss = document.querySelector(".btn-dismiss");

const form = document.querySelector('form');
const email = document.querySelector("form input[type='email']");

const footer = document.querySelector("footer");

function switchScreen() {
    signupComponent.classList.toggle('hidden');
    signupSuccessComponent.classList.toggle('hidden');
    footer.classList.toggle('hidden');

    email.value = '';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const emailErrorMsg =  email.previousElementSibling.querySelector('.error-message');

    if(email.validity.valid) {
        email.classList.remove('error');
        emailErrorMsg.classList.add('hidden');
        switchScreen();
    } else {
        emailErrorMsg.classList.remove('hidden');
        email.classList.add('error');
    }
    
});

btnDismiss.addEventListener('click', () => {
    switchScreen();
});

// [btnSubscribe, btnDismiss].forEach((btn) => btn.addEventListener('click', () => {
//     signupComponent.classList.toggle('hidden');
//     signupSuccessComponent.classList.toggle('hidden');
//     footer.classList.toggle('hidden');
// }));
