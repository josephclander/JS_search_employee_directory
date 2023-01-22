# Employee Directory App

Here I use an API to simulate a searchable employee directory with vanilla JavaScript and the build tool `Gulp`.

## Screenshots

<img width="450" alt="screenshot_1" src="https://user-images.githubusercontent.com/19231569/213936382-5c2b3430-0fac-4a4b-a031-8b2a199f8682.png"><img width="450" alt="screenshot_2" src="https://user-images.githubusercontent.com/19231569/213936395-8029235a-14e0-4ec6-8312-b1cc5fcaa637.png"><img width="450" alt="screenshot_3" src="https://user-images.githubusercontent.com/19231569/213936401-c5df08f8-6c5d-4aa9-a539-89831903b6f4.png">



## The Idea 💭

Awesome Startup is a distributed company with employees working all over the world. They need a smart way to for employees to share contact information with each other. In this project, you’ll use the Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. You’ll request a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

## Client Requirements

1 - Get and display 12 random users from The Random User Generator API

- Using photos and information that the API provides, you’ll display 12 users, along with some basic information:
  - Image
  - First and Last Name
  - Email
  - City

2 - Create a modal window that will pop up when any part of the user’s row is clicked. The following details should display in the modal window:

- Image
- Name
- Email
- Cell Number
- Detailed Address, including street name and number, city, state and post code.
- Birthdate

3 - Structure and style the user directory so that it roughly matches the provide mockup.

- Display the users in a grid or table
- Add a hover state to the rows of the user table.
- Make sure there’s a way to close the modal window

## Extra Credit

1 - Add a way to filter the directory by name or username. To do this, you’ll need to request a random user nationality that will only return data in the English alphabet. Note: you don't have to rely on the API to return search results. You'll need to write functionality that filters results once they already on the page.

2 - Add a way to move back and forth between employee detail windows when the modal window is open.

## Accessing this app

To view the app you need to run `Gulp` to produce the distribution files. Download this repository, make sure you have `gulp` installed globally and install the node modules with `npm install`. Then run `gulp` in the command line.

## Notes from the build

This app was tested on Chrome 86, Safari 14.0.1 and Firefox 84. All requirements, including extra credit, have been implemented.

The site was run on a local server in a Chrome browser during development. Occasionally the fetch request (XMLHttpRequest) would throw up a cross site browser issue. Reloading the page seems to move past this but I am unsure how to prevent it from happening. An error handling message was added to the fetch request telling the user that it couldn't be loaded and to try refreshing the page.

An experiment was run to prevent the 'flashing' effect when loading the modal. A default initial background is added but due to quick loading is unlikely to be seen. If loading is slow due to the server we're collecting the data from, it at least keeps some closer visual similarity but still 'flashes'. A fade in animation was added.

Rather than keep all the data stored on multiple cards hidden from the window, the decision was made to 'pretend' to load data as it was requested. Although a database is not receiving data requests, the aim was to model a more secure environment.

The navigation arrows are complimented by the use of the keyboards arrow keys. If the search facility has been used, the user will only access the employees that remain in the window.

Eventlisteners for both arrow keys and keypresses were limited to only work when the modal is present. There is a concern that there are multiple event listeners being created as the showModal function is called but it can't be verified.
