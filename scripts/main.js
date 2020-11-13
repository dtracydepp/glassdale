
import { ConvictionSelect } from "./convictions_/ConvictionSelect.js"
// import { getConvictions, useConvictions } from "./ConvictionsProvider.js"
// import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { CriminalList } from "./criminals_/CriminalList.js"
import { getCriminalFacilities, useCriminalFacilities } from "./facilities_/CriminalFacilityProvider.js"
import { getFacilities } from "./facilities_/FacilityProvider.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"
import { OfficerList } from "./officers_/OfficerList.js"
// import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { OfficerSelect } from "./officers_/OfficerSelect.js"
import {DisplayFacilitiesButton} from "./facilities_/FacilitiesButton.js"
import "./criminals_/AlibiList.js"
import {ablibiEventListener} from "./criminals_/AlibiList.js"

NoteForm()
CriminalList ()
OfficerList()
ConvictionSelect()
OfficerSelect()
NoteList()
getCriminalFacilities()
useCriminalFacilities()
getFacilities()
DisplayFacilitiesButton()
ablibiEventListener()
