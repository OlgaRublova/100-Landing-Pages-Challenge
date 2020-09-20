let iconAdd = document.querySelector(".fa.fa-plus");
let offer = document.querySelector(".discount-offers");
let myOffers = document.getElementById("myOffers");


iconAdd.addEventListener('click', toggleDiscountOffers);

function toggleDiscountOffers() {
    offer.classList.toggle('inactive')
    iconAdd.classList.toggle('fa-minus');
    iconAdd.classList.toggle('fa-plus');


    if (offer.classList.contains('inactive')) {
        myOffers.textContent = "MY OFFERS (4 AVAILABLE)";
    } else {
        myOffers.textContent = "50% off shorts, tees & dresses + more";
    }
}
