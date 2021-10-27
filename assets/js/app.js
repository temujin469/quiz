let score = document.getElementById('score');
let countdown = document.getElementById('countdown');
let skip = document.getElementById('skip');
let totalScore = document.getElementById('total-score');
let input = document.querySelector('input');
let rest = document.getElementById('rest');
let line =document.querySelector('.line');
let count =0
let scoreCount = 0
let duration = 0
let quAn = document.querySelectorAll('.qu-an');
let answer = document.querySelectorAll('.answer-row');



skip.addEventListener('click',()=>{
    duration=0;
    step();
});

answer.forEach(function(answerSingle){
    answerSingle.addEventListener('click',()=>{
        setTimeout(()=>{
            duration=0;
            step();
        },600);
    })
});

function step(){
    count+=1;
    for(let i=0;i<quAn.length;i++){
        quAn[i].className = 'qu-an';
    }
    console.log(count);
    quAn[count].className = 'qu-an active';
    
    if(count == 5){
        rest.style.display = 'block'
        skip.style.display = 'none';
        clearInterval(settime);
        countdown.innerHTML="0";
    line.style.width = "0%"
        
    }
}
let settime = setInterval(()=>{
    if(duration==10){
        duration=0;
        step();
    }
    duration+=1;        
    line.style.width = `${duration*10}%`

    countdown.innerHTML = duration;
},1000);
 


