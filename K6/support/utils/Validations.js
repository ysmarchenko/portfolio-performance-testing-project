import http from "k6/http";
import { check } from "k6";
import { STATIC_ASSETS } from "@test-plans/Endpoints";

export function checkStaticAssets() {
    const assets = [
        { url: STATIC_ASSETS.CSS.MAIN_CSS, name: "Main CSS" },
        { url: STATIC_ASSETS.CSS.TABLE_CSS, name: "Table CSS" },
        { url: STATIC_ASSETS.JS.MAIN_JS, name: "Main JS" },
        { url: STATIC_ASSETS.JS.TABLE_JS, name: "Table JS" },
        { url: STATIC_ASSETS.FAVICON, name: "Favicon" },
    ];

    assets.forEach(asset => {
        let res = http.get(asset.url);
        check(res, {
            [`${asset.name} is loaded correctly`]: (r) => r.status === 200,
        });
    });
}

export function validateResponse(res, expectedText) {
    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time is acceptable": (r) => r.timings.duration < 1000,
        "content type is HTML": (r) => r.headers["Content-Type"] === "text/html; charset=UTF-8",
        "response body is not empty": (r) => r.body.length > 0,
    });

    if (expectedText) {
        check(res, {
            "contains expected text": (r) => r.body.includes(expectedText),
        });
    }
}
