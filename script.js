/*==================Home-contents==========================*/

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Coder"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});


/*===================Toggle-button-contents================*/

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", ()=> {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
        }

