var button_enable_text = 'enable';
var button_disable_text = 'disable';
//var css_enabled = false;

document.addEventListener("DOMContentLoaded", function() {
    
    var button = document.getElementById('chrome-bg-toggle');
    
    chrome.runtime.sendMessage("query", function(response) {
        button.innerHTML = response;
        console.log("button text is "+button.innerHTML);
    });

    button.addEventListener('click', function() {
        if (button.innerHTML == button_enable_text) {
            button.innerHTML = button_disable_text;
            //css_enabled = true;
            console.log("green background enabled");
            chrome.runtime.sendMessage(button_enable_text);
        } else if (button.innerHTML == button_disable_text) {
            button.innerHTML = button_enable_text;
            //css_enabled = false;
            console.log("green background disabled");
            chrome.runtime.sendMessage(button_disable_text);
        }
    });
});
