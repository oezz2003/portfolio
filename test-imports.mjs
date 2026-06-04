import * as Core from './node_modules/@once-ui-system/core/dist/components/index.js';

console.log("Checking once-ui-system/core exports:");
const keys = [
  'Background',
  'Column',
  'Flex',
  'RevealFx',
  'Avatar',
  'Button',
  'Heading',
  'Icon',
  'IconButton',
  'Media',
  'Tag',
  'Text',
  'Schema',
  'Row',
  'Fade',
  'ToggleButton',
  'Line'
];

for (const key of keys) {
  console.log(`${key}: ${typeof Core[key]} (${Core[key] === undefined ? 'UNDEFINED' : 'OK'})`);
}
