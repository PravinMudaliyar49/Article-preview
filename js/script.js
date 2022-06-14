let shareCont = document.querySelector('.share__cont');
let profileCont = document.querySelector('.profile__container');
let unclickedCont = document.querySelector('.unclicked__cont');
let clickedCont = document.querySelector('.clicked__cont');

let flag = true;

shareCont.addEventListener('click', e => {
    let viewportWidth = window.innerWidth;

    if (viewportWidth < 800) {

        if (flag) {
            profileCont.classList.toggle('clicked');
            unclickedCont.style.display = 'none';
            clickedCont.style.display = 'flex';
        } else {
            profileCont.classList.toggle('clicked');
            clickedCont.style.display = 'none';
            unclickedCont.style.display = 'flex';
        }

        flag = !flag;
    }
});

