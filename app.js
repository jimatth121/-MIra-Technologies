'use strict'
// selection of classes

const openBtn = document.querySelector('.open__btn');
const closeBtn = document.querySelector('.close__btn');
const navList = document.querySelector('.nav__list') 
 
// const navOpen = document.querySelector('.nav__open') 

openBtn.addEventListener('click',function(){
console.log('matthew');
navList.classList.add("nav__open")
openBtn.classList.add('hide')
closeBtn.classList.add('show')
})

closeBtn.addEventListener('click',function(){
    console.log('matthew');
    navList.classList.remove("nav__open")
    openBtn.classList.remove('hide')
    closeBtn.classList.remove('show')

    })