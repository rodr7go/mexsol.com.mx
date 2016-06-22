import $ from 'jquery';
import ExampleComponent from './components/example_component.js';
import Menu from './components/menu.js';

let exampleComponent = new ExampleComponent;
let menu = new Menu;

$(function(){
	console.log(exampleComponent.init());
	return menu.init()
});