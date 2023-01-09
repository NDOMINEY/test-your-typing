# Test Your Typing

Test Your Typing is a interactive online tool that aims to enable users to practice and improve their touch typing skills. The aim is to deliver this in a fun and self competive manner to encourage practice!

Two games modes are provided to in the form of a time and longest streak challenge.

![Responsive Mockup](documentation/mockup.png)


## Tabel of Contents
+ [Requirements](#requirements "Requirements")
+ [Design](#design "Design")
  + [Wireframes](#wireframes "Wireframes")
  + [Colour Scheme](#colour-scheme "Colour Scheme")
  + [Typography](#typography "Typography")
  + [Imagery](#imagery "Imagery")
  + [Media](#media "Media")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
+ [Testing](#testing "Testing")
  + [User Testing](#user-testing "User Testing")
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

## Design

### Wireframes:

- Please find link to [Full Screen Wireframe](documentation/full-wireframe.pdf)

### Colour Scheme:

- A neutral colour scheme was chosen to enable it to not distract from the games, with a highlight colour for external links.
- The colour scheme was generated from [Coolers](https://coolors.co/c8d3d5-a4b8c4-6e8387-0cca4a)

![Colour Scheme](documentation/colour-scheme.png)

### Typography:

### Imagery:

### Media:

## Features

### Future Features:


## Testing


### User Testing

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
