var paragraph = document.getElementById("WorkExperience");

content = "";

fetch("work.txt")
    .then((res) => res.text())
    .then((text) => {
        content += text
    })

paragraph.textContent += content;
