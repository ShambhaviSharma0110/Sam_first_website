const text = document.querySelector(".gen1");
const strText = text.textContent;
const splitText  = strText.split("");
text.textContent = "";
for (let i=0;i< splitText.length; i++){
    text.innerHTML += "<span>" + "" + splitText[i] + "" + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char == splitText.length){
       complete();
       return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}

function validate()
{
    var username= document.getElementsByClassName("field-name");
    var email= document.getElementsByClassName("field-email");
    var password= document.getElementsByClassName("field-password");

    if(username.value =="" || email.value =="")
    {
        alert("No blank values allowed!")
    }
    else{
          
    }
}


