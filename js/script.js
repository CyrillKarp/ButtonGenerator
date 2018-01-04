var button = document.getElementById("button");

document.getElementById("hp").oninput = horizontalPadding;
function horizontalPadding(){
    button.style.paddingLeft = this.value + "px";
    button.style.paddingRight = this.value + "px";
    
    var outHP = document.getElementById("horizontal-padding");
    
    outHP.innerHTML = "padding-left: " + this.value + "px;\n" + "<br>";
    outHP.innerHTML += "padding-right: " + this.value + "px;\n";
}

document.getElementById("vp").oninput = verticalPadding;
function verticalPadding(){
    button.style.paddingTop = this.value + "px";
    button.style.paddingBottom = this.value + "px";
    
    var outVP = document.getElementById("vertical-padding");
    
    outVP.innerHTML = "padding-top: " + this.value + "px;\n" + "<br>";
    outVP.innerHTML += "padding-bottom: " + this.value + "px;\n";
}

document.getElementById("fs").oninput = fontSize;
function fontSize(){
    button.style.fontSize = this.value + "px";
        
    var outFS = document.getElementById("font-size");
    
    outFS.innerHTML = "font-size: " + this.value + "px;\n" + "<br>";
}

document.getElementById("br").oninput = borderRadius;
function borderRadius(){
    button.style.borderRadius = this.value + "px";
        
    var outBR = document.getElementById("border-radius");
    
    outBR.innerHTML = "border-radius: " + this.value + "px;\n" + "<br>";
}



function colorText(picker) {
    document.getElementById("color").innerHTML = "color: " + picker.toHEXString();
    button.style.color = picker.toHEXString();
}

function colorBG(picker){
    document.getElementById("bg-color").innerHTML = "background-color: " + picker.toHEXString();
    button.style.backgroundColor = picker.toHEXString();
}
