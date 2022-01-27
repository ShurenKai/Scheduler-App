# Interview Scheduler

## Setup

Install dependencies with `npm install`.

Use `npm start` to initialize the app

## View

Once you've done the above, you should see this homepage
![Windows Ver](https://github.com/ShurenKai/boilerplate/blob/master/docs/creation.png?raw=true)
![DaysList](https://github.com/ShurenKai/boilerplate/blob/master/docs/dayslist.png?raw=true)
![Delete confirm window](https://github.com/ShurenKai/boilerplate/blob/master/docs/delete.png?raw=true)
![Post delete confirm](https://github.com/ShurenKai/boilerplate/blob/master/docs/deletedPage.png?raw=true)
![Save without name](https://github.com/ShurenKai/boilerplate/blob/master/docs/denied.png?raw=true)
![Edited state](https://github.com/ShurenKai/boilerplate/blob/master/docs/edited.png?raw=true)
![Edit or Delete](https://github.com/ShurenKai/boilerplate/blob/master/docs/options.png?raw=true)
![Spots remaining](https://github.com/ShurenKai/boilerplate/blob/master/docs/spots.png?raw=true)

### Functional Requirements

- [x] Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
- [x] Data is persisted by the API server using a PostgreSQL database.
- [x] The client application communicates with an API server over HTTP, using the JSON format.
- [x] Jest tests are used through the development of the project.

### Behavioural Requirements

- [x] Interviews can be booked between Monday and Friday.
- [x] A user can switch between weekdays.
- [x] A user can book an interview in an empty appointment slot.
- [x] Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- [x] A user can cancel an existing interview.
- [x] A user can edit the details of an existing interview.
- [x] The list of days informs the user how many slots are available for each day.
- [x] The expected day updates the number of spots available when an interview is booked or canceled.
- [x] A user is presented with a confirmation when they attempt to cancel an interview.
- [x] A user is shown an error if an interview cannot be saved or deleted.
- [x] A user is shown a status indicator while asynchronous operations are in progress.
- [x] When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- [x] The application makes API requests to load and persist data. We do not lose data after a browser refresh.

### Testing dependencies used

- Jest
- Storybook
- Cypress

### Dther dependencies

- "body-parser": "^1.18.3",
- "cors": "^2.8.5",
- "dotenv": "^7.0.0",
- "express": "^4.16.4",
- "helmet": "^3.18.0",
- "pg": "^8.5.0",
- "socket.io": "^2.2.0",
- "ws": "^7.0.0"
