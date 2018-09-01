const button_enable_text = 'enable';
const button_disable_text = 'disable';
//var css_enabled = false;

document.addEventListener("DOMContentLoaded", function() {
    
    var button = document.getElementById('chrome-bg-toggle');
    
    chrome.runtime.sendMessage("query", function(response) {
        button.innerHTML = response;
        console.log("button text is "+button.innerHTML);
    });

    button.addEventListener('click', function() {
        var text = button.innerHTML;
        chrome.runtime.sendMessage(text);
        //chrome.tabs.sendMessage(text);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, text);
        });
        console.log("green background "+text+"d");
        if (text === button_enable_text) {
            button.innerHTML = button_disable_text;
            //css_enabled = true;
        } else if (text === button_disable_text) {
            button.innerHTML = button_enable_text;
            //css_enabled = false;
        }
    });
});
