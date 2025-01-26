// Get a reference to the audio element
var audio = new Audio('Chinese New Year Music.mp3');

// Play the audio when the user clicks anywhere on the page
document.addEventListener('click', function() {
  audio.play();
  document.getElementById("musictext").textContent = "Turn UP your volume!";
  document.getElementById("main").classList.add('animate');
});


document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0, 0, 0, 0.7)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "none";
  document.body.appendChild(overlay);


  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";
  });
});
