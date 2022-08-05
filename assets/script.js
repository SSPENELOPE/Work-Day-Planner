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

// Text area storage variables
var userText = [textArea9am, textArea10am, textArea11am, textArea12am, textArea1pm, textArea2pm, textArea3pm, textArea4pm, textArea5pm]
var storageArray = [];


/*          Functions           */
// Timer update function
var updateTime = function () {
    var currentTime = moment().format('MMM Do, YYYY, HH:mm:ss');
    $('#currentDay').text(currentTime);
};

// Load Textarea's function
function loadTextAreas() {
    // Set storeage array equal to the notes OR to an empty array
    storageArray = JSON.parse(localStorage.getItem('storedNotes')) || [];
    // Set the user text to loop through the array
    for (var i = 0; i < userText.length; i++) {
        userText[i].val(storageArray[i]);
    }
    // Console log what we are storing or what is stored
    console.log(userText);
    console.log(storageArray);
};

// Function to update the bg-colors based on time of day
$('.description').each(function() {
    var hour = new Date().getHours();
    //var hour = 14
    var time = $(this).data("time");
    console.log(hour,time);
    if (time < hour) {
        $(this).addClass('past')
    } else if (time > hour) {
        $(this).addClass('future');
    } else {
        $(this).addClass('present');
    }
  });

// Refresh the page on the top of every hour for automatic bg change
var currentTime = new Date();
var futureTime = new Date();
futureTime.setTime(futureTime.getTime() + 3600000);
futureTime.setMinutes(0);
futureTime.setMinutes(0);
var refreshTime = (futureTime.getTime() - currentTime.getTime());
setTimeout(function () {
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
};




/*     Click Events     */

// Clear Button
clearBtn.on('click', function () {
    clearStorage();
});

// Save button
$('.saveBtn').click(function () {
    // Save buttons For textarea's
    storageArray = [];
    for (var i = 0; i < userText.length; i++) {
        var text = userText[i].val();
        console.log(text);
        storageArray.push(text);
    };
    localStorage.setItem("storedNotes", JSON.stringify(storageArray));
});



/*     Functions run imediatly on page load       */
loadTextAreas();
setInterval(updateTime, 1000);


