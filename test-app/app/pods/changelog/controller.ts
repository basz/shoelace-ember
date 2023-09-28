import Controller from '@ember/controller';
import { action } from '@ember/object';
import MarkdownIt from 'markdown-it';

export default class ChangelogController extends Controller {
  private readonly markdown: MarkdownIt;

  constructor(...args: any[]) {
    super(...args);

    this.markdown = new MarkdownIt();
  }

  @action
  includeLoaded(event: CustomEvent) {
    if (event.eventPhase === Event.AT_TARGET) {
      const target = event.target as HTMLElement;
      target.innerHTML = this.markdown.render(target.innerHTML);
    }
  }
}
