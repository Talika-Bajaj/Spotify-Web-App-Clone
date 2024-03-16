const initApp = () => {
    let ham = document.getElementById("ham");
     let leftCol = document.getElementById("left");
     
     const toggleMenu = () => {
         ham.classList.toggle("toggle-btn");
         leftCol.classList.toggle("-left-80");
     }
 
     ham.addEventListener("click", toggleMenu);
     leftCol.addEventListener("click", toggleMenu);
 }
 
 document.addEventListener("DOMContentLoaded", initApp)