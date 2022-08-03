/*           Variables          */
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

function timeCheck() {
   var hour = new Date().getHours();
   if (9 >= hour&&hour <= 10) {
    textArea9am.addClass('present')
   } else {
    textArea9am.addClass('past')
   };
};



/*     Click Events     */
saveBtn9am.on('click', function() {
    var textNine = textArea9am.val();
    localStorage.setItem('textNine', JSON.stringify(textNine));
    console.log(textNine);
});

saveBtn10am.on('click', function() {
    var textTen = textArea10am.val();
    localStorage.setItem('textTen', JSON.stringify(textTen));
    console.log(textTen);
});

saveBtn11am.on('click', function() {
    var textEleven = textArea11am.val();
    localStorage.setItem('textEleven', JSON.stringify(textEleven));
    console.log(textEleven);
});

saveBtn12am.on('click', function() {
    var textTwelve = textArea12am.val();
    localStorage.setItem('textTwelve', JSON.stringify(textTwelve));
    console.log(textTwelve);
});

saveBtn1pm.on('click', function() {
    var textOne = textArea1pm.val();
    localStorage.setItem('textOne', JSON.stringify(textOne));
    console.log(textOne);
});

saveBtn2pm.on('click', function() {
    var textTwo = textArea2pm.val();
    localStorage.setItem('textTwo', JSON.stringify(textTwo));
    console.log(textTwo);
});

saveBtn3pm.on('click', function() {
    var textThree = textArea3pm.val();
    localStorage.setItem('textThree', JSON.stringify(textThree));
    console.log(textThree);
});

saveBtn4pm.on('click', function() {
    var textFour = textArea4pm.val();
    localStorage.setItem('textFour', JSON.stringify(textFour));
    console.log(textFour);
});

saveBtn5pm.on('click', function() {
    var textFive = textArea5pm.val();
    localStorage.setItem('textFive', JSON.stringify(textFive));
    console.log(textFive);
});


// Function for all buttons (wip)
/*$('button').each(function() {

});*/

timeCheck();
loadTextAreas();
setInterval(update, 1000);


   