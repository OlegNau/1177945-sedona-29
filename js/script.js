const popup = document.querySelector(".booking-form-container");
const popupButton = document.querySelector(".button-booking");
let arrivalDate = popup.querySelector("[name=arrival-date]");
let dateOfDeparture = popup.querySelector("[name=date-of-departure]");
let form = popup.querySelector("form");
let adults = popup.querySelector("[name=adults]");
let child = popup.querySelector("[name=children]");

popup.classList.add("modal-hide");

popupButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hide");
    arrivalDate.focus();
});

form.addEventListener("submit",function (evt) {
  if (!arrivalDate.value|| !dateOfDeparture.value|| !adults.value|| !child.value ) {
   evt.preventDefault();
   popup.classList.add("modal-error");}
});

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}
try {
  storage = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
};

