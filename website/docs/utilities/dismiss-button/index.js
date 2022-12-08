import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Index extends Component {
  get STATES() {
    // these are used only for presentation purpose in the showcase
    return ['default', 'hover', 'active', 'focus'];
  }

  @action
  onClickDismissButton() {
    console.log('`Hds::DismissButton` clicked');
  }
}