

//OMFG I FORGOT THIS PART, WE HAVE TO SELECT LE BUTTON
const toggleButton = document.querySelector(".btn-toggle");

//AND THEN WE CAN LISTEN FOR IT
toggleButton.addEventListener("click", function() {
    document.querySelector('html').toggleAttribute('data-dark-mode')
});


//ok now collapsable stuffs:
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++){
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");
//NOW EAT AND BARF UP YOUR SIBLING MUHAHAHAHAHAHAHAHAHA
        var content = this.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display = "none";}
            else {
                content.style.display = "block";
            }
        });
}