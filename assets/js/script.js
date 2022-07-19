let date = new Date;
let currentDay = $('#currentDay');
currentDay.text(date);


//section:query selector variables go here 👇
// let timeBlockContainer = $('#container');
// let saveIconButton = document.getElementById('save-button');
let saveIconButton = $('#save-button');

//section:global variables go here 👇

//create timeblocks
// let hourOfDay = "<p>";
// let event = "<input>";
// let saveButton = "<p>";

//section:event listeners go here 👇
  $(saveIconButton).on('click', saveActivity)

//jQuery Interactions
// $('.alert').alert(close); //jQuery to hide the alert buttons on click of the X

//section:functions and event handlers go here 👇
  // SAVE BUTTON
  function saveActivity(event) {
    saveToStorage();
    if ($('#alert').hasClass("cloak")) { //prevents multiple clicks thus timers while alert is displayed
      console.log('click');
      toggleAlertVisibility();
      renderAlertMessageAndIcon(event);
      renderSaveIconCheckmark(event)
      hideAlert();
      hideSaveIconCheckmark(event);
    }
    // $(saveIconButton).off("click");
  }

  // ALERT FUNCTIONS
  function toggleAlertVisibility() {
    $('#alert').toggleClass('cloak');
  }
  
  function renderAlertMessageAndIcon() {
    $('#alert').text(`Appointment Saved to localStorage ✅`);

    // $(event.target).attr("data-status") === 'not-saved' ? (
    //   $(event.target).attr("data-status", "saved"),
    //   $('#alert').text(`Appointment Saved to localStorage ✅`)
    //   //save to local storage
    //   ) : 
    //   ($(event.target).attr("data-status", "not-saved"),
    //     $('#alert').text(`Appointment Removed from localStorage ❌`
    //     //remove from local storage
    //     )
    //   )
  }

  function renderSaveIconCheckmark(event) {
    $(event.target).attr('src', "./assets/images/save-checkmark.png");
  }
  
  function hideAlert(event) {
    setTimeout(() => {
      toggleAlertVisibility();
    }, 2000);
  }

  function hideSaveIconCheckmark(event) {
    setTimeout(() => {
      $(event.target).attr('src', "./assets/images/save-no-checkmark.png");
    }, 2000);
  }

  // LOCAL STORAGE FUNCTIONS
  function saveToStorage() {
    // TBD
  }

  function removeFromStoraget() {
    // TBD
  }

  function getFromStorage() {
    // TBD
  }



