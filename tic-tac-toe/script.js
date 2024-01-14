 let turnmusic = new Audio("linder.mp3")
let turn = "x";
// take a cut of audio
const  seme = (function(){
   turnmusic.setTimeout = 3;
  
}, 1000)

// change the turn
const changeover = ()=>{
    return turn === "x"?"0":"x"
}
// function for  checking the winner
const wingame = ()=>{
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      
      function checkWinner(){
        let isWon=false;
        for(let i=0;i<win.length;i++){
          const condition=win[i]; //[0,1,2]
          const box1=options[condition[0]]; //x
          const box2=options[condition[1]]; //''
          const box3=options[condition[2]]; //''
          if(box1=="" || box2=="" || box3==""){
            continue;
          }
          if(box1==box2 && box2==box3){
            isWon=true;
            boxs[condition[0]].classList.add('win');
            boxs[condition[1]].classList.add('win');
            boxs[condition[2]].classList.add('win');
          }
        }
      
        if(isWon){
          statusTxt.textContent=`${player} Won..`;
          running=false;
        }else if(!options.includes("")){
          statusTxt.textContent=`Game Draw..!`;
          running=false;
        }else{
          changePlayer();
        }
      
      }
}

// 
// function for main logic
let boxes = document.getElementsByClassName("btn")
Array.from(boxes).forEach(btn =>{
    let texy = btn.querySelector(".textbox")
    btn.addEventListener("click", (e)=>{
        if(texy.innerText === ""){
            texy.innerText = turn;
           turn =  changeover();
           turnmusic.play()
            document.getElementsByClassName('info')[0].innerText = "  turns is for "+ turn
        }
    })
})

// reset function on button
let reset = document.getElementById("cler")
console.log(reset);
reset.addEventListener("click",(element)=>{
    let texs = document.querySelectorAll(".textbox")
    Array.from(texs).forEach(e =>{
        e.innerText = "";
    });
})