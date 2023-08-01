// should work but does not
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

// does work, due to rollup asset copying
import '../public/themes/light.css';
import '../public/themes/dark.css';
