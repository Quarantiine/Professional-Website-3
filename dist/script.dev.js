"use strict";

// floating-icon: =====
var floatingIcon = document.querySelector('.floating-icon');
var navDescriptiveContainer = document.querySelector('.nh-descriptive-container');

var floatingIconAppearence = function floatingIconAppearence() {
  if (navDescriptiveContainer.getBoundingClientRect().y < 120) {
    floatingIcon.classList.add('floating-icon-toggle');
  } else {
    floatingIcon.classList.remove('floating-icon-toggle');
  }
};

setInterval(function () {
  floatingIconAppearence();
}, 1);

var manuverTop = function manuverTop() {
  window.scrollTo(0, 0);
};

floatingIcon.addEventListener('click', function () {
  manuverTop();
}); // nav: =====

var mainNav = document.querySelector('.nav');

var navBackgroundAppearence = function navBackgroundAppearence() {
  window.scrollY >= 100 ? mainNav.classList.add('nav-toggle') : null;
  window.scrollY < 100 ? mainNav.classList.remove('nav-toggle') : null;
};

setInterval(function () {
  navBackgroundAppearence();
}, 1); // nav-header-container: =====

var slideShowNavHeader = document.querySelector('.slide-show-nav-header-container');
var leftArrow = document.querySelectorAll('.left-arrow');
var rightArrow = document.querySelectorAll('.right-arrow');
var slideShowManuverSpeed = 10000;
var slideShowManuverSpeedReset = 30000;

var slideShowManuver = function slideShowManuver() {
  var n = 1000;
  n += 0;
  slideShowNavHeader.scrollBy(n, 0);
};

var slideShowReset = function slideShowReset() {
  slideShowNavHeader.scrollTo(0, 0);
};

setInterval(function () {
  slideShowManuver();
}, slideShowManuverSpeed);
setInterval(function () {
  slideShowReset();
}, slideShowManuverSpeedReset);

var leftArrowsSystem = function leftArrowsSystem() {
  for (var i = 0; i < leftArrow.length; i++) {
    var element = leftArrow[i];
    element.addEventListener('click', function () {
      slideShowNavHeader.scrollBy(-1000, 0);
    });
  }
};

var rightArrowsSystem = function rightArrowsSystem() {
  for (var i = 0; i < rightArrow.length; i++) {
    var element = rightArrow[i];
    element.addEventListener('click', function () {
      slideShowNavHeader.scrollBy(1000, 0);
    });
  }
};

setTimeout(function () {
  leftArrowsSystem();
  rightArrowsSystem();
}); // descriptive-num-container: =====

var cs2DescriptNumbers = document.querySelectorAll('.cs2-descript-numbers');
var contentSection1 = document.querySelector('.content-section-1');
var cs2DescriptNumCount = 0;
var cs2DescriptNumCount2 = 0;

var numberIncreaseSystem = function numberIncreaseSystem() {
  if (contentSection1.getBoundingClientRect().y <= 200) {
    cs2DescriptNumbers[0].textContent = cs2DescriptNumCount;
    cs2DescriptNumCount++;
  }
};

var cs2DecriptionInterval = setInterval(function () {
  numberIncreaseSystem();

  if (cs2DescriptNumCount == 451) {
    clearInterval(cs2DecriptionInterval);
  }
}, 10);

var numberIncreaseSystem2 = function numberIncreaseSystem2() {
  if (contentSection1.getBoundingClientRect().y <= 200) {
    cs2DescriptNumbers[1].textContent = cs2DescriptNumCount2;
    cs2DescriptNumCount2++;
  }
};

var cs2DecriptionInterval2 = setInterval(function () {
  numberIncreaseSystem2();

  if (cs2DescriptNumCount2 == 55) {
    clearInterval(cs2DecriptionInterval2);
  }
}, 100); // content-box-container : =====

var imgContainerImg = document.querySelectorAll('.csc-imgs');
var cbTitle = document.querySelectorAll('.cb-title');
var btnContainer = document.querySelectorAll('.btn-container p');
btnContainer[0].classList.add('btn-p-toggle');

var contentBoxImgTitleChange1 = function contentBoxImgTitleChange1() {
  btnContainer[0].classList.add('btn-p-toggle');
  btnContainer[1].classList.remove('btn-p-toggle');
  btnContainer[2].classList.remove('btn-p-toggle');
  imgContainerImg[0].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab1.png';
  cbTitle[0].textContent = 'Business Conference';
  imgContainerImg[1].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab2.png';
  cbTitle[1].textContent = 'Engineering Survey Week';
  imgContainerImg[2].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab3.png';
  cbTitle[2].textContent = 'Lightning Metric Meetup';

  for (var i = 0; i < cbTitle.length; i++) {
    var element = cbTitle[i];
    element.classList.add('cb-h1-toggle');
  }
};

