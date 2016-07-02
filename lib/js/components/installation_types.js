
import $ from 'jquery'
export default class InstallationTypes
{
	init()
	{
		let btns = $('.installationTypes .iT-btns a');
		let container = $('.installationTypes');
		
		btns.click(function(){
			let btn = $(this);
			let target = btn.data('target');
			let wrappers = $('.installationTypes .wrapper');

			container.removeClass('bg-isla');
			container.removeClass('bg-red');
			btns.removeClass('active');
			wrappers.removeClass('active');

			
			btn.addClass('active');
			$(`.${target}`).addClass('active');
			container.addClass(`bg-${target}`);
		});
	}
} 