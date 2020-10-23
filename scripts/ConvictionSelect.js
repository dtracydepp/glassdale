/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionsProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

// Add the event hub container
const eventHub = document.querySelector(".container")
// console.log(eventHub)


export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then(() => {
    const convictions = useConvictions()
    render(convictions)
    })
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                    convictionObj => {
                    return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
                    }
                )
            }
        </select>
    `
}

// Element that will contain the dropdown
eventHub.addEventListener("change", (changeEvent) => {
    console.log(changeEvent.target.value)



// Create new custom event
if (changeEvent.target.id === "crimeSelect") {
const customEvent = new CustomEvent ("crimeSelected",{
    detail: {
        crimeThatWasChosen: parseInt(changeEvent.target.value)
    }
})

// Dispatch the event
eventHub.dispatchEvent(customEvent)
}
})  

