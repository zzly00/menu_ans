let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
let header = document.querySelector('.header');
let content = document.querySelector('.main');
let scrollTop;

icon.addEventListener('click',function(e){

  // console.log(window.pageYOffset)
  // box.classList.toggle('show');
  // header.classList.toggle('m_header');
  // document.body.classList.toggle('body_fix');
  // document.documentElement.classList.toggle('body_fix');

  if(icon.classList.value === "icon close"){
    handler();
    openBody();
    
  }else{
    lockBody();
    handler();
  }
});

function handler() {
  box.classList.toggle('show');
  header.classList.toggle('m_header');
  document.body.classList.toggle('body_fix');
  document.documentElement.classList.toggle('body_fix');
}

function lockBody() {
  icon.classList.add('close');
  if(window.pageYOffset) {
    scrollTop = window.pageYOffset;
    content.style.top = `${- (scrollTop)}px`;
  }
}

function openBody() {
  icon.classList.remove('close');
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