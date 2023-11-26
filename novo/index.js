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
    menuicone.classList.toggle('fa-bars-sort')
    navegacao.classList.toggle('ativa')
}
navegacao.onclick=()=>
{
    navegacao.classList.toggle('ativa')
}

let sections = document.querySelectorAll('section')
let links = document.querySelectorAll('header navegacao a')





const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};




const sla = document.querySelectorAll('a');
sla.onclick(()=>
{
    sla.classList.remove('ativa')
})