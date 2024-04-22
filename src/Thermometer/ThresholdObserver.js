import {Observer} from "./Observer.js";

export class ThresholdObserver extends Observer {
    constructor(threshold, direction, consecutiveThresholdCount, detectTrendChange) {
        super(threshold, direction, consecutiveThresholdCount, detectTrendChange);
    }
    notify(temperature) {
        if (this.detectTrendChange && this.previousTemperature !== null) {
            // Check if temperature was above threshold and now below
            if ((this.direction === "up" && this.previousTemperature >= this.threshold && temperature < this.threshold) ||
                (this.direction === "down" && this.previousTemperature <= this.threshold && temperature > this.threshold)) {
                console.log(`Temperature trend changed: ${this.previousTemperature} ${this.direction === "up" ? "above" : "below"} ${this.threshold}`);
            }
        }
        if ((this.direction === "up" && temperature >= this.threshold) ||
            (this.direction === "down" && temperature <= this.threshold)) {
            // check if trend of temperatures was in established direction before passing threshold
            this.consecutiveCount++;
            if (this.consecutiveCount >= this.consecutiveThresholdCount) {
                console.log(`Threshold of ${this.threshold} ${this.direction === "up" ? "exceeded" : "reached"}: ${temperature}`);
                this.consecutiveCount = 0; // Reset consecutive count after alerting
            }
        } else {
            this.consecutiveCount = 0; // Reset consecutive count if threshold condition is not met
        }
        this.previousTemperature = temperature;
    }
}