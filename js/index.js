const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('nav');

// Open's navbar
menuBtn.addEventListener('click',()=>{
    nav.classList.add('nav-open')
})
// Close navbar
closeBtn.addEventListener('click',()=>{
    nav.classList.remove('nav-open')
})
