/*     Variables     */
var saveBtn9am = $('#saveBtn-9am');
var textArea9am = $('#textarea-9am');


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



/*     Click Events     */
saveBtn9am.on('click', function() {
    var textNine = textArea9am.val();
    localStorage.setItem('textNine', JSON.stringify(textNine));
    console.log(textNine);
});



loadTextAreas();
setInterval(update, 1000);


   