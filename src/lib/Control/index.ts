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
        }
    }

    updateElement() {
        this.element.innerHTML = ''
        this.rerender && this.rerender()
    }

    render() {
        return this.element
    }

    on(eventName: string, callback: () => void) {
        this.element.addEventListener(eventName, callback)
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