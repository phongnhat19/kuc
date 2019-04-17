import './Spinner.css'
import Control from '../Control';

class Spinner extends Control {
    constructor({
        isVisible = true
    }) {
        super()
        
        this.isVisible = isVisible

        const loaderElement = document.createElement('div')
        loaderElement.className = 'kuc-loader'

        let spinnerElement = document.createElement('div')
        spinnerElement.className = 'kuc-spinner'
        spinnerElement.appendChild(loaderElement)       

        this.element = document.createElement('div')
        this.element.className = 'kuc-spinner-outer'
        this.element.appendChild(spinnerElement)

        this.updateElement()
    } 
}

export default Spinner