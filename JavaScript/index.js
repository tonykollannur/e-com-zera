const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-links-bar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('activate')
    })
}
if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('activate')
    })
}