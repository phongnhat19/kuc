import './Label.css'
import Control from '../Control'

class Label extends Control {
    private text: string
    private textColor: string
    private backgroundColor: string
    private isRequired: boolean

    constructor({
        text = "", 
        textColor = "#000000", 
        backgroundColor = "#FFFFFF", 
        isRequired = false,
        isDisabled = false,
        isVisible = true
    }) {
        super()
        this.text = text
        this.textColor = textColor
        this.backgroundColor = backgroundColor
        this.isRequired = isRequired
        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = document.createElement('span')
        this.element.innerHTML = this.text
    }
}

export default Label