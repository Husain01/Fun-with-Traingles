const quizForm = document.forms[0];
const queDivs = document.querySelectorAll(".ques");
const scoreDiv = document.querySelector('.score');
const submitQuiz = document.querySelector('#submit');

const correctAns = ['option3', 'option1', 'option2', 'option3','option1','option1','option3','option1','option2','option3'];
 let score = 0;

 quizForm.addEventListener('submit', (e)=>{
     e.preventDefault();
     const data = new FormData(quizForm);
     let index = 0;
     for (let entry of data){
         if (entry[1] == correctAns[index]){
             queDivs[index].style.backgroundColor = 'lightgreen';
             score++;
         } else{
             queDivs[index].style.backgroundColor = 'red'
         }
         index++;
     }
     scoreDiv.innerText = score;
     submitQuiz.style.display = 'none';
 });