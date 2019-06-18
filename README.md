## maptalks.wmts

maptlkas 加载 wmts 服务

### dependencies

    maptalks

### 使用

`安装依赖包`

```shell
$ yarn add maptalks.wmts
// 或
$ npm install maptalks.wmts --save
......
```

`调用代码 es module 版本`

```javascript
import { WMTSTileLayer } from 'maptalks.wmts'

new WMTSTileLayer('layer', {
    tileSystem: [1, -1, -180, 90],
	layer: 'vec',
	tilematrixset: 'c',
	format: 'tiles',
	urlTemplate: 'http://t{s}.tianditu.com/vec_c/wmts?tk=34e168d12e2b79f61dc1e6e220659c71',
	subdomains: ['1', '2', '3', '4', '5'],
	attribution: '&copy; <a target="_blank" href="http://www.tianditu.cn">Tianditu</a>'
}),

```
