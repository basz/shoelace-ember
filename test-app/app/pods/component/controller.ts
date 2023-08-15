import Controller from '@ember/controller';
import { importSync } from '@embroider/macros';
import { ensureSafeComponent } from '@embroider/util';
import { tracked } from '@glimmer/tracking';

export default class ComponentController extends Controller {
  @tracked model!: { component_name: string };

  @tracked _activePanelName?: string;

  get activePanelName(): string {
    return this.model.component_name ?? 'alert';
  }

  set activePanelName(value) {
    this._activePanelName = value;
  }

  get activePanelComponent() {
    const module: any = importSync(
      `./../../components/panel/${this.model.component_name}`
    );
    return ensureSafeComponent(module.default, this);
  }
}
