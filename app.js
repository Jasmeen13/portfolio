const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    for(let i = 0; i<sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', ()=>{
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn', '');
            sectionBtn[i].className += ' active-btn'
        })
    }
}
PageTransitions();