# Quiz Challenge : Trivia Game for all Ages

* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz.

* zzz Website mockup image to be added

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

* The goal of this project is to...

### User Goals

* _________________________________

### User Stories

* As a **user**, I want to see _______________________

### Site Owner Goals

* As a **site-owner**, I want to ________________________________

### User Requirements and Expectations

#### Requirements

* ________________________________________________

#### Expectations

* ____________________________________________________

### Design Choices

---
_________________________________________________

#### Fonts

_____________________________________________________

#### Icons

__________________________________________________________

#### Colors

The website colors were chosen using [coolors.co](https://coolors.co/). The choice was based on ________________________________________

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
  <summary>Responsiveness of the design was tested using Chrome's Developer Tools and the result overall was a **PASS**. Open the dropdown here to see screenshots of the results.</summary>

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

* Header styling was very difficult to achieve and went through a number of iterations before getting the hang of the Bootstrap
grid. Padding, margins, centering of text and mobile first design were seemingly impossible to achieve so a version was done using
flexbox but this also had some centering issues and glitching at breakpoints. The final design was a return to the bootstrap grid
with simple bootstrap spacing classes used to minimse the y-margin on paragraphs.
* Footer styling was similarly difficult to achieve and a flexbox version of that was trialed also before reverting to bootstrap grid.
* Font Awesome icons were troublesome to get working because of an erroneous version number in the head. SVG icons were used in an
interim version of the site. My mentor spotted the error and advised to return to Font Awesome and no further issues were encountered.
* There were a lot of issues with the Navbar getting it to work correctly and collapse at the correct breakpoints.
* Page linking and images caused some difficulty until the correct reference paths were used.
* Sticky-top was a feature that cost a lot of time and effort to get functioning on the site. For most of the project, it was abandoned due to issues
regarding header margins and id links not working correctly with navigation. In the end, I got it working with a bit of advice from my mentor and a line of code
from [gomakethings.com](https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/). Sticky-top threw up
 a number of other issues also such as the id links of anchors and the floating button which had to be resolved.
* The navbar not collapsing after click on a link was a minor issue that takes from the overall UX of the site. Unfortunately, this is not
  solveable without using a small bit of JavaScript. The source is credited below and acknowledgement is made here that I have exceeded the
  bounds of the HTML/CSS only project.

### Testing Bugs

* A few bugs were thrown up by the HTML Validator and CSS Validator. The solutions are given above in the **HTML Test** and **CSS Test** Sections.

## Deployment

---

The site has been deployed on [GitHub Pages](https://pages.github.com/) with under the following link [Ace Engineering Services](https://starrant.github.io/ace-engineering-services/index.html).

## Credits

---

* Images from [unsplash](www.unsplash.com) were used in this project. The main hero background is used courtesy of [Dimitry Anikin](@anikinearthwalker) The contact form background is used courtesy of [Marcus Spiske](@markusspiske)
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
