//import {Dropdown, Dialog} from '../../build/lib/index';
import {Label, Alert, Spinner, Button, IconButton, Dialog} from '../lib';

const myLabel = new Label({text: 'hello'})

document.body.appendChild(myLabel.render())
myLabel.hide()
myLabel.show()

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

document.body.appendChild(myButton.render())

const myIconButton = new IconButton({type: 'insert',color:'blue', size: 'large'})
myIconButton.on('click',()=>alert('icon button clicked'))
document.body.appendChild(myIconButton.render())

const myDialog = new Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: true,
    showCloseButton: true
});

document.body.appendChild(myDialog.render())