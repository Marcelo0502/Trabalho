// Seleciona todos os elementos h3 na página
const h3s = document.querySelectorAll("h3");

// Adiciona um evento de mouseover em cada elemento h3
h3s.forEach((h3) => {
  h3.addEventListener("mouseover", () => {
    // Altera a cor de fundo e a cor da fonte do elemento h3
    h3.style.backgroundColor = "orange";
    h3.style.color = "white";
  });

  // Adiciona um evento de mouseout em cada elemento h3
  h3.addEventListener("mouseout", () => {
    // Remove a cor de fundo e a cor da fonte do elemento h3
    h3.style.backgroundColor = "";
    h3.style.color = "";
  });
});