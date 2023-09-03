

//OMFG I FORGOT THIS PART, WE HAVE TO SELECT LE BUTTON
const toggleButton = document.querySelector(".btn-toggle");

//AND THEN WE CAN LISTEN FOR IT
toggleButton.addEventListener("click", function() {
    document.querySelector('html').toggleAttribute('data-dark-mode')
});