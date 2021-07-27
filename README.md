# Doggy Data

## Assumptions
* The user flow is chronological from screen 1 - 4.
* That the screens 1-4 are for onboarding
* Screen 5 is a profile page for returning users
* Storing persistent data in the browser is fine for now however will need to be replaced with a database solution in the future

## Objective
My initial objective were to satisfy the requirements and create a user profile page that included a `DogProfile` and `HistoryLog` so a user can track their dogs habits, health, and behavior over time. However, just as in the real world, time is always against us. 


## Choices
* Architecture/codebase design
* Scalable functional code. 
* DesignSystem focus
* Frontend storage

## Tradeoffs
* Less features
* Less responsive

## Thought process 
Balance time and quality with my own bias leaning slightly more towards quality.

1. Use local storage instead of setting up a server
2. Wrap 3rd party components to mitigate against future changes
3. Clean-ish style of architecture with event driven patterns


## Limitations
* Using Redux and Material UI components
* Time
* UX and Responsive design patterns