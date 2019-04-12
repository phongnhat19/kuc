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
        this.rerender && this.rerender()
    }

    hide() {
        this.isVisible = false
        this.rerender && this.rerender()
    }

    disable() {
        this.isDisabled = true
        this.rerender && this.rerender()
    }

    enable() {
        this.isDisabled = false
        this.rerender && this.rerender()
    }
}

export default Control