
import * as fs from 'fs'
import * as path from 'path'

import { rootPath } from './helper';
const apiPath = path.join(rootPath, 'serve/api');

const Route = {}
fs.readdir(apiPath, (err, files) => {
  files.forEach(async function (filename) {
    if (!/\.ts$/.test(filename)) {
      return;
    }

    const qq = await import(apiPath + '/' + filename);
    Route[filename.replace('.ts','')] = qq.default;

    console.log('搞好了',Route);

    // Object.defineProperty(patcher, name, _load)
  });
})

export default Route 