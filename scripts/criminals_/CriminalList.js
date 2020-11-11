import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from './ConvictionsProvider.js'

const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            render(criminalArray)
        })
}

eventHub.addEventListener("crimeSelected", event => {
    console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)

    if (event.detail.crimeThatWasChosen !== 0) {


        const criminalArray = useCriminals()
        console.log("array of criminals", criminalArray)

        const convictionsArray = useConvictions()
        console.log("array of convictions", convictionsArray)

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {

            return convictionObj.id === event.detail.crimeThatWasChosen

        })
        console.log("convicitionThatWasChosen", convictionThatWasChosen)

        // Filter
        const filteredCriminalArray = criminalArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })
        console.log("filteredCriminalArray", filteredCriminalArray)

        render(filteredCriminalArray)

    } else {
        const criminalArray = useCriminals()
        render(criminalArray)
    }
})

// render to the DOM




const render = (criminalArray) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalArray) {

        criminalsHTMLRepresentations += Criminal(criminal)

        criminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalsList">
         ${criminalsHTMLRepresentations}
         </section>
        
        `

    }
}

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName
    console.log("CriminalList: officersSelected custom event has been heard", selectedOfficerName)

    const criminalArray = useCriminals()
    console.log("criminalArray", criminalArray)

    const filteredArrayCriminals = criminalArray.filter(
      (criminalObj) => {
          if (criminalObj.arrestingOfficer === selectedOfficerName) {
              return true
          }
          return false
      })
  
    console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer",filteredArrayCriminals)

    render(filteredArrayCriminals)
    console.log("CriminalList:Filtered list of criminals rendered to DOM")
})