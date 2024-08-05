var ryu = document.getElementById("ryu");
var ryuposition = 10;
var ryupositionb = 10;
var ryuforward = false;
var ryubackward = false;
var ryujump = false;

document.addEventListener("keydown", action);
document.addEventListener("keyup", stand);

function action(event){
   if(event.key === "d"){
    ryuFunc("forward");
   } 
   else if(event.key === "a"){
    ryuFunc("backward");
   }
   else if(event.key === "s"){
    ryuFunc("jump");
   }
}

function ryuFunc(type){
    if(type === "forward"){
        ryuposition += 10;
        ryu.style.left = ryuposition + "px";
        if(!ryuforward){
            ryu.src = "ryu-cfe 2-walkf.gif";
        }
        ryuforward = true;
    }
    else if(type === "backward"){
        ryuposition -= 10;
        ryu.style.left = ryuposition + "px";
         if(!ryubackward){
             ryu.src = "ryu-cfe3-walkb.gif";
         }
        ryubackward = true;
    }
    else if(type === "jump"){
        ryupositionb += 10;
        ryu.style.bottom = ryupositionb + "px";
        if(!ryujump){
            ryu.src = "ryu-cfe-jump.gif";
        }
        ryujump = true;
        setTimeout(() => {
            ryupositionb -= 10;
            ryu.style.bottom = ryupositionb + "px";
        }, 200); // Adjust the delay to suit the jump animation
    }
}

function stand(){
   ryu.src = "ryu-cvs1-stance.gif";
   ryuforward = false;
   ryubackward = false;
   ryujump = false;
}
