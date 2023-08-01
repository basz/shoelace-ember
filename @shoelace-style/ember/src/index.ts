// @ts-ignore
import light from '@shoelace-style/shoelace/dist/themes/light.css';
// @ts-ignore
import dark from '@shoelace-style/shoelace/dist/themes/dark.css';

export function _() {
  // this is weird, but we need something to keep these references so they don't get optimized away.
  // I would classify this as a bug in embroider / ember-auto-import or the blueprint
  console.log(light, dark);
}
