////////mouseover 1///////////////////////
const mouseOver = document.querySelector(".nav");

mouseOver.addEventListener(
  "mouseover",
  event => {
    event.target.style.color = "gold";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);
///////////////////2 mouse over events////////////////////////////////
const mouseOver2 = document.querySelector(".img-content img");

mouseOver2.addEventListener("mouseover", event => {
  event.target.src = "/img/newMap.jpg";
  console.log(mouseOver2);
});

mouseOver2.addEventListener("mouseout", event => {
  event.target.src = "img/adventure.jpg";
});
////////////////////////MOuse Over3/////////////////////////////

const mouseOver3 = document.querySelector(".img-fluid");

mouseOver3.addEventListener("mouseover", event => {
  event.target.style.transform = "scaleX(-1)";
});

mouseOver3.addEventListener("mouseout", event => {
  event.target.style.transform = "scaleX(1)";
});
/////////////////mouseleave event/////////////////////
const pageLoad = document.querySelector(".intro");

pageLoad.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "mediumaquamarine";
  event.target.style.color = "red";

});

//////click event 1//////////////////////////
const whenClick = document.querySelector(".content-destination img");

whenClick.addEventListener("click", event => {
    event.target.src = "/img/boatDocking.jpg";

    setTimeout(function() {
        event.target.src = "img/destination.jpg";
      }, 2000);
});
/////////////////click event 2////////////////////////////
const whenClick2 = document.querySelector(".btn");

whenClick2.addEventListener("click", event => {
    event.target.style.color = "red";

    setTimeout(function() {
        event.target.style.color = "";
      }, 2000);
});
/////////////double click////////////////
const doubleClick = document.querySelector(".footer");

doubleClick.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = "mediumaquamarine";
    event.target.style.color = "red";
});
/////////scroll wheel changes bus image
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".intro img");
el.onwheel = zoom;
/////////////////////////////////////

//////stop links from loading on click
document.querySelector("header").addEventListener("click", navLinks);

function navLinks(event) {
  event.preventDefault();
  event.stopPropogation();
}
////////////////////////////////////////////
