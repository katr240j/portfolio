const knap = document.querySelector("#knap");
const box = document.querySelector("nav");

knap.addEventListener('click', toggle);

function toggle() {
    console.log("toggle");
    box.classList.toggle('toggle');

    let erSkjult = box.classList.contains('toggle');
    if (erSkjult == true) {
        knap.textContent = "☰";
        //hvis der er rigtigt så er der en synlig burgermenu
    } else {
        knap.textContent = "X";
    }

}
