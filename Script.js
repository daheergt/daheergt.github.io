var paragraph = document.getElementById("Work");

fetch("https://raw.githubusercontent.com/daheergt/daheergt.github.io/refs/heads/main/work.txt")
    .then((res) => res.text())
    .then((text) => {

        paragraph.textContent = text + "";
    })

function Show() {
    document.getElementById("JobWind").style.transform = "translate(-50%, -50%) scale(1)";
}
function Hide() {
    document.getElementById("JobWind").style.transform = "translate(-50%, 50%) scale(0)";
}