import './Dialog.css'
import Control from '../Control';
import { IconButton } from '..';

class Dialog extends Control {
    private header: string | Element
    private content: string | Element
    private footer: string | Element
    private showCloseButton: boolean

    private headerElement: HTMLDivElement | null
    private contentElement: HTMLDivElement | null
    private footerElement: HTMLDivElement | null
    private closeButtonElement: HTMLSpanElement | null

    constructor({
        header = '',
        content = '',
        footer = '',
        isVisible = true,
        showCloseButton = true
    }) {
        super()
        this.header = header
        this.content = content
        this.footer = footer
        this.showCloseButton = showCloseButton

        this.isVisible = isVisible

        this.element = document.createElement('div')
        this.element.className = 'kuc-dialog-container'

        let wrapperElement = document.createElement('div')
        wrapperElement.className = 'kuc-dialog-wrapper'

        this.element.appendChild(wrapperElement)

        this.headerElement = document.createElement('div')
        this.headerElement.className = 'kuc-dialog-header'
        this.headerElement.append(this.header)

        this.closeButtonElement = document.createElement('span')

        if (this.showCloseButton) {
            this.closeButtonElement.className = 'kuc-dialog-close-button'
            let closeButton = new IconButton({type: 'close'})
            closeButton.on('click',()=>{
                this.hide()
            })
            this.closeButtonElement.appendChild(closeButton.render())
        }

        this.headerElement.appendChild(this.closeButtonElement)

        this.contentElement = document.createElement('div')
        this.contentElement.className = 'kuc-dialog-body'
        this.contentElement.append(this.content)

        this.footerElement = document.createElement('div')
        this.footerElement.className = 'kuc-dialog-footer'
        this.footerElement.append(this.footer)

        wrapperElement.appendChild(this.headerElement)
        wrapperElement.appendChild(this.contentElement)
        wrapperElement.appendChild(this.footerElement)
        
        this.rerender()
    }

    setHeader(header:string | Element):void {
        this.header = header
        this.rerender(['header'])
    }

    getHeader():string | Element {
        return this.header
    }

    setContent(content:string | Element):void {
        this.content = content
        this.rerender(['content'])
    }

    getContent():string | Element {
        return this.content
    }

    setFooter(footer:string | Element):void {
        this.footer = footer
        this.rerender(['footer'])
    }

    getFooter():string | Element {
        return this.footer
    }
}

export default Dialog