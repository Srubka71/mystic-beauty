const pageType = document.body.dataset.page;

const QUESTION_EMAIL = "kontakt@mysticbeauty.pl";

let serviceCart = [];

function getAllServices() {
  if (Array.isArray(MYSTIC_CONFIG.services)) {
    return MYSTIC_CONFIG.services;
  }

  if (Array.isArray(MYSTIC_CONFIG.serviceCategories)) {
    return MYSTIC_CONFIG.serviceCategories.flatMap((category) =>
      category.services.map((service) => ({
        ...service,
        categoryId: category.id,
        categoryTitle: category.title
      }))
    );
  }

  return [];
}

function getServiceById(serviceId) {
  return getAllServices().find((service) => service.id === serviceId);
}

function getBookingUrl() {
  return MYSTIC_CONFIG.owner.bookingUrl || MYSTIC_CONFIG.owner.instagram || "#";
}

function createQuestionMailto(service, variant = null) {
  const subjectParts = ["Pytanie o zabieg Mystic Beauty"];

  if (service?.title) {
    subjectParts.push(service.title);
  }

  if (variant?.name) {
    subjectParts.push(variant.name);
  }

  const bodyLines = [
    "Dzień dobry,",
    "",
    "chciałabym/chciałbym zapytać o zabieg:",
    service?.title ? `- ${service.title}` : "",
    service?.categoryTitle ? `Kategoria: ${service.categoryTitle}` : "",
    service?.price ? `Cena na stronie: ${service.price}` : "",
    service?.duration ? `Czas: ${service.duration}` : "",
    variant?.name ? `Wybrany obszar/wariant: ${variant.name}` : "",
    variant?.price ? `Cena wariantu: ${variant.price}` : "",
    variant?.duration ? `Czas wariantu: ${variant.duration}` : "",
    "",
    "Moje pytanie:",
    "",
    "",
    "Pozdrawiam"
  ].filter(Boolean);

  return `mailto:${QUESTION_EMAIL}?subject=${encodeURIComponent(
    subjectParts.join(" — ")
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

function createReservationMailto(cartItems, formData = {}) {
  const subject = "Prośba o rezerwację — Mystic Beauty";

  const bodyLines = [
    "Dzień dobry,",
    "",
    "chciałabym/chciałbym zapytać o możliwość rezerwacji wybranych zabiegów:",
    "",
    ...cartItems.flatMap((item, index) => [
      `${index + 1}. ${item.serviceTitle}`,
      `   Obszar/wariant: ${item.variantName}`,
      `   Cena: ${item.price}`,
      `   Czas: ${item.duration}`,
      item.categoryTitle ? `   Kategoria: ${item.categoryTitle}` : "",
      ""
    ]),
    "Dane kontaktowe:",
    formData.name ? `Imię i nazwisko: ${formData.name}` : "Imię i nazwisko:",
    formData.phone ? `Telefon: ${formData.phone}` : "Telefon:",
    formData.email ? `E-mail: ${formData.email}` : "E-mail:",
    "",
    "Preferowany termin:",
    formData.date ? `Dzień: ${formData.date}` : "Dzień:",
    formData.time ? `Godzina: ${formData.time}` : "Godzina:",
    "",
    "Wiadomość dodatkowa:",
    formData.message ? formData.message : "",
    "",
    "Akceptuję, że wysłanie formularza jest prośbą o rezerwację, a ostateczny termin oraz zasady rezerwacji zostaną potwierdzone przez salon.",
    "",
    "Pozdrawiam"
  ].filter(Boolean);

  return `mailto:${QUESTION_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

function formatVariantText(rawVariant) {
  const parts = String(rawVariant)
    .split("—")
    .map((part) => part.trim())
    .filter(Boolean);

  return {
    name: parts[0] || rawVariant,
    price: parts[1] || "Cena według konsultacji",
    duration: parts[2] || "Czas według konsultacji"
  };
}

function getServiceAreaOptions(service) {
  if (Array.isArray(service.variants) && service.variants.length > 0) {
    return service.variants.map(formatVariantText);
  }

  return [
    {
      name: service.title,
      price: service.price || "Cena według konsultacji",
      duration: service.duration || "Czas według konsultacji"
    }
  ];
}

function createCartItem(service, variant) {
  return {
    id: `${service.id}::${variant.name}`,
    serviceId: service.id,
    serviceTitle: service.title,
    categoryTitle: service.categoryTitle || service.label,
    variantName: variant.name,
    price: variant.price,
    duration: variant.duration
  };
}

function isItemInCart(itemId) {
  return serviceCart.some((item) => item.id === itemId);
}

function addToCart(item) {
  if (isItemInCart(item.id)) return;
  serviceCart.push(item);
}

function removeFromCart(itemId) {
  serviceCart = serviceCart.filter((item) => item.id !== itemId);
}

function getCartSummaryText() {
  if (serviceCart.length === 0) {
    return "Nie wybrano jeszcze żadnego obszaru";
  }

  if (serviceCart.length === 1) {
    return "Wybrano 1 obszar";
  }

  return `Wybrano ${serviceCart.length} obszary`;
}

function initHomePage() {
  const ownerPhoto = document.getElementById("ownerPhoto");
  const ownerKicker = document.getElementById("ownerKicker");
  const ownerTitle = document.getElementById("ownerTitle");
  const ownerLead = document.getElementById("ownerLead");
  const ownerBio = document.getElementById("ownerBio");

  if (!ownerKicker || !ownerTitle || !ownerLead || !ownerBio) return;

  const { owner } = MYSTIC_CONFIG;

  ownerKicker.textContent = owner.kicker;
  ownerTitle.textContent = owner.title;
  ownerLead.textContent = owner.lead;
  ownerBio.textContent = owner.bio;

  if (ownerPhoto && owner.photo) {
    ownerPhoto.src = owner.photo;
    ownerPhoto.alt = owner.name;
  }
}

function initOfferPage() {
  const serviceList = document.getElementById("serviceList");
  const infoBar = document.getElementById("infoBar");

  const brandOwner = document.getElementById("brandOwner");
  const heroContent = document.getElementById("heroContent");
  const heroLabel = document.getElementById("heroLabel");
  const heroTitle = document.getElementById("heroTitle");
  const heroDescription = document.getElementById("heroDescription");
  const heroMeta = document.getElementById("heroMeta");
  const primaryButton = document.getElementById("primaryButton");
  const openActiveModalButton = document.getElementById("openActiveModal");

  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const modalLabel = document.getElementById("modalLabel");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalDetails = document.getElementById("modalDetails");
  const modalVideo = document.getElementById("modalVideo");
  const modalVideoPlaceholder = document.getElementById("modalVideoPlaceholder");
  const modalReserveButton = document.getElementById("modalReserveButton");

  if (!serviceList || !heroContent) return;

  const allServices = getAllServices();

  let activeServiceId = allServices[0]?.id || null;
  let transitionLocked = false;
  let floatingCartButton = null;

  function isMobileView() {
    return window.matchMedia("(max-width: 760px)").matches;
  }

  function scrollOfferPreviewIntoView(delay = 120) {
    if (!isMobileView()) return;

    window.setTimeout(() => {
      const offerHero = document.querySelector(".offer-hero");

      if (offerHero && typeof offerHero.scrollIntoView === "function") {
        offerHero.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, delay);
  }

  function ensureHeroPreview() {
    let preview = document.getElementById("heroServicePreview");

    if (!preview) {
      preview = document.createElement("div");
      preview.id = "heroServicePreview";
      preview.className = "hero-service-preview";
      preview.setAttribute("aria-hidden", "true");

      preview.innerHTML = `
        <video
          class="hero-service-video"
          muted
          playsinline
          loop
          autoplay
          preload="auto"
        ></video>

        <div class="hero-service-video-placeholder"></div>
      `;

      const offerHero = document.querySelector(".offer-hero");

      if (offerHero) {
        offerHero.insertBefore(preview, offerHero.firstChild);
      } else {
        heroMeta.insertAdjacentElement("afterend", preview);
      }
    }

    return preview;
  }

  function updateHeroPreview(service) {
    const preview = ensureHeroPreview();
    const video = preview.querySelector(".hero-service-video");
    const placeholder = preview.querySelector(".hero-service-video-placeholder");

    const videoSource = service.previewVideo || service.video || "";

    preview.classList.remove("has-video", "no-video", "video-blocked", "video-error");

    video.onerror = null;
    video.onloadeddata = null;

    if (videoSource) {
      preview.classList.add("has-video");

      video.onerror = () => {
        preview.classList.remove("has-video");
        preview.classList.add("no-video", "video-error");
        video.style.display = "none";
        placeholder.style.display = "block";
      };

      video.onloadeddata = () => {
        preview.classList.remove("no-video", "video-error", "video-blocked");
        preview.classList.add("has-video");
        video.style.display = "block";
        placeholder.style.display = "none";
      };

      if (video.getAttribute("src") !== videoSource) {
        video.setAttribute("src", videoSource);
        video.load();
      }

      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;

      video.style.display = "block";
      placeholder.style.display = "none";

      const playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          /*
            Nie ukrywamy filmu po błędzie autoplay.
            Jeśli plik się załadował, przeglądarka może pokazać pierwszą klatkę.
          */
        });
      }
    } else {
      preview.classList.add("no-video");

      video.pause();
      video.removeAttribute("src");
      video.load();

      video.style.display = "none";
      placeholder.style.display = "block";
    }
  }

  function updateFloatingCart() {
    if (!floatingCartButton) return;

    const count = serviceCart.length;
    const countElement = floatingCartButton.querySelector(".floating-cart-count");
    const labelElement = floatingCartButton.querySelector(".floating-cart-label");

    countElement.textContent = count;
    labelElement.textContent = count === 0 ? "Koszyk" : "Podsumowanie";

    floatingCartButton.classList.toggle("has-items", count > 0);
    floatingCartButton.setAttribute(
      "aria-label",
      count === 0
        ? "Koszyk jest pusty"
        : `Otwórz koszyk. Liczba wybranych pozycji: ${count}`
    );
  }

  function createFloatingCart() {
    const existingCart = document.querySelector(".floating-cart-button");
    if (existingCart) {
      existingCart.remove();
    }

    floatingCartButton = document.createElement("button");
    floatingCartButton.className = "floating-cart-button";
    floatingCartButton.type = "button";
    floatingCartButton.innerHTML = `
      <span class="floating-cart-icon">🛒</span>
      <span class="floating-cart-label">Koszyk</span>
      <span class="floating-cart-count">0</span>
    `;

    floatingCartButton.addEventListener("click", () => {
      if (serviceCart.length === 0) {
        floatingCartButton.classList.remove("is-shaking");
        void floatingCartButton.offsetWidth;
        floatingCartButton.classList.add("is-shaking");

        window.setTimeout(() => {
          floatingCartButton.classList.remove("is-shaking");
        }, 460);

        return;
      }

      openCheckoutModal();
    });

    document.body.appendChild(floatingCartButton);
    updateFloatingCart();
  }

  function renderMeta(items) {
    heroMeta.innerHTML = "";

    items.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      heroMeta.appendChild(span);
    });
  }

  function createServiceCard(service, index) {
    const card = document.createElement("article");
    card.className = "service-card";
    card.dataset.serviceId = service.id;

    card.innerHTML = `
      <button class="service-main-button" type="button">
        <span class="service-index">${String(index + 1).padStart(2, "0")}</span>

        <span class="service-body">
          <span class="service-label">${service.label}</span>
          <strong>${service.title}</strong>
          <small>${service.shortDescription}</small>
        </span>

        <span class="service-price">${service.price}</span>
      </button>

      <button class="service-more-button" type="button">
        Zobacz więcej
      </button>
    `;

    const mainButton = card.querySelector(".service-main-button");
    const moreButton = card.querySelector(".service-more-button");

    mainButton.addEventListener("click", () => {
      if (activeServiceId === service.id) {
        scrollOfferPreviewIntoView(60);
        return;
      }

      setActiveService(service.id);
    });

    moreButton.addEventListener("click", () => {
      setActiveService(service.id);
      window.setTimeout(() => openServiceModal(service.id), 140);
    });

    return card;
  }

  function toggleCategory(categoryId) {
    const categoryBlock = document.querySelector(`[data-category-id="${categoryId}"]`);
    if (!categoryBlock) return;

    const shouldOpen = !categoryBlock.classList.contains("is-open");

    document.querySelectorAll(".service-category").forEach((category) => {
      category.classList.remove("is-open");
    });

    if (shouldOpen) {
      categoryBlock.classList.add("is-open");
    }
  }

  function renderServiceCards() {
    serviceList.innerHTML = "";

    if (Array.isArray(MYSTIC_CONFIG.serviceCategories)) {
      let serviceIndex = 0;

      MYSTIC_CONFIG.serviceCategories.forEach((category) => {
        const categoryBlock = document.createElement("section");
        categoryBlock.className = "service-category";
        categoryBlock.dataset.categoryId = category.id;

        const categoryHeader = document.createElement("button");
        categoryHeader.type = "button";
        categoryHeader.className = "service-category-header";
        categoryHeader.innerHTML = `
          <span class="category-title">${category.title}</span>
          <small>${category.services.length} ${
          category.services.length === 1 ? "usługa" : "usługi"
        }</small>
        `;

        const categoryItems = document.createElement("div");
        categoryItems.className = "service-category-items";

        category.services.forEach((service) => {
          const normalizedService = {
            ...service,
            categoryId: category.id,
            categoryTitle: category.title
          };

          serviceIndex += 1;
          categoryItems.appendChild(createServiceCard(normalizedService, serviceIndex - 1));
        });

        categoryHeader.addEventListener("click", () => {
          toggleCategory(category.id);
        });

        categoryBlock.appendChild(categoryHeader);
        categoryBlock.appendChild(categoryItems);
        serviceList.appendChild(categoryBlock);
      });

      return;
    }

    allServices.forEach((service, index) => {
      serviceList.appendChild(createServiceCard(service, index));
    });
  }

  function setActiveService(serviceId) {
    if (transitionLocked) return;

    if (activeServiceId === serviceId) {
      scrollOfferPreviewIntoView(60);
      return;
    }

    const service = getServiceById(serviceId);
    if (!service) return;

    transitionLocked = true;
    activeServiceId = serviceId;

    if (service.categoryId) {
      const categoryBlock = document.querySelector(`[data-category-id="${service.categoryId}"]`);
      if (categoryBlock && !categoryBlock.classList.contains("is-open")) {
        categoryBlock.classList.add("is-open");
      }
    }

    document.querySelectorAll(".service-card").forEach((card) => {
      card.classList.toggle("is-active", card.dataset.serviceId === serviceId);
    });

    heroContent.classList.add("is-changing");

    window.setTimeout(() => {
      heroLabel.textContent = service.categoryTitle || service.label;
      heroTitle.textContent = service.title;
      heroDescription.textContent = service.description;

      renderMeta([service.price, service.duration, service.effect]);
      updateHeroPreview(service);
      scrollOfferPreviewIntoView(80);

      heroContent.classList.remove("is-changing");
      heroContent.classList.add("is-visible");
    }, 180);

    window.setTimeout(() => {
      heroContent.classList.remove("is-visible");
      transitionLocked = false;
    }, 620);
  }

  function setInitialService() {
    const firstService = allServices[0];
    if (!firstService) return;

    activeServiceId = firstService.id;

    heroLabel.textContent = firstService.categoryTitle || firstService.label;
    heroTitle.textContent = firstService.title;
    heroDescription.textContent = firstService.description;

    renderMeta([firstService.price, firstService.duration, firstService.effect]);
    updateHeroPreview(firstService);

    document.querySelectorAll(".service-card").forEach((card) => {
      card.classList.toggle("is-active", card.dataset.serviceId === firstService.id);
    });
  }

  function renderInfoBar() {
    infoBar.innerHTML = "";

    MYSTIC_CONFIG.infoBar.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      infoBar.appendChild(span);
    });
  }

  function removeLegacyQuestionButtons() {
    document.querySelectorAll(".modal-question-button").forEach((button) => {
      if (!button.closest(".modal-action-row")) {
        button.remove();
      }
    });
  }

  function renderModalDetails(service) {
    modalDetails.innerHTML = "";
    removeLegacyQuestionButtons();

    const baseDetails = [
      `Kategoria: ${service.categoryTitle || service.label}`,
      `Cena: ${service.price}`,
      `Czas: ${service.duration}`,
      `Efekt: ${service.effect}`,
      ...service.details
    ];

    baseDetails.forEach((detail) => {
      const span = document.createElement("span");
      span.textContent = detail;
      modalDetails.appendChild(span);
    });

    const actionRow = document.createElement("div");
    actionRow.className = "modal-action-row";

    const chooseButton = document.createElement("button");
    chooseButton.className = "modal-area-button";
    chooseButton.type = "button";
    chooseButton.textContent = "Wybierz obszar";

    chooseButton.addEventListener("click", () => {
      openAreaModal(service.id);
    });

    const questionButton = document.createElement("a");
    questionButton.className = "btn btn-secondary modal-question-button";
    questionButton.textContent = "Zadaj pytanie";
    questionButton.href = createQuestionMailto(service);

    actionRow.appendChild(chooseButton);
    actionRow.appendChild(questionButton);
    modalDetails.appendChild(actionRow);
  }

  function openServiceModal(serviceId) {
    const service = getServiceById(serviceId);
    if (!service) return;

    activeServiceId = service.id;

    modalLabel.textContent = service.categoryTitle || service.label;
    modalTitle.textContent = service.title;
    modalDescription.textContent = service.description;

    renderModalDetails(service);

    if (service.video) {
      modalVideo.src = service.video;
      modalVideo.style.display = "block";
      modalVideoPlaceholder.style.display = "none";
    } else {
      modalVideo.pause();
      modalVideo.removeAttribute("src");
      modalVideo.load();
      modalVideo.style.display = "none";
      modalVideoPlaceholder.style.display = "flex";
    }

    modalReserveButton.textContent = "Zarezerwuj zabieg";
    modalReserveButton.href = "#";
    modalReserveButton.removeAttribute("target");
    modalReserveButton.removeAttribute("rel");

    modalReserveButton.onclick = (event) => {
      event.preventDefault();
      openAreaModal(service.id);
    };

    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    modalBackdrop.classList.remove("has-area-modal");

    document.body.classList.add("modal-open");
  }

  function closeServiceModal() {
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.classList.remove("has-area-modal");
    modalBackdrop.setAttribute("aria-hidden", "true");

    document.querySelectorAll(".area-modal-backdrop, .checkout-modal-backdrop").forEach((modal) => {
      modal.remove();
    });

    document.body.classList.remove("modal-open");

    modalVideo.pause();
  }

  function renderCartSummary(container, service, areaBackdrop) {
    container.innerHTML = `
      <div class="area-cart-info">
        <strong>${getCartSummaryText()}</strong>
        <small>Dodaj jeden lub kilka obszarów, a potem finalizuj albo wróć do oferty.</small>
      </div>

      <div class="area-cart-actions">
        <button class="area-cart-more" type="button" ${serviceCart.length === 0 ? "disabled" : ""}>
          Dodaj kolejne zabiegi
        </button>

        <button class="area-cart-finalize" type="button" ${serviceCart.length === 0 ? "disabled" : ""}>
          Finalizuj wybór
        </button>
      </div>
    `;

    const finalizeButton = container.querySelector(".area-cart-finalize");
    const moreButton = container.querySelector(".area-cart-more");

    finalizeButton.addEventListener("click", () => {
      openCheckoutModal();
    });

    moreButton.addEventListener("click", () => {
      if (serviceCart.length === 0) return;

      areaBackdrop.classList.remove("is-open");
      modalBackdrop.classList.remove("has-area-modal");
      modalBackdrop.classList.remove("is-open");
      modalBackdrop.setAttribute("aria-hidden", "true");

      document.body.classList.remove("modal-open");

      window.setTimeout(() => {
        areaBackdrop.remove();
      }, 260);
    });
  }

  function renderAreaCards(areaList, variants, service, cartBar, areaBackdrop) {
    areaList.innerHTML = "";

    if (variants.length === 0) {
      areaList.innerHTML = `
        <div class="area-empty">
          Brak wyników. Spróbuj wpisać inne słowo, np. „twarz”, „usta”, „szyja”.
        </div>
      `;
      return;
    }

    variants.forEach((variant) => {
      const cartItem = createCartItem(service, variant);
      const selected = isItemInCart(cartItem.id);

      const card = document.createElement("article");
      card.className = `area-card ${selected ? "is-selected" : ""}`;
      card.dataset.cartId = cartItem.id;

      card.innerHTML = `
        <div class="area-card-main">
          <strong>${variant.name}</strong>
          <small>${variant.duration}</small>
        </div>

        <span class="area-card-price">${variant.price}</span>

        <button class="area-add-button" type="button">
          ${selected ? "Dodano do wyboru" : "Dodaj do wyboru"}
        </button>
      `;

      const addButton = card.querySelector(".area-add-button");

      function toggleAreaChoice() {
        if (isItemInCart(cartItem.id)) {
          removeFromCart(cartItem.id);
          card.classList.remove("is-selected");
          addButton.textContent = "Dodaj do wyboru";
        } else {
          addToCart(cartItem);
          card.classList.add("is-selected");
          addButton.textContent = "Dodano do wyboru";
        }

        renderCartSummary(cartBar, service, areaBackdrop);
        updateFloatingCart();
      }

      addButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleAreaChoice();
      });

      card.addEventListener("click", (event) => {
        if (event.target.closest("button")) return;
        toggleAreaChoice();
      });

      areaList.appendChild(card);
    });
  }

  function openAreaModal(serviceId) {
    const service = getServiceById(serviceId);
    if (!service) return;

    document.querySelectorAll(".area-modal-backdrop").forEach((modal) => {
      modal.remove();
    });

    const areaBackdrop = document.createElement("div");
    areaBackdrop.className = "area-modal-backdrop";

    const areaModal = document.createElement("section");
    areaModal.className = "area-modal";
    areaModal.setAttribute("role", "dialog");
    areaModal.setAttribute("aria-modal", "true");

    const variants = getServiceAreaOptions(service);

    areaModal.innerHTML = `
      <button class="area-modal-close" type="button" aria-label="Zamknij wybór obszaru">×</button>

      <div class="area-modal-header">
        <p class="section-label">Wybierz obszar</p>
        <h3>${service.title}</h3>
        <span>${variants.length} ${variants.length === 1 ? "opcja" : "opcji"} z oferty</span>

        <label class="area-search">
          <span>Szukaj obszaru</span>
          <input type="search" placeholder="np. usta, szyja, brzuch..." autocomplete="off">
        </label>
      </div>

      <div class="area-list"></div>

      <div class="area-cart-bar"></div>
    `;

    areaBackdrop.appendChild(areaModal);
    document.body.appendChild(areaBackdrop);

    modalBackdrop.classList.add("has-area-modal");

    const areaList = areaModal.querySelector(".area-list");
    const cartBar = areaModal.querySelector(".area-cart-bar");
    const searchInput = areaModal.querySelector(".area-search input");

    renderCartSummary(cartBar, service, areaBackdrop);
    renderAreaCards(areaList, variants, service, cartBar, areaBackdrop);

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();

      const filteredVariants = variants.filter((variant) => {
        const haystack = `${variant.name} ${variant.price} ${variant.duration}`.toLowerCase();
        return haystack.includes(query);
      });

      renderAreaCards(areaList, filteredVariants, service, cartBar, areaBackdrop);
    });

    window.requestAnimationFrame(() => {
      areaBackdrop.classList.add("is-open");
    });

    const closeButton = areaModal.querySelector(".area-modal-close");

    function closeAreaModal() {
      areaBackdrop.classList.remove("is-open");
      modalBackdrop.classList.remove("has-area-modal");

      window.setTimeout(() => {
        areaBackdrop.remove();
      }, 260);
    }

    closeButton.addEventListener("click", closeAreaModal);

    areaBackdrop.addEventListener("click", (event) => {
      if (event.target === areaBackdrop) {
        closeAreaModal();
      }
    });
  }

  function openCheckoutModal() {
    if (serviceCart.length === 0) return;

    document.querySelectorAll(".checkout-modal-backdrop").forEach((modal) => {
      modal.remove();
    });

    const checkoutBackdrop = document.createElement("div");
    checkoutBackdrop.className = "checkout-modal-backdrop";

    const checkoutModal = document.createElement("section");
    checkoutModal.className = "checkout-modal";
    checkoutModal.setAttribute("role", "dialog");
    checkoutModal.setAttribute("aria-modal", "true");

    checkoutModal.innerHTML = `
      <button class="checkout-modal-close" type="button" aria-label="Zamknij finalizację">×</button>

      <div class="checkout-header">
        <p class="section-label">Prośba o rezerwację</p>
        <h3>Wybrane zabiegi</h3>
        <span>${serviceCart.length} ${serviceCart.length === 1 ? "pozycja" : "pozycje"} do omówienia</span>
      </div>

      <div class="checkout-list">
        ${serviceCart
          .map(
            (item) => `
              <article class="checkout-item" data-cart-id="${item.id}">
                <div>
                  <strong>${item.serviceTitle}</strong>
                  <small>${item.variantName}</small>
                  <em>${item.duration}</em>
                </div>

                <span>${item.price}</span>

                <button type="button" class="checkout-remove">
                  Usuń
                </button>
              </article>
            `
          )
          .join("")}
      </div>

      <form class="checkout-form-preview" id="reservationForm">
        <label>
          <span>Imię i nazwisko *</span>
          <input id="reservationName" name="name" type="text" placeholder="Np. Anna Kowalska" autocomplete="name" required>
        </label>

        <label>
          <span>Telefon *</span>
          <input id="reservationPhone" name="phone" type="tel" placeholder="Np. 500000000" autocomplete="tel" required>
        </label>

        <label>
          <span>E-mail *</span>
          <input id="reservationEmail" name="email" type="email" placeholder="Np. anna@email.pl" autocomplete="email" required>
        </label>

        <label>
          <span>Preferowany dzień</span>
          <input id="reservationDate" name="date" type="date">
        </label>

        <label>
          <span>Preferowana godzina</span>
          <select id="reservationTime" name="time">
            <option value="">Wybierz godzinę</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>
        </label>

        <label>
          <span>Wiadomość dodatkowa</span>
          <textarea id="reservationMessage" name="message" rows="4" placeholder="Napisz, jeśli masz pytanie, przeciwwskazania albo preferencje dotyczące terminu."></textarea>
        </label>

        <label class="checkout-terms">
          <input id="checkoutTerms" type="checkbox">
          <span>
            Akceptuję przyszły <a href="#regulamin">regulamin rezerwacji</a> oraz rozumiem,
            że wysłanie formularza jest prośbą o rezerwację, a termin zostanie potwierdzony przez salon.
          </span>
        </label>
      </form>

      <div class="checkout-actions">
        <a id="checkoutMailButton" class="btn btn-primary checkout-submit is-disabled" href="#" aria-disabled="true">
          Wyślij prośbę o rezerwację
        </a>

        <button class="btn btn-secondary checkout-back" type="button">
          Dodaj kolejne zabiegi
        </button>

        <button class="btn btn-secondary checkout-clear" type="button">
          Wyczyść koszyk
        </button>
      </div>

      <p class="checkout-note" id="checkoutNote">
        Uzupełnij imię i nazwisko, telefon, e-mail oraz zaakceptuj regulamin, żeby przygotować prośbę o rezerwację.
      </p>
    `;

    checkoutBackdrop.appendChild(checkoutModal);
    document.body.appendChild(checkoutBackdrop);

    const reservationForm = checkoutModal.querySelector("#reservationForm");
    const nameInput = checkoutModal.querySelector("#reservationName");
    const phoneInput = checkoutModal.querySelector("#reservationPhone");
    const emailInput = checkoutModal.querySelector("#reservationEmail");
    const dateInput = checkoutModal.querySelector("#reservationDate");
    const timeInput = checkoutModal.querySelector("#reservationTime");
    const messageInput = checkoutModal.querySelector("#reservationMessage");
    const termsCheckbox = checkoutModal.querySelector("#checkoutTerms");
    const checkoutMailButton = checkoutModal.querySelector("#checkoutMailButton");
    const checkoutNote = checkoutModal.querySelector("#checkoutNote");

    function getReservationFormData() {
      return {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        date: dateInput.value,
        time: timeInput.value,
        message: messageInput.value.trim()
      };
    }

    function validateReservationForm() {
      const formData = getReservationFormData();

      const phoneIsValid = /^[0-9]{6,15}$/.test(formData.phone);
      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email);

      nameInput.classList.toggle("is-valid", formData.name.length >= 2);
      nameInput.classList.toggle(
        "is-invalid",
        formData.name.length > 0 && formData.name.length < 2
      );

      phoneInput.classList.toggle("is-valid", phoneIsValid);
      phoneInput.classList.toggle(
        "is-invalid",
        formData.phone.length > 0 && !phoneIsValid
      );

      emailInput.classList.toggle("is-valid", emailIsValid);
      emailInput.classList.toggle(
        "is-invalid",
        formData.email.length > 0 && !emailIsValid
      );

      const isValid =
        formData.name.length >= 2 &&
        phoneIsValid &&
        emailIsValid &&
        termsCheckbox.checked;

      if (isValid) {
        checkoutMailButton.classList.remove("is-disabled");
        checkoutMailButton.removeAttribute("aria-disabled");
        checkoutMailButton.href = createReservationMailto(serviceCart, formData);
        checkoutNote.textContent =
          "Formularz jest gotowy. Kliknięcie przycisku przygotuje wiadomość e-mail z prośbą o rezerwację.";
      } else {
        checkoutMailButton.classList.add("is-disabled");
        checkoutMailButton.setAttribute("aria-disabled", "true");
        checkoutMailButton.href = "#";
        checkoutNote.textContent =
          "Uzupełnij imię i nazwisko, telefon, poprawny e-mail oraz zaakceptuj regulamin, żeby przygotować prośbę o rezerwację.";
      }
    }

    phoneInput.setAttribute("inputmode", "numeric");
    phoneInput.setAttribute("pattern", "[0-9]*");
    phoneInput.setAttribute("maxlength", "15");

    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 15);
      validateReservationForm();
    });

    emailInput.setAttribute("inputmode", "email");

    reservationForm.addEventListener("input", validateReservationForm);
    reservationForm.addEventListener("change", validateReservationForm);

    checkoutMailButton.addEventListener("click", (event) => {
      validateReservationForm();

      if (checkoutMailButton.classList.contains("is-disabled")) {
        event.preventDefault();

        checkoutNote.textContent =
          "Brakuje wymaganych danych. Uzupełnij imię i nazwisko, telefon, poprawny e-mail oraz zaznacz akceptację regulaminu.";
      }
    });

    function closeCheckoutModal() {
      checkoutBackdrop.classList.remove("is-open");

      window.setTimeout(() => {
        checkoutBackdrop.remove();
      }, 260);
    }

    function refreshCheckoutModal() {
      if (serviceCart.length === 0) {
        checkoutBackdrop.remove();
        updateFloatingCart();
        return;
      }

      openCheckoutModal();
      updateFloatingCart();
    }

    checkoutModal.querySelectorAll(".checkout-remove").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".checkout-item");
        removeFromCart(item.dataset.cartId);
        refreshCheckoutModal();
      });
    });

    const clearButton = checkoutModal.querySelector(".checkout-clear");
    const backButton = checkoutModal.querySelector(".checkout-back");

    clearButton.addEventListener("click", () => {
      serviceCart = [];
      checkoutBackdrop.remove();

      document.querySelectorAll(".area-modal-backdrop").forEach((modal) => {
        modal.remove();
      });

      modalBackdrop.classList.remove("has-area-modal");
      updateFloatingCart();
    });

    backButton.addEventListener("click", () => {
      closeCheckoutModal();
    });

    window.requestAnimationFrame(() => {
      checkoutBackdrop.classList.add("is-open");
    });

    const closeButton = checkoutModal.querySelector(".checkout-modal-close");

    closeButton.addEventListener("click", closeCheckoutModal);

    checkoutBackdrop.addEventListener("click", (event) => {
      if (event.target === checkoutBackdrop) {
        closeCheckoutModal();
      }
    });

    validateReservationForm();
  }

  brandOwner.textContent = MYSTIC_CONFIG.brand.owner;

  primaryButton.textContent = MYSTIC_CONFIG.brand.primaryButtonLabel;
  primaryButton.href = getBookingUrl();

  renderServiceCards();
  renderInfoBar();
  setInitialService();
  createFloatingCart();

  openActiveModalButton.addEventListener("click", () => {
    openServiceModal(activeServiceId);
  });

  modalClose.addEventListener("click", closeServiceModal);

  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeServiceModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const checkoutModalElement = document.querySelector(".checkout-modal-backdrop.is-open");

      if (checkoutModalElement) {
        checkoutModalElement.classList.remove("is-open");

        window.setTimeout(() => {
          checkoutModalElement.remove();
        }, 260);

        return;
      }

      const openAreaModalElement = document.querySelector(".area-modal-backdrop.is-open");

      if (openAreaModalElement) {
        openAreaModalElement.classList.remove("is-open");
        modalBackdrop.classList.remove("has-area-modal");

        window.setTimeout(() => {
          openAreaModalElement.remove();
        }, 260);

        return;
      }

      if (modalBackdrop.classList.contains("is-open")) {
        closeServiceModal();
      }
    }
  });
}

if (pageType === "home") {
  initHomePage();
}

if (pageType === "offer") {
  initOfferPage();
}
