var css_enabled = false;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log("mesage received: "+message);
    if (message == "enable") {
        css_enabled = true;
        addCSS();
    } else if (message == "disable") {
        css_enabled = false;
    } else if (message == "query") {
        if (css_enabled) {
            sendResponse("disable");
        } else {
            sendResponse("enable");
        }
    }
});

chrome.tabs.onCreated.addListener(addCSS);
chrome.tabs.onUpdated.addListener(addCSS);

function addCSS() {
    console.log("tab created");
    if (css_enabled) {
        chrome.tabs.insertCSS({file: "bg-div.css", "allFrames": true}, function() {
            console.log("css inserted");
        });
        
    }
}