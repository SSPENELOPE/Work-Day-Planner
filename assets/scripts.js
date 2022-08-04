/*           Variables          */
var clearBtn = $('#clear');

// Textarea variables
var textArea9am = $('#textarea-9am');
var textArea10am = $('#textarea-10am');
var textArea11am = $('#textarea-11am');
var textArea12am = $('#textarea-12am');
var textArea1pm = $('#textarea-1pm');
var textArea2pm = $('#textarea-2pm');
var textArea3pm = $('#textarea-3pm');
var textArea4pm = $('#textarea-4pm');
var textArea5pm = $('#textarea-5pm');
var userText = [textArea9am, textArea10am, textArea11am, textArea12am, textArea1pm, textArea2pm, textArea3pm, textArea4pm, textArea5pm] 
var storageArray = [];


/*    Functions    */
// Timer update function
var updateTime = function () {
    var currentTime = moment().format('MMM Do, YYYY, HH:mm:ss');
    $('#currentDay').text(currentTime);
};


/*  Troublesome Area  */ 
// Load Textarea's function
function loadTextAreas() {
     storageArray = JSON.parse(localStorage.getItem('storedNotes'))
    for (var i = 0; i < userText.length; i++) {
        userText.val() = storageArray[i];
    }
};

// Save button
$('.saveBtn').click(function(){
    // Save buttons For textarea's
    for (var i = 0; i < userText.length; i++ ) {
             var text = userText[i].val();
            };
         storageArray.push(text);
         localStorage.setItem("storedNotes", JSON.stringify(storageArray));
 });




// Function to update the bg-colors based on time of day
function timeCheck() {
    var hour = new Date().getHours();

    // 9am
    if (9 >= hour && hour < 10) {
        textArea9am.addClass('present');
    } else if (hour >= 10) {
        textArea9am.addClass('past');
    };
    if (hour < 9) {
        textArea9am.addClass('future')
    };

    // 10am
    if (10 >= hour && hour < 11) {
        textArea10am.addClass('present');
    } else if (hour >= 11) {
        textArea10am.addClass('past');
    };
    if (hour < 10) {
        textArea10am.addClass('future');
    };

    // 11am
    if (11 >= hour && hour < 12) {
        textArea11am.addClass('present');
    } else if (hour >= 12) {
        textArea11am.addClass('past');
    }
    if (hour < 11) {
        textArea11am.addClass('future');
    };

    // 12am
    if (12 >= hour && hour < 13) {
        textArea12am.addClass('present');
    } else if (hour >= 13) {
        textArea12am.addClass('past');
    };
    if (hour < 12) {
        textArea12am.addClass('future');
    };

    // 1pm
    if (13 >= hour && hour < 14) {
        textArea1pm.addClass('present');
    } else if (hour >= 14) {
        textArea1pm.addClass('past');
    };
    if (hour < 13) {
        textArea1pm.addClass('future');
    };

    // 2pm
    if (14 >= hour && hour < 15) {
        textArea2pm.addClass('present');
    } else if (hour >= 15) {
        textArea2pm.addClass('past');
    };
    if (hour < 14) {
        textArea2pm.addClass('future');
    };

    // 3pm
    if (15 >= hour && hour < 16) {
        textArea3pm.addClass('present');
    } else if (hour >= 16) {
        textArea3pm.addClass('past');
    };
    if (hour < 15) {
        textArea3pm.addClass('future');
    };

    // 4pm
    if (16 >= hour && hour < 17) {
        textArea4pm.addClass('present');
    } else if (hour >= 17) {
        textArea4pm.addClass('past');
    };
    if (hour < 16) {
        textArea4pm.addClass('future');
    };

    // 5pm
    if (17 >= hour && hour < 18) {
        textArea5pm.addClass('present');
    } else if (hour >= 18) {
        textArea5pm.addClass('past');
    };
    if (hour < 17) {
        textArea5pm.addClass('future');
    };
};

// Refresh the page on the top of every hour for automatic bg change
    var currentTime = new Date();
    var futureTime = new Date();
    futureTime.setTime(futureTime.getTime() + 3600000);
    futureTime.setMinutes(0);
    futureTime.setMinutes(0);
    var refreshTime = (futureTime.getTime() - currentTime.getTime());
    setTimeout(function() {
        window.location.reload(true);
    }, refreshTime);


// Clear Storage Function
function clearStorage() {
    localStorage.clear();
    textArea9am.val('');
    textArea10am.val('');
    textArea11am.val('');
    textArea12am.val('');
    textArea1pm.val('');
    textArea2pm.val('');
    textArea3pm.val('');
    textArea4pm.val('');
    textArea5pm.val('');
}




/*     Click Events     */


 
// Clear Button
clearBtn.on('click', function(){
    clearStorage();
});


timeCheck();
loadTextAreas();
setInterval(updateTime, 1000);


