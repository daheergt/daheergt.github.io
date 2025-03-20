var paragraph = document.getElementById("Work");

function replaceURLs(content) {
    if (!content) return;
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return content.replace(urlRegex, function (url) {
        var hyperlink = url;
        if (!hyperlink.match('^https?:\/\/')) { hyperlink = 'http://' + hyperlink; }
        return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
    });
}

fetch("https://raw.githubusercontent.com/daheergt/daheergt.github.io/refs/heads/main/work.txt")
    .then((res) => res.text())
    .then((text) => {

        paragraph.textContent += replaceURLs(text) + "";
    })

function Show() {
    document.getElementById("JobWind").style.transform = "translate(-50%, -50%) scale(1)";
}
function Hide() {
    document.getElementById("JobWind").style.transform = "translate(-50%, 50%) scale(0)";
}