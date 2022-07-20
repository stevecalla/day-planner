//query selector va*riables go here 👇
let currentDay = $("#currentDay");
let saveIconButton = $("*#save-button");
let activityInputText = $("*#activityInput");

//global variables go here 👇

//event listeners go here 👇
$(saveIconButton).on("click", saveActivityButton);

//jQuery Interactions 👇

//functions and event handlers go here 👇
// ON LOAD FUNCTIONS
$(document).ready(function () {
  //get activities from local storage
  let activitiesFromLocalStorage = getActivtyListFromLocalStorage();
  renderLocalStorageToTextArea(activitiesFromLocalStorage);

  //render text and date/clock to the screen
  renderTextAreaStyle();
  renderDateTimeInHeader();

  //start timer for the clock in the header and to determine past, present, future styles
  startClockAndStylesTimer();

  // store login date to determine if calendar activities should be cleared on load
  storeLoginDate();
});

// RENDER CLOCK IN HEADER & ACTIVITES FROM LOCAL STORAGE
function renderDateTimeInHeader() {
  currentDay.text(moment().format("dddd, MMMM Do [at] h:mm:ss a"));
}

function renderLocalStorageToTextArea(activitiesFromLocalStorage) {
  activityInputText.each(function (index, element) {
    $(element).val(activitiesFromLocalStorage[index]);
  });
}

// RENDER ACTIVITY PAST, PRESENT, FUTURE STYLE
function renderTextAreaStyle() {
  let dateNow = moment(); //determine current date
  let date_time = "";

  activityInputText.each(function (index, element) {
    date_time = moment(dateNow).set({
      hour: $(element).attr("data-hour"),
      minute: $(element).attr("data-minutes"),
    }); //append hour to current date

    //if hour before current hour style grey, if hour same as current hour style red else style green
    moment(date_time, "H").isSame(dateNow, "H")
      ? ($(element).removeClass("past"),
        $(element).addClass("present"),
        $(element).removeClass("future"))
      : moment(date_time).isBefore(dateNow)
      ? ($(element).addClass("past"),
        $(element).removeClass("present"),
        $(element).removeClass("future"))
      : ($(element).removeClass("past"),
        $(element).removeClass("present"),
        $(element).addClass("future"));
  });
}

// TIMER
function startClockAndStylesTimer() {
  let checkHour = setInterval(() => {
    renderDateTimeInHeader();
    renderTextAreaStyle();
  }, 1000);
}

// SAVE BUTTON(S)
function saveActivityButton(event) {
  if ($("#alert").hasClass("cloak")) {
    //prevents multiple clicks thus timers while alert is displayed
    saveActivityToLocalStorage(event);
    toggleAlertVisibility();
    renderSavedIconCheckmark(event);
    hideSavedAlertAndCheckmarkIcon(event);
  }
}

// ALERT FUNCTIONS
function toggleAlertVisibility() {
  $("#alert").toggleClass("cloak");
}

function renderSavedIconCheckmark(event) {
  $(event.target).attr("src", "./assets/images/save-checkmark.png");
}

function hideSavedAlertAndCheckmarkIcon(event) {
  setTimeout(() => {
    toggleAlertVisibility();
    $(event.target).attr("src", "./assets/images/save-no-checkmark.png");
  }, 1000);
}

// LOCAL STORAGE FUNCTIONS
function saveActivityToLocalStorage(event) {
  let activityList = getActivtyListFromLocalStorage();

  activityInputText.each(function (index, element) {
    activity = $(element).val();
    if (
      $(event.target).attr("data-hour") === $(element).attr("data-hour") &&
      activityList.length > 0
    ) {
      //replace activity list with input value
      activityList.splice(index, 1, activity);
    } else if (activityList.length < 10) {
      activityList.push(activity);
    }
  });
  localStorage.setItem("dayPlannerActivities", JSON.stringify(activityList));
}

function storeLoginDate() {
  let lastLogInDate = moment().format("YYYY-MM-DD");
  localStorage.setItem("dayPlannerLastLogInDate", lastLogInDate);
  clearLocalStorage(lastLogInDate); //clear storage if current login !== prior login date
}

function clearLocalStorage(lastLogInDate) {
  ///clear storage if current login !== prior login date
  let currentLoginDate = moment().format("YYYY-MM-DD");
  if (lastLogInDate !== currentLoginDate) {
    localStorage.removeItem("dayPlannerActivities");
    localStorage.setItem("dayPlannerLastLogInDate", currentLoginDate);
  }
}

function getActivtyListFromLocalStorage() {
  let activityList = [];

  activityList = JSON.parse(localStorage.getItem("dayPlannerActivities"))
    ? (activityList = JSON.parse(localStorage.getItem("dayPlannerActivities")))
    : (activityList = []);
  let activity = "";

  return activityList;
}
