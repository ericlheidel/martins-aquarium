// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {
        
        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
    }
    htmlString += `</article>`

    return htmlString
}

// function for length multiple of 3
export const holyFishOfThree = () => {
    
    const fishes = getFish()

    const threesArray = []
    
    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            threesArray.push(fish)
        }    
    }
    return threesArray
}
// function for length multiple of 5
export const holyFishOfFive = () => {

    const fishes = getFish()

    const fivesArray = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            fivesArray.push(fish)
        }
    }
    return fivesArray
}

// function for length multiple of not 3 or 5
export const nonHolyFish = () => {

    const fishes = getFish()

    const nonHolyArray = []

    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            nonHolyArray.push(fish)
        }
    }
    return nonHolyArray
}