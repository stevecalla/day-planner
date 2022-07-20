
## Overview

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Index

<!-- <details><summary></summary> -->

1. [Overview](#overview)
2. [Features](#features)
3. [Future Enhancements](#future-enhancements)
2. [Acceptance Criteria](#acceptance-criteria)
4. [Technologies](#technologies)
6. [Resources](#resources)

## Features

1. Alert Save Image: The save icon changes from a plain disk to a disk with a checkmark after saving.
2. Alerts Timing: The saved alert is on a 1 second timer so it doesn't stick and so the user will see it appear / disappear as new activities are saved.
3. Clock: The header includes a running clock for the users convenience.
4. Last Login Date: When the user visits the page, a "last login date" is saved to local storage. When the user visits the page thereafter the last login date is compared to the current date. If the current date doesn't match the previous login date, local storage will be cleared to allow the user to start with a fresh page.
5. Moment: All date / time needs are processed using Moment.
6. Bootstrap: Consistent witht the starter code, this site was built mostly (if not entirely using Bootstrap CSS (including using classes for row, columns, margin, padding, flexbox and more).
7. jQuery: Consistent with the requirement for this project, DOM traversal is done solely with jQuery (although it wouldn't surprise if there is a limited amount of code in Vanilla JS traveral techniques).

## Future Enhancements

1. Validation: This project does not not have a significant amount of validation for input or otherwise. Future enhancements sould include robust validation for text input and more.
2. Buttons: Disable buttons and other clickable elements if text input is empty or a user has alerady saved an item.
3. Alerts/Tooltips: Enhance alerts and add tooltips to all for dynamic messaging/alerts for invalid / missing input, confirmation of deleted items and more.
4. Web Workers: Use the web worker interface to offload the clock / setInterval function from the main thread.
5. Calendar: Add calender functionality in the header so the user can add, remove, save and view activities over multiple calendar days rather than a single day.
6. Clock: Create a start and stop button for the clock.
7. Save All Button: Create a save all button so the user can save all changes across activity/time blocks rather than saving changes one at a time.
8. Clearing Storage: Create a more robust process to clear the calendar activities and history vs the last login noted in the features section.


## Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Website Preview - Static Screenshot

<img width="1437" alt="Screen Shot 2022-07-19 at 8 11 17 PM" src="https://user-images.githubusercontent.com/72281855/179880845-3c7d8d98-1a44-414a-920d-ad7d0ee6f122.png">


## Website Preview - Video Preview

<img src="https://media.giphy.com/media/410DOwYuE3CO7yzPnA/giphy-downsized-large.gif" width="100%" height="425"/>

## Technologies

1. HTML
2. CSS
3. GitHub (website hosting and source code management)
4. jQuery
5. Bootstrap
6. Moment

## Resources

1. GitHub Repo: <https://github.com/stevecalla/day-planner>

2. GitHub Hosted URL: < https://stevecalla.github.io/day-planner>

3. Project Manager: [Steve Calla](https://github.com/stevecalla)