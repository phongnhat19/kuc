//import {Dropdown, Dialog} from '../../build/lib/index';
import {Label} from '../lib/index';

const myLabel = new Label({text: 'hello'})

document.body.appendChild(myLabel.render())

myLabel.setText('123')