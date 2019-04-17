class Control {
    isDisabled: boolean
    isVisible: boolean
    element: HTMLElement

    rerender(changedAttr?: Array<string>) {
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

    updateElement(changedAttr?: Array<string>) {
        this.rerender && this.rerender(changedAttr)
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
        this.updateElement(['isVisible'])
    }

    hide() {
        this.isVisible = false
        this.updateElement(['isVisible'])
    }

    disable() {
        this.isDisabled = true
        this.updateElement(['isDisabled'])
    }

    enable() {
        this.isDisabled = false
        this.updateElement(['isDisabled'])
    }
}

export default Control