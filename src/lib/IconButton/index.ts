import './IconButton.css'
import Control from '../Control';

class IconButton extends Control {
    private type: string
    private size: string
    private color: string
    private shape: string

    private iconElement: HTMLElement | null

    constructor({
        type = 'insert',
        size = 'large',
        color = 'gray',
        isDisabled = false,
        isVisible = true,
        shape = 'circle'
    }) {
        super()

        this.type = type
        this.size = size
        this.color = color
        this.isDisabled = isDisabled
        this.isVisible = isVisible
        this.shape = shape

        this.element = document.createElement('button')
        this.element.className = this._getClassName()
        if (this.isDisabled) {
            this.element.setAttribute('disabled','true')
        }

        this.iconElement = document.createElement('i')
        this.iconElement.className = this._getClassType()

        this.element.appendChild(this.iconElement)
        this.rerender()
    }

    _getClassType() {
        let classType = 'fa fa-plus';
        switch (this.type) {
            case 'insert':
                break;
            case 'remove':
                classType = 'fa fa-minus';
                break;
            case 'close':
                classType = 'fa fa-times';
                break;
            case 'file':
                classType = 'fa fa-file';
                break;
            case 'right':
                classType = 'fa fa-chevron-right';
                break;
            case 'left':
                classType = 'fa fa-chevron-left';
                break;
        }
        return classType;
    };
    _getClassSize() {
        const className = this.size === 'small' ? 'small' : 'large';
        return className;
    };
    _getClassName() {
        const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
        const color = colors.indexOf(this.color) === -1 ? 'gray' : this.color;
        const shape = this.shape === 'normal' ? 'normal' : '';
        const className = [
            'kuc-icon-btn',
            this._getClassSize(),
            this.type === 'remove' && color === 'gray' ? 'hover-danger' : '',
            color,
            shape
        ];
        return className.join(' ').trim();
    };
}

export default IconButton