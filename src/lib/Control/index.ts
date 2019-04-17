class Control {
    isDisabled: boolean
    isVisible: boolean
    element: HTMLElement

    rerender() {
        if (this.element) {
            if (!this.isVisible) {
                this.element.style.display = 'none'
            }
            else {
                this.element.style.display = 'initial'
            }

            if (this.isDisabled) {
                this.element.setAttribute('disabled', `${this.isDisabled}`)
            }
        }
    }

    updateElement() {
        this.rerender && this.rerender()
    }

    render() {
        return this.element
    }

    on(eventName: string, callback: (e?: Event) => void) {
        this.element.addEventListener(eventName,(e: Event)=>{
            callback(e)
        })
    }

    show() { 
        this.isVisible = true
        this.updateElement()
    }

    hide() {
        this.isVisible = false
        this.updateElement()
    }

    disable() {
        this.isDisabled = true
        this.updateElement()
    }

    enable() {
        this.isDisabled = false
        this.updateElement()
    }
}

export default Control