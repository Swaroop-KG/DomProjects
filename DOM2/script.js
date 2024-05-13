var cont=document.getElementById("container");
var icon=document.querySelector("i");
cont=addEventListener("dblclick",function(){
    icon.style.transform=" translate(-50%,-50%) scale(1)";
     icon.style.opacity='0.9';
    setTimeout(function(){
       icon.style.opacity='0';
    } ,3000)
});
setTimeout