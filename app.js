const dataSubmition = document.querySelector('.data-submition');
const emailInput = document.querySelector('.email-input');
const emailBtn = document.querySelector('.email-btn');
const errorMsg = document.querySelector('.error-msg');


dataSubmition.addEventListener('submit', e => {
    e.preventDefault();
    console.log(emailInput.value);
    emailValidation();
    
});

const emailValidation = () => {

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

    const emailInputValue = emailInput.value.trim(); 
    const emailBtnValue = emailBtn.value.trim();
   
    if (!emailRegex.test(emailInputValue)) {
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
        errorMsg.style.display = 'flex';
    } else {
        emailInput.style.borderColor = 'hsl(154, 59%, 51%)';
        errorMsg.style.display = 'none';
    } 
};

