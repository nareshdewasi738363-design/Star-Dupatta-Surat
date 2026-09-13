// ---------- Navbar scroll state ----------
const navbar = document.querySelector('.navbar');
const onScroll = () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// ---------- Mobile menu ----------
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if(navToggle){
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> mobileMenu.classList.remove('open'));
  });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ---------- Gallery filter ----------
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.g-item');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    galleryItems.forEach(item=>{
      const show = cat === 'all' || item.dataset.cat === cat;
      item.classList.toggle('hidden', !show);
    });
  });
});
