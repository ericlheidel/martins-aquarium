import { getLocations } from "../fish/database.js";

export const LocationsList = () => {

    const locations = getLocations()

    let htmlString = '<article class="locations-section">'

    for (const location of locations) {
        htmlString += `<section class="tip-card"
        <div class="tip__name">${location.location}</div>
    </section>
    
    `
    }
    htmlString += "</article>"

    return htmlString
}