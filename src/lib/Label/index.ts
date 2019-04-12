import './Label.css'
import Control from '../Control'

class Label extends Control {
    private text: string
    private textColor: string
    private backgroundColor: string
    private isRequired: boolean

    updateElement(){
        this.element.innerHTML = ''

        if (!this.isVisible) {
            this.element.style.display = 'none'
        }
        else {
            this.element.style.display = 'initial'
        }
        
        if (this.isRequired) {
            let isRequiredSpan = document.createElement('span')
            isRequiredSpan.classList.add('kuc-require')
            isRequiredSpan.innerHTML = '*'

            let textSpan = document.createElement('span')
            textSpan.innerHTML = this.text
            textSpan.style.color = this.textColor
            textSpan.style.backgroundColor = this.backgroundColor
            
            this.element.appendChild(textSpan)
            this.element.appendChild(isRequiredSpan)
        }
        else {
            let textSpan = document.createElement('span')
            textSpan.innerHTML = this.text
            textSpan.style.color = this.textColor
            textSpan.style.backgroundColor = this.backgroundColor
            
            this.element.appendChild(textSpan)
        }
    }

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

        this.element = document.createElement('div')
        this.element.classList.add('kuc-label')
        this.updateElement()
    }
}

export default Label