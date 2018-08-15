# dom-bindings

[![Build Status][travis-image]][travis-url]
[![Code Quality][codeclimate-image]][codeclimate-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Coverage Status][coverage-image]][coverage-url]

# This project is a WIP 🚧 🚧 🚧
## Come back soon...

## Usage

```js
import { template } from 'riot-dom-bindings'

// Create the app template
const tmpl = template('<p><!----></p>', [{
  selector: 'p',
  expressions: [
    {
      type: 'text',
      childNodeIndex: 0,
      evaluate(scope) { return scope.greeting },
    },
  ],
}])

// Mount the template to any DOM node
const app = tmpl.mount(document.getElementById('app'), {
  greeting: 'Hello World'
})

// Update the greeting message
app.update({
  greeting: 'Goodbye'
})

```

[travis-image]:https://img.shields.io/travis/riot/dom-bindings.svg?style=flat-square
[travis-url]:https://travis-ci.org/riot/dom-bindings

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE

[npm-version-image]:http://img.shields.io/npm/v/riot-dom-bindings.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/riot-dom-bindings.svg?style=flat-square
[npm-url]:https://npmjs.org/package/riot-dom-bindings

[coverage-image]:https://img.shields.io/coveralls/riot/dom-bindings/master.svg?style=flat-square
[coverage-url]:https://coveralls.io/r/riot/dom-bindings/?branch=master

[codeclimate-image]:https://api.codeclimate.com/v1/badges/5db4f1c96a43e3736cf0/maintainability
[codeclimate-url]:https://codeclimate.com/github/riot/dom-bindings/maintainability

## API

