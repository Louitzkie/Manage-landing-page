const burger = document.getElementById('burger');
const navUl = document.getElementById('navUl');

burger.addEventListener('click', ()=> {
      burger.classList.toggle('active');
      navUl.classList.toggle('active');
});

navUl.addEventListener('click', ()=> {
      burger.classList.remove('active');
      navUl.classList.remove('active');
});