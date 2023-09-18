document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("button");
    const themeStatus = document.getElementById("themeStatus"); 
    
    button.onclick = function(){
        if(document.body.classList.contains("aang-theme")){
            document.body.classList.remove("aang-theme");
        } else{
            document.body.classList.add("aang-theme");
            }
        }; 
    });