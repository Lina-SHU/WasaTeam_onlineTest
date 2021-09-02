export default function themeType (para) {
  const body = document.querySelector('body')
  const nav = document.querySelector('nav')
  if (para) {
    body.classList.add('bg-secondary')
    nav.classList.add('navbar-dark', 'bg-dark', 'text-white')
  } else {
    body.classList.remove('bg-secondary')
    nav.classList.remove('navbar-dark', 'bg-dark', 'text-white')
  }
}
