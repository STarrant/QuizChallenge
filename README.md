# Quiz Challenge : Trivia Game for all Ages

* A fun and addictively simple quiz game website.

![Multi Device Mockup Image](/wireframes/quizchallenge_multidevicewebsitemockupgenerator_techsini.com.png)

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
* As a **user**, I want to be able to select different categories, quantities and difficulty levels of questions.
* As a **user**, I may want to see who developed this game to contact them with suggestions or business proposals.

### Site Owner Goals

* As a **site-owner**, I want to make an attractive and simple interface so that people will want to play this game.
* As a **site-owner**, I want to have a varying set of trivia questions to create longer playing periods and return traffic to the site.
* As a **site-owner**, I want to have a options available to players to create a sense of customisibility to avoid player fatigue.

### User Requirements and Expectations

#### Requirements

* Simple single-page interface with header, game area and footer with about/contact/credits/disclaimer.
* Fast loading times are imperative to avoid a user leaving the page due to lag.
* Contact form for users to send requests, suggestions or trivia questions.
* Bright and cheerful colors and styling.
* Dropdowns to allow customisibility of the questions drawn.

#### Expectations

* Content is visually satisfying and exciting to look at.
* Game automatically cycles from start page, through questions to final score without glitching or issues.
* The design is responsive and will work across a wide variety of screen sizes.

### Design Choices

---

For the design of this site, I took inspriation from books and cartoons that my children are most interested in.
The colors selected are bright pastels. Rainbow-colored hortizontal rules break between the header, game and footer areas.
A subtle jungle pastel backdrop was used to create focus on the centre of the screen. The logo is a simple rendering using
Microsoft Word's WordArt and Shapes to create a colorful text based logo. The green tick mark for Q's cross stroke is alluding
to a correct mark of a quiz. Simple shadowing has been added to give an embossed effect and make the text stand out from the
background without resorting to deeper hued colors or outlines.

#### Fonts

