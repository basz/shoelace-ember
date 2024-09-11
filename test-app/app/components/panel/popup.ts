import './popup.css';

import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PopupOverviewArgs {}

export default class PopupOverviewComponent extends Component<PopupOverviewArgs> {
  @tracked placement: string = 'top';
  @tracked distance: number = 0;
  @tracked skidding: number = 0;
  @tracked isActive: boolean = true;
  @tracked hasArrow: boolean = false;

  @action
  updatePlacement(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.placement = target.value;
  }

  @action
  updateDistance(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.distance = Number(target.value);
  }

  @action
  updateSkidding(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.skidding = Number(target.value);
  }

  @action
  toggleActive(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isActive = target.checked;
  }

  @action
  toggleArrow(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.hasArrow = target.checked;
  }
}
