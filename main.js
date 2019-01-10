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

  icon.classList.value === "icon close"
    ? openBody()
    : lockBody()
});

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
}

let boxLi = document.querySelectorAll('.box > Li');
boxLi.forEach(function(item){
  item.addEventListener('click',function (){
    this.querySelector('.sub_box').classList.toggle('ul_show');
  });
});