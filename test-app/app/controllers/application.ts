import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { importSync } from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';

export default class ApplicationController extends Controller {
  components = [
    'alert',
    'animated-image',
    'animation',
    'avatar',
    'badge',
    'breadcrumb',
    'breadcrumb-item',
    'button',
    'button-group',
    'card',
    'carousel',
    'carousel-item',
    'checkbox',
    'color-picker',
    'details',
    'dialog',
    'divider',
    'drawer',
    'dropdown',
    'format-bytes',
    'format-date',
    'format-number',
    'icon',
    'icon-button',
    'image-comparer',
    'include',
    'input',
    'menu',
    'menu-item',
    'menu-label',
    'mutation-observer',
    'option',
    'popup',
    'progress-bar',
    'progress-ring',
    'qr-code',
    'radio',
    'radio-button',
    'radio-group',
    'range',
    'rating',
    'relative-time',
    'resize-observer',
    'select',
    'skeleton',
    'spinner',
    'split-panel',
    'switch',
    'tab',
    'tab-group',
    'tab-panel',
    'tag',
    'textarea',
    'tooltip',
    'tree',
    'tree-item',
    'visually-hidden',
  ];

  @tracked _activePanelName?: string;

  get activePanelName(): string {
    return this._activePanelName ?? 'alert';
  }

  set activePanelName(value) {
    this._activePanelName = value;
  }

  get activePanelComponent() {
    const module: any = importSync(
      `./../components/panel/${this.activePanelName}`
    );
    return ensureSafeComponent(module.default, this);
  }

  panel?: any;

  @action
  onInsert(element: HTMLElement) {
    this.panel = element;
  }

  @action
  onShowPanel(event: CustomEvent) {
    this.activePanelName = event.detail.name;

    const tab = event.target as Element;
    const panel = tab.querySelector('sl-tab-panel');
    if (panel) {
      panel.style.display = 'block';
    }
    // this.panel?.show(event.detail.name);
  }

  @action
  onHidePanel(event: CustomEvent) {}
}
