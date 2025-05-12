document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.post').forEach(post => {
      const btn = post.querySelector('.read-more');
      const more = post.querySelector('.more-content');
      btn.addEventListener('click', () => {
        more.style.display = more.style.display === 'block' ? 'none' : 'block';
        btn.textContent = more.style.display === 'block' ? 'Gizle' : 'Devamını Oku';
        post.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
    // Abone formu (isteğe bağlı işlev)
    const form = document.getElementById('subscribe-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Teşekkürler! Bültenimize abone oldunuz.');
      form.reset();
    });
  });
  