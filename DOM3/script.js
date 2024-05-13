var main=document.querySelector("#main");
var cursor=document.querySelector(".cursor");
main.addEventListener("mousemove",function(para){
cursor.style.left=para.x + "px"
cursor.style.top=para.y + "px"
})