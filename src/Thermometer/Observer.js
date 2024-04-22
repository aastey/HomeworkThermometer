export class Observer {
    constructor(threshold, direction, consecutiveThresholdCount, detectTrendChange) {

        // establishing the various elements we wish to pay attention to
        this.threshold = threshold;
        this.direction = direction;
        this.consecutiveThresholdCount = consecutiveThresholdCount;
        this.detectTrendChange = detectTrendChange;
        this.consecutiveCount = 0;
        this.previousTemperature = null;
    }
    notify(temperature) {}
}