function take() {  
    var inputValue = document.getElementById("guessInput").value;
    document.getElementById("msg").innerText = "Entered Message: " + inputValue;
    drawOnCanvas(inputValue);
}

