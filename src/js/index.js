// import "../styles/style.css"

const nav = document.querySelector("#nav")
const navIndicator = document.querySelector("#nav-indicator")
let open = false

navIndicator.addEventListener("click", () => {
    if(open) {
        Navbar.closeNavbar()
    } else {
        Navbar.openNavbar()
    }
})

for(let i = 0; i<nav.children.length; i++) {
    nav.children[i].addEventListener("click", () => Navbar.closeNavbar())
}

class Navbar {
    static closeNavbar() {
        nav.style.transition = "300ms"
        nav.style.transform = "translateX(-150%)"
        navIndicator.style.transform = "rotate(0deg)"

        open = false
    }

    static openNavbar() {
        nav.style.transition = "300ms"
        nav.style.transform = "translateX(0%)"
        navIndicator.style.transform = "rotate(90deg)"

        open = true
    }
}
