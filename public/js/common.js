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

  const body = document.querySelector('.main-page')

  function toggleBg() {
    body.classList.toggle('fixed')
  }
  /* search */
  window.addEventListener('load', ()=> {

    const menuToggle = document.querySelector('.toggle-menu-mobile')
    const menuMobile = document.querySelector('.menu-mobile--js')
    const searchToggle = document.querySelector('.search-toggle--js')
    const searchClose = document.querySelector('.search-results--js .icon-arrow-top')

    const searchResults = document.querySelector('.search-results--js')
    searchToggle.addEventListener('click', ()=> {
      searchResults.classList.toggle('active')
      searchToggle.classList.toggle('active')
      menuMobile.classList.remove('active')
      toggleBg()
    })

    menuToggle.addEventListener('click', ()=> {
      searchResults.classList.remove('active')
      searchToggle.classList.remove('active')
      // body.classList.remove('fixed')
      // toggleBg()
    })

    searchClose.addEventListener('click', ()=> {
      searchResults.classList.remove('active')
      searchToggle.classList.remove('active')
      body.classList.remove('fixed')
  })
  })

  /* filters */

  const filterNav = document.querySelector('.filters-wrap .icon-filter')
  const filterWrap = document.querySelector('.filters-wrap--js')
  if(filterNav) {
    filterNav.addEventListener('click', ()=> {
      filterWrap.classList.toggle('show')
    })
  }

  const filters = document.querySelectorAll('.filter--js')
  let activeFilter = null;

  function closeAllFilters() {
    filters.forEach(filter => filter.classList.remove('show'));
    activeFilter = null;
  }

  function handleFilterClick(event) {
    const filter = event.currentTarget;

    if (activeFilter && activeFilter !== filter) {
      closeAllFilters();
    }

    filter.classList.toggle('show');

    if (filter.classList.contains('show')) {
      activeFilter = filter;
    } else {
      activeFilter = null;
    }
    event.stopPropagation();
  }

  if (filters.length) {
    filters.forEach(filter => {
      filter.addEventListener('click', handleFilterClick);
    });
  }

  document.addEventListener('click', () => {
    if (activeFilter) {
      closeAllFilters();
    }
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
