import {model} from './model'
import {templates} from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')


// console.log(templates['colu']({value: 'colu'}))
model.forEach(block => {
    // let html = ''
    const toHTML = templates[block.type];

    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block.value))

    }

});

