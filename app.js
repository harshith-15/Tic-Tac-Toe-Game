let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno= true;


const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,4,8],[1,4,7],[2,5,8],
    [0,3,6],[2,4,6],
];

const reset=() =>{
    turno=true;
    enableboxes();
    msgcontainer.classList.remove("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turno){
            box.innerText='O';
            turno=false;
        }
        else{
            box.innerText='X';
            turno=true;
        }
        box.disabled=true;

        checkWinner();
    });

});

const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner = (winner) =>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};


const checkWinner=() =>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);
