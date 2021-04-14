# AudioLike

- **Author:** Mohammed Idris (template by Alex Merced)
- **Link to Live Site:** https://midris-project2.herokuapp.com/


## Project Summary
This appp allows users to create an account and once logged in, users are able to create,  a list of songs that the users like. Which they would also be bale to delete any on the list as well.


## Technology Used
HTML, CSS, JavaScript, Node.js, Express.js, EJS, MongoDB, Mongoose


## Models
 - users => String
 - songs => Name => String
            Genre => String
            Title => String
 - Rating(Likes) => number
 - 


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/songs" | List all songs (song/index.ejs) |
|GET| "/song/:id | Display single song (song/show.ejs)|
|GET| "/song/new | Render form for New Song (song/new.ejs)|
|POST| "/song" | Uses Form Submission to Create new Song |
|GET| "/song/:id/edit" | Render form to edit Song (sample/edit.ejs)|
|PUT| "/song/:id" | Uses Form Submission to edit Song |
|DELETE| "/song/:id" | Delete a particular Song |


## Challenges


## Existing Bugs