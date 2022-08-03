/*           Variables          */
var clearBtn = $('#clear');

// Save button variables
var saveBtn9am = $('#saveBtn-9am');
var saveBtn10am = $('#saveBtn-10am');
var saveBtn11am = $('#saveBtn-11am');
var saveBtn12am = $('#saveBtn-12am');
var saveBtn1pm = $('#saveBtn-1pm');
var saveBtn2pm = $('#saveBtn-2pm');
var saveBtn3pm = $('#saveBtn-3pm');
var saveBtn4pm = $('#saveBtn-4pm');
var saveBtn5pm = $('#saveBtn-5pm');

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


/*    Functions    */

// Timer update function
var update = function () {
    var currentTime = moment().format('MMM Do, YYYY, HH:mm:ss');
    $('#currentDay').text(currentTime);
};

// Load Textarea's function
function loadTextAreas() {
    // Get Textarea from storage
    var stored9am = JSON.parse(localStorage.getItem('textNine'));
    var stored10am = JSON.parse(localStorage.getItem('textTen'));
    var stored11am = JSON.parse(localStorage.getItem('textEleven'));
    var stored12am = JSON.parse(localStorage.getItem('textTwelve'));
    var stored1pm = JSON.parse(localStorage.getItem('textOne'));
    var stored2pm = JSON.parse(localStorage.getItem('textTwo'));
    var stored3pm = JSON.parse(localStorage.getItem('textThree'));
    var stored4pm = JSON.parse(localStorage.getItem('textFour'));
    var stored5pm = JSON.parse(localStorage.getItem('textFive'));
    // Display Textarea on page
    textArea9am.val(stored9am);
    textArea10am.val(stored10am);
    textArea11am.val(stored11am);
    textArea12am.val(stored12am);
    textArea1pm.val(stored1pm);
    textArea2pm.val(stored2pm);
    textArea3pm.val(stored3pm);
    textArea4pm.val(stored4pm);
    textArea5pm.val(stored5pm);
};


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
        textArea1pm.addClass('future');
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
function refreshPage() {
    var currentTime = new Date();
    var futureTime = new Date();
    futureTime.setTime(futureTime.getTime() + 3600000);
    futureTime.setMinutes(0);
    futureTime.setMinutes(0);
    var refreshTime = (futureTime.getTime() - currentTime.getTime());
    setTimeout(function() {
        window.location.reload(true);
    }, refreshTime)
};

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
saveBtn9am.on('click', function () {
    var textNine = textArea9am.val();
    localStorage.setItem('textNine', JSON.stringify(textNine));
});

saveBtn10am.on('click', function () {
    var textTen = textArea10am.val();
    localStorage.setItem('textTen', JSON.stringify(textTen));
});

saveBtn11am.on('click', function () {
    var textEleven = textArea11am.val();
    localStorage.setItem('textEleven', JSON.stringify(textEleven));
});

saveBtn12am.on('click', function () {
    var textTwelve = textArea12am.val();
    localStorage.setItem('textTwelve', JSON.stringify(textTwelve));
});

saveBtn1pm.on('click', function () {
    var textOne = textArea1pm.val();
    localStorage.setItem('textOne', JSON.stringify(textOne));
});

saveBtn2pm.on('click', function () {
    var textTwo = textArea2pm.val();
    localStorage.setItem('textTwo', JSON.stringify(textTwo));
});

saveBtn3pm.on('click', function () {
    var textThree = textArea3pm.val();
    localStorage.setItem('textThree', JSON.stringify(textThree));
});

saveBtn4pm.on('click', function () {
    var textFour = textArea4pm.val();
    localStorage.setItem('textFour', JSON.stringify(textFour));
});

saveBtn5pm.on('click', function () {
    var textFive = textArea5pm.val();
    localStorage.setItem('textFive', JSON.stringify(textFive));
});

clearBtn.on('click', function(){
    clearStorage();
});


// Function for all buttons (wip)
/*$('button').each(function() {

});*/

timeCheck();
loadTextAreas();
setInterval(update, 1000);
refreshPage();

