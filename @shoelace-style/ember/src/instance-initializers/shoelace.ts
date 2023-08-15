import ApplicationInstance from '@ember/application/instance';

export function initialize(applicationInstance: ApplicationInstance) {
  applicationInstance.lookup('service:shoelace');
}

export default {
  name: 'shoelace',
  initialize,
};
