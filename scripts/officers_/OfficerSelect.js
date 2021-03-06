
import { getOfficers, useOfficers } from "./OfficerProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
console.log("OfficerSelect:Getting reference to container for dropdown")

const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    console.log("OfficerSelect: Get data from API and renders drop down to the DOM")
  
    getOfficers()
      .then(() => {
        const officersArray = useOfficers()
        // console.log("officersArrays", officersArray)
  
        render(officersArray)
      })
  }
  

const render = (officers) => {
    officersFilterContainer.innerHTML = `
          <select class="dropdown" id="officerSelect">
              <option value="0">Please select an officer...</option>
              ${officers.map(
      officerObj => {
          // console.log(officerObj)
        return `<option value="${officerObj.name}">${officerObj.name}</option>`
      }
    ).join("")
      }
          </select>
      `
  }

eventHub.addEventListener("change", (changeEvent) => {
    console.log(changeEvent,"OfficerSelect: Change event happened in the officers dropdown")
    if (changeEvent.target.id === "officerSelect") {
       

        console.log("OfficerSelect: Build custom event for officerSelected")
    const officerSelectedEvent = new CustomEvent("officerSelected", {
        detail: {
            officerName: changeEvent.target.value
        }
 })
    console.log("OfficerSelect: Dispatch officerSelected event to event hub")
    eventHub.dispatchEvent(officerSelectedEvent)
    }
})