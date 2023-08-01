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
  components: ['alert', 'button', 'badge', 'icon'],
};

export async function initialize(application: Application) {
  const shoelaceConfig: ShoelaceConfig =
    (application.resolveRegistration('config:environment') as any)[
      'shoelace'
    ] ?? {};

  shoelaceConfig.basePath ??= defaultConfig.basePath;
  shoelaceConfig.theme ??= defaultConfig.theme;
  shoelaceConfig.components ??= defaultConfig.components;

  console.log(shoelaceConfig);

  shoelaceConfig.components.forEach((component) => {
    if (component === 'alert') {
      import('@shoelace-style/shoelace/dist/components/alert/alert.js');
    }
    if (component === 'button') {
      import('@shoelace-style/shoelace/dist/components/button/button.js');
    }
    if (component === 'icon') {
      import('@shoelace-style/shoelace/dist/components/icon/icon.js');
    }
    if (component === 'badge') {
      import('@shoelace-style/shoelace/dist/components/badge/badge.js');
    }
  });

  setBasePath(shoelaceConfig.basePath);
}

export default {
  initialize,
};
