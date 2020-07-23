function consoleMe(){
    var percentage = document.getElementById('percent').value

    console.log(percentage)

    var billAmount = document.getElementById('billAmount').value;
    console.log(billAmount)
}


 function calculateTip(){
    var percentage = (document.getElementById('percent').value);
    if (percentage == 1){percentage = document.getElementById('customTip').value * .01} else {percentage = percentage};
    var billAmount = document.getElementById('billAmount').value;
    var split = document.getElementById('billSplit').value
    if (split == ''){split = 1} else {split = split};
    var tipAmount = (billAmount * percentage)/split;
    if (tipAmount == 0){
        tipAmount = "Do you <em>really</em> need help figuring out 0%?? Dont be a jerk, leave at least 5%"
    } else {
        tipAmount = "$" + tipAmount + " tip per person" + "<br>" + "$" + ((billAmount/split) + tipAmount) + " total per person "
    }
    document.getElementById("answer").innerHTML = tipAmount;  
    return tipAmount
}  



function rounded(){
    var test = calculateTip();
    var newTest = [...test];
    console.log(newTest);
    var emptyString = " ";
    for (j = 0; j < newTest.length; j++){
        if (newTest[j] > 0){
            emptyString = newTest[j]
        }
    }
    console.log(emptyString)
    var parsed = parseFloat(newTest);
    var roundThis = Math.round(parsed);
    document.getElementById('round').innerHTML = roundThis
    
}
    
