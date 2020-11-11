import { getCriminals, useCriminals } from "../criminals_/CriminalDataProvider.js"
import {getFacilities, useFacilities} from "../facilities_/FacilityProvider.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facilities_/CriminalFacilityProvider.js"
import { Criminal } from "../criminals_/Criminal.js"
import { useConvictions } from "../convictions_/ConvictionsProvider.js"

const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}


// export const CriminalList = () => {

//     getCriminals()
//         .then(() => {
//             const criminalArray = useCriminals()

//             render(criminalArray)
//         })
// }

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


const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    criminalsContainer.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}


// const render = (criminalArray) => {
//     let criminalsHTMLRepresentations = ""
//     for (const criminal of criminalArray) {

//         criminalsHTMLRepresentations += Criminal(criminal)

//         criminalsContainer.innerHTML = `
//         <h3>Glassdale Criminals</h3>
//         <section class="criminalsList">
//          ${criminalsHTMLRepresentations}
//          </section>
        
//         `

//     }
// }

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

