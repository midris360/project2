# AudioLike

- **Author:** Mohammed Idris (template by Alex Merced)
- **Link to Live Site:** 


## Project Summary
This appp allows users to create an account and once logged in, users are able to create,  a list of songs that the users like. Which they would also be bale to delete any on the list as well.


## Technology Used
HTML, CSS, JavaScript, Node.js, Express.js


## Models
 - user => String
 - age => number


## Route Map

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/sample" | List all Samples (sample/index.ejs) |
|GET| "/sample/:id | Display single Sample (sample/show.ejs)|
|GET| "/sample/new | Render form for New Sample (sample/new.ejs)|
|POST| "/sample" | Uses Form Submission to Create new Sample |
|GET| "/sample/:id/edit" | Render form to edit Sample (sample/edit.ejs)|
|PUT| "/sample/:id" | Uses Form Submission to edit Sample |
|DELETE| "/sample/:id" | Delete a particular Sample |


## Challenges


## Existing Bugs