(function () {
  "use strict";

  const WHATSAPP_NUMBER = "5544999834988";
  const WHATSAPP_BASE = "https://wa.me/" + WHATSAPP_NUMBER;

  function buildWhatsAppLink(message) {
    return WHATSAPP_BASE + "?text=" + encodeURIComponent(message);
  }

  /* Header scroll */
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    });
  }

  /* Mobile menu */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        nav.classList.remove("open");
      });
    });
  }

  /* Fade-in on scroll */
  const fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* Gallery filters */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const hashToFilter = {
    mesas: "mesas",
    cadeiras: "cadeiras",
    balcoes: "balcoes",
    cozinhas: "cozinhas",
    estantes: "estantes"
  };

  function applyGalleryFilter(filter) {
    filterBtns.forEach(function (b) {
      b.classList.toggle("active", b.dataset.filter === filter);
    });

      galleryItems.forEach(function (item) {
        const categories = (item.dataset.category || "").split(/\s+/);
        if (filter === "todos" || categories.includes(filter)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyGalleryFilter(btn.dataset.filter);
    });
  });

  function handlePageHash() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    if (hashToFilter[hash]) {
      applyGalleryFilter(hashToFilter[hash]);
    }

    const target = document.getElementById(hash);
    if (target) {
      requestAnimationFrame(function () {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  handlePageHash();
  window.addEventListener("hashchange", handlePageHash);

  /* Lightbox */
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    const lbTitle = lightbox.querySelector("h3");
    const lbDesc = lightbox.querySelector("p");
    const lbBtn = lightbox.querySelector(".btn-primary");
    const lbClose = lightbox.querySelector(".lightbox-close");

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const img = item.querySelector("img");
        const title = item.querySelector("h3");
        const desc = item.querySelector("p");

        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lbTitle.textContent = title ? title.textContent : "";
        lbDesc.textContent = desc ? desc.textContent : "";

        const productName = title ? title.textContent : "móvel";
        lbBtn.href = buildWhatsAppLink(
          "Olá! Vi o " + productName + " no site da MG Móveis Rústicos e gostaria de solicitar um orçamento."
        );

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }

    lbClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* WhatsApp quote buttons with custom messages */
  document.querySelectorAll("[data-whatsapp-message]").forEach(function (el) {
    el.href = buildWhatsAppLink(el.dataset.whatsappMessage);
  });

  /* Contact form → WhatsApp */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const interesse = document.getElementById("interesse").value;
      const mensagem = document.getElementById("mensagem").value.trim();

      let text = "Olá! Meu nome é " + nome + ".";
      if (telefone) text += " Telefone: " + telefone + ".";
      text += " Tenho interesse em: " + interesse + ".";
      if (mensagem) text += " " + mensagem;
      text += " Gostaria de solicitar um orçamento.";

      window.open(buildWhatsAppLink(text), "_blank");
    });
  }

  /* Set current year in footer */
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
