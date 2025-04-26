function mostrarMensagem() {
    const mensagem = document.getElementById('mensagem');
    
    if (mensagem) {
      mensagem.textContent = "Obrigada por entrar em contato! Em breve retornarei.";
      mensagem.style.color = '#ff69b4';
      mensagem.style.fontWeight = 'bold';
      mensagem.style.opacity = '0'; // começa invisível para o fade funcionar
      mensagem.style.transition = 'opacity 1s ease-in-out';
      // força o repaint para garantir o efeito
      void mensagem.offsetWidth;
  
      mensagem.style.opacity = '1';
    }
  }

  setTimeout(() => {
    mensagem.style.opacity = '0';
  }, 5000); // desaparece após 5 segundos
  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight; // Altura do header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  function mostrarDescricao(texto) {
    const descricao = document.getElementById('descricao-favicon');
    descricao.textContent = texto;
    descricao.style.opacity = '1';
  }
  
  function esconderDescricao() {
    const descricao = document.getElementById('descricao-favicon');
    descricao.style.opacity = '0';
  }
  AOS.init();
