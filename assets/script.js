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

    // Display Textarea on page
    textArea9am.val(stored9am);
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

$('button').each(function() {

});

timeCheck();
loadTextAreas();
setInterval(update, 1000);


   