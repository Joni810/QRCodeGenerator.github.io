var qrcode = new QRCode("qrcode", {
  text: "https://www.youtube.com/@nudel2367",
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

function generateQRCode() {
  qrcode.clear();
  qrcode.text = qrcode.makeCode(
    `${document.getElementById("linkinput").value}`
  );
  console.log(qrcode.text);
}

function changetitle(arg) {
  arg = prompt("Enter a new title");
  if (arg == "") {
    alert("Title cannot be empty");
  }
  document.querySelector(".h3title").innerHTML = arg;
}
