# Assignment 1 - ReactJS app.

Name: Dylan BP (20099082)

## Overview.

Assignment 1 for Web App Development 2.

The app focuses on data provided by the TMDB API, parses it out, and displays the content back to the user.
The app uses Firebase authentication, and a variety of different types of API calls. The user can query for data regarding a specific movie, or actor, and can filter by genre
or name.

### Features.
 
+ Firebase Authentication
+ Pagination
+ Static endpoints for upcoming, top rated, and currently playing movies
+ Parameterised endpoints for getting the crew, and actor details
+ A "Watchlist" for upcoming movies, which you can add to and delete from

## Setup requirements.

`npm install\n
npm install firebase`

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
