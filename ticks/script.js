
function checkticks(){
    if(!isNaN(document.getElementById("text-field").value)) {
        var text = parseFloat(document.getElementById("text-field").value)/0.015;
        textint = parseInt(text);
        if (text == textint) {
            document.getElementById("result").textContent=`that is valid, being:`
            document.getElementById("res1").textContent=`${text * 0.015} second(s) / ${text} tick(s) long`;
            document.getElementById("res2").textContent="";
        } else {
            document.getElementById("result").textContent="no dude, did you mean:";
            var lower = Math.floor(textint / 1)
            var upper = Math.floor(textint / 1)+1
            document.getElementById("res1").textContent=`${(lower*0.015).toFixed(3)} second(s) / ${lower} tick(s) long`;
            document.getElementById("res2").textContent=`${(upper*0.015).toFixed(3)} second(s) / ${upper} tick(s) long`;
        }
    } else {
        alert("Error! Please use s.ms formatting")
    }
};