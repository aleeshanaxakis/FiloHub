# FiloHub

## Description
Loneliness among Australians has been described as both as an 'epidemic' and as one of the most pressing public health concerns in Australia (Ending Loneliness Together 2022). Data from the longitudinal Household Income and Labour Dynamics in Australia (HILDA) Survey shows that, consistently from 2001 to 2021, about 1 in 5 Australians agreed with the statement 'I often feel very lonely'.

An increasing number of people aged under 24, especially females, have reported experiencing loneliness since 2015. According to AIHW analysis of the HILDA Survey data, more than 1 in 4 women aged 18–24 agreed with the statement ‘I often feel very lonely’ in 2021, an increase from less than 1 in 5 in 2015.

Filohub is a platform that brings together individuals with similar interests in wellness and various hobbies. 

Users can create and join challenges related to fitness, mental health, as well as various hobbies like reading, cooking, or learning a new skill.

FiloHub helps bring people with shared interests together to increase our sense of community in the modern world.

## User Story
AS A human being with a need for connection
I WANT a platform that allows me to join and create challenges
SO THAT I can share my passions with others.

## Acceptance Criteria
User Registration
GIVEN a functional FiloHub application
WHEN I visit the registration page
THEN I see a form prompting me to enter my username, email, and password
WHEN I submit the registration form
THEN my account is created, and I am redirected to the login page

User Login
GIVEN a registered user
WHEN I visit the login page
THEN I see a form prompting me to enter my username and password
WHEN I submit the login form with correct credentials
THEN I am redirected to the dashboard

Create Challenge
GIVEN a logged-in user on the dashboard
WHEN I click on the "Create Challenge" button
THEN I am presented with a form to enter challenge details including name, description, and category
WHEN I submit the challenge form
THEN the challenge is created, and I am redirected to the challenge details page

View Challenge
GIVEN a logged-in user on the dashboard
WHEN I navigate to the challenges section
THEN I see a list of available challenges with their names and categories
WHEN I click on a challenge from the list
THEN I am directed to the challenge details page

Edit Challenges
GIVEN a logged-in user who created a challenge
WHEN I navigate to the challenge details page
THEN I see an "Edit Challenge" button
WHEN I click on the "Edit Challenge" button
THEN I am presented with a form to update challenge details
WHEN I submit the form
THEN the challenge details are updated

Delete Challenge
GIVEN a logged-in user who created a challenge
WHEN the user navigates to the challenge details page
THEN the user sees an "Edit Challenge" button and a "Delete Challenge" button
WHEN the user clicks on the "Delete Challenge" button
THEN the system prompts the user to confirm their decision
WHEN the user confirms the decision
THEN the system promptly deletes the challenge and navigates the user back to the dashboard
WHEN the user cancels the delete action
THEN the system closes the confirmation prompt without making any changes

Join Challenge
GIVEN a logged-in user on the challenge details page
WHEN I click on the "Join Challenge" button
THEN I am added to the list of participants for that challenge
WHEN I view the challenge participants
THEN I see my username listed among them

Leave Challenge
GIVEN a logged-in user on the challenge details page
WHEN the user clicks on the "Leave Challenge" button
THEN the system prompts the user to confirm their decision
WHEN the user confirms the decision
THEN the system promptly removes the user from the challenge participants list and updates the UI accordingly
WHEN the user cancels the leave action
THEN the system closes the confirmation prompt without making any changes

Logout
GIVEN a logged-in user
WHEN I click on the "Logout" button
THEN I am logged out and redirected to the login page

## Installation
Deployed via Render:

## License
MIT License

Copyright (c) 2023 Aleesha Naxakis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
