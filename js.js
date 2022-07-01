const btn = document.getElementById('btn')

function toggleMenu(){
    const nav = document.getElementById('menu')
    nav.classList.toggle('active')

}

btn.addEventListener('click', toggleMenu)