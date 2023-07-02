import { Module } from '../core/module';
import { random } from '../utils';
import sound1 from '../assets/sounds/1.mp3';
import sound2 from '../assets/sounds/2.mp3';
import sound3 from '../assets/sounds/3.mp3';
import sound4 from '../assets/sounds/4.mp3';
import sound5 from '../assets/sounds/5.mp3';
import sound6 from '../assets/sounds/6.mp3';
import sound7 from '../assets/sounds/7.mp3';
import sound8 from '../assets/sounds/8.mp3';
import sound9 from '../assets/sounds/9.mp3';

export class RandomSoundModule extends Module {
	#sounds;

	constructor(type, text) {
		super(type, text);
		this.#sounds = [
			new Audio(sound1),
			new Audio(sound2),
			new Audio(sound3),
			new Audio(sound4),
            new Audio(sound5),
			new Audio(sound6),
			new Audio(sound7),
			new Audio(sound8),
            new Audio(sound9)
		];
	}

	trigger() {
		this.clearBody();

	  const randomSoundIndex = random(0, this.#sounds.length - 1);
	  this.#sounds[randomSoundIndex].pause();
		this.#sounds[randomSoundIndex].currentTime = 0;
		this.#sounds[randomSoundIndex].play();
	}
}