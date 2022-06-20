let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");

pic1.addEventListener("click", function() {
    if(pic1.style.flexBasis != '30%'){
        pic1.style.flexBasis = "30%";
        pic2.style.flexBasis = "7%";      
        pic3.style.flexBasis = "7%";        
        pic4.style.flexBasis = "7%";        
        pic5.style.flexBasis = "7%"; 
    }
})
pic2.addEventListener("click", function() {
    if(pic2.style.flexBasis != "30%"){
        pic2.style.flexBasis = "30%";
        pic1.style.flexBasis = "7%";        
        pic3.style.flexBasis = "7%";        
        pic4.style.flexBasis = "7%";        
        pic5.style.flexBasis = "7%";        
    }

})
pic3.addEventListener("click", function() {
    if(pic3.style.flexBasis != "30%"){
        pic3.style.flexBasis = "30%";
        pic1.style.flexBasis = "7%";        
        pic2.style.flexBasis = "7%";        
        pic4.style.flexBasis = "7%";        
        pic5.style.flexBasis = "7%"; 
    }
})
pic4.addEventListener("click", function() {
    if(pic4.style.flexBasis != "30%"){
        pic4.style.flexBasis = "30%";
        pic1.style.flexBasis = "7%";        
        pic3.style.flexBasis = "7%";        
        pic2.style.flexBasis = "7%";        
        pic5.style.flexBasis = "7%"; 
    }
})
pic5.addEventListener("click", function() {
    if(pic5.style.flexBasis != "30%"){
        pic5.style.flexBasis = "30%";
        pic1.style.flexBasis = "7%";        
        pic3.style.flexBasis = "7%";        
        pic4.style.flexBasis = "7%";        
        pic2.style.flexBasis = "7%"; 
    }
})