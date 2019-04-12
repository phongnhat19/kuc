class Control {
    isDisabled: boolean
    isVisible: boolean
    element: HTMLElement
    render() {
        return this.element
    }

    on(eventName: string, callback: () => void) {
        this.element.addEventListener(eventName, callback)
    }

    show() { 
        this.isVisible = true
    }

    hide() {
        this.isVisible = false
    }

    disable() {
        this.isDisabled = true
    }

    enable() {
        this.isDisabled = false
    }
}

export default Control