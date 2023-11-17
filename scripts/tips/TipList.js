import { getTips } from "../fish/database.js";

export const TipsList = () => {

    const tips = getTips()

    let htmlString = '<article class="tipsList">'

    for (const tip of tips) {
        htmlString += `<section class="tip-card"
        <div class="tip__name">${tip.name}</div>
        <div class="tip__type">${tip.type}</div>
        <div class="tip__time">${tip.time}</div>
        <div class="tip__aquarium">${tip.aquarium}</div>
    </section>
    
    `
    }
    htmlString += "</article>"

    return htmlString
}