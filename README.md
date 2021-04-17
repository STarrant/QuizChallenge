# Quiz Challenge : Trivia Game for all Ages

* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz.

* Website mockup image to be added testhigh

## Contents

---

* UX
  * Project Goals
    * User Goals
    * User Stories
    * Site Owner Goals
    * User Requirements and Expectations
    * Design Choices
      * Fonts
        * Icons
        * Colours
* Technologies
* Features
  * Features that have been developed
    * Features that will be implemented in the future
* Testing
* Bugs
* Deployment
* Credit

## UX (User Experience)

---

### Project Goals

* The goal of this project is to create a simple, fun quiz game that is intuitive to use and draws on an 
external trivia database to maintain a user's interest by continually providing new questions.

### User Goals

* Intuitive interface that allows the first game to start with a single click.
* Further options available for changing the number of questions, selecting different quiz topics are available.
* Simple button interface for multiple choice answer selection.
* Score kept for each game so progress is always visible.

### User Stories

* As a **user**, I want to see a simple, fun and intuitive layout.
* As a **user**, I want to be able to start my first game with a single click to see if I like this game.
* As a **user**, I want to see my current score so I can keep track of how I'm doing.
* As a **user**, I want to be challenged with different questions every time I play this game.
* As a **user**, I may want to see who developed this game to contact them with suggestions or business proposals.

### Site Owner Goals

* As a **site-owner**, I want to make an attractive and simple interface so that people will want to play this game.
* As a **site-owner**, I want to have a varying set of trivia questions to create longer playing periods and return traffic to the site.
* As a **site-owner**, I want to have a options available to players to create a sense of customisibility to avoid player fatigue.

### User Requirements and Expectations

#### Requirements

* Simple single-page interface with navbar normally as a burger icon collapsed.
* Fast loading times are imperative to avoid a user leaving the page due to lag.
* Contact form for users to send requests, suggestions or trivia questions.

#### Expectations

* Content is visually satisfying and exciting.
* Game automatically cycles from start page, through questions to final score without glitching or issues.
* 

### Design Choices

---
_________________________________________________

#### Fonts

_____________________________________________________

#### Icons

__________________________________________________________

#### Colors

