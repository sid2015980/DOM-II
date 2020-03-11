// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)

//     // document.body.innerHTML = "<div>HAHAHA</div>" destroys all content
//   }

//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)

const mouseOver = document.querySelector('.nav');

mouseOver.addEventListener("mouseover", function (event) {
    event.target.style.color = "gold"

    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);



