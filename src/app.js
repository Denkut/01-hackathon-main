import './styles.css';
import { ContextMenu } from './menu';
import { RandomSoundModule } from './modules/randomSound.module';
import { BackgroundModule } from './modules/background.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';

const modules = [
    new RandomSoundModule("random-sound","Случайный звук"),
    new BackgroundModule('random-background', 'Случайный фон'),
    new TimerModule('Таймер','Таймер'),
    new ShapeModule('Рандомная фигура','Рандомная фигура')
];

const contextMenu = new ContextMenu("#menu");
contextMenu.open();

modules.forEach(module => contextMenu.add(module));