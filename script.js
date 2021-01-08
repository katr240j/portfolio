//Når siden er loaded
window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

}

const knap = document.querySelector('#knap');
const box = document.querySelector('nav');
const box_1 = document.querySelector('#box_1');

knap.addEventListener('click', toggle);

function toggle() {
    console.log("toggle");
    box.classList.toggle('toggle');

    box_1.classList = "paused forsvind";
    /*
        if (box_1.classlist.contains('paused')) {
            console.log("er pasad")
            // document.querySelector("#box_1").classListRemove = "paused forsvind";
        } else
            console.log("ekki pasad")
        // document.querySelector("#box_1").classList = "paused forsvind";
    */

}
