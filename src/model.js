import image from './assets/image.png'
export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JAvaScript', options: {
        tag: 'h2',
        styles: {

        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        textalign: 'center',
        padding: '1.5rem'
        }
    }},
    {type: 'text', value: 'content text'},
    {type: 'column', value: [
        '111111',
        '222222',
        '333333',
        '2323231111'
    ]},
    {type: 'image', value: image}
]