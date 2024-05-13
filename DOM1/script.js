var head=document.querySelector('h5');
var add=document.getElementById('Add');
var check=0;
add.addEventListener("click",function(){
    if(check==0){
    head.innerHTML='Friend';
    head.style.color='green';
    add.innerHTML="Remove ";
    check=1;
    
}
else{
   head.innerHTML="Stranger";
    head.style.color="brown";
    add.innerHTML="add friend"
    check=0;
}
});


   