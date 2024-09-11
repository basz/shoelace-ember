import Service from '@ember/service';

import { applyShoelaceTheme, setupShoelace, ShoelaceConfig } from '../index.ts';

export default class ShoelaceService extends Service {
  private readonly config: ShoelaceConfig;

  constructor(owner: any, ...args: any[]) {
    super(...args);

    // setup / assert configuration
    const config: ShoelaceConfig = new ShoelaceConfig(owner.resolveRegistration('config:environment')['shoelace-ember'] ?? {});

    // when 'auto' as language is set, add all languages from navigator.languages
    // attempt to get language from document.documentElement.lang or navigator.languages[0]

    // add language if set in html tag
    const language = config.language === 'auto' ? document.documentElement.lang || navigator.languages[0] || 'en' : config.language;

    // always add 'en' as fallback language
    config.languages = [...new Set(['en', ...config.languages, language])];

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

      this.language = this.config.languages[0] ?? 'en';
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

  set theme(theme: string) {
    const colorScheme: string = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

    applyShoelaceTheme(colorScheme);

    this.config.theme = theme;
  }

  get theme() {
    return this.config.theme;
  }
}
