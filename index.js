// ******************* KEYBOARD *******************//
let x = String;

function aud(x) { 
    return new Audio(`sounds/${x}.mp3`).play(); 
};

let w = "tom-1";
let a = "tom-2";
let s = "tom-3";
let d = "tom-4";
let j = "snare";
let k = "crash";
let l = "kick-bass";

onkeydown = function(e) { 
    aud(eval(e.key));
    let doc_class = document.querySelector(`.${e.key}`).classList;
    doc_class.add("pressed");
    setTimeout(function() {
        doc_class.remove("pressed");
    }, 100);
}


// *****************  MOUSE CLICK **********************//
let tool = Array.from(document.querySelectorAll(".drum"));

tool.map(x => x.addEventListener("mousedown", function() {
    let clicked = eval(x.className.split(" ")[0]);
    aud(clicked);
}));