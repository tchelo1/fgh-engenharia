// Atualizar ano do rodapé automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Abrir e fechar menu mobile
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-list").classList.toggle("show");
});
