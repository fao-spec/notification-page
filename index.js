let rightSection = document.getElementById("right-section")
let numberEl = document.getElementById("number-el")
let unreadEl = document.getElementsByClassName("unread-el").textContent = 3
let readEl = document.getElementsByClassName("read-el")
// innerHtml upgrade= textContent
function read() {
    rightSection.textContent = "Read"
    numberEl.textContent = 0
    document.getElementsByClassName("unread-el")[0].style.background = "white"
    document.getElementsByClassName("unread-el")[1].style.background = "white"
    document.getElementsByClassName("unread-el")[2].style.background = "white"
}