const departureCities = [
    "Paris", 
    "Philadelphia", 
    "Boston", 
    "Portland", 
    "San Diego", 
    "Mexico City", 
    "São Paolo"
];

const destinationCities = [
    "Buenos Aires", 
    "Rome", 
    "London", 
    "Berlin", 
    "New York", 
    "Dublin", 
    "Cairo"
];

function getRandomCity(cityList) {
    const randomIndex = Math.floor(Math.random() * cityList.length);
    return cityList[randomIndex];
}

export function getRandomCities() {
    const departureCity = getRandomCity(departureCities);
    const destinationCity = getRandomCity(destinationCities);
    return {
        departureCity,
        destinationCity
    };
}
