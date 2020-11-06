//feedback

const buttonFeedback = document.querySelector(".button-maps");
const feedbackPopup = document.querySelector(".modal-login");
const feedbackClose = feedbackPopup ? feedbackPopup.querySelector(".modal-close") : "";
const feedbackForm = feedbackPopup ? feedbackPopup.querySelector(".login-form") : "";
const feedbackLogin = feedbackPopup ? feedbackPopup.querySelector(".login-icon-user") : "";
const feedbackEmail = feedbackPopup ? feedbackPopup.querySelector(".login-icon-email") : "";
const feedbackText = feedbackPopup ? feedbackPopup.querySelector(".login-icon-text") : "";


if (buttonFeedback) {
  buttonFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    feedbackLogin.focus();
  });
}

if (feedbackClose) {
  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
  });
}

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackLogin.value || !feedbackEmail.value || !feedbackText.value) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-error");
      feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("modal-error");
    }
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

// map

const mapLink = document.querySelector(".button-open-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup ?  mapPopup.querySelector(".modal-close") : "";

if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//cart

const cartLinks = document.querySelectorAll(".card-hover-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");

for (const cartLink of cartLinks) {
  cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
