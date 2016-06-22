import $ from 'jquery'

export default class Menu{
	init()
	{
		let btn = $('.Header-menuBtn');
		let nav = $('.MainMenu');
		btn.on('click', () => {
			nav.slideToggle();
		})
	}
}