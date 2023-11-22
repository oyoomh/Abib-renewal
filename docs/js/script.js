console.clear();

$(document).ready(function() {
  let lastScrollTop = 0;

  $(window).scroll(function() {
    let currentScroll = $(this).scrollTop();
    
    if (currentScroll > lastScrollTop && currentScroll > 0) {
      // 스크롤을 아래로 내렸을 때
      $('.pc-top-bar').addClass('hidden');
    } else {
      // 스크롤을 위로 올렸을 때
      $('.pc-top-bar').removeClass('hidden');
    }
    lastScrollTop = currentScroll;
  });
});


function MobileTopBar__init() {
  $(".mobile-top-bar__btn-show-side-bar").click(function () {
    MobileSideBar__show();
  });
}
// Mobile 사이드바 초기화

function MobilesideBar__init() {
  $(".mobile-side-bar, .mobile-side-bar__btn-close").click(function () {
    MobileSideBar__hide(); // 사이드바 숨김
    MobileMenuBox1__hide(); // 메뉴박스의 active 붙은 후손들 제거
  });

  $(".mobile-side-bar__content").click(function () {
    return false;
  });
}

// Mobile 사이드바 노출

function MobileSideBar__show() {
  $(".mobile-side-bar").addClass("active");
  $("html").addClass("mobile-side-bar-actived");
}

// Mobile 사이드바 숨김

function MobileSideBar__hide() {
  $(".mobile-side-bar").removeClass("active");
  $("html").removeClass("mobile-side-bar-actived");
}

// Mobile 사이드바 메뉴 구현 시작

function MobileMenuBox1__init() {
  $(".mobile-menu-box-1 ul > li").click(function () {
    let $this = $(this);

    $this.siblings(".active").find(" ul").stop().slideUp(300);
    $this.siblings(".active").removeClass("active");

    if ($this.hasClass("active")) {
      $this.find(" ul").stop().slideUp(300);
      $this.find(".active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.addClass("active");
      $this.find(" > ul").stop().slideDown(300);
    }
  });
  $(".mobile-menu-box-1 ul").click(function () {
    return false;
  });
}

function MobileMenuBox1__hide() {
  $(".mobile-menu-box-1 > ul ul").stop().slideUp(300);
  $(".mobile-menu-box-1 .active").removeClass("active");
}

// Mobile 사이드바 메뉴 구현 끝

MobileMenuBox1__init();
MobileTopBar__init();
MobilesideBar__init();
function PcBestItem__init() {
  $(".pc-products .content-1").addClass("active");
  $(".pc-products .txt-1").addClass("active");

  $(".pc-products .txt").click(function () {
    let $this = $(this);
    $this.addClass("active");
    $this.siblings().removeClass("active");

    function content__init(no) {
      if ($(`.pc-products .txt-${no}`).hasClass("active")) {
        $(`.pc-products .content-${no}`).addClass("active");
        $(`.pc-products .content-${no}`)
          .siblings(".pc-products .products__tab-content")
          .removeClass("active");
      }
    }

    content__init(1);
    content__init(2);
    content__init(3);
  });
}
PcBestItem__init();
function MobileBestItem__init() {
  $(".mobile-products .content-1").addClass("active");
  $(".mobile-products .txt-1").addClass("active");

  $(".mobile-products .txt").click(function () {
    let $this = $(this);
    $this.addClass("active");
    $this.siblings().removeClass("active");

    function content__init(no) {
      if ($(`.mobile-products .txt-${no}`).hasClass("active")) {
        $(`.mobile-products .content-${no}`).addClass("active");
        $(`.mobile-products .content-${no}`)
          .siblings(".mobile-products__tab-content")
          .removeClass("active");
      }
    }

    content__init(1);
    content__init(2);
    content__init(3);
  });
}
MobileBestItem__init();

function horizontalScroll() {
  const scrollSection = document.querySelector(".horizontal-scroll__section");
  const scrollContent = document.querySelector(".horizontal-scroll__content");

  gsap.to(scrollContent, {
    x: '-130%',
    ease: 'power3.easeOut',
    duration: 5,
    scrollTrigger: {
      trigger: scrollSection,
      start: "top top",
      end : "bottom+=500 top",
      scrub: 5,
      pin: true,
      // markers: true
    }
  });
}

horizontalScroll();

//.addTo(controller);
function mobileSwiper() {
  let swiper = new Swiper(".mobile-about", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false
    },
    // autoHeight: true,
    pagination: {
      el: ".mobile-about__pagination",
      clickable: true
    }
  });
}

mobileSwiper();

$(".button__wrap")
  .mouseenter(function () {
    $(".button__wrap").addClass("active");
  })
  .mouseleave(function () {
    $(".button__wrap").removeClass("active");
  });
