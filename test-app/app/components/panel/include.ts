import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class IncludeComponent extends Component {
  @action
  onIncludeLoad(event: CustomEvent) {}
}
