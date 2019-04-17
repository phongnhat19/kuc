import './Label.css'
import Control from '../Control'

class Label extends Control {
    private text: string
    private textColor: string
    private backgroundColor: string
    private isRequired: boolean

    private textElement: HTMLSpanElement | null
    private requiredElement: HTMLSpanElement | null

    rerender(changedAttr?: Array<string>){
        super.rerender()

        if (!this.requiredElement) {
            this.requiredElement = document.createElement('span')
        }

        if (!this.textElement) {
            this.textElement = document.createElement('span')
        }

        if (changedAttr) {
            changedAttr.forEach((changeKey: string) => {
                switch (changeKey) {
                    case 'text':
                        if (this.textElement) this.textElement.textContent = this.text
                        break;
                    case 'textColor':
                        if (this.textElement) this.textElement.style.color = this.textColor
                        break;
                    case 'backgroundColor':
                        if (this.textElement) this.textElement.style.backgroundColor = this.backgroundColor
                        break;
                    case 'isRequired':
                        if (this.isRequired && this.requiredElement) {
                            this.requiredElement.className = 'kuc-require'
                            this.requiredElement.innerHTML = '*'
                        }
                        else {
                            this.requiredElement = null
                        }
                        break;
                    default:
                        break;
                }
            })
            return
        }

        if (this.isRequired) {
            this.requiredElement.classList.add('kuc-require')
            this.requiredElement.innerHTML = '*'
        }
        this.textElement.textContent = this.text
        this.textElement.style.color = this.textColor
        this.textElement.style.backgroundColor = this.backgroundColor
        
        this.element.appendChild(this.textElement)
        this.element.appendChild(this.requiredElement)
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

    setText(text: string):void {
        this.text = text
        this.updateElement(['text'])
    }

    setTextColor(color: string):void {
        this.textColor = color
        this.updateElement(['textColor'])
    }

    setBackgroundColor(color: string):void {
        this.backgroundColor = color
        this.updateElement(['backgroundColor'])
    }

    setRequired(required: boolean):void {
        this.isRequired = required
        this.updateElement(['isRequired'])
    }
}

export default Label