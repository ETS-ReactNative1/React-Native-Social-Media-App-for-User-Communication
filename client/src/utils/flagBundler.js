// Node Utility to build export file for flags
const fs = require('fs');

const files = fs.readdirSync('../assets/flags').filter(x => x.includes('png'));
const ex = `{\n${files
  .map(x => `"${x.split('.png')[0]}": require("./${x}"),`)
  .join('\n')}}`;
const res = `export default ${ex}`;
fs.writeFileSync('../assets/flags/index.js', res);
