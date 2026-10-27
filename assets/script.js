
const tg='https://t.me/trades4forexbot';
document.querySelectorAll('[data-order]').forEach(el=>el.addEventListener('click',()=>{const product=el.dataset.order||'محصولات فور فارکس';window.open(tg+'?start='+encodeURIComponent(product),'_blank','noopener')}));
const menu=document.querySelector('.menuBtn'), mobile=document.querySelector('.mobileLinks');if(menu&&mobile)menu.addEventListener('click',()=>{mobile.classList.toggle('open');menu.setAttribute('aria-expanded',mobile.classList.contains('open'))});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);b.textContent='کپی شد ✓';setTimeout(()=>b.textContent='کپی شناسه',1800)}catch(e){prompt('شناسه تلگرام را کپی کنید',b.dataset.copy)}}));
document.querySelectorAll('form[data-telegram]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const msg=`درخواست ارتباط از سایت فور فارکس\\nنام: ${d.get('name')}\\nایمیل/شناسه: ${d.get('contact')}\\nپیام: ${d.get('message')}`;window.open(tg+'?text='+encodeURIComponent(msg),'_blank','noopener')}));
