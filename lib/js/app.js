import $ from 'jquery';
import InstallationTypes from './components/installation_types.js';
import Menu from './components/menu.js';
import ColorHeader from './components/color-header.js';

let menu = new Menu;
let it = new InstallationTypes;
let colorHeader = new ColorHeader;

$(function(){
	menu.init();
	it.init();
	colorHeader.init();
});