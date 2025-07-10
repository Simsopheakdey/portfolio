// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    // Close mobile menu if open
    const mobileMenu = document.querySelector(".mobile-menu")
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden")
    }
  })
})

// Mobile menu toggle
const mobileMenuButton = document.querySelector(".mobile-menu-button")
const mobileMenu = document.querySelector(".mobile-menu")

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("bg-sky-900")
    navbar.classList.remove("bg-sky-900/95")
  } else {
    navbar.classList.remove("bg-sky-900")
    navbar.classList.add("bg-sky-900/95")
  }
})

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-400")
    link.classList.add("text-gray-300")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.remove("text-gray-300")
      link.classList.add("text-blue-400")
    }
  })
})

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("animate-slide-up")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)

// Skill cards animation
const skillCards = document.querySelectorAll(".skill-card")
skillCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`
  card.classList.add("animate-fade-in")
})

// Project cards hover effect
const projectCards = document.querySelectorAll(".project-card")
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple form validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent
  submitButton.textContent = "Sending..."
  submitButton.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    contactForm.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 2000)
})

// Back to top button
const backToTopButton = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible")
    backToTopButton.classList.add("opacity-100", "visible")
  } else {
    backToTopButton.classList.add("opacity-0", "invisible")
    backToTopButton.classList.remove("opacity-100", "visible")
  }
})

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Social media links animation
const socialLinks = document.querySelectorAll(".social-link")
socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.2) rotate(5deg)"
  })

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1) rotate(0deg)"
  })
})

// Typing animation for hero section
const heroTitle = document.querySelector("#home h1")
if (heroTitle) {
  const text = heroTitle.innerHTML
  heroTitle.innerHTML = ""
  let i = 0

  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  // Start typing animation after page load
  setTimeout(typeWriter, 1000)
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector("#home")
  const speed = scrolled * 0.5

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`
  }
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to all sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section, index) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"

    setTimeout(() => {
      section.style.transition = "all 0.6s ease-out"
      section.style.opacity = "1"
      section.style.transform = "translateY(0)"
    }, index * 200)
  })

  // Initialize scroll animations
  animateOnScroll()
})

// Smooth reveal animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-up")
    }
  })
}, observerOptions)

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el)
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Cursor trail effect (optional enhancement)
let mouseX = 0
let mouseY = 0
const trail = []

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

// Performance optimization: Debounce scroll events
let ticking = false

function updateScrollEffects() {
  // Update navbar
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("bg-sky-900")
    navbar.classList.remove("bg-sky-900/95")
  } else {
    navbar.classList.remove("bg-sky-900")
    navbar.classList.add("bg-sky-900/95")
  }

  // Update back to top button
  const backToTopButton = document.getElementById("backToTop")
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible")
    backToTopButton.classList.add("opacity-100", "visible")
  } else {
    backToTopButton.classList.add("opacity-0", "invisible")
    backToTopButton.classList.remove("opacity-100", "visible")
  }

  ticking = false
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects)
    ticking = true
  }
}

window.addEventListener("scroll", requestTick)
