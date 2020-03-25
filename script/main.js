const pushmenu = document.querySelector('#pushmenu')
const mainSidebar = document.querySelector('.main-sidebar')
const contentWrapper = document.querySelector('.content-wrapper')
const mainNavbar = document.querySelector('.main-header.navbar')
const layoutFixed = document.querySelector('.layout-fixed')

pushmenu.addEventListener('click', () => {
    mainSidebar.classList.add('show')
    layoutFixed.style.display = 'block'
})

layoutFixed.addEventListener('click', () => {
    layoutFixed.style.display = 'none'
    mainSidebar.classList.remove('show')
})

const resizeQuery = () => {
    if (window.outerWidth < 810) {
        mainSidebar.classList.remove('show')
        contentWrapper.style.marginLeft = '0px'
        contentWrapper.classList.add('extend')
        mainNavbar.classList.add('extend')
    } else {
        mainSidebar.classList.add('show')
        contentWrapper.style.marginLeft = '250px'
        contentWrapper.classList.remove('extend')
        mainNavbar.classList.remove('extend')
    }
}

// init function
window.addEventListener('resize', (e) => {
    resizeQuery()
})

resizeQuery()