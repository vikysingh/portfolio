import "../styles/style.css"
import data from "./data.json"
import { Navbar, MapSkills } from "./Classes"

let navbar = new Navbar("#nav", false, "#nav-indicator")
let skills = new MapSkills(".skills_body", data.skills, data.classes)

let socialBar = document.querySelector("#social-icons-bar")
let headerTitle = document.querySelector("#header-title")
let navIndicator = navbar.navIndicator
let homeContent = document.querySelector("#home")
let footer = document.querySelector("footer")

let headerTimeline = gsap.timeline()

export default function App() {
    headerTimeline
    .to(headerTitle, {
        duration: 2,
        display: 'block',
        transform: 'scale(1)',
    })
    .to(headerTitle, {
        marginTop: '-50px'
    })
    .to(navIndicator, {
        left: '35px',
        duration: 1,
        delay: -0.5
    }, '-=1')
    .to(socialBar, {
        right: '5%',
        duration: 1,
        delay: -0.5
    })
    .to(homeContent, {
        display: "block"
    })
    .to(footer, {
        display: "flex"
    })

    navbar.setNavIndicator()

    for(let i = 0; i<navbar.nav.children.length; i++) {
        navbar.nav.children[i].addEventListener("click", () => navbar.closeNavbar())
    }

    skills.mapSkill()
}