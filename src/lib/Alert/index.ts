import './Alert.css'
import Control from '../Control';

class Alert extends Control {
    private text: string
    private type: string

    constructor({
        text = '',
        type = 'error',
        isDisabled = false,
        isVisible = true
    }) {
        super()
        this.text = text
        this.type = type
        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = document.createElement('div')
        this.element.className = this._getClassName()
        this.updateElement()
    }

    rerender(){
        super.rerender()
        this.element.innerHTML = this.text
    }

    private _getClassName(): string {
        const className = [
            'kuc-alert',
            this.type === 'success' ? 'bg-success' : 'bg-danger'
        ];
    
        return className.join(' ');
    }

    setText(text: string):void {
        this.text = text
        this.updateElement()
    }

    setType(type: string):void {
        this.type = type
        this.updateElement()
    }
}

export default Alert