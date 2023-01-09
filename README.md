# Test Your Typing

Test Your Typing is a interactive online tool that aims to enable users to practice and improve their touch typing skills. The aim is to deliver this in a fun and self competive manner to encourage practice!

Two games modes are provided to in the form of a time and longest streak challenge.

![Responsive Mockup](documentation/mockup.png)


## Table of Contents
+ [Requirements](#requirements "Requirements")
+ [Design](#design "Design")
  + [Wireframes](#wireframes "Wireframes")
  + [Colour Scheme](#colour-scheme "Colour Scheme")
  + [Typography](#typography "Typography")
  + [Imagery](#imagery "Imagery")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
+ [Testing](#testing "Testing")
  + [Development Process](#development-process "Development Process")
  + [Usability Testing](#usability-testing "Usability Testing")
  + [User Requirement Testing](#user-requirement-testing "User Requirement Testing")
  + [Functional Testing](#functional-testing "Functional Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Technologies Used](#technologies-used "Technologies Used")
  + [Main Languages Used](#main-languages-used "Main Languages Used")
+ [Deployment](#deployment "Deployment")
+ [Credits](#credits "Credits")
  + [Content](#content "Content")
  + [Media](#media "Media")

## Requirements

Please see below a table showing the desired requirements for Test Your Typing, with a matrix for importance of feature and feasibility of implementation.

|  <br>Requirement                                       |  <br>Importance  |  <br>Viability/Feasibility  |
|--------------------------------------------------------|------------------|-----------------------------|
|  <br>Provide Information about touch typing            |  <br>5           |  <br>5                      |
|  <br>Provide game style practice                       |  <br>5           |  <br>5                      |
|  <br>Enable high scores to be recorded with user name  |  <br>5           |  <br>5                      |
|  <br>Provide a choice of game modes                    |  <br>4           |  <br>5                      |
|  <br>Enable high scores to be reset                    |  <br>3           |  <br>3                      |


## Design

### Wireframes:

- Please find link to [Full Screen Wireframe](documentation/full-wireframe.pdf)

### Colour Scheme:

- A neutral colour scheme was chosen to enable it to not distract from the games, with a highlight colour for external links.
- The colour scheme was generated from [Coolers](https://coolors.co/c8d3d5-a4b8c4-6e8387-0cca4a)

![Colour Scheme](documentation/colour-scheme.png)

### Typography:

- Special Elite was used as the font for the website, this was chosen to provide a type writer feel to compliment the typing theme.
- The font style was sourced from [Google Fonts](https://fonts.google.com/)

### Imagery:

There are two images in the website, I have listed their sources below.

- On the home page there is a image of a keyboard, this was sourced from [Wikipedia](https://en.wikipedia.org/wiki/Touch_typing#/media/File:QWERTY-home-keys-position.svg)
- On the high score submission section there is a image of a thumbs up, this was created using tools from [Shutterstock](https://www.shutterstock.com/)

## Features

### Existing Features

#### Title and Home Navigation:

Present at the top of every page is the title header, this is linked to return the user back to the home page. On the game select, time challenge and long streak challenge pages a home icon has been added to this. This is to further communicate to the user that they are able to use this as a link to the home page at any stage of their user journey.

Title on home page -

![Title on home page](documentation/title-home.png)

Title on all other pages -

![Title on all other pages](documentation/title-other.png)

#### Landing Page:

The landing page of the website, conveys the clear goal of the website to practice typing in a game mode. This is done with the opening line, 'Let the games begin!'. After which is a brief explanation and the user is presented with the option to continue straight to the games.

Further down there is information on type touching, a supporting image and a link to further external information. The link opens up in a new tab so the users access to the site remains.

![Landing information](documentation/landing-page.png)

#### Game Selection:

To provide different approaches for the user to test and practice their typing skills, two different game modes are available. From the landing page, the users progression is to game selection.

Both game options are layed out in the same structure to ensure continuity and ease for user reading. Each game mode is enclosed in its own container, with clear buttons to select the game.

![Game Selection](documentation/game-selection.png)

Each section illustrates it's independent highest score that is saved in local storage. Please see example below -

![High Score Example](documentation/score-example.png)

#### Time Challenge:

The Time Challenge game presents the user with a starting key to press and a 40 seconds timer. At the top, it is instructed to the user that the game commences on the first key press. There is also a return to games button so the user can exit at any stage.

![Time Challenge Start](documentation/time-challenge-start.png)

Once in progress the timer will start to count down, and each time a key is pressed a new random key is then generated for the user. With each correct key the score increases by 1 and with each incorrect key it decreases by 1. At the end of the game, the final score is then used to compare to the current highest score.

To communicate to the player whether they have clicked the correct key, ongoing feed back in given directly under the random key generation.

Correct score response -

![Correct Input](documentation/time-correct-input.png)

Incorrect score response - 

![Incorrect Input](documentation/time-incorrect-input.png)

#### Long Streak Challenge:

The Long Streak Challenge presents the user with continuous random keys until the user selects an incorrect key. For each correct key the score increases by one and then the game ends when an incorrect key is pushed.

The layout of the game is in the same format as the Time Challenge to keep consistent design throughout. As such, game instruction is at the top and there is a return to games selection button at the bottom.

![Long Streak Challenge Start](documentation/long-streak-start.png)

#### Assessment of Highest Score:

For each game there is independent storage of the ongoing highest score. At the end of the game one of two displays become visible to the user.

- Option 1 - New High Score

If the user achieves a new high score, or the first score recorded, the following becomes visible. It informs the user and provides them the ability to add their name to the score and submit it to be saved. Upon submission the user is then returned to the game selection page.

![High Score Submission](documentation/new-high-score.png)

- Option 2 - No New High Score

If the user doesn't achieve a new high score the following becomes visible. This informs the user and then gives them a button to return back to the game selection.

![No New High Score Submission](documentation/no-new-high-score.png)

### Future Features:

A lower level requirement was a function to clear the high scores, this would enable the user to restart if they wish. In future development of the site, this should be added to the game select page where the high scores are displayed.

This could be done in the form of a button that when clicked will clear the local storage.

## Testing

### Development Process


Throughout the development process, each feature was tested on a local server to check that the code added was working as intended. This then resulted in realtime changes before commiting the new features. Below is a list of bugs that were discussed through development.

#### Random Letter Generator

- The initial array for the random letter generator included 'tab' and 'delete' keys. In the testing process, it was discovered that if you pushed the tab key the title element of the page was selected. If this was then followed by 'enter' it would exit the user from the game and return them to the home page. <br>
Additionally, it came to light that for MAC users, a delete key is not present and therefore restricted accessibility to windows users. <br>
As a result, both of these key options were removed from the array.

- When using the games, the random letter generator on occassion would present 'undefined'. Upon investigation it was found that this was due to the random number function that was used to randomly select from the keys array. It was not taken into account that array indexing starts with a '0' and therefore the random number selector had to be one less than the total strings present. <br>
Upon adjusting the number generator, 'undefined' no longer was generated in game play.

#### Time Challenge - Count Down

- After first implementing the count down timer in full game testing, it was discovered that every time a key was clicked the timer function was called. This resulted in the timer decreasing and increasingly fast rates. <br>
This was due to the event listener that was added to key push down. To resolve this issue, `{once : true}` was added to ensure that it could only be activated once.

#### Reading Exisiting High Score

- Within the `topScore()` function, the local storaged is retrived to compare the data to the score of the game. Initially, when this was implemented it caused an error as the if statement was unable to read the value of the key pair. Upon further investigation, it was discovered that due to the format of the data pulled via JSON it was not compatibly to check against a number.<br>
Upon further research, a second step was added to format the data into a string which enabled the function to select the number value and change its data type.
`Object.keys(stringScoreReturn).map((key) => [Number(key), stringScoreReturn[key]])`
`if(parseInt(score.innerHTML) > parseInt(number)){`

#### Storing Seperate High Scores

- After the Time Challenge script was completed, the code was copied over to a new script to run the Long Streak Challenge. This was done as there were multiple functions that are required for both games. After making the required alternations for the new game mode, game run through was tested.<br>
It was discoved that when one game achieve a new high score, it would overwrite the others. This became apparent when checking the high scores displayed on the game select screen and that both were showing the same data. <br>
Upon further investigation and research into local storage, this was because the `topScore()` function was using the same key when sending the data to the local storage. To resolve this issue, the function was altered in the Long Streak Challenge script to assign a different key to the data.<br>
This then resolved the issue and they both had independent storage of their respective highest scores. The solution was tested with the high score display on the game select page.

### Usability Testing

- All pages are responsive to multiple screen sizes, main screen sizes designed for ipad sizes and above due to nature of game for touch typing.
- Title link to home page works on all pages.
- All buttons links to appropriate destinations.
- External links open in new browser tabs.
- Images hold alternatives to for accessibility.
- Color scheme appropriate for accessibility.
- Website checked on multiple browsers including chrome, firefox and safari.
- Lighthouse run on each page to check for performace, accessibility, best practice and SEO. All tests returned positive results which are shown below in the link to full reports.

  - ![index.html Light House Report](documentation/index-lighthouse.pdf) <br>
  - ![gameselect.html Light House Report](documentation/gameselect-lighthouse.pdf) <br>
  - ![timechallenge.html Light House Report](documentation/timechallenge-lighthouse.pdf) <br>
  - ![longstreak.html Light House Report](documentation/long%20streak-lighthouse.pdf) <br>

### User Requirement Testing

|  <br>User Case  |  <br>Description                                                                                                |  <br>Relevant test cases                                                    |  <br>Result  |  <br>Comments                                                                |
|-----------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|--------------|------------------------------------------------------------------------------|
|  <br>UC-001     |  <br>As a user I want to be able to learn about touch typing and gain further information.                      |  <br>TC-002                                                                          |  <br>Pass    |  <br>                                                                        |
|  <br>UC-002     |  <br>As a user I want to practice to improve the speed of my touch typing.                                      |  <br>TC-004, TC-011                                                                  |  <br>Pass    |  <br>                                                                        |
|  <br>UC-003     |  <br>As a user I want to test the accuracy of my typing to see how long I can type for before making an error.  |  <br>TC-005, TC-019                                                                  |  <br>Pass    |  <br>                                                                        |
|  <br>UC-004     |  <br>As a user I want to be able to be able to see a record of my highest scores.                               |  <br>TC-006, TC-007, TC-008, TC-009, TC-013, TC-014, TC-015, TC-021, TC-022, TC-023  |  <br>Pass    |  <br>                                                                        |
|  <br>UC-005     |  <br>As a user I wish to be able to reset my high scores                                                        |  <br>                                                                                |  <br>Fail    |  <br>A lower level requirement that will be implemented as a future feature  |
|  <br>UC-006     |  <br>As a user I wish to be able to return to the home screen at any stage.                                     |  <br>TC-003, TC-010, TC-018                                                          |  <br>Pass    |  <br>                                                                        |
|  <br>UC-007     |  <br>As a user I wish to be able to return to the game selection at any stage.                                  |  <br>TC-001, TC-012, TC-020                                                          |  <br>Pass    |  <br>                                                                        |


### Functional Testing


<details>

<summary>Functional Test Cases</summary>


|  <br>Test Case  |  <br>Description                                                                                                |  <br>Pre Conditions                                                                              |  <br>Steps to Executed                                                                                                                                                                      |  <br>Result  |  <br>Comments  |
|-----------------|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|----------------|
|  <br>TC-001     |  <br>Home Page - Continue button opens page to select game mode.                                                |  <br>N/A                                                                                         |  <br>1. Active page is index.html <br>2. Click ‘Continue’ button <br>3. Check that active page is now game select.html                                                                      |  <br>Pass    |  <br>          |
|  <br>TC-002     |  <br>Home Page - Link to Wikipedia Touch Typing opens in a new tab.                                             |  <br>N/A                                                                                         |  <br>1. Active page is index.html <br>2. Click on Wikipedia link <br>3. Check Wikipedia opens on new tab in browser                                                                         |  <br>Pass    |  <br>          |
|  <br>TC-003     |  <br>Game Select Page - Home icon and title returns user to home page.                                          |  <br>N/A                                                                                         |  <br>1. Active page is gameselect.html <br>2. Click on home icon link <br>3. Check active page changes to index.html                                                                        |  <br>Pass    |  <br>          |
|  <br>TC-004     |  <br>Game Select Page - In the Time Challenge section, ’Let’s Go!’ Button opens the Time Challenge game.        |  <br>N/A                                                                                         |  <br>1. Active page is gameselect.html <br>2. Click on ‘Let’s Go!’ Button under Time Challenge <br>3. Check active page changes to timechallenge.html                                       |  <br>Pass    |  <br>          |
|  <br>TC-005     |  <br>Game Select Page - In the Long Steak section, ’Let’s Go!’ Button opens the Long Streak game.               |  <br>N/A                                                                                         |  <br>1. Active page is gameselect.html <br>2. Click on ‘Let’s Go!’ Button under Long Streak Challenge <br>3. Check active page changes to longstreak.html                                   |  <br>Pass    |  <br>          |
|  <br>TC-006     |  <br>Game Select Page - Time Challenge high score displays ‘-‘ when no score is stored.                         |  <br>No high score for Time Challenge is stored in Local Storage                                 |  <br>1. Active page is gameselect.html <br>2. Check high score table in the Time Challenge section displays ‘-‘ values under name and score                                                 |  <br>Pass    |  <br>          |
|  <br>TC-007     |  <br>Game Select Page - Long Streak Challenge high score displays ‘-‘ when no score is stored.                  |  <br>No high score for Long Streak Challenge is stored in Local Storage                          |  <br>1. Active page is gameselect.html <br>2. Check high score table in the Long Streak Challenge section displays ‘-‘ values under name and score                                          |  <br>Pass    |  <br>          |
|  <br>TC-008     |  <br>Game Select Page - Time Challenge high score displays user name and score held in Local Storage.           |  <br>High score has been recorded in Local Storage from the Time Challenge                       |  <br>1. Active page is gameselect.html <br>2. Check high score table in the Time Challenge section displays the user name and score held in Local Storage                                   |  <br>Pass    |  <br>          |
|  <br>TC-009     |  <br>Game Select Page - Long Streak Challenge high score displays user name and score held in Local Storage.    |  <br>High score has been recorded in Local Storage from the Long Streak Challenge                |  <br>1. Active page is gameselect.html <br>2. Check high score table in the Long Streak Challenge section displays the user name and score held in Local Storage                            |  <br>Pass    |  <br>          |
|  <br>TC-010     |  <br>Time Challenge Page - Home icon and title returns user to home page.                                       |  <br>N/A                                                                                         |  <br>1. Active page is timechallenge.html <br>2. Click on home icon link <br>3. Check active page changes to index.html                                                                     |  <br>Pass    |  <br>          |
|  <br>TC-011     |  <br>Time Challenge Page - Game starts on user first key push down event.                                       |  <br>N/A                                                                                         |  <br>1. Active page is timechallenge.html <br>2. Push down any key on the keyboard <br>3. Check timer starts to count down and score increases/decreases appropriately                      |  <br>Pass    |  <br>          |
|  <br>TC-012     |  <br>Time Challenge Page - ‘Back to Games!’ Button returns the user to the Game Select page.                    |  <br>N/A                                                                                         |  <br>1. Active page is timechallenge.html <br>2. Click on ‘Back to Games!’ Button <br>3. Check active page is now gameselect.html                                                           |  <br>Pass    |  <br>          |
|  <br>TC-013     |  <br>Time Challenge Page - Upon game ending, if high score is achieved, new high score submission is shown.     |  <br>At the end of the game, the score is higher than the one currently stored in Local Storage  |  <br>1. Active page is timechallenge.html <br>2. Complete game with final score being higher than currently stored <br>3. Check new high score submission appears                           |  <br>Pass    |  <br>          |
|  <br>TC-014     |  <br>Time Challenge Page - High Score submission allows the user to type in the name for score storage.         |  <br>The high score submission is open for Time Challenge                                        |  <br>1. Click into input text field. <br>2. Type name in field                                                                                                                              |  <br>Pass    |  <br>          |
|  <br>TC-015     |  <br>Time Challenge Page - High Score submission allows the user to submit the new score                        |  <br>The high score submission is open for Time Challenge and user name has been entered         |  <br>1. Click on the submission button. <br>2. Check that the new high score has overwritten the previous in Local Storage.                                                                 |  <br>Pass    |  <br>          |
|  <br>TC-016     |  <br>Time Challenge Page - Upon game ending, if no high score is achieved, a pop up appears to inform the user  |  <br>At the end of the game, the score is lower than the one held in Local Storage               |  <br>1. Active page is timechallenge.html <br>2. Complete game with final score being lower than currently stored <br>3. Check pop up appears to inform the user no new high score achieve  |  <br>Pass    |  <br>          |
|  <br>TC-017     |  <br>Time Challenge Page - No high score pop up allows the user to return to game select page.                  |  <br>The no high score pop up for Time Challenge is open                                         |  <br>1. Click on ‘Return to Games!’ Button <br>2.Check that active page is now gameselect.html                                                                                              |  <br>Pass    |  <br>          |
|  <br>TC-018     |  <br>Long Streak Page - Home icon and title returns user to home page.                                          |  <br>N/A                                                                                         |  <br>1. Active page is longstreak.html <br>2. Click on home icon link <br>3. Check active page changes to index.html                                                                        |  <br>Pass    |  <br>          |
|  <br>TC-019     |  <br>Long Streak Page - Game starts on user first key push down event.                                          |  <br>N/A                                                                                         |  <br>1. Active page is longstreak.html <br>2. Push down requested key on the keyboard <br>3. Check new letter appears and score goes up                                                     |  <br>Pass    |  <br>          |
|  <br>TC-020     |  <br>Long Streak Page - ‘Back to Games!’ Button returns the user to the Game Select page.                       |  <br>N/A                                                                                         |  <br>1. Active page is longstreak.html <br>2. Click on ‘Back to Games!’ Button <br>3. Check active page is now gameselect.html                                                              |  <br>Pass    |  <br>          |
|  <br>TC-021     |  <br>Long Streak Page - Upon game ending, if high score is achieved, new high score submission is shown.        |  <br>At the end of the game, the score is higher than the one currently stored in Local Storage  |  <br>1. Active page is longstreak.html <br>2. Complete game with final score being higher than currently stored <br>3. Check new high score submission appears                              |  <br>Pass    |  <br>          |
|  <br>TC-022     |  <br>Long Streak Page - High Score submission allows the user to type in the name for score storage.            |  <br>The high score submission is open for Long Streak Challenge                                 |  <br>1. Click into input text field. <br>2. Type name in field                                                                                                                              |  <br>Pass    |  <br>          |
|  <br>TC-023     |  <br>Long Streak Page - High Score submission allows the user to submit the new score                           |  <br>The high score submission is open for Long Streak Challenge and user name has been entered  |  <br>1. Click on the submission button. <br>2. Check that the new high score has overwritten the previous in Local Storage.                                                                 |  <br>Pass    |  <br>          |
|  <br>TC-024     |  <br>Long Streak Page - Upon game ending, if no high score is achieved, a pop up appears to inform the user     |  <br>At the end of the game, the score is lower than the one held in Local Storage               |  <br>1. Active page is longstreak.html <br>2. Complete game with final score being lower than currently stored <br>3. Check pop up appears to inform the user no new high score achieve     |  <br>Pass    |  <br>          |
|  <br>TC-025     |  <br>Long Streak Page - No high score pop up allows the user to return to game select page.                     |  <br>The no high score pop up for Long Streak Challenge is open                                  |  <br>1. Click on ‘Return to Games!’ Button <br>2.Check that active page is now gameselect.html                                                                                              |  <br>Pass    |  <br>          |
</details>


### Validator Testing


### Unfixed Bugs
- No known bugs

## Technologies Used
### Main Languages Used
- HTML5
- CSS3
- JavaScript

## Deployment
This site is deployed through GitHub Pages. The following steps where followed -
- Within the repository, go to settings
- Under settings select pages section
- Select source 'Deploy from a branch'
- Underneath source, select main branch and root folder and save to deploy

## Credits

### Content

### Media
