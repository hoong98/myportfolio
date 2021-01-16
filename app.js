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
    if (navContainer.classList.contains('fadeIn')) {
        navContainer.classList.remove('fadeIn')
        navContainer.classList.add('fadeOut')
        setTimeout(() => {
            navContainer.classList.remove('fadeOut')
        }, 500)
    } else {
        navContainer.classList.add('fadeIn')
        navContainer.classList.remove('fadeOut')
    }
})

navItems.forEach(navItem => {
    navItem.addEventListener('click', function () {
        if (navContainer.classList.contains('fadeIn')) {
            navContainer.classList.remove('fadeIn')
            navContainer.classList.add('fadeOut')
            setTimeout(() => {
                navContainer.classList.remove('fadeOut')
            }, 500)
        } else {
            navContainer.classList.add('fadeIn')
            navContainer.classList.remove('fadeOut')
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