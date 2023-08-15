document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("button");
    const themeStatus = document.getElementById("themeStatus"); 
    
    button.onclick = function(){
        if(document.body.classList.contains("kaido-theme")){
            document.body.classList.remove("kaido-theme");
            themeStatus.textContent = "Modo: Gear5"; 
        } else{
            document.body.classList.add("kaido-theme");
            themeStatus.textContent = "Modo: Kaido"; 
            }
        }; 
    });