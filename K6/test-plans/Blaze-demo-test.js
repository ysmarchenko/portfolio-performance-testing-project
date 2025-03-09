import http from "k6/http";
import { group } from "k6";
import { ENDPOINTS } from "@data/Endpoints";
import { getRandomCities } from "@data/Cities";
import { checkStaticAssets, validateResponse } from "@utils/Validations";
import { options } from "K6/Options.js";

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
