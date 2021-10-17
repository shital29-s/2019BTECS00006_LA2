/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',() =>{
      navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click',() =>{
      navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.getElementById('.nav__link')
function linkAction(){
  const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementsByClassName('skill__content'),
     skillHeader = document.querySelectorAll('.skill_header')

function toggleSkill(){
  let itemClass = this.parentNode.className

  for(i=0;i < skillContent.length;i++){
    skillContent[i].className = 'skill__content skill__close'
  }
if(itemClass === 'skills__content skill__close'){
  this.parentNode.className = 'skill__content skill__open'
}
skillHeader.forEach((el, i) => {
  el.addEventListener('click',toggleSkill)
});

}


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive()
{
  const scrollY = window.pageYoffset

   sections.forEach(current => {
     const sectionHeight = current.offsetHeight
     const sectionTop = current.offsetTop - 50;
     sectionId = current.getAttribute('id')


     if(scrollY > sectionTop && scrollY <= sectionTop  + sectionHeight){
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
   });

}
window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader(){

     const nav = document.getElementById('header')
     if(this.scrollY >= 80) nav.classList.add('scroll-header');
     else nav.classList.remove('scroll-header')
}


window.addEventListener('scroll',scrollHeader)


/*==================== SHOW SCROLL UP ====================*/

function scrollup(){
  const scrollup = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollup.classList.add('show-scroll');
  else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
/*==================== DARK LIGHT THEME ====================*/
