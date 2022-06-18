# axlMusicForRimWorld
制作rimworld 的自定义音乐



使用

```
npm run dev
```

然後会生成 Songs_Gameplay.xml 文件 。将其拷贝到目录下的AXLMusic\Defs\SongDefs

歌曲还需要自动设置 如果是仅战斗播放 需要设置 tense 字段 示例如下：

```xml
	<SongDef>
		<clipPath>AssemblingtheFleet</clipPath>
		<volume>0.8</volume>
		<tense>true</tense>
	</SongDef>
```

然後 將Songs_Gameplay.xml 拷貝到游戲的AXLMusic\Defs\SongDefs 文件夹内

