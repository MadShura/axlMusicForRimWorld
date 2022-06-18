import * as fs from 'fs'
import * as path from 'path'
import { rootPath } from '../../helper/index'

const dirName = '/allDemo'
const demoPath = path.join(rootPath, 'html/allDemo')
export default function getDemoLink(req, res): void {
  fs.readdir(demoPath, (err, files) => {
    if (err) { console.log(err) }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(files.map(x => { return dirName + '/' + x })));
  })
}

