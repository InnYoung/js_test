function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;  
}

// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }

// window.onload = countBodyChildren;

function popUp(winUrl) {
    window.open(winUrl, "popup", "width=320, height=480");
}


function prepareLinks() {
    if (!document.getElementById) return false;
    var links = document.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        if (links[i].getAttribute("class")=="popup") {
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

function prepareGallery() {
    if (!document.getElementById||!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        }
    }
}

window.onload = prepareGallery;