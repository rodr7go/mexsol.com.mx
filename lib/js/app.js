import $ from 'jquery';
import ExampleComponent from './components/example_component.js';

let exampleComponent = new ExampleComponent;

$(function(){
	console.log(exampleComponent.init())
});
