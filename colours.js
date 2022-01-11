// let COLOURS;

function getColours() {
    fetch('./colours.json')
    .then(response => response.json())
    .then(data => {
      // console.log("****");
      // console.log(data.colours);
      // console.log("****");
      // COLOURS = data.colours;
    })
  }

let COLOURS = [
  ["#dc8665", "#138086", "#534666", "#cd7672", "#eeb462"],
  ["#e8a496", "#3c4cad", "#240e8b", "#f04393", "#f9c449"],
  ["#7bd5f5", "#787ff6", "#4adede", "#1ca7ec", "#1f2f98"],
  ["#0b0742", "#120c6e", "#5e72eb", "#ff9190", "#fdc094"],
  ["#205072", "#329d9c", "#56c596", "#7be495", "#cff4d2"],
  ["#fbeee6", "#ffe5d8", "#ffcad4", "#f3abb6", "#9f8189"],
  ["#031b88", "#6096fd", "#aab6fb", "#fb7b8e", "#faa7b8"]
];
  