const angleOfTriForm = document.querySelector("#angleOfTriForm");
const inputAngle = document.querySelectorAll(".inputAngle");
const output = document.querySelector('#outputText');

let angle = [];

document.addEventListener('submit', angleOfTriHandler);

function angleOfTriHandler(e){
    e.preventDefault();

    for (i=0; i<inputAngle.length; i++){
        angle[i] = Number(inputAngle[i].value);
    }

    let sum = 0;
    angle.map((angle)=>{
        sum = sum+angle;
    })

    if (sum === 180){
        output.innerText = "Yay! These angles can make a triangle";
    } else {
        output.innerText = "Oops! These angles do not make a triangle";
    }
}