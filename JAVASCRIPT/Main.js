const navlink = document.querySelector(".links")
const navopen = document.querySelector(".ri-menu-line")
const navclose = document.querySelector(".ri-close-line")

function opennav() {
    navlink.style.top = "6%"
    navopen.style.display = "none"
    navclose.style.display = "block"

}

function closenav() {
    navlink.style.top = "-6%"
    navopen.style.display = "block"
    navclose.style.display = "none"

}