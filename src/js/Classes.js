export class Navbar {

    constructor(item, isOpen, navIndicator) {
        this.nav = document.querySelector(item)
        this.isOpen = isOpen
        this.navIndicator = document.querySelector(navIndicator)
    }
    
    closeNavbar() {
        this.nav.style.transition = "200ms"
        this.nav.style.transform = "translateX(-150%)"
        this.navIndicator.style.transform = "rotate(0deg)"

        this.isOpen = false
    }

    openNavbar() {
        this.nav.style.transition = "300ms"
        this.nav.style.transform = "translateX(0%)"
        this.navIndicator.style.transform = "rotate(90deg)"

        this.isOpen = true
    }

    setNavIndicator() {
        
        this.navIndicator.addEventListener("click", () => {
            if(this.isOpen) {
                this.openNavbar()
                this.isOpen = false
            } else {
                this.closeNavbar()
                this.isOpen = true
            }
        })
    }
}

export class MapSkills {

    constructor(body, skills = [], classes = []) {
        this.skillsBody = document.querySelector(body)
        this.skills = skills
        this.classes = classes
    }
    

    mapSkill() {
        let skill
        console.log("runned")

        this.skills.map(skl => {
            skill = document.createElement("h6")
            skill.textContent = skl

            this.classes.map(styleClass => skill.classList.add(styleClass))
            this.skillsBody.appendChild(skill)
        })
    }
}