* [Google Fonts](https://fonts.google.com/) has been used to add typographic style to the site.
With legibilty and ease of eye strain being a key focus of a text-based game that involves a lot of reading,
[Roboto](https://fonts.google.com/specimen/Roboto) was chosen as the main font with
[RocknRoll One](https://fonts.google.com/specimen/RocknRoll+One) being used for some of the heading text for a more fun font.
The main logo was designed in Microsoft Word with the Berlin Sans font.

#### Icons

* [FontAwesome](https://fontawesome.com/) free icons were used in early versions of the project but have since been removed. They may be reintroduced in a future version.

#### Colors

The website colors were chosen using [coolors.co](https://coolors.co/).

![Quiz Challenge Coolors Color Selection](/wireframes/qc_coolors.png)

## Wireframing

<details>
  <summary>Wireframing was done using Balsamiq under full-functional trial provided by Code Institute.
Wireframes were developed for a start screen, question screen and score screen. The main elements of
these wireframes were relatively faithfully produced. Other aspects of the design developed more organically.</summary>

### Project Wireframes

* Start Screen Wireframe
* ![Start Screen Wireframe](/wireframes/qc_wf_01_startscreen.png)
* Question Screen
* ![Question Screen Wireframe](/wireframes/qc_wf_02_questionscreen.png)
* Score Screen
* ![Score Screen Wireframe](/wireframes/qc_wf_03_scorescreen.png)

</details>

---

## Features

---
**Features** that have been **implemented:**

* Responsive design using Bootstrap.
* Fetch quiz categories from opentdb.com for the quiz and provide in a HTML dropdown to the user.
* Fetch quiz questions as per user selection and store in an array of objects for the quiz game.
* Simple, single player mode game that cycles through game questions.
* Aubible and visual indication of correct/incorrect answers.
* Final score screen with number and percentage of correct answers displayed.

**Features** that will be **implemented** in the **future:**

* Improvement on the responsive nature of the site is definitely an area for improvement. Fixing the size of the game area and using media queries is required.
* Two player mode. (This is my single biggest disappointment that I did not have time to get this implemented before project submission.)
* Google text-to-speech api to read questions and answer choices.
* Change the picture backgrounds to suit the quiz category. The work involved here made this prohibitive in the project timeline and
it may have been difficult to match in with the style of the project.
* Muted mode and high contrast mode were removed from the design because of issues getting them to work. These would definitely be useful to implement given more time.

## Technologies Used

---

### Languages

* HTML
* CSS
* JavaScript

### Tools & Libraries

* [Git](https://git-scm.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Popper](https://popper.js.org/)
* [JQuery](https://jquery.com/)
* [Google fonts](https://fonts.google.com/)
* [Markdownlint](https://dlaa.me/markdownlint/)
* [W3C HTML Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)
* [JSHint](https://jshint.com/)

## Testing

---

### HTML Test

HTML code has been tested using the [HTML Validator](https://validator.w3.org/) and gave the following error:

#### HTML Test Errors

* 1 Error: Text not allowed in element select in this context.
* 2 - 5 Warning: Empty heading x 4
* 6 Warning: type attrbute unnecessary in JavaScript resources.

#### HTML Test Fixes

* 1 This was caused by a small typo which was corrected.
* 2 - 5 Ignore error. These headers are in place to accept JavaScript-driven text when functions are called.
* 6 Ignore this error.

### CSS Test

CSS code has been tested using the [CSS validator](http://jigsaw.w3.org/css-validator/) and gave the following errors and warnings.

#### CSS Test Errors

* None

#### CSS Test Warnings

* 1 Warning Imported style sheets are not checked in direct input and file upload modes.

#### CSS Test Fixes

* Warning 1 - Ignore.

### JavaScript Test

#### JavaScript Test Errors

#### JavaScript Test Warnings

#### JavaScript Test Fixes


### Responsiveness

<details>
  <summary>Responsiveness of the design was tested using Chrome's Developer Tools and the result overall was a **PASS** but there is definitely a lot of room for improvement. Open the dropdown here to see screenshots of the results.</summary>

#### Summary of responsive design tests

* Full Screen 24” Browser Window – Google Chrome – No Issues - **PASS**
* Result: ![Responsive test Fullscreen](wireframes/qc-responsive-fullscreen.jpg)
* iPhone 6/7/8 – No Issues - **PASS**
* Result: ![Responsive test iPhone 6/7/8](wireframes/qc-responsive-iphone678.jpg) 
* iPhone 6/7/8 Plus – No issues - **PASS**
* Result: ![Responsive test iPhone 6/7/8 Plus](wireframes/qc-responsive-iphone678plus.jpg)
* iPhone X – No issues - **PASS**
* Result: ![Responsive test iPhone X](wireframes/qc-responsive-iphonex.jpg)
* iPad – No Issues - **PASS**
* Result: ![Responsive test iPad](wireframes/qc-responsive-ipad.jpg)
* iPad Pro – Slight issue in that the site doesn’t have enough vertical height on 100% zoom. Otherwise no issue. - **PASS**
* Result: ![Responsive test iPad Pro](wireframes/qc-responsive-ipadpro.jpg)
* Pixel 2 – No Issues - **PASS**
* Result: ![Responsive test Pixel 2](wireframes/qc-responsive-pixel2.jpg)
* Pixel 2 XL – No Issues - **PASS**
* Result: ![Responsive test Pixel 2 XL](wireframes/qc-responsive-pixel2xl.jpg)
* Galaxy S5 – No Issues - **PASS**
* Result: ![Responsive test Galaxy S5](wireframes/qc-responsive-galaxys5.jpg)

</details>

### Design

* The idea for doing this project came from my mentor, [Simen Daehlin](https://github.com/Eventyret), who suggested making a quiz game based on the [opentdb website](https://opentdb.com/).
* There are a few videos online for tutorials on how to make this kind of application but admittedly, I found them either too complicated, too tedious, too unique to be uncopyable without infringing on plagarism rules or a combination of all three. Hence, for better or worse, this project is largely my own concept of how I imagine a JavaScript driven quiz game should work.
* The timing of this project in the course of the diploma, coincided with the annual shutdown of my day-job's plant and my mentor's holidays therefore, apart from the inception meeting, there were no other mentor sessions. This was unavoidable under the circumstances but the code of this project will lack the scrutiny that I would otherwise had received.
* In terms of the design strategy, the project was developed at break neck speed to meet the deadline. Wireframes were developed to give an idea of the main structure required. From there, work concentrated on getting the API working and passing data to the HTML. This took about one third of the project time. From there, the function calls were developed to display questions and sequence the calls to make the site loop through the game.
* The site uses the CSS "display: hidden;" attribute to move from one game screen to another rather than jumping html pages.
* The styling of the site developed organically using color palettes and mockups of the site in Microsoft Word to move elements, insert different backgrounds and find what worked best before implementing in HTML and CSS.


### User Stories

<details>
  <summary>User stories were tested using Google Chrome and developer tools. Click dropdown to see individual tests.</summary>
  
#### Summary of user tests

* Test: As a **user**, I want to see a simple, fun and intuitive layout.
* Result: ![User test image 1](wireframes/qc-user-story-1.jpg)
* Test: As a **user**, I want to be able to **start** my first game **with a single click** to see if I like this game.
* Result: ![User test image 2](wireframes/qc-user-story-2.jpg)
* Test: As a **user**, I want to see my **current score** so I can keep track of how I'm doing.
* Result: ![User test image 3](wireframes/qc-user-story-3.jpg)
* Test: As a **user**, I want to be challenged with **different questions every time** I play this game.
* Result: ![User test image 4](wireframes/qc-user-story-4.jpg)
* Test: As a **user**, I want to be able to **select** different categories, quantities and difficulty levels of questions.
* Result: ![User test image 5](wireframes/qc-user-story-5.jpg)
* Test: As a **user**, I may want to see who developed this game to **contact** them with suggestions or business proposals.
* Result: ![User test image 6](wireframes/qc-user-story-6.jpg)

</details>

## Bugs

---

Many bugs were encountered during the development of the project - all admittedly of my own making.

### Development Bugs

* The opentdb api was very, very difficult to get working as a JavaScript learner. I had serious difficulty
fetching the JSON and storing this question data in an array of objects to be used in the quiz loop. Eventually,
after a week of trying different techniques I managed to get it to store outside the function call. This
[article](https://medium.com/@sandhya.sadanandan/javascript-how-to-construct-an-array-of-json-objects-using-map-d1a513727008)
was very useful in understanding the mapping of JSON objects to an array.
* Special HTML character codes were being displayed in the question and answer fields. E.g. &quot;, &#039;.
Code was initially written in to use array.replace() to find and replace them out. The actual solution was
to write the text strings from JS to HTML targetting the .innerHTML rather than .textContent. This avoided
the information being passed to the browser inside quotes as a string and thus was interpreted as a special
character code rather than a string.
* Deploying to GitHub Pages caused some difficulty where JS files were not being loaded. The was corrected by
 removing a preceding '/' from the source link.
* A number of minor warnings were picked up by [JSHint.com](https://jshint.com/) such as missing semicolons and
undeclared variables. These were amended as found and documented with 'Fix' commits.
* On GitHub pages, the eventlisteners for buttons threw up a 'cannot read property of null' issue during testing.
A solution was found on [StackOverflow](https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null).
By moving event listeners into the window.onload function, the event listeners would not be called before the page had loaded.
* There was a favicon.ico error in the console during testing. An icon was generated for the site and added to the root.
* Numerous errors were encountered with the site on Github pages and links to external resources, mainly the audio files.
Apparently, github does not support audio files. To get around this issue, the file path for the audio starts at the repo name.
* The favivon.ico error could not be resolved without adding this solution from [Stackoverflow](https://stackoverflow.com/questions/35037482/favicon-with-github-pages)
in the HTML head.

### Testing Bugs

* A few bugs were thrown up by the HTML Validator, CSS Validator and JSHint. The solutions are given above in the **HTML Test** and **CSS Test** Sections.

## Deployment

---

The site has been deployed on [GitHub Pages](https://pages.github.com/) with under the following link [QuizChallenge](https://starrant.github.io/QuizChallenge/).

## Credits

---

* The jungle background vector was created by [katemangostar](https://www.freepik.com/katemangostar), provided by [Freepik](https://www.freepik.com/vectors/background)
and used for free following their [attribution rules](https://support.freepik.com/hc/en-us/articles/208976585-How-do-I-insert-the-attribution-correctly-).
* [JSHint.com](https://jshint.com/) was used to error check the JavaScript code.
* [Markdown guide basic syntax](https://www.markdownguide.org/basic-syntax/) was used as a reference in writing the README.md file.
* [Markdownlint](https://dlaa.me/markdownlint/) by [David Anson](https://github.com/DavidAnson) was used for correcting the errors in my markdown. It is an awesome resource and saved me hours of correction time.
* Code for box shadow on overview section generated by [cssgenerator.org](https://cssgenerator.org/box-shadow-css-generator.html). CSS code commented as such as per CI guidelines.
* Code for button styling has been based on modifed versions of code from [w3schools animated button pressed effect](https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_animate3).
* The website [w3schools](https://www.w3schools.com/) was used heavily as a reference for HTML, CSS and Bootstrap throughout the project. As were [GetBootstrap](https://getbootstrap.com/), [StackOverflow](https://stackoverflow.com/) and [CSSTricks](https://css-tricks.com/).
* The [w3schools color mixer tool](https://www.w3schools.com/colors/colors_mixer.asp) was used to get lighter or darker variants of the site's main colors for hover effects, etc.
* [Techsini](http://techsini.com/multi-mockup/index.php) was used to generate the multidevice image shown on at the start of the readme.
* Sounds for correct and incorrect answer were created by [LittleRainySeasons](https://freesound.org/people/LittleRainySeasons/) and [Aiwha](https://freesound.org/people/Aiwha/) respectively, provided by [freesound](https://freesound.org/) and used under CC licencing rules for non-commercial/creator attribution.
* [Online Audio Converter](https://online-audio-converter.com/) was used to convert .wav files to .mp3 format to reduce file size.

### Special Thanks

* My Code Institute mentor, [Simen Daehlin](https://github.com/Eventyret), for a lot of great advice and direction along the way. His time, effort and experience made a huge difference to the code quality, readability and end result. It would be hard to overstate his input here.
* Include thanks to ByIlsa... ********
