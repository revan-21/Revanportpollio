const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

const navLinks = document.querySelectorAll('.sidebar ul li a');

videoList.forEach(function(video){
    video.addEventListener("mouseover", function(){
        video.play();
        if(hoverSign){
            hoverSign.classList.add("active");
        }
    });

    video.addEventListener("mouseout", function(){
        video.pause();
        if(hoverSign){
            hoverSign.classList.remove("active");
        }
    });
});

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
    });
});