// start of image slide bar
let slideIndex = 0;
showSlides();

function showSlides() 
{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) 
  {
    slideIndex = 1
  }

  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//End of image slide bar


// start of loading page 
var loader=document.getElementById("preloader");
window.addEventListener("load" ,function()  //after loading remove it
{
  loader.style.display="none";
})
// end of loading page 


// start of dark theme

var icon =document.getElementById("icon"); 
var icon2=document.getElementById("icon2");
var logo =document.getElementById("logo"); 
var heart=document.getElementById("heart");
var kids=document.getElementById("kids"); 
var dentist=document.getElementById("dentist");
var eye=document.getElementById("eye");
var brain=document.getElementById("brain");
var bone=document.getElementById("bone");

icon.onclick =function() //when clicking on the icon
{
  document.body.classList.toggle("dark-theme"); //add the dark theme and change some icons
 

  if(document.body.classList.contains("dark-theme"))
  {
      icon.style.color = "#ffffff"; //white
      icon2.style.color = "#ffffff"; //white
      logo.src="unnamed.jpg"; //el logo bta3 el dark theme
      heart.src="alb.png";
      kids.src="atfal.png";
      dentist.src="asnan.png";
      eye.src="3yoon.png";
      brain.src="mokh.png";
      bone.src="3ezam.png";
  }
  else
  {
      icon.style.color = "#010101";//black
      icon2.style.color = "#010101";//black
      logo.src="logo5.jpg";//el logo bta3 the light theme
      heart.src="heart.png";
      kids.src="kids.png";
      dentist.src="tooth.png";
      eye.src="eye.png";
      brain.src="neurologist.png";
      bone.src="bone.png";
  }
}
//end of dark theme


//start of the menu functions

 let menu=document.getElementById("menu");
 let ham=document.getElementById("ham");
      
function OpenMenu()
{
  menu.classList.toggle("Open-Menu"); //if open and click on it , it closes and vice versa
}
function CloseMenu()
{
    menu.classList.remove("Open-Menu");//remove the class and displaying it hidden
} 
//End of the menu functions



window.onload=function()
{

  if(window.localStorage.getItem("darkMode")==="true")//always =false until the admin press the button
  {
    document.body.classList.add("dark-theme");
    icon.style.color = "#ffffff"; 
    icon2.style.color = "#ffffff"; 
    logo.src="unnamed.jpg"; 
    heart.src="alb.png";
    kids.src="atfal.png";
    dentist.src="asnan.png";
    eye.src="3yoon.png";
    brain.src="mokh.png";
    bone.src="3ezam.png";
  }

}