"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiperHeader = new Swiper(".headerBlock__slider--js", {
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
		},
		spaceBetween: 0,
    // autoplay: {
    //   delay: 4000,
    // },
		loop: true,
	});

	const swiperNews = new Swiper("#sSlider .sSlider__slider--js", {
		slidesPerView: 2,
		navigation: {
			nextEl: "#sSlider .swiper-button-next",
			prevEl: "#sSlider .swiper-button-prev",
		},
		spaceBetween: 16,
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
      2140: {
        slidesPerView: 4,
      }
    }
	});

	const swiperNews2 = new Swiper("#sSlider2 .sSlider__slider--js", {
		slidesPerView: 2,
		navigation: {
			nextEl: "#sSlider2 .swiper-button-next",
			prevEl: "#sSlider2 .swiper-button-prev",
		},
		spaceBetween: 8,
    breakpoints: {
      576: {
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 3,
      },
    },
	});

	const swiperNews3 = new Swiper("#sSlider3 .sSlider__slider--js", {
		slidesPerView: 2,
		spaceBetween: 8,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 16,
      }
    }
	});

  const swiperTabs = new Swiper('.tabs-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true,
		spaceBetween: 22
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
