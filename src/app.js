import './styles.css';
import { ContextMenu } from './menu';
import { RandomSoundModule } from './modules/randomSound.module';
import { BackgroundModule } from './modules/background.module';

const modules = [
    new RandomSoundModule("random-sound","Случайный звук"),
    new BackgroundModule('random-background', 'Случайный фон'),
];

const contextMenu = new ContextMenu("#menu");
contextMenu.open();

modules.forEach(module => contextMenu.add(module));