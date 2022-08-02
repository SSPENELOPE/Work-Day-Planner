/*     Variables     */
var saveBtn9am = $('#saveBtn-9am');
var textArea9am = $('#textarea-9am').val();


/*    Functions    */

// Timer update function
var update = function () {
    var currentTime = moment();
    $('#currentDay').text(currentTime.format('MMM Do, YYYY, HH:mm:ss'));
};


/*     Click Events     */
saveBtn9am.on('click', function() {
    localStorage.setItem('userText', JSON.stringify(textArea9am));
    console.log('userText');
});



setInterval(update, 1000);