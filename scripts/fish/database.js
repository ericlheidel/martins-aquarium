const database = {
    fish: [
        {
            name: "Clownfish",
            species: "Orange",
            length: "3",
            location: "California",
            diet: "barnacles",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/1920px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg"
        },
        {
            name: "Jon Fishman",
            species: "Drummer",
            length: "10",
            location: "Vermont",
            diet: "sandwiches",
            image: "https://i.ytimg.com/vi/PdblFwmg9Q4/maxresdefault.jpg"
        },
        {
            name: "Billy Bass",
            species: "Anamatronic",
            length: "5",
            location: "Texas",
            diet: "batteries",
            image: "https://images.craigslist.org/00a0a_b01i6Q6JzB2_0CI0t2_600x450.jpg"
        },
        {
            name: "Goldfish",
            species: "Gold",
            length: "6",
            location: "Fishbowl",
            diet: "Fish food",
            image: "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSFioPxAhwKJt3zlIkV4Q5Th0gkb5-428cZd0uPEjWoYn9Xkoi_L4C8kWaFu-KtqAvz"
        },
        {
            name: "Koi Fish",
            species: "Colorful",
            length: "19",
            location: "Japan",
            diet: "Sushi",
            image: "https://image.petmd.com/files/styles/863x625/public/2022-09/koi.fish_.jpg"
        }

    ],
    tips: [
        {
            name: "Clean your tank",
            type: "cleaning",
            time: "daily",
            aquarium: "large",
        },
        {
            name: "Always leave a note!",
            type: "helping",
            time: "always",
            aquarium: "all",
        },
        {
            name: "Filter your water",
            type: "cleaning",
            time: "weekly",
            aquarium: "small",
        },
        {   name: "Feed your fish",
            type: "helping",
            time: "daily",
            aquarium: "all",
        },
        {
            name: "Check the filter and the lights",
            type: "maintenance",
            time: "biweekly",
            aquarium: "all",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.fish.map(fish => ({...fish}))
}