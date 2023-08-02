import Application from '@ember/application';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/ember/index';

type ShoelaceConfig = {
  basePath: string;
  theme: 'light' | 'dark';
  components: string[];
};

const defaultConfig: ShoelaceConfig = {
  basePath: '/@shoelace-style/ember',
  theme: 'light',
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

export async function initialize(application: Application) {
  const shoelaceConfig: ShoelaceConfig =
    (application.resolveRegistration('config:environment') as any)[
      'shoelace'
    ] ?? {};

  shoelaceConfig.basePath ??= defaultConfig.basePath;
  shoelaceConfig.theme ??= defaultConfig.theme;
  shoelaceConfig.components ??= defaultConfig.components;

  shoelaceConfig.components.forEach((component) => {
    switch (component) {
      case 'alert':
        import(`@shoelace-style/shoelace/dist/components/alert/alert.js`);
        break;

      case 'animated-image':
        import(
          `@shoelace-style/shoelace/dist/components/animated-image/animated-image.js`
        );
        break;

      case 'animation':
        import(
          `@shoelace-style/shoelace/dist/components/animation/animation.js`
        );
        break;

      case 'avatar':
        import(`@shoelace-style/shoelace/dist/components/avatar/avatar.js`);
        break;

      case 'badge':
        import(`@shoelace-style/shoelace/dist/components/badge/badge.js`);
        break;

      case 'breadcrumb':
        import(
          `@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js`
        );
        break;

      case 'breadcrumb-item':
        import(
          `@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js`
        );
        break;

      case 'button':
        import(`@shoelace-style/shoelace/dist/components/button/button.js`);
        break;

      case 'button-group':
        import(
          `@shoelace-style/shoelace/dist/components/button-group/button-group.js`
        );
        break;

      case 'card':
        import(`@shoelace-style/shoelace/dist/components/card/card.js`);
        break;

      case 'carousel':
        import(`@shoelace-style/shoelace/dist/components/carousel/carousel.js`);
        break;

      case 'carousel-item':
        import(
          `@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js`
        );
        break;

      case 'checkbox':
        import(`@shoelace-style/shoelace/dist/components/checkbox/checkbox.js`);
        break;

      case 'color-picker':
        import(
          `@shoelace-style/shoelace/dist/components/color-picker/color-picker.js`
        );
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
        import(
          `@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.js`
        );
        break;

      case 'format-date':
        import(
          `@shoelace-style/shoelace/dist/components/format-date/format-date.js`
        );
        break;

      case 'format-number':
        import(
          `@shoelace-style/shoelace/dist/components/format-number/format-number.js`
        );
        break;

      case 'icon':
        import(`@shoelace-style/shoelace/dist/components/icon/icon.js`);
        break;

      case 'icon-button':
        import(
          `@shoelace-style/shoelace/dist/components/icon-button/icon-button.js`
        );
        break;

      case 'image-comparer':
        import(
          `@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js`
        );
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
        import(
          `@shoelace-style/shoelace/dist/components/menu-item/menu-item.js`
        );
        break;

      case 'menu-label':
        import(
          `@shoelace-style/shoelace/dist/components/menu-label/menu-label.js`
        );
        break;

      case 'mutation-observer':
        import(
          `@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.js`
        );
        break;

      case 'option':
        import(`@shoelace-style/shoelace/dist/components/option/option.js`);
        break;

      case 'popup':
        import(`@shoelace-style/shoelace/dist/components/popup/popup.js`);
        break;

      case 'progress-bar':
        import(
          `@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js`
        );
        break;

      case 'progress-ring':
        import(
          `@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js`
        );
        break;

      case 'qr-code':
        import(`@shoelace-style/shoelace/dist/components/qr-code/qr-code.js`);
        break;

      case 'radio':
        import(`@shoelace-style/shoelace/dist/components/radio/radio.js`);
        break;

      case 'radio-button':
        import(
          `@shoelace-style/shoelace/dist/components/radio-button/radio-button.js`
        );
        break;

      case 'radio-group':
        import(
          `@shoelace-style/shoelace/dist/components/radio-group/radio-group.js`
        );
        break;

      case 'range':
        import(`@shoelace-style/shoelace/dist/components/range/range.js`);
        break;

      case 'rating':
        import(`@shoelace-style/shoelace/dist/components/rating/rating.js`);
        break;

      case 'relative-time':
        import(
          `@shoelace-style/shoelace/dist/components/relative-time/relative-time.js`
        );
        break;

      case 'resize-observer':
        import(
          `@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.js`
        );
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
        import(
          `@shoelace-style/shoelace/dist/components/split-panel/split-panel.js`
        );
        break;

      case 'switch':
        import(`@shoelace-style/shoelace/dist/components/switch/switch.js`);
        break;

      case 'tab':
        import(`@shoelace-style/shoelace/dist/components/tab/tab.js`);
        break;

      case 'tab-group':
        import(
          `@shoelace-style/shoelace/dist/components/tab-group/tab-group.js`
        );
        break;

      case 'tab-panel':
        import(
          `@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js`
        );
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
        import(
          `@shoelace-style/shoelace/dist/components/tree-item/tree-item.js`
        );
        break;

      case 'visually-hidden':
        import(
          `@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js`
        );
        break;

      default:
        console.warn(`Unknown Shoelace component: ${component}`);
    }
  });

  setBasePath(shoelaceConfig.basePath);
}

export default {
  initialize,
};
