var paragraph = document.getElementById("Work");

fetch("https://raw.githubusercontent.com/daheergt/daheergt.github.io/refs/heads/main/work.txt")
    .then((res) => res.text())
    .then((text) => {
        paragraph.textContent += text + "";
    })