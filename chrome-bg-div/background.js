var css_enabled = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("mesage received: "+message);
    if (message == "enable") {
        css_enabled = true;
        //addCSS();
    } else if (message == "disable") {
        css_enabled = false;
        //removeCSS();
    } else if (message == "query") {
        if (css_enabled) {
            sendResponse("disable");
        } else {
            sendResponse("enable");
        }
    }
});

