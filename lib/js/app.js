import $ from 'jquery';
import InstallationTypes from './components/installation_types.js';
import Header from './components/header.js';
import Trianglify from 'trianglify'


let it = new InstallationTypes;
let header = new Header;


$(function(){
	
	it.init();
	header.setColorHeaderOnscroll();
	header.slideMenu();
	header.dropDownMenu();
	trianglify();
	popupMap();
	smoothScroll();
});


function trianglify()
{
	let width = document.querySelector('.Footer').offsetWidth;
	let height = document.querySelector('.Footer').offsetHeight;

	let pattern = Trianglify({
        width: width,
        height: height,
        cell_size: 120
    });

    document.querySelector('.Footer').appendChild(pattern.canvas())
}

function popupMap()
{
	let container = $('.map-popup-container');
	let map = $('.Map');
	let close = $('.close-map');
	
	let openMap = (e) => {
		e.preventDefault();
		map.addClass('map-active animated rotateInDownRight');
		container.fadeIn();
	}

	let closeMap = () => {
		map.removeClass('animated rotateInDownRight')
		map.addClass('animated hinge');
		setTimeout(function(){
			map.removeClass('map-active animated hinge');
		}, 2000);
		
		container.fadeOut();
	}
	

	$('.map-btn').on('click', function(e){
		openMap(e);
	});

	container.on('click', function(){
		closeMap();
	});

	close.on('click', function(){
		closeMap();
	});	
	
	window.onkeydown = function(e){
		if(e.keyCode === 27)
		{
			closeMap();
		}
	}
}

function smoothScroll()
{
	$('a[href*="#"]:not([href="#"])').click(function()
	{
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
}

$('a.gallery').colorbox({rel:'gal'});