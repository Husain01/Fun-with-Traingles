const areaBox = document.querySelectorAll(".areaBox");
const inputOption1 = document.querySelectorAll('.inputOption1')
const inputOption2 = document.querySelectorAll('.inputOption2')
const inputOption3 = document.querySelectorAll('.inputOption3')
const areaOutput = document.querySelectorAll('.areaOutput')

const error = document.querySelector('.error');

const radios = document.forms[0].elements;
console.log(radios);

function showOrHideBlock(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2){
    blockDivs[showDivIndex].style.display = 'block';
    blockDivs[hideDivIndex1].style.display = 'none';
    blockDivs[hideDivIndex2].style.display = 'none';

}

radios[0].addEventListener('change', ()=>{
    showOrHideBlock(areaBox, 0, 1, 2);
})
radios[1].addEventListener('change', ()=>{
    showOrHideBlock(areaBox, 1, 0, 2);
})
radios[2].addEventListener('change', ()=>{
    showOrHideBlock(areaBox, 2, 1, 0);
})

document.forms[1].addEventListener('submit', (e)=>{
    e.preventDefault();
    const b = Number(inputOption1[0].value)
    const h = Number(inputOption1[1].value)
    areaOutput[0].innerText = (b*h)/2;
}, false)

document.forms[2].addEventListener('submit', (e)=>{
    e.preventDefault();
    error.style.display = 'none';
    let a = Number(inputOption2[0].value)
    let b = Number(inputOption2[1].value)
    let c = Number(inputOption2[2].value)

    if((a+b)>c && (b+c)>a && (a+c)>b){
        const s = (a+b+c)/2;
        areaOutput[1].innerText = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    } else {
        error.style.display = 'block';
    }
}, false)

document.forms[3].addEventListener('submit', (e)=>{
    e.preventDefault();
    const b = Number(inputOption3[0].value)
    const c = Number(inputOption3[1].value)
    const A = Number(inputOption3[2].value)
    areaOutput[2].innerText = (b*c*Math.sin(A*Math.PI/180))/2;
}, false)