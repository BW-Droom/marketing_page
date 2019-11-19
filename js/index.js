
const breakpoints = {
    mobile: 800
};


//  click - hamburger icon
document.getElementsByClassName("menu-btn-icon")[0].addEventListener("click", function(e)
{
    //  nav links obj
    const $navLinks = document.getElementsByClassName("nav-bar")[0];

    //  check if nav bar is already open
    if (!$navLinks.classList.contains('open'))
    {
        $navLinks.classList.add('open');
    } else {
        $navLinks.classList.remove('open');
    }
});


//  listen to browser re-size
window.addEventListener("resize", function(e)
{
    //  check width of browser is more than mobile
    if (window.innerWidth > breakpoints.mobile)
    {
        //  nav links obj
        const $navLinks = document.getElementsByClassName("nav-bar")[0];
        //  reset mobile nav-bar
        $navLinks.classList.remove('open');
    }
});
