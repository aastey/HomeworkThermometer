# Thermometer
Coding challenge using JS classes

I used the Observer pattern with javascript classses to solve this problem because it provides a flexible and scalable solution for managing temperature alerts based on different criteria. 

The observer pattern allows for decoupling between the thermometer and the various temperature observers. The thermometer does not need to know about the specific observers or their logic for handling temperature alerts. 

Additionally, we can easily add or remove temperature observers without modifying the thermometer class. New types of observers can be introduced to monitor different temperature thresholds or conditions without impacting existing code.

As the system grows, new observers can be added to handle additional temperature thresholds or conditions without affecting the existing codebase.
