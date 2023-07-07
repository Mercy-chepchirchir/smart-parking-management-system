# smart-parking-management-system
This website allows booking of your preferred parking lot prior to arrival.

## Table of content
* Description 
* Installation requirement
* Technology used
* Licence
* Authors info

# DESCRIPTION
## index.html
Add `h1 `to display the header that is welcome to smart parking management system.Create the button home,about,register and login.Add a dropdown to the home button to display parking lots,parking details and parking time
## Index.css
Used it to syle the film list, image and menu.

## Index.js 
First fetch this `http://localhost:3000/parkingLots`at then make the db.json file into an object which will return the parking lots. Then add an eventlistener to my parking details so that when clicked it display the park lot name and its details.

Added a table for each parking lot that has its name ,opening hours,fees and the available space.Create a book now button and added an event listener to it so when clicked it book and sends an alert to the user.After booking it reduces the available space by one.

# INSTALLATION PROCESS
## Frontend
* Create your folder using the command `git clone your ssh or https keys`
* Navigate to the code challenge directory using `cd smart-parking-management-system `
* copy the path to `index.html` and open it in the browser on a new tab


## Backend
* Install the json-server using the command `npm install -g json-server`
* To get backend started run this command `json-server --watch db.json`
* Test your server by visting this route in the browser `http://localhost:3000/parkingLots`

# TECHNOLOGY USED
Html
css
Javascript


# LICENSE
MIT license

# AUTHORS INFO
Mercy Chepchirchir

