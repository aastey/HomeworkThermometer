export class Thermometer {
    constructor(scale) {
        this.observers = [];
        this.temperature = 0;
        this.scale = scale; // 'C' for Celsius, 'F' for Fahrenheit
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.notify(this.temperature));
    }
    setTemperature(temperature) {
        if (this.scale === 'F') {
            temperature = this.convertToFahrenheit(temperature);
        }
        this.temperature = temperature;
        this.notifyObservers();
    }
    convertToFahrenheit(celsius) {
        return celsius * 9 / 5 + 32;
    }
}