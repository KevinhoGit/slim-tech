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