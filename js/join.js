const nav = () => {
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
};
nav();

let form = "https://forms.gle/CcovkBRfzBK2ijnW8";
function joinNow() {
    window.open(form)
}
