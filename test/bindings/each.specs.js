const { template } = require('../../')

describe('each bindings', () => {
  it('List reverse', () => {
    const items = [0, 1, 2, 3, 4, 5]
    const target = document.createElement('div')
    const el = template('<ul><li expr0></li></ul>', [{
      selector: '[expr0]',
      type: 'each',
      itemName: 'val',
      getKey(scope) { return scope.val },
      evaluate(scope) { return scope.items },
      template: template('<!---->', [{
        expressions: [
          {
            type: 'text',
            childNodeIndex: 0,
            evaluate(scope) { return scope.val }
          }
        ]
      }])
    }]).mount(target, { items })

    const lisBefore = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisBefore[index].textContent).to.be.equal(`${item}`)
    })

    el.update({ items: items.reverse() })

    const lisAfter = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisAfter[index].textContent).to.be.equal(`${item}`)
    })
  })

  it('List add', () => {
    const items = [0, 1, 2, 3, 4, 5]
    const target = document.createElement('div')
    const el = template('<ul><li expr0></li></ul>', [{
      selector: '[expr0]',
      type: 'each',
      itemName: 'val',
      getKey(scope) { return scope.val },
      evaluate(scope) { return scope.items },
      template: template('<!---->', [{
        expressions: [
          {
            type: 'text',
            childNodeIndex: 0,
            evaluate(scope) { return scope.val }
          }
        ]
      }])
    }]).mount(target, { items })

    const lisBefore = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisBefore[index].textContent).to.be.equal(`${item}`)
    })

    items.push(6)

    el.update({ items: items })

    const lisAfter = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisAfter[index].textContent).to.be.equal(`${item}`)
    })
  })

  it('List insert in the middle', () => {
    const items = [0, 1, 2, 3, 4, 5]
    const target = document.createElement('div')
    const el = template('<ul><li expr0></li></ul>', [{
      selector: '[expr0]',
      type: 'each',
      itemName: 'val',
      getKey(scope) { return scope.val },
      evaluate(scope) { return scope.items },
      template: template('<!---->', [{
        expressions: [
          {
            type: 'text',
            childNodeIndex: 0,
            evaluate(scope) { return scope.val }
          }
        ]
      }])
    }]).mount(target, { items })

    const lisBefore = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisBefore[index].textContent).to.be.equal(`${item}`)
    })

    items.splice(3, 0, 10)

    el.update({ items })

    const lisAfter = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisAfter[index].textContent).to.be.equal(`${item}`)
    })
  })

  it('List prepend', () => {
    const items = [0, 1, 2, 3, 4, 5]
    const target = document.createElement('div')
    const el = template('<ul><li expr0></li></ul>', [{
      selector: '[expr0]',
      type: 'each',
      itemName: 'val',
      getKey(scope) { return scope.val },
      evaluate(scope) { return scope.items },
      template: template('<!---->', [{
        expressions: [
          {
            type: 'text',
            childNodeIndex: 0,
            evaluate(scope) { return scope.val }
          }
        ]
      }])
    }]).mount(target, { items })

    const lisBefore = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisBefore[index].textContent).to.be.equal(`${item}`)
    })

    items.unshift(-1)

    el.update({ items })

    const lisAfter = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisAfter[index].textContent).to.be.equal(`${item}`)
    })
  })

  it('List pop', () => {
    const items = [0, 1, 2, 3, 4, 5]
    const target = document.createElement('div')
    const el = template('<ul><li expr0></li></ul>', [{
      selector: '[expr0]',
      type: 'each',
      itemName: 'val',
      getKey(scope) { return scope.val },
      evaluate(scope) { return scope.items },
      template: template('<!---->', [{
        expressions: [
          {
            type: 'text',
            childNodeIndex: 0,
            evaluate(scope) { return scope.val }
          }
        ]
      }])
    }]).mount(target, { items })

    const lisBefore = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisBefore[index].textContent).to.be.equal(`${item}`)
    })

    items.pop()

    el.update({ items })

    const lisAfter = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisAfter[index].textContent).to.be.equal(`${item}`)
    })
  })

  it('List shift', () => {
    const items = [0, 1, 2, 3, 4, 5]
    const target = document.createElement('div')
    const el = template('<ul><li expr0></li></ul>', [{
      selector: '[expr0]',
      type: 'each',
      itemName: 'val',
      getKey(scope) { return scope.val },
      evaluate(scope) { return scope.items },
      template: template('<!---->', [{
        expressions: [
          {
            type: 'text',
            childNodeIndex: 0,
            evaluate(scope) { return scope.val }
          }
        ]
      }])
    }]).mount(target, { items })

    const lisBefore = target.querySelectorAll('li')

    items.forEach((item, index) => {
      expect(lisBefore[index].textContent).to.be.equal(`${item}`)
    })

    items.shift()

    el.update({ items })

    const lisAfter = target.querySelectorAll('li')

    console.log(lisAfter, items) // eslint-disable-line

    items.forEach((item, index) => {
      expect(lisAfter[index].textContent).to.be.equal(`${item}`)
    })
  })
})