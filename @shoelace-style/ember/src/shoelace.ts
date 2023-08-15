import { setBasePath } from '@shoelace-style/shoelace';
import { tracked } from '@glimmer/tracking';

export type Theme = 'light' | 'dark';
export type ThemeOption = Theme | 'auto';

export class ShoelaceConfig {
  readonly basePath: string;
  languages: string[];
  readonly components: string[];

  @tracked language: string;
  @tracked theme: ThemeOption;

  constructor(config: ShoelaceConfig) {
    this.basePath = config.basePath;
    this.theme = config.theme;
    this.languages = config.languages;
    this.language = config.language;
    this.components = config.components;
  }
}

export function setupShoelace(config: ShoelaceConfig) {
  setBasePath(config.basePath);
  config.languages = setupLanguages(config); // setup language before components
  setupComponents(config);
  setupTheme(config);
}

export function applyShoelaceTheme(theme: Theme) {
  switch (theme) {
    case 'light':
      document.documentElement.classList.remove('sl-theme-dark');
      break;
    case 'dark':
      document.documentElement.classList.add('sl-theme-dark');
      break;
  }
}

///////////

function setupComponents({ components }: { components: string[] }) {
  components.forEach((component) => {
    switch (component) {
      case 'alert':
        import(`@shoelace-style/shoelace/dist/components/alert/alert.js`);
        break;

      case 'animated-image':
        import(`@shoelace-style/shoelace/dist/components/animated-image/animated-image.js`);
        break;

      case 'animation':
        import(`@shoelace-style/shoelace/dist/components/animation/animation.js`);
        break;

      case 'avatar':
        import(`@shoelace-style/shoelace/dist/components/avatar/avatar.js`);
        break;

      case 'badge':
        import(`@shoelace-style/shoelace/dist/components/badge/badge.js`);
        break;

      case 'breadcrumb':
        import(`@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js`);
        break;

      case 'breadcrumb-item':
        import(`@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js`);
        break;

      case 'button':
        import(`@shoelace-style/shoelace/dist/components/button/button.js`);
        break;

      case 'button-group':
        import(`@shoelace-style/shoelace/dist/components/button-group/button-group.js`);
        break;

      case 'card':
        import(`@shoelace-style/shoelace/dist/components/card/card.js`);
        break;

      case 'carousel':
        import(`@shoelace-style/shoelace/dist/components/carousel/carousel.js`);
        break;

      case 'carousel-item':
        import(`@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js`);
        break;

      case 'checkbox':
        import(`@shoelace-style/shoelace/dist/components/checkbox/checkbox.js`);
        break;

      case 'color-picker':
        import(`@shoelace-style/shoelace/dist/components/color-picker/color-picker.js`);
        break;

      case 'copy-button':
        import(`@shoelace-style/shoelace/dist/components/copy-button/copy-button.js`);
        break;

      case 'details':
        import(`@shoelace-style/shoelace/dist/components/details/details.js`);
        break;

      case 'dialog':
        import(`@shoelace-style/shoelace/dist/components/dialog/dialog.js`);
        break;

      case 'divider':
        import(`@shoelace-style/shoelace/dist/components/divider/divider.js`);
        break;

      case 'drawer':
        import(`@shoelace-style/shoelace/dist/components/drawer/drawer.js`);
        break;

      case 'dropdown':
        import(`@shoelace-style/shoelace/dist/components/dropdown/dropdown.js`);
        break;

      case 'format-bytes':
        import(`@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.js`);
        break;

      case 'format-date':
        import(`@shoelace-style/shoelace/dist/components/format-date/format-date.js`);
        break;

      case 'format-number':
        import(`@shoelace-style/shoelace/dist/components/format-number/format-number.js`);
        break;

      case 'icon':
        import(`@shoelace-style/shoelace/dist/components/icon/icon.js`);
        break;

      case 'icon-button':
        import(`@shoelace-style/shoelace/dist/components/icon-button/icon-button.js`);
        break;

      case 'image-comparer':
        import(`@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js`);
        break;

      case 'include':
        import(`@shoelace-style/shoelace/dist/components/include/include.js`);
        break;

      case 'input':
        import(`@shoelace-style/shoelace/dist/components/input/input.js`);
        break;

      case 'menu':
        import(`@shoelace-style/shoelace/dist/components/menu/menu.js`);
        break;

      case 'menu-item':
        import(`@shoelace-style/shoelace/dist/components/menu-item/menu-item.js`);
        break;

      case 'menu-label':
        import(`@shoelace-style/shoelace/dist/components/menu-label/menu-label.js`);
        break;

      case 'mutation-observer':
        import(`@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.js`);
        break;

      case 'option':
        import(`@shoelace-style/shoelace/dist/components/option/option.js`);
        break;

      case 'popup':
        import(`@shoelace-style/shoelace/dist/components/popup/popup.js`);
        break;

      case 'progress-bar':
        import(`@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js`);
        break;

      case 'progress-ring':
        import(`@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js`);
        break;

      case 'qr-code':
        import(`@shoelace-style/shoelace/dist/components/qr-code/qr-code.js`);
        break;

      case 'radio':
        import(`@shoelace-style/shoelace/dist/components/radio/radio.js`);
        break;

      case 'radio-button':
        import(`@shoelace-style/shoelace/dist/components/radio-button/radio-button.js`);
        break;

      case 'radio-group':
        import(`@shoelace-style/shoelace/dist/components/radio-group/radio-group.js`);
        break;

      case 'range':
        import(`@shoelace-style/shoelace/dist/components/range/range.js`);
        break;

      case 'rating':
        import(`@shoelace-style/shoelace/dist/components/rating/rating.js`);
        break;

      case 'relative-time':
        import(`@shoelace-style/shoelace/dist/components/relative-time/relative-time.js`);
        break;

      case 'resize-observer':
        import(`@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.js`);
        break;

      case 'select':
        import(`@shoelace-style/shoelace/dist/components/select/select.js`);
        break;

      case 'skeleton':
        import(`@shoelace-style/shoelace/dist/components/skeleton/skeleton.js`);
        break;

      case 'spinner':
        import(`@shoelace-style/shoelace/dist/components/spinner/spinner.js`);
        break;

      case 'split-panel':
        import(`@shoelace-style/shoelace/dist/components/split-panel/split-panel.js`);
        break;

      case 'switch':
        import(`@shoelace-style/shoelace/dist/components/switch/switch.js`);
        break;

      case 'tab':
        import(`@shoelace-style/shoelace/dist/components/tab/tab.js`);
        break;

      case 'tab-group':
        import(`@shoelace-style/shoelace/dist/components/tab-group/tab-group.js`);
        break;

      case 'tab-panel':
        import(`@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js`);
        break;

      case 'tag':
        import(`@shoelace-style/shoelace/dist/components/tag/tag.js`);
        break;

      case 'textarea':
        import(`@shoelace-style/shoelace/dist/components/textarea/textarea.js`);
        break;

      case 'tooltip':
        import(`@shoelace-style/shoelace/dist/components/tooltip/tooltip.js`);
        break;

      case 'tree':
        import(`@shoelace-style/shoelace/dist/components/tree/tree.js`);
        break;

      case 'tree-item':
        import(`@shoelace-style/shoelace/dist/components/tree-item/tree-item.js`);
        break;

      case 'visually-hidden':
        import(`@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js`);
        break;

      default:
        console.warn(`Unknown Shoelace component: ${component}`);
    }
  });
}

