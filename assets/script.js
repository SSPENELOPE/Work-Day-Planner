/*     Variables     */
var saveBtn = $('#saveBtn1');
var textArea = $('#text-area1').val();


/*    Functions    */

// Timer update function
var update = function () {
    var currentTime = moment();
    $('#currentDay').text(currentTime.format('MMM Do, YYYY, HH:mm:ss'));
};


/*     Click Events     */
saveBtn.click(function() {
    localStorage.setItem('userText', JSON.stringify(textArea));
    console.log('userText');
});



setInterval(update, 1000);