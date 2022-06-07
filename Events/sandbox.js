const form = document.querySelector('.sign-up');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


//feedback on submit
form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;

    if (usernamePattern.test(username)) {

        feedback.textContent = "Ohh great!! this is valid";
    }
    else {

        feedback.textContent = "Nhi Nhi Nhi username must contain letters and numbers only between 6 to 10 length";
    }
});

//live feedback
form.username.addEventListener('keyup', e=>{
    if(usernamePattern.test(e.target.value)){
        // console.log("passed");
        form.username.setAttribute('class','success');
    }
    else{
        // console.log("failed");
        form.username.setAttribute('class','error');
    }
})

