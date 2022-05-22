$(document).ready(function () {
    $.each($(".js-mobile-menu > li"), function (index, val) {
		let clone = $(val).clone();
		$("#menu > ul").append(clone);
	});

	// Активация мобильного меню

	$("#menu").mmenu({
		extensions: ["pagedim-black", "position-left"],
		navbar: {
			title: `<img src="${$(".header__logo img").attr("src")}">`,
		},
	});

	var $menu = $("#menu");
	var $icon = $(".js-ham");
	var API = $menu.data("mmenu");

	function openMenu() {
		API.open();
	}

	function closeMenu() {
		API.close();
	}

	API.bind("open:finish", function () {
		$icon.addClass("active");
		$("html").addClass("lock");
	});
	API.bind("close:finish", function () {
		$icon.removeClass("active");
		$("html").removeClass("lock");
	});

	$(".js-ham").on("click", openMenu);

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