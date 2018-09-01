var css_enabled = false;
//const css_id = "bg-div";
//const css_file = css_id + ".css";
//const css_file = "https://yixiaoyx.github.io/css/bg-div.css";

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

//chrome.tabs.onCreated.addListener(addCSS);
//chrome.tabs.onUpdated.addListener(addCSS);

/*
function addCSS() {
    //console.log("adding custom CSS");
    if (css_enabled) {
        //chrome.tabs.insertCSS({file: "bg-div.css", "allFrames": true}, function() {
        //    console.log("css inserted");
        //});
        var cssNode = document.getElementById(css_id);
        if (cssNode === null) {
            var link = document.createElement("link");
            //link.href = chrome.extension.getURL(css_file);
            link.href = css_file;
            link.id = css_id;
            link.type = "text/css";
            link.rel = "stylesheet";
            var html_head = document.getElementsByTagName("head");
            console.log(html_head);
            html_head[0].appendChild(link);
            console.log("custom stylesheet inserted: "+link.href);
        }
        
    }
}

function removeCSS() {
    if (!css_enabled) {
        var cssNode = document.getElementById(css_id);
        cssNode && cssNode.parentNode.removeChild(cssNode);
        console.log("custom stylesheet removed: " + cssNode.href);
    }
}
*/