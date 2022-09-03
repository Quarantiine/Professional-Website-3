// floating-icon: =====
const floatingIcon = document.querySelector('.floating-icon');
const navDescriptiveContainer = document.querySelector('.nh-descriptive-container');

const floatingIconAppearence = ()=> {
    if (navDescriptiveContainer.getBoundingClientRect().y < 120) {
        floatingIcon.classList.add('floating-icon-toggle');
    } else {
        floatingIcon.classList.remove('floating-icon-toggle');
    }
};
setInterval(()=> {
    floatingIconAppearence();
}, 1);

const manuverTop = ()=> {
    window.scrollTo(0,0);
};
floatingIcon.addEventListener('click', ()=> {
    manuverTop();
});

// nav: =====
const mainNav = document.querySelector('.nav');

const navBackgroundAppearence = ()=> {
    window.scrollY >= 100 ? mainNav.classList.add('nav-toggle') : null;
    window.scrollY < 100 ? mainNav.classList.remove('nav-toggle') : null;
};

setInterval(()=> {
    navBackgroundAppearence();
}, 1);

// nav-header-container: =====
const slideShowNavHeader = document.querySelector('.slide-show-nav-header-container');
const leftArrow = document.querySelectorAll('.left-arrow');
const rightArrow = document.querySelectorAll('.right-arrow');

let slideShowManuverSpeed = 10000;
let slideShowManuverSpeedReset = 30000;
const slideShowManuver = ()=> {
    let n = 1000;
    n+=0;
    slideShowNavHeader.scrollBy(n, 0);
};
const slideShowReset = ()=> {
    slideShowNavHeader.scrollTo(0, 0);
};
setInterval(()=> {
    slideShowManuver();
}, slideShowManuverSpeed);
setInterval(()=> {
    slideShowReset() 
}, slideShowManuverSpeedReset);


const leftArrowsSystem = ()=> {
    for (let i = 0; i < leftArrow.length; i++) {
        const element = leftArrow[i];
        element.addEventListener('click', ()=> {
            slideShowNavHeader.scrollBy(-1000, 0);
        });
    }
};
const rightArrowsSystem = ()=> {
    for (let i = 0; i < rightArrow.length; i++) {
        const element = rightArrow[i];
        element.addEventListener('click', ()=> {
            slideShowNavHeader.scrollBy(1000, 0);
        });
    }
};
setTimeout(()=> {
    leftArrowsSystem();
    rightArrowsSystem();
});

// descriptive-num-container: =====
const cs2DescriptNumbers = document.querySelectorAll('.cs2-descript-numbers');
const contentSection1 = document.querySelector('.content-section-1');
let cs2DescriptNumCount = 0;
let cs2DescriptNumCount2 = 0;

const numberIncreaseSystem = ()=> {
    if (contentSection1.getBoundingClientRect().y <= 200) {
        cs2DescriptNumbers[0].textContent = cs2DescriptNumCount;
        cs2DescriptNumCount++;
    }
};
const cs2DecriptionInterval = setInterval(()=> {
    numberIncreaseSystem()
    if (cs2DescriptNumCount == 451) {
        clearInterval(cs2DecriptionInterval);
    }
}, 10);

const numberIncreaseSystem2 = ()=> {
    if (contentSection1.getBoundingClientRect().y <= 200) {
        cs2DescriptNumbers[1].textContent = cs2DescriptNumCount2;
        cs2DescriptNumCount2++;
    }
};
const cs2DecriptionInterval2 = setInterval(()=> {
    numberIncreaseSystem2()
    if (cs2DescriptNumCount2 == 55) {
        clearInterval(cs2DecriptionInterval2);
    }
}, 100);

// content-box-container : =====
const imgContainerImg = document.querySelectorAll('.csc-imgs');
const cbTitle = document.querySelectorAll('.cb-title');
const btnContainer = document.querySelectorAll('.btn-container p');

btnContainer[0].classList.add('btn-p-toggle');

const contentBoxImgTitleChange1 = ()=> {
    btnContainer[0].classList.add('btn-p-toggle');
    btnContainer[1].classList.remove('btn-p-toggle');
    btnContainer[2].classList.remove('btn-p-toggle');

    imgContainerImg[0].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab1.png';
    cbTitle[0].textContent = 'Business Conference';

    imgContainerImg[1].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab2.png';
    cbTitle[1].textContent = 'Engineering Survey Week';

    imgContainerImg[2].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab3.png';
    cbTitle[2].textContent = 'Lightning Metric Meetup';

    for (let i = 0; i < cbTitle.length; i++) {
        const element = cbTitle[i];
        element.classList.add('cb-h1-toggle');
    }
};

