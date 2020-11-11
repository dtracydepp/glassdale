const contentTarget = document.querySelector(".facility__button")

export const DisplayFacilitiesButton = () => {

    contentTarget.innerHTML = `
      <button id="display-facilities-button">Facilities</button>
      `
  }