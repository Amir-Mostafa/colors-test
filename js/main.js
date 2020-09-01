let spin=document.getElementById("spin");
let body=document.getElementById("info");
let els=document.querySelectorAll(".box li");
let allColors=[];
let test=false;

body.classList.add(localStorage.getItem("main-color")||"red");
for(var i=0;i<els.length;i++)
{
  var color=els[i].getAttribute("data-color");
  allColors[i]=color;
  els[i].addEventListener("click",function(){
    body.classList.remove(...allColors);
    body.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("main-color",this.getAttribute("data-color"));

  });
}
console.log(allColors);
spin.addEventListener("click",function(){
  if(test)
  {
    document.getElementById("box-color").style.left = "-50px"; 
    spin.style.marginLeft="0px";
    test=false;
  }
  else
  {
    document.getElementById("box-color").style.left  = "0px";
    spin.style.marginLeft="50px";
    test=true;

  }
  

});