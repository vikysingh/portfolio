const parentClasses = [ "progetti_card", " m-lg-3", "m-md-2", "m-xs-4" ]

export default function ProjectCard(githubUrl, webUrl) {
    let parent = document.createElement("div")
    
    parentClasses.map(each => parent.classList.add(each))

    parent.innerHTML = `<div class="progetti_card_body w-100 h-100 d-flex justify-content-center align-items-center">
                    <a href="${githubUrl}" target="_blank" class="text-dark mx-3">
                        <svg id="progetti-code-icon" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                        </svg>
                    </a>

                    <a href="${webUrl}" target="_blank" class="text-dark mx-3">
                        <svg id="progetti-view-icon" viewBox="0 0 16 16" class="bi bi-eye-fill " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                </a>
            </div>`
    
}