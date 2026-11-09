const preloader=document.querySelector('.preloader');
window.addEventListener('load',()=>setTimeout(()=>preloader.classList.add('done'),450));
document.getElementById('year').textContent=new Date().getFullYear();

const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');
}));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.project-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>item.classList.remove('active'));button.classList.add('active');
  const category=button.dataset.filter;
  cards.forEach(card=>{card.classList.toggle('hidden',category!=='all'&&card.dataset.category!==category);});
}));

const modal=document.querySelector('.project-modal');
const modalImage=document.querySelector('.modal-image');
document.querySelectorAll('.project-card').forEach(card=>{
  card.querySelector('.project-open').addEventListener('click',()=>{
    document.querySelector('.modal-title').textContent=card.dataset.title;
    document.querySelector('.modal-type').textContent=card.dataset.type;
    document.querySelector('.modal-description').textContent=card.dataset.description;
    modalImage.style.backgroundImage=card.dataset.image?`url("${card.dataset.image}")`:getComputedStyle(card.querySelector('.project-image')).backgroundImage;
    modal.showModal();
  });
});
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal)modal.close();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.open)modal.close();});
