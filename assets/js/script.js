let date = new Date;
let currentDay = $('#currentDay');
currentDay.text(date);

//section:query selector va*riables go here 👇
let saveIconButton = $('*#save-button');
let activityInput = $('*#activityInput');

//section:global variables go here 👇

//section:event listeners go here 👇
  $(saveIconButton).on('click', saveActivity)

//jQuery Interactions
// $('.alert').alert(close); //jQuery to hide the alert buttons on click of the X

//section:functions and event handlers go here 👇
  // SAVE BUTTON
  function saveActivity(event) {
    if ($('#alert').hasClass("cloak")) { //prevents multiple clicks thus timers while alert is displayed
      // console.log($(event.target).attr('data-hour'));
      saveToStorage();
      toggleAlertVisibility();
      renderAlertMessageAndIcon(event);
      renderSaveIconCheckmark(event)
      hideAlert();
      hideSaveIconCheckmark(event);
      // renderActivityStyle(event);
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
    }, 500);
  }

  function hideSaveIconCheckmark(event) {
    setTimeout(() => {
      $(event.target).attr('src', "./assets/images/save-no-checkmark.png");
    }, 500);
  }

  // RENDER ACTIVITY PAST, PRESENT, FUTURE STYLE
  function renderActivityStyle() {
    let dateNow = moment(); //determine current date
    let date_time = "";
    console.log(moment(dateNow).format("hh:mm:ss"));
    activityInput.each(function( index, element ) {
      date_time = moment(dateNow).set({'hour': $(element).attr('data-hour'), 'minute': $(element).attr('data-minutes')}); //append hour to current date 

      //if hour before current hour style grey, if hour same as current hour style red else style green
      moment(date_time, "H").isSame(dateNow, "H") ? ($(element).removeClass('past'), $(element).addClass('present'), $(element).removeClass('future')) : 
      moment(date_time).isBefore(dateNow) ? ($(element).addClass('past'), $(element).removeClass('present'), $(element).removeClass('future')) : 
      ($(element).removeClass('past'), $(element).removeClass('present'), $(element).addClass('future'))
    });
     
  }

  // RENDER STYLING WHEN DOCUMENT LOADS & BASED ON INTERVAL WHEN HOUR CHANGES
  $(document).ready(function() {
    console.log( "document loaded" );
    renderActivityStyle();
    // let checkHour = setInterval(() => {
    //   renderActivityStyle();
    // }, 1000);
    // clearInterval(checkHour);


    // $( window ).on( "load", function() {
    //     console.log( "window loaded" );
    // });
  });

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





