const knap = document.querySelector('#knap');
const box = document.querySelector('nav');

knap.addEventListener('click', toggle);

function toggle() {
    console.log("toggle");
    box.classList.toggle('toggle');



}
