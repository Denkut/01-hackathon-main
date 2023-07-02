import { Module } from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
	trigger() {
		this.clearBody();
		document.body.style.backgroundColor = "#" + random(0, 16777215).toString(16);
	}
}