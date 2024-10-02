// JavaScript for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Hover animations for subject cards
const subjectCards = document.querySelectorAll('.subject-card');
subjectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
      card.classList.add('animate');
  });

  card.addEventListener('mouseout', () => {
      card.classList.remove('animate');
  });
});
