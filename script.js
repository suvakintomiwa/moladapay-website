// Add a simple scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature, .faq-item').forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 100) el.classList.add('visible')
  })
})
