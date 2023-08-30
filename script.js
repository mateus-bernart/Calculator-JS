document.getElementById("redirectButton1").addEventListener("click", function(){
    window.location.href = "mais.html";
});
document.getElementById("redirectButton2").addEventListener("click", function(){
    window.location.href = "menos.html";
});
document.getElementById("redirectButton3").addEventListener("click", function(){
    window.location.href = "vezes.html";
});
document.getElementById("redirectButton4").addEventListener("click", function(){
    window.location.href = "dividir.html";
});
document.getElementById("back").addEventListener("click", function(){
    window.location.href = "index.html";
});

function back(){
    window.location.href = "index.html"
}

function calculateMais(){
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)){
        var final_value = (number1 + number2);
        document.getElementById("result").innerHTML= "Result: " + final_value;

    }else{
        document.getElementById("result").innerHTML="Insert a value first";
    }
}

function calculateMenos(){
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)){
        var final_value = (number1 - number2);
        document.getElementById("result").innerHTML= "Result: " + final_value;

    }else{
        document.getElementById("result").innerHTML="Insert a value first";
    }
}



function calculateVezes(){
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)){
        var final_value = (number1 * number2);
        document.getElementById("result").innerHTML= "Result: " + final_value;

    }else{
        document.getElementById("result").innerHTML="Insert a value first";
    }
}

function calculateDividir(){
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    if (!isNaN(number1) && !isNaN(number2)){
        var final_value = (number1 / number2);
        document.getElementById("result").innerHTML= "Result: " + final_value.toFixed(2);

    }else{
        document.getElementById("result").innerHTML="Insert a value first";
    }
}

