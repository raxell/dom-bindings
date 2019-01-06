import cleanNode from './util/clean-node'
import createBinding from './binding'
import createDOMTree from './util/create-DOM-tree'
import injectDOM from './util/inject-DOM'

/**
 * Create the Template DOM skeleton
 * @param   {HTMLElement} el - root node where the DOM will be injected
 * @param   {string} html - markup that will be injected into the root node
 * @returns {HTMLFragment} fragment that will be injected into the root node
 */
function createTemplateDOM(el, html) {
  return html && (typeof html === 'string' ?
    createDOMTree(el, html) :
    html)
}

/**
 * Template Chunk model
 * @type {Object}
 */
export const TemplateChunk = Object.freeze({
  // Static props
  bindings: null,
  bindingsData: null,
  html: null,
  dom: null,
  el: null,

  // API methods
  /**
   * Attach the template to a DOM node
   * @param   {HTMLElement} el - target DOM node
   * @param   {*} scope - template data
   * @returns {TemplateChunk} self
   */
  mount(el, scope) {
    if (!el) throw new Error('Please provide DOM node to mount properly your template')

    if (this.el) this.unmount(scope)

    this.el = el

    // create lazily the template fragment only once if it hasn't been created before
    this.dom = this.dom || createTemplateDOM(el, this.html)

    if (this.dom) injectDOM(el, this.dom.cloneNode(true))

    // create the bindings
    this.bindings = this.bindingsData.map(binding => createBinding(this.el, binding))
    this.bindings.forEach(b => b.mount(scope))

    return this
  },
  /**
   * Update the template with fresh data
   * @param   {*} scope - template data
   * @returns {TemplateChunk} self
   */
  update(scope) {
    this.bindings.forEach(b => b.update(scope))

    return this
  },
  /**
   * Remove the template from the node where it was initially mounted
   * @param   {*} scope - template data
   * @param   {boolean} mustRemoveRoot - if true remove the root element
   * @returns {TemplateChunk} self
   */
  unmount(scope, mustRemoveRoot) {
    if (this.el) {
      this.bindings.forEach(b => b.unmount(scope))
      cleanNode(this.el)

      if (mustRemoveRoot) {
        this.el.parentNode.removeChild(this.el)
      }

      this.el = null
    }

    return this
  },
  /**
   * Clone the template chunk
   * @param   {HTMLElement} el - template target DOM node
   * @returns {TemplateChunk} a clone of this object resetting the this.el property
   */
  clone(el) {
    // make sure that the DOM gets created before cloning the template
    this.dom = this.dom || createTemplateDOM(el, this.html)

    return {
      ...this,
      el: null
    }
  }
})

/**
 * Create a template chunk wiring also the bindings
 * @param   {string|HTMLElement} html - template string
 * @param   {Array} bindings - bindings collection
 * @returns {TemplateChunk} a new TemplateChunk copy
 */
export default function create(html, bindings = []) {
  return {
    ...TemplateChunk,
    html,
    bindingsData: bindings
  }
}