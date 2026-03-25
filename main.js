// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle')
const navLinks = document.getElementById('navLinks')

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  navToggle.classList.toggle('active')
})

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    navToggle.classList.remove('active')
  })
})

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Add fade-in class to elements
document.querySelectorAll(
  '.service-card, .about-card, .area-pill, .contact-info, .contact-form-wrap, .about-text, .about-visual'
).forEach(el => {
  el.classList.add('fade-in')
  observer.observe(el)
})

// Stagger service cards
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.06}s`
})

document.querySelectorAll('.area-pill').forEach((pill, i) => {
  pill.style.transitionDelay = `${i * 0.04}s`
})

document.querySelectorAll('.about-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`
})

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm')
const formSuccess = document.getElementById('formSuccess')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // Collect form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // For now, show success message (you can hook this up to a backend later)
  // Options: Cloudflare Workers, Formspree, Web3Forms, etc.
  console.log('Form submitted:', data)

  contactForm.style.display = 'none'
  formSuccess.classList.add('visible')
})

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href')
    if (href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})
