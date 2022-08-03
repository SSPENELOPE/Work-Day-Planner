/*     Variables     */
var saveBtn9am = $('#saveBtn-9am');
var textArea9am = $('#textarea-9am');


/*    Functions    */

// Timer update function
var update = function () {
    var currentTime = moment();
    $('#currentDay').text(currentTime.format('MMM Do, YYYY, HH:mm:ss'));
};

// Load Textarea's function
function loadTextAreas() {
    var stored9am = JSON.parse(localStorage.getItem('text'));
    if (stored9am !== null) {
        textArea9am.val() = stored9am;
    };
};


/*     Click Events     */
saveBtn9am.on('click', function() {
    var text = textArea9am.val();
    localStorage.setItem('text9am', JSON.stringify(text));
    console.log(text);
});




loadTextAreas();
setInterval(update, 1000);