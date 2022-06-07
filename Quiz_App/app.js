//array storing correct answers
const correctAnswers = ['B', 'B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();


    let score = 0;

    //storing the selection in an array
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check answers and increase score
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });

    //show the result on page
    scrollTo(0, 0); //taking the page to score area


    //giving the visibility to reult division 
    result.classList.remove('d-none');

    let output = 0;

    //putting animation
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 20);
});