const contentBoxImgTitleChange2 = ()=> {
    btnContainer[1].classList.add('btn-p-toggle');
    btnContainer[0].classList.remove('btn-p-toggle');
    btnContainer[2].classList.remove('btn-p-toggle');

    imgContainerImg[2].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab1.png';
    cbTitle[2].textContent = 'Business Conference';

    imgContainerImg[0].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab2.png';
    cbTitle[0].textContent = 'Engineering Survey Week';

    imgContainerImg[1].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab3.png';
    cbTitle[1].textContent = 'Lightning Metric Meetup';

    for (let i = 0; i < cbTitle.length; i++) {
        const element = cbTitle[i];
        element.classList.add('cb-h1-toggle');
    }
};

const contentBoxImgTitleChange3 = ()=> {
    btnContainer[2].classList.add('btn-p-toggle');
    btnContainer[1].classList.remove('btn-p-toggle');
    btnContainer[0].classList.remove('btn-p-toggle');

    imgContainerImg[1].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab1.png';
    cbTitle[1].textContent = 'Business Conference';

    imgContainerImg[2].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab2.png';
    cbTitle[2].textContent = 'Engineering Survey Week';

    imgContainerImg[0].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab3.png';
    cbTitle[0].textContent = 'Lightning Metric Meetup';

    for (let i = 0; i < cbTitle.length; i++) {
        const element = cbTitle[i];
        element.classList.add('cb-h1-toggle');
    }
};

btnContainer[0].addEventListener('click', ()=> {
    contentBoxImgTitleChange1();
});
btnContainer[1].addEventListener('click', ()=> {
    contentBoxImgTitleChange2();
});
btnContainer[2].addEventListener('click', ()=> {
    contentBoxImgTitleChange3();
});

// content-section-6: =================

// content-section-6b: 
const radientCircleBtn = document.querySelector('.radient-circle');
const modalBg = document.querySelector('.radient-circle-modal-bg');
const clearBox = document.querySelector('.clear-box');
const modalIframe = document.querySelector('.modal-iframe');

const modalBgSystem = ()=> {
    modalBg.classList.add('radient-circle-modal-bg-toggle');
    modalIframe.src = 'https://www.youtube.com/embed/BS4TUd7FJSg';
};
const clearBoxExitSystem = ()=> {
    modalBg.classList.remove('radient-circle-modal-bg-toggle');
    modalIframe.src = 'https://';
};

radientCircleBtn.addEventListener('click', ()=> {
    modalBgSystem();
});
clearBox.addEventListener('click', ()=> {
    clearBoxExitSystem()
});

// content-section-6c: 
const cs6cAvatarContainer = document.querySelector('.cs6c-avatar-container');
const toggleBtns = document.querySelectorAll('.toggle-btn');
let n = 500;

toggleBtns[0].classList.add('toggle-btn-toggle');
const scrollSlideManuver = ()=> {
    cs6cAvatarContainer.scrollTo(n,0);
    n+=500;

    if (n == 500) {
        toggleBtns[0].classList.add('toggle-btn-toggle');
        toggleBtns[1].classList.remove('toggle-btn-toggle');
        toggleBtns[2].classList.remove('toggle-btn-toggle');
    }

    if (n == 1000) {
        toggleBtns[1].classList.add('toggle-btn-toggle');
        toggleBtns[2].classList.remove('toggle-btn-toggle');
        toggleBtns[0].classList.remove('toggle-btn-toggle');
    }

    if (n == 1500) {
        toggleBtns[2].classList.add('toggle-btn-toggle');
        toggleBtns[0].classList.remove('toggle-btn-toggle');
        toggleBtns[1].classList.remove('toggle-btn-toggle');
    }

    // console.log(n)
};
setInterval(()=> {
    n == 1500 ? n = 0 : null;
}, 30000);
setInterval(()=> {
    scrollSlideManuver();
}, 10000);

toggleBtns[0].addEventListener('click', ()=> {
    cs6cAvatarContainer.scrollTo(0,0);
    toggleBtns[0].classList.add('toggle-btn-toggle');
    toggleBtns[1].classList.remove('toggle-btn-toggle');
    toggleBtns[2].classList.remove('toggle-btn-toggle');
});

toggleBtns[1].addEventListener('click', ()=> {
    cs6cAvatarContainer.scrollTo(500,0);
    toggleBtns[1].classList.add('toggle-btn-toggle');
    toggleBtns[0].classList.remove('toggle-btn-toggle');
    toggleBtns[2].classList.remove('toggle-btn-toggle');
});

toggleBtns[2].addEventListener('click', ()=> {
    cs6cAvatarContainer.scrollTo(1000,0);
    toggleBtns[2].classList.add('toggle-btn-toggle');
    toggleBtns[1].classList.remove('toggle-btn-toggle');
    toggleBtns[0].classList.remove('toggle-btn-toggle');
});
