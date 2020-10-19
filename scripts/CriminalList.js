import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import {Criminal} from './Criminal.js'

const criminalsContainer = document.querySelector (".criminalsContainer")

export const CriminalList = () => {
    
        getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

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
        })
    



    }    
        /*
            Now that you have the data, what
            component should be rendered?
        */

