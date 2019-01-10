let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
let header = document.querySelector('.header');
let content = document.querySelector('.main');
let scrollTop;

icon.addEventListener('click',function(e){
  box.classList.toggle('show');
  header.classList.toggle('m_header');
  document.body.classList.toggle('body_fix');
  document.documentElement.classList.toggle('body_fix');

  if(icon.classList.value === "icon close"){
    icon.classList.remove('close');
    openBody();
    
  }else{
    icon.classList.add('close');
    lockBody();
   
  }

  e.preventDefault();

  // box.addEventListener('touchmove', (e) => {
  //   console.log('box capturing', e.eventPhase);
  // }, true)

  // document.documentElement.addEventListener('touchstart', (e) => {
  //   e.stopImmediatePropagation();
  // }, true)
  // document.documentElement.addEventListener('touchmove', (e) => {
  //   e.stopImmediatePropagation();
  // }, true)

});





function lockBody() {
  if(window.pageYOffset) {
    scrollTop = window.pageYOffset;
    content.style.top = `${- (scrollTop)}px`;
  }
}

function openBody() {
  content.style.top = '';
  window.scrollTo(0, scrollTop);
  // scrollTop = null;
}

let boxLi = document.querySelectorAll('.box > Li');
boxLi.forEach(function(item){
  item.addEventListener('click',function (){
    this.querySelector('.sub_box').classList.toggle('ul_show');
  });
});