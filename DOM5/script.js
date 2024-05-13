var storian=document.querySelector(".storian");
var arr=[
   { dp:"https://images.unsplash.com/photo-1692677283651-19e69e7c4cc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1708523782595-8d077640f413?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" },
   {dp:"https://images.unsplash.com/photo-1708610993265-d25da06c533f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1541014597398-cd43df0833c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D"},
   {dp:"https://plus.unsplash.com/premium_photo-1661369652778-d79f3e6cf4d3?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1682331591752-b27ae44fc2dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},
   {dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1519348460807-76a246549bac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"}
]
var clutter="";
arr.forEach(function(elem,idx){
   clutter+=`<div   class="story"> 
   <img id="${idx}" src="${elem.dp}" alt="">                                  
</div>`
})
document.querySelector(".storian").innerHTML =clutter

storian.addEventListener("click",function(dets){
   document.querySelector(".full_screen").style.display = "block"

   document.querySelector(".full_screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
   setTimeout(function(){
      document.querySelector(".full_screen").style.display = "none"
     },2000)
  })