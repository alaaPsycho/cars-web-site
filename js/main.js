

let iconSearch = document.getElementById('icon-search');
let headerForm = document.querySelector('.form');
let navA = document.querySelectorAll('header nav a');


//element pour show login form
let formBtn = document.getElementById('icon-user');
let loginForm = document.querySelector('.login-form');
let formClose = document.querySelector('#close')


//navbar
let nav = document.querySelector('nav')
let menu = document.getElementById('menu');
//home img
let spanImg = document.querySelectorAll('.img-btn');
let homeImg = document.querySelector('.home-img')
window.onscroll =()=>{   
     iconSearch.classList.remove('fa-times');
        headerForm.classList.remove('active');
        document.querySelector('header').classList.remove('active');
        document.body.classList.remove('paddingRight')

  

}
iconSearch.addEventListener('click',()=>{
    iconSearch.classList.toggle('fa-times');
    headerForm.classList.toggle('active');

})

formBtn.addEventListener('click',()=>{
    
    loginForm.classList.add('active');
  //  loginForm.style = 'display:flex';

})

formClose.addEventListener('click',()=>{
  //  loginForm.style = 'display:none';
  loginForm.classList.remove('active');

})


// nav
menu.addEventListener('click',()=>{
  menu.classList.toggle('active')
  nav.classList.toggle('active')

})

//home img
spanImg.forEach(img => {
  img.addEventListener('click',(i)=>{
    document.querySelector('.controls .active').classList.remove('active');
  img.classList.add('active')
   homeImg.src = img.dataset.img
  })
});














//add class on scroll
  
    


//nav add class active
navA.forEach(A=>{

A.addEventListener('click',()=>{
  document.querySelector('header nav a.active').classList.remove('active');
  A.classList.add('active')
})

})




//padding body
let param = document.getElementById('param');

param.addEventListener('click',()=>{
  document.body.classList.toggle('paddingRight')
  document.querySelector('header').classList.toggle('active');
})

//slider
let prev = document.getElementById('left');
let next = document.getElementById('right');
let home_Img = document.getElementById('home-img');
let url=['home-img/1.jpg',
          'home-img/2.jpg',
          'home-img/home.jpg',
          'home-img/3.jpg',
          'home-img/4.jpg',
          'home-img/5.jpg'

]
index =0;

right.addEventListener('click',()=>{
  home_Img.src = url[index];
  index++;
  if(index > url.length -1)
  index =0

})
left.addEventListener('click',()=>{
  if(index >= 0)
  home_Img.src = url[index] ;
  index--;

  if(index < 0)
  index = url.length -1;

})







//ScrollReveal
/*
ScrollReveal().reveal('.home', {
    delay: 375,
    duration: 500,
    reset: true
});

ScrollReveal().reveal('.about',{

  reset: true

});
ScrollReveal().reveal('.heading',{
  delay: 300,
  distance: '150%',
  origin: 'bottom',
  opacity: false,

  reset: true

});*/
