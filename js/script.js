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
    const shoppingCart = document.querySelector(".shopping-cart-button");
    const shoppingCartPopup = document.querySelector("#shopping-cart-popup");

    shoppingCart.addEventListener("click", function() {
      shoppingCartPopup.classList.toggle("open");
      shoppingCartPopup.classList.toggle("close");
    });
});

  