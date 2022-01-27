# Interview Scheduler

Edited code by Cassie/Ren Chen

## Setup

Install dependencies with `npm install`.

Use `npm start` to initialize the app

## View

Once you've done the above, you should see this homepage
![Opened Scheduler](https://github.com/ShurenKai/boilerplate/blob/master/docs/openedPage.png?raw=true)

To see any appointments, you'd want to select anything on the side by clicking a day!
![DaysList](https://github.com/ShurenKai/boilerplate/blob/master/docs/dayslist.png?raw=true)

Say, for instance, we selected Monday. We will be given a list of already created appointments or buttons we can use to make new ones
![Monday view](https://github.com/ShurenKai/boilerplate/blob/master/docs/monday.png?raw=true)

Once we press one of the + buttons, we are given a nice little window that gives you an option to choose an interviewer as well as an input form to enter your name.
Now, if you don't input a name, you'll get this nice little error message. This will go away once you input a name and press save
![Save without name](https://github.com/ShurenKai/boilerplate/blob/master/docs/denied.png?raw=true)
![Enter a name](https://github.com/ShurenKai/boilerplate/blob/master/docs/editing.png?raw=true)

So now I have an appointment with my name on it! But you'll also see that the spots remaining has changed to reference our changes to the day's appointments
![Windows Ver](https://github.com/ShurenKai/boilerplate/blob/master/docs/creation.png?raw=true)

Now if you hover over an appointment, you'd see (in the righthand bottom corner) some options of what you can do with the edit button
![Edit or Delete](https://github.com/ShurenKai/boilerplate/blob/master/docs/options.png?raw=true)

Lets say I wanted to delete an appointment and pressed the little trash can button, we would get to a confirmation message, asking if this is what we want
![Delete confirm window](https://github.com/ShurenKai/boilerplate/blob/master/docs/delete.png?raw=true)

If yes, then we're back to having 2 spots remaining on Monday
![Post delete confirm](https://github.com/ShurenKai/boilerplate/blob/master/docs/deletedPage.png?raw=true)
![Edited state](https://github.com/ShurenKai/boilerplate/blob/master/docs/edited.png?raw=true)

But if I edited an appointment instead of creating and destroying a new one, I can just edit one to be a different name instead. it would be the same as the creation form that we opened earlier, only I can change the name and interviewers as I please - like if I wanted to edit all the names of the interviews, I would be free to do so. All the functionalities are listed below!

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

### Other dependencies

- "body-parser": "^1.18.3",
- "cors": "^2.8.5",
- "dotenv": "^7.0.0",
- "express": "^4.16.4",
- "helmet": "^3.18.0",
- "pg": "^8.5.0",
- "socket.io": "^2.2.0",
- "ws": "^7.0.0"
