# AudioLike app

- **Author:** Mohammed Idris (template by Alex Merced)
- **Link to Live Site:** https://midris-project2.herokuapp.com/


## Project Summary
This app allows users to create an account and once logged in, users are able to create, a list of artists/songs and add to a favorites playlist that the users like. Also, users would be able to edit/delete any on there created lists as well.


## Technology Used
1. HTML
2. CSS
3. JavaScript
4. Node.js
5. Express.js
6. EJS
7. MongoDB
8. Mongoose
9. Bulma
10. Materialize


## Models
 - users => String
 - songs => Name => String
            Genre => String
            Title => String
 - artists => String


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

## Future Enhancements
1. Add a favorites(Rating) feature where users can favorite a song they search and create which automatically be added to there favorite playlist.
2. To be able to click on a song as a link to listen to song along with song image.

## Challenges


## Existing Bugs