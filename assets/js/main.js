const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(isOpen));
  });
}

document.querySelectorAll('img').forEach((img)=>{
  img.addEventListener('error',()=>{
    const holder=document.createElement('div');
    holder.className='img-missing';
    const label=img.dataset.fallback||'Imagen pendiente';
    holder.textContent=label;
    img.replaceWith(holder);
  },{once:true});
});
