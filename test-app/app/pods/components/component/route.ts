import Route from '@ember/routing/route';

export default class ComponentRoute extends Route {
  model({ component_name }: { component_name: string }) {
    return { component_name };
  }
}
