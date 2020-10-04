import { ImageBlock, TextBlock, TitleBlock, ColumnBlock } from './classes/blocks.js';
import image from './assets/image.png'
// import {ColumnBlock} from './classes/blocks.js'

const text = `Это конструктор сайта созданый в целях обучения`;

export const model = [

    new TitleBlock ('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {

        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem'
        }
    }),
    new ImageBlock (image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        alt: 'это картинка',

        imageStyles: {
            width: '500px',
            height: 'auto'
        }
        
    }),
    new ColumnBlock([
        'Приложение на чистом JavaScript. Без использования библиотек',
        'Узнаешь как работают принципы SOLID',
        'JavaScript - это просто, интерестно. Научись создавать любые UI своими руками'
        
    ],
     {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),

    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]
    
