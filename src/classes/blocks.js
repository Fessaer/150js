// import { TitleBlock } from "../../../исходный код задания/src/classes/blocks"
import {row, col, img, css} from './../utils.js'
class Block {
    constructor(value, options) {
        
        this.value = value
        this.options = options
    }
    toHTML () {
        throw new Error('Метод toHTML должен быть реализован')
    }
    
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { tag = 'h1', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { imageStyles, alt, styles } = this.options
        return row(`<img src=${this.value} alt ="${alt}" style="${css(imageStyles)}">`, css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { tag = 'p', styles } = this.options
         return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ColumnBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { styles } = this.options
        const html = this.value.map(item => col(item))

        return row(html.join(''), css(styles));
}
}