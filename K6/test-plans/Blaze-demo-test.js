import http from "k6/http";
import { group } from "k6";
import { ENDPOINTS } from "../support/data/Endpoints.js";
import { validateResponse, checkStaticAssets } from "../support/utils/Validations.js";
import { getRandomCities } from "../support/data/Cities.js";
import { options } from "../Options.js"

export { options };

export default function () {
    group("Main Page - GET Request", () => {
        let res = http.get(ENDPOINTS.HOME);
        validateResponse(res, "Welcome to the Simple Travel Agency!");
        checkStaticAssets();
    });

    group("Reserve Page - POST Request", () => {
        const { departureCity, destinationCity } = getRandomCities();
        let data = {
            fromPort: departureCity,
            toPort: destinationCity,
        };

        let postRes = http.post(ENDPOINTS.RESERVE, data);
        validateResponse(postRes, `Flights from ${departureCity} to ${destinationCity}:`);
        checkStaticAssets();
    });
};
