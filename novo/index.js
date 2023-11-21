const body = document.body
let lastScroll = 0
const header = document.querySelector('header')
window.addEventListener('scroll', ()=>
{
    const currentScroll = window.scrollY

    if(currentScroll > lastScroll)
    {
        header.classList.remove('sty')
    }
    if(currentScroll == lastScroll)
    {
        header.classList.add('sty')
    }
    
    
})

let menuicone = document.querySelector('#menu-icone')
let navegacao = document.querySelector('.navegacao')

menuicone.onclick = () =>
{
    menuicone.classList.toggle('fa-duotone')
    navegacao.classList.toggle('ativa')
}


let sections = document.querySelectorAll('section')
let links = document.querySelectorAll('header navegacao a')






