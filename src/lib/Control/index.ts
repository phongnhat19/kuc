class Control {
    render(element: HTMLElement) {
        const container = document.createElement('div');
        container.appendChild(element)
        return container
    }
}

export default Control