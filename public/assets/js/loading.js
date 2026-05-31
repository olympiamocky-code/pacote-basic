const loading = document.getElementById("loading");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

  // mostra loading
  loading.style.visibility = "visible";
  loading.style.opacity = "1";

  // espera e redireciona
  setTimeout(() => {
    window.location.href = "public/assets/pages/amor.html";
  }, 1500);

});