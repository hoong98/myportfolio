const projectContainer = document.getElementById('project');
const btns = document.querySelectorAll('.btn');
const projectEle = document.querySelectorAll('.inner-container');
const projectTitle = document.querySelector(".project-title");
const togglerBtn = document.querySelector(".nav-toggle");
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll(".nav-item");
const mybutton = document.getElementById("myBtn");

projectContainer.addEventListener('click', function (e) {

    const id = e.target.dataset.id
    console.log(id);
    if (id) {
        btns.forEach(btn => {
            btn.classList.remove('active');

            e.target.classList.add('active')
        })

        projectEle.forEach(project => {
            project.classList.remove('active');

            const innerItem = document.getElementById(id)

            innerItem.classList.add('active')
        })
    }
})

togglerBtn.addEventListener('click', function () {
    if (navContainer.classList.contains('show')) {
        navContainer.classList.remove('show')
        navContainer.classList.add('close')
        setTimeout(() => {
            navContainer.classList.remove('close')
        }, 600)
    } else {
        navContainer.classList.add('show')
        navContainer.classList.remove('close')
    }
})

navItems.forEach(navItem => {
    navItem.addEventListener('click', function () {
        if (navContainer.classList.contains('show')) {
            navContainer.classList.remove('show')
            navContainer.classList.add('close')
            setTimeout(() => {
                navContainer.classList.remove('close')
            }, 600)
        } else {
            navContainer.classList.add('show')
            navContainer.classList.remove('close')
        }
    })
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function () { scrollFunction() };