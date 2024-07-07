const imgEls = document.querySelectorAll(".rating");
const ratingNumber = imgEls.length;

imgEls.forEach(el => {
    el.addEventListener('click', (event) => handleEvent(event.target.id));
});

const handleEvent = (elementid) => {
   const selectedRatingNo = +elementid.split("-")[1];
   for (let i = 0; i < ratingNumber; i++) {
       const imgEl = document.getElementById('rating-' + (i + 1));
       imgEl.setAttribute('src', "assets/white.png");
   }
   for (let i = 0; i < selectedRatingNo; i++) {
    const imgEl = document.getElementById('rating-' + (i + 1));
    imgEl.setAttribute('src', "assets/yellow_icon.png");
}
}