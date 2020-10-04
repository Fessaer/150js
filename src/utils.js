export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content, styles = '') {
    return `<div class="col-sm" style="${styles}">${content}</div>`
}
export function img(content, styles = '') {
    return `<img src=${content} style="${styles}">`
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const keys = Object.keys(styles)
    const array = keys.map(key => {
        return `${key}: ${styles[key]}`
    })
    return array.join(';')
}  

export function block(type) {
    return `
      <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
          <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
          <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
      <hr />
    `
  }