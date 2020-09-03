import "../styles/style.css"
import data from "./data.json"
import { Navbar, MapSkills } from "./Classes"

let navbar = new Navbar("#nav", false, "#nav-indicator")
let skills = new MapSkills(".skills_body", data.skills, data.classes)


export default function App() {
    navbar.setNavIndicator()

    for(let i = 0; i<navbar.nav.children.length; i++) {
        navbar.nav.children[i].addEventListener("click", () => navbar.closeNavbar())
    }

    skills.mapSkill()
}