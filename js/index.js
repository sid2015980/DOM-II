//////////////scroll event//////////////////////
window.addEventListener("scroll", () => {
  const bodySelector = document.querySelector("body")
  const headerSelector = document.querySelector(".logo-heading")
  const scrolled = document.documentElement.scrollHeight - window.innerHeight
  const scrollable = window.scrollY

  if (Math.ceil(scrolled) === scrollable){
    bodySelector.style.backgroundColor = "black"
    bodySelector.style.color = "white"
    headerSelector.style.color = "black"
  }
})

////////mousedown---mouseup///////////////////////
const mouseDown = document.querySelector(".nav");

mouseDown.addEventListener("mousedown", event => {
    event.target.style.color = "gold";
  },

  mouseDown.addEventListener("mouseup", event => {
    event.target.style.color = "black";
  })
);

///////////////////mouseover---mouseout////////////////////////////////
const mouseOver2 = document.querySelector(".img-content img");

mouseOver2.addEventListener("mouseover", event => {
  event.target.src = "/img/newMap.jpg";
  console.log(mouseOver2);
});

mouseOver2.addEventListener("mouseout", event => {
  event.target.src = "img/adventure.jpg";
});
////////////////////////mouseover---mouseout2/////////////////////////////

const mouseOver3 = document.querySelector(".img-fluid");

mouseOver3.addEventListener("mouseover", event => {
  event.target.style.transform = "scaleX(-1)";
});

mouseOver3.addEventListener("mouseout", event => {
  event.target.style.transform = "scaleX(1)";
});
/////////////////mouseleave event/////////////////////
const mouseLeave = document.querySelector(".intro");

mouseLeave.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "mediumaquamarine";
  event.target.style.color = "red";

});

//////resize event//////////////////////////
const whenSize = document.querySelector(".content-destination img");

window.addEventListener("resize", event => {
  if(window.innerWidth <= 1000){
  whenSize.src = "/img/boatDocking.jpg";
  }else{
    whenSize.src = '/img/destination.jpg'
  }

    // setTimeout(function() {
    //     event.target.src = "img/destination.jpg";
    //   }, 2000);
});

/////////////////click event////////////////////////////
const whenClick = document.querySelectorAll(".btn");

for (const button  of whenClick) {
  button.addEventListener("click", event => {
    event.target.style.backgroundColor = "red"

    setTimeout(function () {
      event.target.style.backgroundColor = "";
    }, 2000);
  });
}

/////////////double click////////////////
const doubleClick = document.querySelector(".footer");

doubleClick.addEventListener("dblclick", event => {
    event.target.style.backgroundColor = "mediumaquamarine";
    event.target.style.color = "red";
});
/////////wheel event///////
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".intro img");
el.onwheel = zoom;

//////stop links from loading on click
document.querySelector("header").addEventListener("click", navLinks);

function navLinks(event) {
  event.preventDefault();
  event.stopPropogation();
}
////////////////////////////////////////////