import './style.css';

function setupTheme(config: ShoelaceConfig) {
  const boundThemeChanged = themeChanged.bind(config);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', boundThemeChanged);
}

function themeChanged(this: ShoelaceConfig, event: MediaQueryListEvent) {
  if (this.theme !== 'auto') {
    return;
  }

  const colorScheme = event.matches ? 'dark' : 'light';

  applyShoelaceTheme(colorScheme);
}

function setupLanguages({ languages }: { languages: string[] }): string[] {
  const failedLanguages: string[] = [];

  languages.forEach((language) => {
    switch (language) {
      case 'en':
        import('@shoelace-style/shoelace/dist/translations/en.js');
        break;

      case 'da':
        import('@shoelace-style/shoelace/dist/translations/da.js');
        break;

      case 'de-ch':
        import('@shoelace-style/shoelace/dist/translations/de-ch.js');
        break;

      case 'de':
        import('@shoelace-style/shoelace/dist/translations/de.js');
        break;

      case 'en-gb':
        import('@shoelace-style/shoelace/dist/translations/en-gb.js');
        break;

      case 'es':
        import('@shoelace-style/shoelace/dist/translations/es.js');
        break;

      case 'fa':
        import('@shoelace-style/shoelace/dist/translations/fa.js');
        break;

      case 'fr':
        import('@shoelace-style/shoelace/dist/translations/fr.js');
        break;

      case 'he':
        import('@shoelace-style/shoelace/dist/translations/he.js');
        break;

      case 'hu':
        import('@shoelace-style/shoelace/dist/translations/hu.js');
        break;

      case 'ja':
        import('@shoelace-style/shoelace/dist/translations/ja.js');
        break;

      case 'nl':
        import('@shoelace-style/shoelace/dist/translations/nl.js');
        break;

      case 'pl':
        import('@shoelace-style/shoelace/dist/translations/pl.js');
        break;

      case 'pt':
        import('@shoelace-style/shoelace/dist/translations/pt.js');
        break;

      case 'ru':
        import('@shoelace-style/shoelace/dist/translations/ru.js');
        break;

      case 'sv':
        import('@shoelace-style/shoelace/dist/translations/sv.js');
        break;

      case 'tr':
        import('@shoelace-style/shoelace/dist/translations/tr.js');
        break;

      case 'zh-tw':
        import('@shoelace-style/shoelace/dist/translations/zh-tw.js');
        break;

      default:
        console.warn(`Unknown Shoelace language: ${language}`);
        failedLanguages.push(language);
    }
  });

  return languages.filter((language) => !failedLanguages.includes(language));
}
