import $ from 'jquery';
import InstallationTypes from './components/installation_types.js';
import Menu from './components/menu.js';

let menu = new Menu;
let it = new InstallationTypes;

$(function(){
	menu.init();
	it.init();
});