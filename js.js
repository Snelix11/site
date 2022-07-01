const btn = document.getElementById('btn')

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('menu')
    nav.classList.toggle('active')

}

btn.addEventListener('click', toggleMenu)
btn.addEventListener('touchstart', toggleMenu)