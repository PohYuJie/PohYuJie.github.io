const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");

function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}


function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}

page1btn.addEventListener("click", function () {
show(1);
});

page2btn.addEventListener("click", function () {
show(2);
});

page3btn.addEventListener("click", function () {
show(3);
});

hideall();


const hamBtn=document.querySelector("#hamIcon");

hamBtn.addEventListener("click",toggleMenus);

const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){
    menuItemsList.classList.toggle("menuShow");
    if(menuItemsList.classList.contains("menuShow")){
        hamBtn.innerHTML="Close Menu";
    }
    else{
        hamBtn.innerHTML="Open Menu";
    }
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

