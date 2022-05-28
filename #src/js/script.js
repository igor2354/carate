$(document).ready(function () {
    $.each($(".js-mobile-menu > li"), function (index, val) {
		let clone = $(val).clone();
		$("#menu > ul").append(clone);
	});

	$(".js-ham").on("click", function() {
		$(this).toggleClass("active");
		$(".mobile-menu").toggleClass("active");
	});

	$(".mobile-menu .js-anchor").on("click", function() {
		$(".js-ham").removeClass("active");
		$(".mobile-menu").removeClass("active");
	});

	// Активация мобильного меню

	// $("#menu").mmenu({
	// 	extensions: ["pagedim-black", "position-left"],
	// 	navbar: {
	// 		title: `<img src="${$(".header__logo img").attr("src")}">`,
	// 	},
	// });

	// var $menu = $("#menu");
	// var $icon = $(".js-ham");
	// var API = $menu.data("mmenu");

	// function openMenu() {
	// 	API.open();
	// }

	// function closeMenu() {
	// 	API.close();
	// }

	// API.bind("open:finish", function () {
	// 	$icon.addClass("active");
	// 	$("html").addClass("lock");
	// });
	// API.bind("close:finish", function () {
	// 	$icon.removeClass("active");
	// 	$("html").removeClass("lock");
	// });

	// $(".js-ham").on("click", openMenu);

	// ПЛАВНЫЙ ЯКОРЬ
	$(".js-anchor").click(function () {
		let target = $(this).attr("href");
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top - 150,
			},
			800
		);
		return false;
	});
});

document.addEventListener(
	"DOMContentLoaded",
	function () {
				// Открытие попапов МОЖНО УДАЛЯТЬ
				let popupAllElem = Array.prototype.slice.call(document.querySelectorAll(".modal"));
				let openButton = Array.prototype.slice.call(document.querySelectorAll(".js-modal-show"));
				let closeButton = Array.prototype.slice.call(document.querySelectorAll(".js-modal-close"));
				let body = document.querySelector("body");
		
				function openPopup(e) {
					e.preventDefault();
					let modal = document.querySelector(`#${e.target.dataset.popup}`);
					modal.classList.add("active");
		
					body.classList.add("lock");
		
					setTimeout(() => {
						modal.style.opacity = "1";
					}, 100);
		
					if (e.target.classList.contains("--video")) {
						let videoSrc = e.target.dataset.videoSrc;
						let srcIframe = modal.querySelector("iframe").getAttribute("src");
		
						if (!srcIframe.includes(videoSrc)) {
							modal.querySelector("iframe").setAttribute("src", srcIframe + videoSrc);
						}
					}
				}
		
				function closePopup() {
					popupAllElem.forEach((element) => {
						if (element.classList.contains("active")) {
							let modal = element;
		
							setTimeout(() => {
								modal.classList.remove("active");
							}, 300);
		
							modal.style.opacity = "0";
		
							body.classList.remove("lock");
						}
					});
				}
		
				if (openButton != null) {
					openButton.forEach((element) => {
						element.addEventListener("click", (e) => {
							closePopup(e);
		
							openPopup(e);
						});
					});
				}
		
				if (closeButton != null) {
					closeButton.forEach((element) => {
						element.addEventListener("click", (e) => {
							closePopup();
						});
					});
				}
		
				if (popupAllElem != null) {
					popupAllElem.forEach((element) => {
						element.addEventListener("click", (e) => {
							if (e.target.classList.contains("modal")) {
								closePopup();
							}
						});
					});
				}
	}, false);