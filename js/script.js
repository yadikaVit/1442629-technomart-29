//feedback

const ButtonFeedback = document.querySelector(".button-maps");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".login-form");
const loginLogin = loginPopup.querySelector(".login-icon-user");
const loginEmail = loginPopup.querySelector(".login-icon-email");
const loginText = loginPopup.querySelector(".login-icon-text");


ButtonFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginLogin.focus();
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value || !loginText.value) {
    evt.preventDefault();
    loginPopup.classList.add("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

// map

const mapLink = document.querySelector(".button-open-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//cart


const CartLink = document.querySelectorAll(".card-hover-buy");
const CartPopup = document.querySelector(".modal-cart");
const CartClose = CartPopup.querySelector(".modal-close");

CartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  CartPopup.classList.add("modal-show");
});

CartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  CartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (CartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      CartPopup.classList.remove("modal-show");
    }
  }
});