The website colors were chosen using [coolors.co](https://coolors.co/).

## Wireframing

Wireframing was done using Balsamiq under full-functional trial provided by Code Institute.
Wireframes were developed for a ___________________________________________

---

## Features

---
**Features** that have been **implemented:**

* _____________________________________________________

**Features** that will be **implemented** in the **future:**

* _________________________________________________

## Technologies Used

---

### Languages

* HTML
* CSS
* JavaScript

### Tools & Libraries

* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font-Awesome](https://fontawesome.com/icons?d=gallery)
* [Popper](https://popper.js.org/)
* [JQuery](https://jquery.com/)
* [Google fonts](https://fonts.google.com/)
* [Markdownlint](https://dlaa.me/markdownlint/)

## Testing

---

### HTML Test

HTML code has been tested using the [HTML Validator](https://validator.w3.org/) and gave the following errors:

#### HTML Test Errors

* ___________________________________________
```

#### HTML Test Fixes

* ______________________________________________________

### CSS Test

CSS code has been tested using the [CSS validator](http://jigsaw.w3.org/css-validator/) and gave the following errors and warnings.

#### CSS Test Errors

 ______________________________________________________

#### CSS Test Warnings

``` css
    _______________________________________________________
```

#### CSS Test Fixes

* ___________________________________________________________

### Responsiveness

* ______________________________________________________________________________________________________________________

<details>
  <summary>Responsiveness of the design was tested using Chrome's Developer Tools and the result overall was a xxxxxxxxxxxxxx  **PASS**   xxxxxxxxxxxxx. Open the dropdown here to see screenshots of the results.</summary>

#### Summary of responsive design tests

* Full Screen 24” Browser Window – Google Chrome – No Issues - **PASS**
  * Result: ![Responsive test Fullscreen](wireframes/ace-responsive-fullscreen.jpg)
  * ______________________________________________________________________________________________________________________

</details>

### Design

* ___________________________________________________________

### Contact form

* ___________________________________________________________

### User Stories

<details>
  <summary>User stories were tested using Google Chrome and developer tools. The only item of note which could be described as noteable sub-par would be the loading speed which needs improvement. Click dropdown to see individual tests.</summary>
  
#### Summary of user tests

* Test: As a **user**, I want to see all the main services this company can offer at a glance so that in a single scroll of the homepage, I know exactly what this company has to offer.
  * Result: ![User test image 1](wireframes/ace-user-story-1.jpg)
  * Test: As a **user**, I want **fast loading-times** for pages.
  * Result: ![User test image 2](wireframes/ace-user-story-2.jpg)
  * Test: As a **user**, I want a **simple and well laid-out** website that gives the impression of these complex topics being made simple.
  * Result: ![User test image 3](wireframes/ace-user-story-3.jpg)
  * Test: As a **user**, I want to see **modern design** to show that the site owner is au fait with the latest developments in technology.
  * Result: ![User test image 4](wireframes/ace-user-story-4.jpg)
  * Test: As a **user**, I want to see some **examples of previous projects** done by this company.
  * Result: ![User test image 5](wireframes/ace-user-story-5.jpg)
  * Test: As a **user**, I want to see references to **industry standards** to be sure the deliverables will meet my company's specifications.
  * Result: ![User test image 6](wireframes/ace-user-story-6.jpg)
  * Test: As a **user**, I want to be able to **contact** the site owner and give a simple description of a potential project.
  * Result: ![User test image 7](wireframes/ace-user-story-7.jpg)

</details>

## Bugs

---

Many bugs were encountered during the development of the project - all admittedly of my own making.

### Development Bugs

* The opentdb api was very, very difficult to get working as a JavaScript learner. I had serious difficulty 
fetching the JSON and storing this question data in an array of objects to be used in the quiz loop.
* Special HTML character codes were being displayed in the question and answer fields. E.g. &quot;, &#039;. 
Code was initially written in to use array.replace() to find and replace them out. The actual solution was 
to write the text strings from JS to HTML targetting the .innerHTML rather than .textContent. This avoided 
the information being passed to the browser inside quotes as a string and thus was interpreted as a special 
character code rather than a string.
* Deploying to GitHub Pages caused soSme difficulty where JS files were not being loaded. The was corrected by
 removing a preceding '/' from the source link.
* A number of minor warnings were picked up by [JSHint.com](https://jshint.com/) such as missing semicolons and
undeclared variables. These were amended as found and documented with 'Fix' commits.
* On GitHub pages, the eventlisteners for buttons threw up a 'cannot read property of null' issue during testing.
A solution was found on [StackOverflow](https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null).
By moving event listeners into the window.onload function, the event listeners would not be called before the page had loaded.


### Testing Bugs

* A few bugs were thrown up by the HTML Validator and CSS Validator. The solutions are given above in the **HTML Test** and **CSS Test** Sections.

## Deployment

---

The site has been deployed on [GitHub Pages](https://pages.github.com/) with under the following link [QuizChallenge](https://starrant.github.io/QuizChallenge/).

## Credits

---

* Images from [unsplash](www.unsplash.com) were used in this project. The main hero background is used courtesy of [Dimitry Anikin](@anikinearthwalker) The contact form background is used courtesy of [Marcus Spiske](@markusspiske)
* [JSHint.com](https://jshint.com/) was used to error check the JavaScript code.
* [Markdown guide basic syntax](https://www.markdownguide.org/basic-syntax/) was used as a reference in writing the README.md file.
* [Markdownlint](https://dlaa.me/markdownlint/) by [David Anson](https://github.com/DavidAnson) was used for correcting the errors in my markdown. It is an awesome resource and saved me hours of correction time.
* Code for box shadow on overview section generated by [cssgenerator.org](https://cssgenerator.org/box-shadow-css-generator.html). CSS code commented as such as per CI guidelines.
* Code for button styling has been based on modifed versions of code from [w3schools animated button pressed effect](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_animate3).
* Code for preventing the content disappearing under the navbar when clicking on links was found on [gomakethings.com](https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/). It was just a single line of CSS but this saved the day.
* Code for auto-collapsing the navbar when a link is clicked was found on [mdbootstrap.com](https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/) and written by [Marta Wierzbicka](https://mdbootstrap.com/user/marta-szymanska/)
* The website [w3schools](https://www.w3schools.com/) was used heavily as a reference for HTML, CSS and Bootstrap throughout the project. As were [GetBootstrap](https://getbootstrap.com/), [StackOverflow](https://stackoverflow.com/) and [CSSTricks](https://css-tricks.com/).
* The [w3schools color mixer tool](https://www.w3schools.com/colors/colors_mixer.asp) was used to get lighter or darker variants of the site's main colors for hover effects, etc.
* [Techsini](http://techsini.com/multi-mockup/index.php) was used to generate the multidevice image shown on at the start of the readme.

### Special Thanks

* My Code Institute mentor, [Simen Daehlin](https://github.com/Eventyret), for a lot of great advice and direction along the way. His time, effort and experience made a huge difference to the code quality, readability and end result. It would be hard to overstate his input here.























![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome STarrant,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use.

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: *Make Public*,

Another blue button should appear to click: *Open Browser*.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

## Updates Since The Instructional Video

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

--------

Happy coding!
