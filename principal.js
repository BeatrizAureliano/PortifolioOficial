document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript carregado corretamente!");

  // Seleção dos elementos
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const languageToggle = document.getElementById("language-toggle");
  const flagIcon = document.getElementById("flag-icon");
  const aboutText = document.getElementById("about-text");

  // Seleção dos itens do menu
  const menuHome = document.getElementById("menu-home");
  const menuProjects = document.getElementById("menu-projects");
  const menuContact = document.getElementById("menu-contact");

  let isPortuguese = true;

  // 🔹 Função para alternar o tema
  themeToggle.addEventListener("click", function () {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
          themeToggle.textContent = "☀️";
      } else {
          themeToggle.textContent = "🌙";
      }

      console.log("Tema alternado!");
  });

  // 🔹 Função para alternar o idioma
  languageToggle.addEventListener("click", function () {
      if (isPortuguese) {
          flagIcon.src = "https://flagcdn.com/w40/us.png"; // Muda para bandeira dos EUA
          aboutText.textContent = "I am Beatriz Aureliano, a Software Engineering student focusing on Data Analysis. In this portfolio, you will find two practical projects using SQL, Excel, Power BI, and Tableau. My goal is to work as a Database Analyst or Data Scientist, transforming data into valuable insights. Explore my projects and get in touch!";

          // Traduz o menu para inglês
          menuHome.textContent = "Home";
          menuProjects.textContent = "Projects";
          menuContact.textContent = "Contact";

          isPortuguese = false;
      } else {
          flagIcon.src = "https://flagcdn.com/w40/br.png"; // Muda para bandeira do Brasil
          aboutText.textContent = "Sou Beatriz Aureliano, estudante de Engenharia de Software com foco em Análise de Dados. Neste portfólio, você encontrará dois projetos práticos utilizando SQL, Excel, Power BI e Tableau. Meu objetivo é atuar como Analista de Banco de Dados ou Cientista de Dados, transformando dados em insights valiosos. Explore meus projetos e entre em contato!";

          // Traduz o menu para português
          menuHome.textContent = "Início";
          menuProjects.textContent = "Projetos";
          menuContact.textContent = "Contato";

          isPortuguese = true;
      }

      console.log("Idioma alterado!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".About").classList.add("show");
});
