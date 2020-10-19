import { getOfficers, useOfficers } from './OfficerProvider.js'
import {Officer} from './Officer.js'

const officerContainer = document.querySelector (".officerContainer")

export const OfficerList = () => {
    
        getOfficers()
        .then(() => {
            const officerArray = useOfficers()

            let officersHTMLRepresentations = ""
            for (const officer of officerArray) {

                officersHTMLRepresentations += Officer(officer)

                officerContainer.innerHTML = `
                <h3>Glassdale Officers</h3>
                <section class="officerList">
                 ${officersHTMLRepresentations}
                 </section>
                
                `

            }
        })
    



    }    