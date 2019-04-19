import './Text.css'
import Control from '../Control';

class Text extends Control {
    private value: string
    private inputElement: HTMLInputElement | null

    constructor({
        value = '',
        isDisabled = false,
        isVisible = true
    }) {
        super()
        this.value = value
        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = document.createElement('div')
        this.element.className = 'kuc-input-outer'

        this.inputElement = document.createElement('input')
        this.inputElement.className = 'kuc-input-text'
        this.inputElement.value = this.value
        this.inputElement.setAttribute('type', 'text')
        if (this.isDisabled) {
            this.inputElement.setAttribute('disabled', 'true')
        }

        this.element.appendChild(this.inputElement)

        this.rerender()
    }

    getValue():string {
        if (this.inputElement) {
            this.value = this.inputElement.value
        }
        return this.value
    }

    setValue(value: string):void {
        this.value = value
        if (this.inputElement) {
            this.inputElement.value = this.value
        }
    }
}

export default Text