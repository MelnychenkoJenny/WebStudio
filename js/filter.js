const buttonsFilter = document.querySelectorAll('.filtr-item button');
const cardsItem = document.querySelectorAll('.projects-item');

buttonsFilter.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    
    cardsItem.forEach(card => {
      const project = card.dataset.category;
      if (category === 'all' || project === category) {
        return (card.style.display = 'block');
      }
      return (card.style.display = 'none');
    });
  });
});
