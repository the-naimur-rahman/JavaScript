let title;
let paragraph;

document.getElementById("submit").onclick = function() {
    title = document.getElementById("title").value;
    document.getElementById("header1").textContent = title;

    paragraph = document.getElementById("paragraph").value;
    document.getElementById("paragraph1").textContent = paragraph;

    console.log(title);
    console.log(paragraph);
}