document.querySelectorAll('p').forEach(paragraph => {
    const wrapper = document.createElement('div');
    wrapper.className = 'classic-frame';
  
    // Paragrafı yeni oluşturduğumuz çerçeve içine al
    paragraph.parentNode.insertBefore(wrapper, paragraph);
    wrapper.appendChild(paragraph);
  });
  