var contentBoxImgTitleChange2 = function contentBoxImgTitleChange2() {
  btnContainer[1].classList.add('btn-p-toggle');
  btnContainer[0].classList.remove('btn-p-toggle');
  btnContainer[2].classList.remove('btn-p-toggle');
  imgContainerImg[2].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab1.png';
  cbTitle[2].textContent = 'Business Conference';
  imgContainerImg[0].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab2.png';
  cbTitle[0].textContent = 'Engineering Survey Week';
  imgContainerImg[1].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab3.png';
  cbTitle[1].textContent = 'Lightning Metric Meetup';

  for (var i = 0; i < cbTitle.length; i++) {
    var element = cbTitle[i];
    element.classList.add('cb-h1-toggle');
  }
};

var contentBoxImgTitleChange3 = function contentBoxImgTitleChange3() {
  btnContainer[2].classList.add('btn-p-toggle');
  btnContainer[1].classList.remove('btn-p-toggle');
  btnContainer[0].classList.remove('btn-p-toggle');
  imgContainerImg[1].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab1.png';
  cbTitle[1].textContent = 'Business Conference';
  imgContainerImg[2].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab2.png';
  cbTitle[2].textContent = 'Engineering Survey Week';
  imgContainerImg[0].src = 'https://themexbd.com/poket/conference/wp-content/uploads/2021/10/tab3.png';
  cbTitle[0].textContent = 'Lightning Metric Meetup';

  for (var i = 0; i < cbTitle.length; i++) {
    var element = cbTitle[i];
    element.classList.add('cb-h1-toggle');
  }
};

btnContainer[0].addEventListener('click', function () {
  contentBoxImgTitleChange1();
});
btnContainer[1].addEventListener('click', function () {
  contentBoxImgTitleChange2();
});
btnContainer[2].addEventListener('click', function () {
  contentBoxImgTitleChange3();
}); // content-section-6: =================
// content-section-6b: 

var radientCircleBtn = document.querySelector('.radient-circle');
var modalBg = document.querySelector('.radient-circle-modal-bg');
var clearBox = document.querySelector('.clear-box');
var modalIframe = document.querySelector('.modal-iframe');

var modalBgSystem = function modalBgSystem() {
  modalBg.classList.add('radient-circle-modal-bg-toggle');
  modalIframe.src = 'https://www.youtube.com/embed/BS4TUd7FJSg';
};

var clearBoxExitSystem = function clearBoxExitSystem() {
  modalBg.classList.remove('radient-circle-modal-bg-toggle');
  modalIframe.src = 'https://';
};

radientCircleBtn.addEventListener('click', function () {
  modalBgSystem();
});
clearBox.addEventListener('click', function () {
  clearBoxExitSystem();
}); // content-section-6c: 

var cs6cAvatarContainer = document.querySelector('.cs6c-avatar-container');
var toggleBtns = document.querySelectorAll('.toggle-btn');
var n = 500;
toggleBtns[0].classList.add('toggle-btn-toggle');

var scrollSlideManuver = function scrollSlideManuver() {
  cs6cAvatarContainer.scrollTo(n, 0);
  n += 500;

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
  } // console.log(n)

};

setInterval(function () {
  n == 1500 ? n = 0 : null;
}, 30000);
setInterval(function () {
  scrollSlideManuver();
}, 10000);
toggleBtns[0].addEventListener('click', function () {
  cs6cAvatarContainer.scrollTo(0, 0);
  toggleBtns[0].classList.add('toggle-btn-toggle');
  toggleBtns[1].classList.remove('toggle-btn-toggle');
  toggleBtns[2].classList.remove('toggle-btn-toggle');
});
toggleBtns[1].addEventListener('click', function () {
  cs6cAvatarContainer.scrollTo(500, 0);
  toggleBtns[1].classList.add('toggle-btn-toggle');
  toggleBtns[0].classList.remove('toggle-btn-toggle');
  toggleBtns[2].classList.remove('toggle-btn-toggle');
});
toggleBtns[2].addEventListener('click', function () {
  cs6cAvatarContainer.scrollTo(1000, 0);
  toggleBtns[2].classList.add('toggle-btn-toggle');
  toggleBtns[1].classList.remove('toggle-btn-toggle');
  toggleBtns[0].classList.remove('toggle-btn-toggle');
});
