(() => {
    const refs = {
      modal: document.querySelector("[data-modal]"),
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      hamburgerMenu: document.querySelector("[data-modal-hamburger-menu]"),
      openHamburgerMenuBtn: document.querySelector("[data-modal-hamburger-menu-open]"),
      closeHamburgerMenuBtn: document.querySelector("[data-modal-hamburger-menu-close]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.openHamburgerMenuBtn.addEventListener("click", toggleModalHamburgerMenu);
    refs.closeHamburgerMenuBtn.addEventListener("click", toggleModalHamburgerMenu);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

    function toggleModalHamburgerMenu() {
      refs.hamburgerMenu.classList.toggle("is-hidden");
    }
  })();