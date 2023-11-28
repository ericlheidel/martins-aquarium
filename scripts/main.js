import {
    getFish,
    getTips,
    getLocations
        } from "./fish/database.js"

import { 
    FishList,
    holyFishOfThree,
    holyFishOfFive,
    nonHolyFish
        } from "./fish/FishList.js"
import { LocationsList } from "./locations/locationList.js"
import { TipsList } from "./tips/TipList.js"

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const allTips = getTips()

for (const tip of allTips) {
    console.log(tip)
}

const allLocations = getLocations()

for (const fishLocation of allLocations) {
    console.log(fishLocation.location)
}


const listSection = document.querySelector(".fish-section")

listSection.innerHTML = FishList()

const tipsSection = document.querySelector(".tips-section")

tipsSection.innerHTML = TipsList()

const locationsSetcion = document.querySelector(".locations-section")

locationsSetcion.innerHTML = LocationsList()



console.log(holyFishOfThree())
console.log(holyFishOfFive())
console.log(nonHolyFish())