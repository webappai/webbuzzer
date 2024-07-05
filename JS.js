var nameInput = document.getElementById("nameInput");
var buzzerButton = document.getElementById("buzzerButton");
var nameDisplay = document.getElementById("nameDisplay");

function showName() {
  var name = document.getElementById("name").value;
  nameDisplay.innerHTML = "Hai premuto il buzzer: " + name;
}

window.onload = function() {
  nameInput.style.display = "block";
  buzzerButton.style.display = "none";
};

document.getElementById("nameSubmit").addEventListener("click", function() {
  nameInput.style.display = "none";
  buzzerButton.style.display = "block";
});