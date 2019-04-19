import './Button.css'
import Control from '../Control';

class Button extends Control {
    private type: string
    private text: string

    private _getClassName = () => {
        return [
            'kuc-btn',
            this.type === 'submit' ? 'submit' : 'normal'
        ].join(' ').trim();
    };

    constructor({
        text = '',
        type = 'submit',
        isDisabled = false,
        isVisible = true
    }) {
        super()
        this.text = text
        this.type = type

        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = document.createElement('button')
        this.element.innerText = this.text
        this.element.className = this._getClassName()
        if (this.isDisabled) {
            this.element.setAttribute('disabled', `${this.isDisabled}`)
        }
        this.rerender()
    }

    setType(type: string):void {
        this.type = type
        this.rerender(['type'])
    }

    setText(text: string):void {
        this.text = text
        this.rerender(['text'])
    }
}

export default Button