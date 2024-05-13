
// var elem1= document.querySelector("#elem")
// var elemImg = document.querySelector("#elem img")

// elem1.addEventListener("mousemove",function(dets){
//     elemImg.style.left = dets.x +"px"
//     elemImg.style.top = dets.y +"px"
// })
// elem1.addEventListener("mouseenter",function(dets){              //      Here we using simplifiying and applying for only one id 
//     elemImg.style.opacity = 1
// })
// elem1.addEventListener("mouseleave",function(dets){
//     elemImg.style.opacity = 0
// })



                    // to apply whole elems we use forEach loop//
var elem =document.querySelectorAll('#elem');
elem.forEach(function(val){
   val.addEventListener("mouseenter",function(){
    val.childNodes[3].style.opacity=1;
      
   });
   val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0;
    
   });
   val.addEventListener("mousemove",function(para){
    val.childNodes[3].style.left=para.x+"px";
    val.childNodes[3].style.top=para.y + " px";
   
   });
});