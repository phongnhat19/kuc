//import {Dropdown, Dialog} from '../../build/lib/index';
import {Label, Alert, Spinner, Button} from '../lib';

const myLabel = new Label({text: 'hello'})

document.body.appendChild(myLabel.render())

myLabel.setText('123')
myLabel.setRequired(true)
myLabel.setRequired(false)
myLabel.setRequired(true)
myLabel.hide()
myLabel.show()
/* 
const myAlert = new Alert({text: 'Network error', type: 'error'})
myAlert.on('click', ()=>{
    alert(123)
})

document.body.appendChild(myAlert.render())

const mySpinner = new Spinner({isVisible: false})
document.body.appendChild(mySpinner.render())

const myButton = new Button({
    text: 'Submit',
    type: 'submit'
})

myButton.on('click',()=>alert('button clicked'))

document.body.appendChild(myButton.render()) */