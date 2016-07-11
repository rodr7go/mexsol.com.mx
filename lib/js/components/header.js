import $ from 'jquery'
export default class Header 
{
	
	setColorHeaderOnscroll() {
		$(window).scroll(function() {
			if ( $(this).scrollTop() >= 100 ) {
				$(".Header").addClass("scroll-color");
			}
			else {
				$(".Header").removeClass("scroll-color");
			}
		});
	}

	slideMenu() {
		let btn = $('.Header-menuBtn');
		let nav = $('.MainMenu');
		btn.on('click', () => {
			nav.slideToggle();
		})
		$('.MainMenu-item .link').on('click', function(event){
			event.preventDefault();
			var $this = $(this);
			nav.slideUp();
			window.location = $this.attr('href');
		});

		$('.MainMenu-item.contact-movile > a').on('click', function(event){
			nav.slideUp();
		});
	}

	dropDownMenu() {
		$('.Products-item').on('click', function(){
			$('.DropDown-list').slideToggle()
			$('.DropDown-icon').toggleClass('active');
		});
	}

}