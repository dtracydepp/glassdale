// Get alibis for each criminal and show in a list.

import {useCriminals} from "./CriminalDataProvider.js"

const eventHub = document.querySelector(".container")

// 
export const ablibiEventListener = () => {
eventHub.addEventListener("showAssociatesButtonClicked", (eventObj) => {
 console.log("Hey I'm listening!", eventObj.detail.criminalId)
 const arrayofCriminals = useCriminals()

    const foundCriminal = arrayofCriminals.find((criminalObj) => {
    return criminalObj.id === parseInt(eventObj.detail.criminalId)
    
})

    console.log("Found the criminal", foundCriminal)

    AlibiList(foundCriminal)

})
    const AlibiList = (criminalObj) => {
        render(criminalObj)
    }

}

const render = (criminalObj) => {
    const contentTarget = document.querySelector(".alibi__list")
    contentTarget.innerHTML = `<h3>Alibi List</h3>` 
    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
        return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
    }).join("")}
    </div>
    `
}