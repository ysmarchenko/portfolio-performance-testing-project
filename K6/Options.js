export const options = {
    stages: [
        { duration: "10s", target: 10 },
        { duration: "50s", target: 10 },
    ],
    thresholds: {
        "http_req_duration": ["p(95)<1000"],
    },
};
