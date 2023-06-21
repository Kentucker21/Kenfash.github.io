function initApp(){
    const hamburgerBtn=document.getElementById('hamburger-button')
    const mobileMenu=document.getElementById('mobile-menu')

    function togglemenu(){
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click',togglemenu)
    mobileMenu.addEventListener('click',togglemenu)
}

document.addEventListener('DOMContentLoaded',initApp())
