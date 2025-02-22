const signupComponent = document.querySelector(".newsletter-sign-up-component");
const signupSuccessComponent = document.querySelector(".newsletter-sign-up-success-component");

const btnSubscribe = document.querySelector(".btn-subscribe");
const btnDismiss = document.querySelector(".btn-dismiss");

const form = document.querySelector('form');

const footer = document.querySelector("footer");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    

    console.log(formInputs);
    
});

[btnSubscribe, btnDismiss].forEach((btn) => btn.addEventListener('click', () => {
    signupComponent.classList.toggle('hidden');
    signupSuccessComponent.classList.toggle('hidden');
    footer.classList.toggle('hidden');
}));
