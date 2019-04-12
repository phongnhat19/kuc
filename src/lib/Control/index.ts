class Control {
    isDisabled: boolean
    isVisible: boolean
    element: HTMLElement

    rerender() {

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