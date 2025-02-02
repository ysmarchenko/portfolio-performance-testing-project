# JMeter Load Test for BlazeDemo

This repository contains a JMeter test plan designed to simulate load and performance testing for the BlazeDemo website. The test plan performs various HTTP requests and assertions to evaluate the response time and correctness of the application.

## Test Plan Overview

The test plan consists of the following main parts:

1. **Thread Group**: Simulates 10/100/1000 users performing the same operations with a ramp-up time of 1 second.
2. **HTTP Requests**: Several POST requests that simulate searching for tickets, selecting a flight, and confirming a booking.
3. **Assertions**: Response code and content assertions to verify the correctness of the server's response.
4. **Results Collection**: Collects detailed test results, including response times, latency, and success status.

## Requirements

- [Apache JMeter](https://jmeter.apache.org/) 5.6.3 or later
- Java 8 or later

## How to Run

1. Download and install [Apache JMeter](https://jmeter.apache.org/).
2. Clone this repository to your local machine.
3. Open the `LoadTestBlazeDemo-${NUMBER_OF_THREADS}-users.jmx` file in JMeter.
4. Run the test plan by clicking on the **Start** button in JMeter.
5. View the results in the **View Results Tree** and **Table** listeners.

## Test Plan Structure

The test plan includes the following:

- **Thread Group**: Configures the number of threads (users) and ramp-up time.
- **HTTP Request Samplers**: Sends HTTP requests to the BlazeDemo website (searching, selecting flights, and booking tickets).
- **Assertions**: Ensures that the response codes and content are correct.
- **Result Collectors**: Saves test results for further analysis.

## License

```
MIT License

Copyright (c) 2025 Yevhenii Marchenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```