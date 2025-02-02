let gameSeq=[];
let userSeq=[];
let highestScore=0;
let h2=document.querySelector("h2");
let btns=["red","blue","orange","purple"];

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Start");
        started=true;
        levelup();
    }


})

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){btn.classList.remove("flash")},250);
};

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){btn.classList.remove("userFlash")},250);
};

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`
    let randINX=btns[Math.floor(Math.random()*4)];
    let randColor=document.querySelector(`.${randINX}`);
    // console.log(randINX);
    gameFlash(randColor);
    gameSeq.push(randINX);
    console.log(randINX);
};

function checkAns(Idx){
    
    if(userSeq[Idx]==gameSeq[Idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1500);
        }
    }
    else{
        if(level-1 >highestScore){
            highestScore=level-1;
        }
        h2.innerHTML=`Game over!<br/> your score is <b>${level-1}</b>,press any key to start<br/> Highest Score: ${highestScore}`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){document.querySelector('body').style.backgroundColor="white" },200);
        resetTo();
    }
};

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let PressBtn=document.querySelectorAll('.btn');

for(boton of PressBtn){
    boton.addEventListener("click",btnPress);
}

function resetTo(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
};