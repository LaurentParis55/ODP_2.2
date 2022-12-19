function revealNav(){var inTheNav = document.querySelector("nav");
                        inTheNav.style.visibility="visible";
                        inTheNav.style.borderBottom = '1px solid #5d3939'
                                                                        }


function hideNav(){var inTheNav = document.querySelector("nav");
inTheNav.style.visibility="hidden";



$(document).ready(function(){
    $("#prestations_link").click(function(){
      $("#prestations").toggle();
    });
    $("#réalisations_link").click(function(){
      $("#réalisations").fadeIn(1500);
    });
  });
                                                                        }

 const figs = document.querySelectorAll("figure");
 for(var i=0; i<figs.length; i++){figs[i].addEventListener("mouseenter", modifStyle)}  
 
 function modifStyle(){setTimeout(figs[i].classList.add("bordered"))}




 //
 const scene = new THREE.Scene();

 const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000) 







                                                              