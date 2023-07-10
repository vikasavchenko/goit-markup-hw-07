(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const disableBodyScroll = () => document.body.style.overflow = 'hidden';
  const enableBodyScroll = () => document.body.style.overflow = 'unset'; 

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');
   
    isMenuOpen ? enableBodyScroll() : disableBodyScroll();
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
 
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
  
    mobileMenu.classList.add('is-hidden');
    openMenuBtn.setAttribute('aria-expanded', false);
    enableBodyScroll();
  });
})();