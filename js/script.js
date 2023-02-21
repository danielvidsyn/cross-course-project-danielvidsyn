window.addEventListener("load", function() {
    var toggleBtn = document.querySelector("#toggle");
    var overlay = document.querySelector("#overlay");
  
    if (toggleBtn && overlay) {
        toggleBtn.addEventListener("click", function() {
        toggleBtn.classList.toggle("active");
        overlay.classList.toggle("open");
      });
    } else {
      console.error("Elements not found.");
    }
});

  