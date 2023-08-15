import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { importSync } from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { inject as service } from '@ember/service';
import { componentList } from 'test-app/constants';

export default class ApplicationController extends Controller {
  @service shoelace!: any;

  constructor(...args: any[]) {
    super(...args);

    this.activePanelName = 'alert';
  }

  get languages() {
    return this.shoelace.languages;
  }

  componentList = componentList;

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
  themeInputChanged(event: CustomEvent) {
    const { value } = event.target as HTMLInputElement;

    this.shoelace.theme = value;
  }

  get theme() {
    return this.shoelace.theme;
  }

  get language() {
    return this.shoelace.language;
  }

  @action
  languageInputChanged(event: CustomEvent) {
    const { value } = event.target as HTMLInputElement;

    this.shoelace.language = value;
  }

  @action
  onInsert(element: HTMLElement) {
    this.panel = element;
  }

  @action
  onShowPanel(event: CustomEvent) {
    this.activePanelName = event.detail.name;

    const tab = event.target as Element;
    const panel = tab.querySelector('sl-tab-panel') as HTMLElement;
    if (panel) {
      panel.style.display = 'block';
    }
  }
}
