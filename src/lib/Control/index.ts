class Control {
    private isDisabled: boolean
    private isVisible: boolean


    render(element: HTMLElement) {
        const container = document.createElement('div');
        container.appendChild(element)
        return container
    }
    on(eventName: string, callBack: () => void ){
        document.addEventListener(eventName, callBack);
    }

    show(){
        this.isVisible = true
    }

    hide(){
        this.isVisible = false
    }

    enable(){
        this.isDisabled = false
    }

    disable(){
        this.isDisabled = true
    }
}

export default Control