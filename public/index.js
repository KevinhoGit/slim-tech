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




const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
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