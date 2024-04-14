let clickbtn = document.getElementById("submit");
let emailInput = document.getElementById("mail");
let textInput = document.getElementById("text");
    clickbtn.addEventListener("click",function(){
        console.log({'mail': emailInput.value, 'feedback': textInput.value});
    })
