// Año automático en footer
document.getElementById('year').textContent = new Date().getFullYear();

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(q => {
q.addEventListener('click', () => {
const answer = q.nextElementSibling;
answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
});
});

// TODO: Calculator & GA events logic

