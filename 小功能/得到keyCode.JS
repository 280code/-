let input = document.createElement("input");
document.body.appendChild(input);
$("input").keypress((e) => { console.log(e.keyCode) });