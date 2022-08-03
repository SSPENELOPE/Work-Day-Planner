/*     Variables     */
var saveBtn9am = $('#saveBtn-9am');
var textArea9am = $('#textarea-9am');
var currentTime = moment().format('MMM Do, YYYY, HH:mm:ss');

/*    Functions    */

// Timer update function
var update = function () {
    $('#currentDay').text(currentTime);
};

// Load Textarea's function
function loadTextAreas() {
    
    // Not working, currently troubleshooting 
    var stored9am = JSON.parse(localStorage.getItem('text'));
    if (stored9am !== null) {
       textArea9am = stored9am;
    };
};

function backgroundColorUpdate() {
    if (currentTime < 10) {
        textArea9am.addClass('present');
    } else {
        textArea9am.addClass('past')
    };
};

/*     Click Events     */
saveBtn9am.on('click', function() {
    var text = textArea9am.val();
    localStorage.setItem('text', JSON.stringify(text));
    console.log(text);
});



backgroundColorUpdate();
loadTextAreas();
setInterval(update, 1000);


   