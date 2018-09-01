var css_enabled = false;
const css_id = "bg-div";
const css_file = css_id + ".css";
const button_enable_text = 'enable';
const button_disable_text = 'disable';
//const css_file = "https://yixiaoyx.github.io/css/bg-div.css";

chrome.runtime.sendMessage("query", function(response) {
    if (response === button_disable_text) {
        css_enabled = true;
        addCSS();
    } else if (response === button_enable_text) {
        css_enabled = false;
        removeCSS();
    }
});

chrome.runtime.onMessage.addListener(function(message, sender){
    console.log("mesage received: "+message);
    if (message === button_enable_text) {
        css_enabled = true;
        addCSS();
    } else if (message === button_disable_text) {
        css_enabled = false;
        removeCSS();
    }
});

function addCSS() {
    //console.log("adding custom CSS");
    if (css_enabled) {
        /*chrome.tabs.insertCSS({file: "bg-div.css", "allFrames": true}, function() {
            console.log("css inserted");
        });*/
        var cssNode = document.getElementById(css_id);
        if (cssNode === null) {
            var link = document.createElement("link");
            link.href = chrome.extension.getURL(css_file);
            //link.href = css_file;
            link.id = css_id;
            link.type = "text/css";
            link.rel = "stylesheet";
            var html_head = document.getElementsByTagName("head");
            //console.log(html_head);
            html_head[0].appendChild(link);
            console.log("custom stylesheet inserted: "+link.href);
        }
        
    }
}

function removeCSS() {
    if (!css_enabled) {
        var cssNode = document.getElementById(css_id);
        if (cssNode != null) {
            cssNode.parentNode.removeChild(cssNode);
            console.log("custom stylesheet removed: " + cssNode.href);
        }
        
    }
}