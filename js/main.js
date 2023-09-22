new Swiper('.main-banner .swiper', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  autoplay:{
		delay: 2000,
	},
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

// 스크롤 500 이상일 떄, black이라는 클래스 추가
// const quickSpan1 = document.querySelector('.quickspan1')

// if (window.scrollY > 500) {
//   quickSpan1.classList.add('.black')
// }





new Swiper('.content2 .swiper.news', {
  direction: 'horizontal', // 수평 슬라이드(기본값)
  // loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
  scrollbar: {
    el: '.content2 .newss.swiper-scrollbar',
    draggable: true,
    // dragSize: dragSize

  // pagination: { // 페이지 번호 사용
  //   el: '.content2 .newss.swiper-pagination', // 페이지 번호 요소 선택자
  //   clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.content2 .newss.swiper-button-next', // 다음 버튼 요소
    prevEl: '.content2 .newss.swiper-button-prev' // 이전 버튼 요소
  }
});



// ScrollMagic 사용
// 그 외 scrollreveal
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.9 // 화면의 80% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});







// const promotionEl = document.querySelector('section.promotion');
// const promotionToggleBtn = document.querySelector('.toggle-promotion');
// const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// // Quiz
// // 토글 버튼을 클릭했을 때 아래 기능을 실행
// // 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
// // 그렇지 않으면 숨김 처리!('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)
// promotionToggleBtn.addEventListener('click', function () {
//   // 실행할 코드들
//   if (promotionEl.classList.contains('hide')) {
//     // 보임 처리!
//     promotionEl.classList.remove('hide');
//     promotionToggleIcon.textContent = 'upload'; // 아이콘 모양 바꾸기
//   } else {
//     // 숨김 처리!
//     promotionEl.classList.add('hide');
//     promotionToggleIcon.textContent = 'download'; // 아이콘 모양 바꾸기
//   }
// });


const symbol = document.querySelector('.material-symbols-outlined.plus')

symbol.addEventListener('mouseover', function () {
  console.log(symbol);
  symbol.textContent = 'add_circle';
  // console.log('마우스');
});