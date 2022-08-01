/*     Variables     */
var $saveBtn = $('saveBtn');
var $textArea = $('text-area');


/*    Functions    */

// Save text area function
function saveTextArea() {
    localStorage.setItem('textArea', JSON.stringify($textArea));
}

function loadTextArea() {
    var $savedText = JSON.parse(localStorage.getItem('$textArea'));
    if ($savedText !== null) {
        $textArea = $savedText;
    }
};

loadTextArea();