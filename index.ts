import * as fs from "fs";
import * as ffmpeg from "fluent-ffmpeg";

const PATH = "./AXLMusic/Sounds"; // 目录

const command = new ffmpeg();

//  遍历目录得到文件信息
const volume = '1' //默认音乐音量 只能是0-1
let str = `<?xml version="1.0" encoding="utf-8"?><Defs>`;
function walk(path, callback) {
  const files = fs.readdirSync(path);
  files.forEach(function (file) {
    if (fs.statSync(path + "/" + file).isFile()) {
      callback(path, file);
    }
  });
  str += `</Defs>`;
  if (fs.existsSync('Songs_Gameplay.xml')) { //看有没这个文件 有就删除
    fs.unlinkSync('Songs_Gameplay.xml');
  }

  fs.writeFileSync('Songs_Gameplay.xml', str); //写入文件
  console.log(str);
}

// 修改文件名称
function rename(oldPath, newPath) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      throw err;
    }
  });
}

// 运行
walk(PATH, function (path, fileName) {
  const oldPath = path + "/" + fileName, // 源文件路径
    newPath =
      path +
      "/" +
      fileName
        .replace(/[0-9\. &()-]/g, "") //去除数字 点号 括号和连字符
        .replace(/flac$/, ".flac") //补上.
        .replace(/mp$/, ".mp3") //补上.

        .replace(/^\./, ""); // 新路径

  rename(oldPath, newPath);

  if (!newPath.endsWith("ogg")) {   // 排除已经是ogg的歌
   
    let last = "";
    if (newPath.indexOf("mp3") > -1 || newPath.indexOf("flac") > -1) {  //仅修改mp3和 flac格式的歌
     
      const aim = newPath.replace(/flac|mp3/, "ogg");
      if (aim !== last) { //防止同文件同时有flac 和 MP3格式
        last = aim;
        ffmpeg(newPath).clone().save(aim);
        const _newPath = newPath.replace(/\.flac|\.mp3/, "").replace(/^\.\/\//, ''); //删除点
        str += `<SongDef>
          <clipPath>${_newPath}</clipPath>
          <volume>${volume}</volume>
          </SongDef>
          `;
      }
    }
  }
});
