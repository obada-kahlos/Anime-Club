$(document).ready(function () {
  $("header button").on("click", function () {
    $(".side-bar").toggleClass("active");
    $(".btn").toggleClass("toggle");
  })


  $(".nav div").on('click', function () {
    console.log("hello");
    ("div").addClass("active").siblings().removeClass("active");
  })

  $('.creat').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, 1500);
  });

})

$('.top-anime').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

///////////////////////////////////////// fixsed navbar onscroll event 

/////////////////////////////////////////////////////////////////////////////// TYPE-ANIME 
let list = document.querySelectorAll(".types ul li");
let itembox = document.querySelectorAll(".itembox");

for(let i = 0 ; i<list.length ; i++){
  list[i].addEventListener('click' , function(){

    for(let j = 0 ; j<list.length ; j++){
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let datafillter = this.getAttribute('data-fillter');
  
    for(let n = 0;i<itembox.length;n++){
      itembox[n].classList.remove('active');
      itembox[n].classList.add('hide');

      if(itembox[n].getAttribute('data-item') == datafillter || datafillter == 'all'){
        itembox[n].classList.remove('hide');
        itembox[n].classList.add('active');
      }
    }

  })
}

// list.forEach(function (ele) {

//   ele.onclick = function () {
//     list.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     this.classList.add("active");   
//   }
// });

// list.forEach(function(ele){

//   ele.onclick(function(){

//     fillter.classList.add('.hide');

//   })


// })




/////////////////////////////////////////////////////////////////////////////// top button  and fixed scroll and sidbar
let btn = document.querySelector('.btn-up');
let nav = document.querySelector(".navbar");
let sidbar = document.querySelector('.side-bar');
console.log(sidbar);
window.onscroll = function () {
  if (this.scrollY >= 400) {
    btn.classList.add('show-btn-top');
  } else if (this.scrollY > 0) {
    nav.classList.add('slide-down');
    sidbar.classList.add('side-bar-scroll');
  }
  else {
    btn.classList.remove('show-btn-top');
    nav.classList.remove('slide-down');
    sidbar.classList.remove('side-bar-scroll');
  }
}

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};