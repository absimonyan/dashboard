var checkbox = document.getElementById('color-theme');


checkbox.addEventListener('click', function() {
    var exist = document.documentElement.getAttribute('data-theme', 'dark');

    if (exist) {
        document.getElementById('color-theme_icon').setAttribute("name", "sunny-outline");

        document.documentElement.removeAttribute('data-theme')
        trans()


    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        document.getElementById('color-theme_icon').setAttribute("name", "moon-outline");

    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('toggle', 'navbar', 'body-pd')

const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))