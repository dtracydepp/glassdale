
import { getConvictions, useConvictions } from "./ConvictionsProvider.js"
import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { CriminalList } from "./CriminalList.js"
import { OfficerList } from "./OfficerList.js"
import { getOfficers, useOfficers } from "./OfficerProvider.js"

CriminalList ()
getCriminals()
useCriminals()

OfficerList()
getOfficers()
useOfficers()

getConvictions()
useConvictions()