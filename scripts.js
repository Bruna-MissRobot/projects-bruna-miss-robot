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

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 20; // ajuste opcional
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  