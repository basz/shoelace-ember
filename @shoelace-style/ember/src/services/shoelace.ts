import Service from '@ember/service';
import { assert } from '@ember/debug';
import { ShoelaceConfig, Theme, ThemeOption, applyShoelaceTheme, setupShoelace } from '@shoelace-style/ember/shoelace';

const defaultConfig: ShoelaceConfig = {
  basePath: '/@shoelace-style/ember',
  theme: 'light',
  languages: [],
  language: 'auto',
  components: [
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
  ],
};

export default class ShoelaceService extends Service {
  private readonly config: ShoelaceConfig;

  constructor(owner: any, ...args: any[]) {
    super(...args);

    // setup / assert configuration
    const config: ShoelaceConfig = new ShoelaceConfig(owner.resolveRegistration('config:environment')['shoelace'] ?? {});

    config.basePath ??= defaultConfig.basePath;
    config.components ??= defaultConfig.components;
    config.languages ??= defaultConfig.languages;
    config.language ??= defaultConfig.language;
    config.theme ??= defaultConfig.theme;

    assert(`Shoelace basePath must start a string`, typeof config.basePath === 'string');
    assert(`Shoelace basePath must start with a slash`, config.basePath.startsWith('/'));
    assert(
      `Shoelace components must all an array of strings`,
      Array.isArray(config.components) && config.components.every((language: unknown) => typeof language === 'string')
    );
    assert(
      `Shoelace languages must all an array of strings`,
      Array.isArray(config.languages) && config.languages.every((language: unknown) => typeof language === 'string')
    );
    assert(`Shoelace theme must be string and one of ThemeOptions`, typeof config.theme === 'string' && ['auto', 'dark', 'light'].includes(config.theme));

    // when 'auto' as language is set, add all languages from navigator.languages
    // attempt to get language from document.documentElement.lang or navigator.languages[0]

    // add language if set in html tag
    const language = config.language === 'auto' ? document.documentElement.lang || navigator.languages[0] || 'en' : config.language;

    config.languages = [...new Set([...config.languages, language])];

    this.config = config;

    // setup shoelace
    setupShoelace(config);

    // set language and theme
    this.language = language;
    this.theme = config.theme;
  }

  set language(language: string) {
    if (!this.config.languages.includes(language)) {
      console.warn(`Unknown Shoelace language: ${language}`);

      this.language = this.config.languages[0];
      return;
    }

    this.config.language = language;
    document.documentElement.lang = language;
  }

  get language() {
    return this.config.language;
  }

  get languages() {
    return this.config.languages;
  }

  set theme(theme: ThemeOption) {
    const colorScheme: Theme = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

    applyShoelaceTheme(colorScheme);

    this.config.theme = theme;
  }

  get theme() {
    return this.config.theme;
  }
}
