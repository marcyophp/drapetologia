window.onload = function() {
  // Aguarde 300 milissegundos e, em seguida, esconda o elemento com o id "preloader"
  setTimeout(function() {
    var preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.transition = "slow"; // adicione uma transição se desejar
      preloader.style.opacity = 0;
      preloader.style.zIndex = -2;
    }
  }, 300);
};