/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export default class HdsAccordionItemButtonComponent extends Component {
  /**
   * Get the class names to apply to the component.
   * @method ItemButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['hds-accordion-item__button'];

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('hds-accordion-item__button--is-open');
    }

    // if toggle is NOT clickable, then button IS
    if (this.args.isClickable === false) {
      classes.push('hds-accordion-item__button--is-clickable');
    }
    return classes.join(' ');
  }
}
