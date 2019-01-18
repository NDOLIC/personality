 function openForm() {
     document.getElementById("myForm").style.display = "block";
    }
   
    function closeForm() {
    document.getElementById("myForm").style.display = "block";
    }
var message = document.getElementById("message");
var texBox = document.getElementById("textbox");
var button = document.getElementsByClassName("btn");
var button1 = document.getElementsByClassName("btn cancel");

button.addEventListener("click", function () {
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = ""
});


