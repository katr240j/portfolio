//Når siden er loaded
window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");


    document.querySelector("#box_1").classList = "box pattern";

}

const knap = document.querySelector('#knap');
const box = document.querySelector('nav');

knap.addEventListener('click', toggle);

function toggle() {
    console.log("toggle");
    box.classList.toggle('toggle');
    document.querySelector("#box_1").classList = "paused forsvind";
}
