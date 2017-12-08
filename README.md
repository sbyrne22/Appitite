# Appitite
A recipe log app

# Built With
### Languages
- HTML, CSS, Javascript, and jQuery
### Text Editor
- Atom

# My Process--
I started by setting up my server.js file with all the necessary variables, routes, and app.use methods. Then I set up my controllers with all the necessary routes. After that I set up my recipes and users model. Then I decided to implement the login and register functionality. I then made sure all the necessary views were accessible. Then I went about implementing the functionality for creating, deleting, and updating recipes. After that I added a temporary route that would allow me to see all the users and delete them. I then started styling the app. In the process of styling the app I realized that it was unnecessary for users to be directed to another page to create and update any recipes they created and therefore I decided to put the create and edit forms inside models. I first made the create recipe model, which was pretty straight forward. I gave the open button, close button, and the model itself unique ids, and accessed those ids in my models.js file to make the model logic. To make the edit models I had the dynamically make a model, an open button, and close button for each recipe and they all had to have unique ids. I then accessed those ids within a for loop in the models.js file to dynamically create the logic for each model. After fixes some bugs with how the instructions were displaying in the edit form, I finished the styling of the app, and therefore my app was finished.

# In The Future--
In the future I would love to add the ability for the users to make recipe books where they can add their own recipes as well as other users' recipes to. I would also like to add the ability to have users search for recipes via a search bar. I would like to add a rating system. I would also like to add categories which recipes can be organized and searched by. I would also like for the user when editing and creating a recipe to be able to hit a plus button or enter a number for how many steps of instructions they would like, and then that many input fields would appear for entering instructions.

# Author
- Sean Byrne

# Link to Live Site
- https://appitite.herokuapp.com/recipes

# Link to Github
- https://github.com/sbyrne22/Appitite
