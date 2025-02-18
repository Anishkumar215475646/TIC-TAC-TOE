let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector("#msg");
let count=0;


let turn0=true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    count++;
    if(turn0){
        box.innerText="O";
        turn0=false;
    }else{
      box.innerText="X";
      turn0=true;
    }
    box.disabled =true;
   checkwinner();
    }); 
});
const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner =(winner)=>{
    msg.innerText=`congratulation! winner is ${winner}`;
    disableboxes();
}

const checkwinner=()=>{
  for(let pattern of winpattern){
    
     let pos1 = boxes[pattern[0]].innerText;
     let pos2 = boxes[pattern[1]].innerText;
     let pos3 = boxes[pattern[2]].innerText;

     if(pos1 !=""&& pos2 !=""&& pos3 !=""){
        if(pos1===pos2&& pos2===pos3){
            console.log("winner",pos1);
            showwinner(pos1);
        }
     }
  }  
};
const resetgame=()=>{
    turn0 =true;
    enableboxes();

}
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
if(count==9){
    msg.innerText=`Match has been Draw`;
}