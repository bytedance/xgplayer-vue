<div align="center">
    <img src="https://raw.githubusercontent.com/bytedance/xgplayer/master/xgplayer.png" width="384" height="96">
</div>
<div align="center">
    <a href="https://www.npmjs.com/package/xgplayer-vue" target="_blank">
        <img src="https://img.shields.io/npm/v/xgplayer-vue.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/xgplayer-vue" target="_blank">
        <img src="https://img.shields.io/npm/l/xgplayer-vue.svg" alt="license">
    </a>
    <a href="http://commitizen.github.io/cz-cli/">
        <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="commitizen">
    </a>
</div>

### Introduction

xgplayer is a web video player library. It has designed a separate, detachable UI component based on the principle that everything is componentized. More importantly, it is not only flexible in the UI layer, but also bold in its functionality: it gets rid of video loading, buffering, and format support for video dependence. Especially on mp4
it can be staged loading for that does not support streaming mp4. This means seamless switching with clarity, load control, and video savings. It also integrates on-demand and live support for FLV, HLS, and dash. [Document](http://h5player.bytedance.com/en/)

xgplayer-vue is the Vue component which encapsulating the xgplayer.

### Start

1. Install

    ```
    $ npm install xgplayer-vue@latest
    ```

2. Usage

    Step 1. Add xgplayer-vue component
    ```js
    import Xgplayer from 'xgplayer-vue';
    export default {
      components:{
        Xgplayer
      }
    }
    ```

    Step 2. Use in template
    ```html
    <Xgplayer :config="config" @player="player"/>
    ```

    Step 3. Config for xgplayer
    ```js
    export default {
      data () {
        return {
          config: {
            id: 'vs',
            url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
          },
          Player: null
        }
      },
      mounted(){
        this.Player.on('ready', ()=>{ console.log('ready') });
        this.Player.on('play', ()=>{ console.log('play') });
        this.Player.on('timeupdate', (player)=>{ console.log(player.currentTime) });
      },
      methods: {
        player(player){
          this.Player = player;
        },
      }
    }
    ```
    You can use 'config' object to pre-config xgplayer, such as size, volume, autoplay and so on. [More config](http://h5player.bytedance.com/en/config/)

    'mp4', 'hls', 'flv', 'dash' are supported to play and you should add the plugin you want to use. [Functional Plugins List](http://h5player.bytedance.com/en/plugins/#functional-plugins-list).

    'Player' is the xgplayer instance which exposed from the component. You can use 'Player' to access the API of xgplayer as follows.


### API

#### Attributes

```js
console.log(this.Player.currentTime)
```
[More attributes](http://h5player.bytedance.com/en/api/#attributes)

#### Method

```js
this.Player.pause();
```
[More methods](http://h5player.bytedance.com/en/api/#method)

#### Event

```js
this.Player.on('play', ()=>{console.log('play')})
```
[More events](http://h5player.bytedance.com/en/api/#event)

#### Life Cycle

```js
this.Player.once('ready', ()=>{console.log('ready')})
```
[More events](http://h5player.bytedance.com/en/api/#life-cycle)


### Plugins

xgplayer supports your custom plugins for more content viewing [plugins](http://h5player.bytedance.com/en/plugins/)

```js
import Xgplayer from 'xgplayer-vue';
import 'xgplayer-custom';
```

### Demo

```
$ git clone git@github.com:bytedance/xgplayer-vue.git
$ cd xgplayer-vue
$ npm install
$ npm start
```

please visit [http://localhost:9090/index.html](http://localhost:9090/index.html)


### License

[MIT](http://opensource.org/licenses/MIT)
