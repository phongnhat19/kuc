import './Label.css'
import Control from '../Control'

class Label extends Control {
    private text: string
    private textColor: string
    private backgroundColor: string
    private isRequired: boolean
    private isDisabled: boolean
    private isVisible: boolean

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
    }

    render() {
        const element = document.createElement('span')
        element.innerHTML = this.text
        return super.render(element)
    }
}

export default Label