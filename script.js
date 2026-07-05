
  // ---------- WhatsApp links ----------
  const waNumber = "96892877805";
  const waMsgs = {
    en: "Hi Coffeato! I'd like to order.",
    ar: "مرحباً كوفياتو! أرغب بالطلب."
  };
  function buildWaLink(lang){
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsgs[lang])}`;
  }
  const waTargets = ['waNavBtn','waHeroBtn','waBottleBtn','waContactCard','waFloat','waSocialIcon','waMobileMenuBtn','waFooterLink','waCtaBtn'];

  // ---------- language toggle ----------
  const html = document.documentElement;
  function saveLang(l){ try{ localStorage.setItem('coffeato_lang', l); }catch(e){} }
  function setLang(lang){
    if(lang === 'ar'){
      html.setAttribute('lang','ar');
      html.setAttribute('dir','rtl');
    } else {
      html.setAttribute('lang','en');
      html.setAttribute('dir','ltr');
    }
    waTargets.forEach(id=>{
      const el = document.getElementById(id);
      if(el) el.setAttribute('href', buildWaLink(lang));
    });
    document.querySelectorAll('.lang-opt').forEach(b=> b.classList.toggle('active', b.dataset.lang === lang));
    saveLang(lang);
  }
  // EN | AR segmented toggle: pick the language directly
  document.querySelectorAll('.lang-opt').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
  });
  let _saved='ar'; try{ _saved = localStorage.getItem('coffeato_lang') || 'ar'; }catch(e){}
  setLang(_saved); // persisted or default

  // ---------- mobile menu ----------
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', ()=> mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

  // ---------- menu tabs ----------
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.menu-panel');
  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabBtns.forEach(b=>b.classList.remove('active'));
      panels.forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector(`.menu-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
  });

  // ---------- year ----------
  document.getElementById('year').textContent = new Date().getFullYear();
