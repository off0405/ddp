new Swiper('.main-banner .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  
  effect : 'fade',
  pagination: { // 페이지 번호 사용
    el: '.main-banner .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.main-banner .swiper-button-next', // 다음 버튼 요소
    prevEl: '.main-banner .swiper-button-prev' // 이전 버튼 요소
  }
});






// 퀵버튼

const botn1 = document.querySelector('.btn1');
const botn2 = document.querySelector('.btn2');
const botn3 = document.querySelector('.btn3');
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 600) {
    gsap.to(botn3, 0.6, {
      opacity: 1,
      display: 'block',
    });

  } else {
    gsap.to(botn3, 0.6, {
      opacity: 0,
      display: 'none',
    });
  }; 
})

window.addEventListener('scroll', function () {
  if (window.scrollY > 600) {
    gsap.to(botn2, 0.6, {
      opacity: 1,
      display: 'block',
    });
  } else {
    gsap.to(botn2, 0.6, {
      opacity: 0,
      display: 'none',
    });
  }; 
})

window.addEventListener('scroll', function () {
  if (window.scrollY > 600) {
    gsap.to(botn1, 0.6, {
      opacity: 1,
      display: 'block',
    });
  } else {
    gsap.to(botn1, 0.6, {
      opacity: 0,
      display: 'none',
    });
  }; 
})


window.addEventListener('scroll', function () {
  if (window.scrollY > 600) {
    gsap.to(toTop, 0.6, {
      opacity: 1,
      display: 'block',
    });

  } else {
    gsap.to(toTop, 0.6, {
      opacity: 0,
      display: 'none',
    });
  }; 
})


// 

const sideQuck = document.querySelector('.side-quick-menu')
console.log(sideQuck);

// 스크롤 400 이상일 때, scroll이라는 클래스 추가


  


// new Swiper('.content2 .news', {
//   direction: 'horizontal', // 수평 슬라이드(기본값)
//   pagination: { // 페이지 번호 사용
//     el: '.news-pagination', // 페이지 번호 요소 선택자
//     clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
//   },
//   navigation: { // 슬라이드 이전/다음 버튼 사용
//     nextEl: '.news-button-next', // 다음 버튼 요소
//     prevEl: '.news-button-prev' // 이전 버튼 요소
//   }
// });