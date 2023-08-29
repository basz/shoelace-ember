import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { importSync } from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { inject as service } from '@ember/service';
import { componentList } from 'test-app/constants';
import type ShoelaceService from '@shoelace-style/ember/services/shoelace';

export default class ApplicationController extends Controller {
  @service declare shoelace: ShoelaceService;

  constructor(...args: any[]) {
    super(...args);

    this.activePanelName = 'alert';
  }

  get languages() {
    return this.shoelace.languages;
  }

  componentList = componentList;

  @tracked _activePanelName?: string;
  @tracked lightTheme = true;

  get activePanelName(): string {
    return this._activePanelName ?? 'alert';
  }

  set activePanelName(value) {
    this._activePanelName = value;
  }

  get activePanelComponent() {
    const module: any = importSync(
      `./../components/panel/${this.activePanelName}`,
    );
    return ensureSafeComponent(module.default, this);
  }

  panel?: any;

  @action
  themeInputChanged() {
    const availableModes = ['light', 'dark', 'auto'];
    const nextMode =
      availableModes[(availableModes.indexOf(this.shoelace.theme) + 1) % 3]!;

    // set theme in shoelace service
    this.shoelace.theme = nextMode;

    // set theme for tailwind css
    ((theme: string) => {
      if (theme === 'auto') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          theme = 'dark';
        } else {
          theme = 'light';
        }
      }

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })(nextMode);

    // set theme for ui
    ((theme: string) => {
      if (theme === 'auto') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          theme = 'dark';
        } else {
          theme = 'light';
        }
      }

      this.lightTheme = theme === 'light';
    })(nextMode);
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
