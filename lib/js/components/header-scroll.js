import $ from 'jquery'
export default class HeaderScroll
{
	init()
	{
		$(window).scroll(function()
		{
			
			if ( $(this).scrollTop() >= 100 )
			{
				$(".Header").addClass("scroll-color");
			}
			else
			{
				$(".Header").removeClass("scroll-color");
			}
		});
	}
}