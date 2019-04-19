import './TextArea.css'
import Control from '../Control';

class TextArea extends Control {
    private value: string

    private mixTextAreaWidth: number = 297
    private mixtTextAreaHeight: number = 123
    private textAreaWidth: number = this.mixTextAreaWidth
    private textAreaHeight: number = this.mixtTextAreaHeight

    private translateX = 0
    private translateY = 0

    private currentX: number | null = null
    private currentY: number | null = null

    private textAreaElement = document.createElement('textarea')
    private resizeElement = document.createElement('div')

    rerender(changedAttr?: Array<string>):void {
        super.rerender()
        if (changedAttr) {
            changedAttr.forEach((key: string)=>{
                switch (key) {
                    case 'size':
                        this.element.style.width = `${this.textAreaWidth}px`
                        this.element.style.height = `${this.textAreaHeight}px`

                        this.textAreaElement.style.width = `${this.textAreaWidth}px`
                        this.textAreaElement.style.height = `${this.textAreaHeight}px`

                        this.resizeElement.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`
                        break;
                    
                    default:
                        break;
                }
            })
        }
    }

    _onMouseDown(e: MouseEvent) {
        const eventMouseMove = document.onmousemove;
        const eventMouseUp = document.onmouseup;
        document.onmousemove = (event) => {
            if (this.currentX && this.currentY) {
                let dx = event.clientX - this.currentX;
                if (this.textAreaWidth + dx < this.mixTextAreaWidth) {
                    dx = 0;
                }
        
                let dy = event.clientY - this.currentY;
                if (this.textAreaHeight + dy < this.mixtTextAreaHeight) {
                    dy = 0;
                }

                this.translateX += dx
                this.translateY += dy
                this.textAreaWidth += dx
                this.textAreaHeight += dy

            }
            this.currentX = event.clientX;
            this.currentY = event.clientY;
            this.rerender(['size'])
        };
        document.onmouseup = () => {
            document.onmousemove = eventMouseMove;
            document.onmouseup = eventMouseUp;
            this.currentX = null;
            this.currentY = null;
        };
    }

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
        this.element.className = 'kuc-textarea-outer'
        this.element.style.width = `${this.textAreaWidth}px`
        this.element.style.height = `${this.textAreaHeight}px`

        this.textAreaElement.value = this.value
        this.textAreaElement.className = 'kuc-textarea'
        this.textAreaElement.style.width = `${this.textAreaWidth}px`
        this.textAreaElement.style.height = `${this.textAreaHeight}px`

        if (this.isDisabled) {
            this.textAreaElement.setAttribute('disabled', 'true')
        }

        this.element.appendChild(this.textAreaElement)
        
        this.resizeElement.className = 'kuc-textarea-resize'
        this.resizeElement.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`
        if (this.resizeElement) {
            this.resizeElement.addEventListener('mousedown',(e)=>{
                this._onMouseDown(e)
            } )
        }

        this.element.appendChild(this.resizeElement)
    }
}

export default TextArea