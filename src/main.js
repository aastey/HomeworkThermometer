import {Thermometer} from "./Thermometer/Thermometer.js";
import {ThresholdObserver} from "./Thermometer/ThresholdObserver.js";

// User creates a thermometer class with a specified scale type
// 'C' for Celsius, 'F' for Fahrenheit
const thermometer = new Thermometer('C');

// User then can subscribe to specific notifications based on the following
// Whether they are interested in boiling or freezing
// The threshold of boiling or freezing
// The direction the data is going
// the number of consecutive temps that must pass that threshold before notification
// Whether this is a change in trend direction

// Example where a user wants to set the boilingPoint at 100,
// the trend as 'up', the consecutive temps at 1, and a trend detection
const boilingObserver = new ThresholdObserver(100, "up", 1, true);
thermometer.addObserver(boilingObserver);

// Example where a user wants to set the freezing threshold at 0, the trend direction
// as 'down' and the consecutive temps at 3
const freezingObserver = new ThresholdObserver(0, "down", 2, false);
thermometer.addObserver(freezingObserver);


// Simulate temperature readings
const temperatureReadings = [101, 102, 98, 87, 72, 99, 100, 99, 98, 0, -1, -2, -3, -5];

// Actually running the readings
temperatureReadings.forEach(temperature => {
    thermometer.setTemperature(temperature);
});