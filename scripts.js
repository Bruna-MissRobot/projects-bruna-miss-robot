// Mostrar mensagem após envio de contato
function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");

  if (mensagem) {
    mensagem.textContent = "Obrigada por entrar em contato! Em breve retornarei.";
    mensagem.style.color = "#ff69b4";
    mensagem.style.fontWeight = "bold";
    mensagem.style.opacity = "0"; // começa invisível para o fade funcionar
    mensagem.style.transition = "opacity 1s ease-in-out";

    // força o repaint para garantir o efeito
    void mensagem.offsetWidth;

    mensagem.style.opacity = "1";

    // Adiciona um timeout para desaparecer a mensagem após 5 segundos
    setTimeout(() => {
      mensagem.style.opacity = "0";
    }, 5000); // desaparece após 5 segundos
  }
}

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Mostrar descrição de ícone
function mostrarDescricao(texto) {
  const descricao = document.getElementById("descricao-favicon");
  if (descricao) {
    descricao.textContent = texto;
    descricao.style.opacity = "1";
  }
}

// Esconder descrição de ícone
function esconderDescricao() {
  const descricao = document.getElementById("descricao-favicon");
  if (descricao) {
    descricao.style.opacity = "0";
  }
}

// Inicializa animações AOS (se estiver usando a biblioteca AOS)
if (typeof AOS !== "undefined") {
  AOS.init();
}

// Botão "Voltar ao Topo"
const btnTop = document.getElementById("btnTop");

if (btnTop) {
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnTop.style.opacity = "1";
    } else {
      btnTop.style.opacity = "0";
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
