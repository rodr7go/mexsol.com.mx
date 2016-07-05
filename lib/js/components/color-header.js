import $ from 'jquery'
export default class ColorHeader
{
	init()
	{
		$(window).on("scroll", function() {
		    if($(window).scrollTop() > 50)
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