let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');
let icon = hamburger.querySelector('i');
// let sections = document.querySelector('section');
// let navlinks = querySelector('.header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navlinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });
// }

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');

    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    console.log('clicked');
    
})
