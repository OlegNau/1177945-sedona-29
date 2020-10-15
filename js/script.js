const popup = document.querySelector(".booking-form-container");
const popupbutton = document.querySelector(".button-booking");
let arrivaldate = popup.querySelector("[name=arrival-date]");
let dateofdeparture = popup.querySelector("[name=date-of-departure]");
let form = popup.querySelector("form");
let adults = popup.querySelector("[name=adults]");
let child = popup.querySelector("[name=children]");



popupbutton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-hide")
    arrivaldate.focus();
});

form.addEventListener("sibmit",function (evt) {
  if (!arrivaldate.value|| !dateofdeparture.value|| !adults.value|| !child.value ) {
   evt.preventDefault();
  console.log("нужно ввести дату прибытия и дату выезда")}
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
}
