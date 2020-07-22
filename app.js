function consoleMe(){
    var percentage = document.getElementById('percent').value

    console.log(percentage)

    var billAmount = document.getElementById('billAmount').value;
    console.log(billAmount)
}

function calculateTip(){
    var percentage = document.getElementById('percent').value;
    var billAmount = document.getElementById('billAmount').value;
    var split = document.getElementById('billSplit').value
    var tipAmount = (billAmount * percentage)/split;
    if (tipAmount == 0){
        tipAmount = "Do you really need help figuring out 0%?? Dont be a jerk, leave at least 5%"
    } else {
        tipAmount = "$" + tipAmount + " tip per person" + " " + "$" + ((billAmount/split) + tipAmount) + " total per person "
    }
    document.getElementById("answer").innerHTML = tipAmount;
    
       
    }
    
