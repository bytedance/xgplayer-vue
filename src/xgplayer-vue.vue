<template>
  <div :id='config.id' :style='rootStyle'>
  </div>
</template>

<script>
import Player from 'xgplayer';
import 'xgplayer-mp4';
import HlsJsPlayer from 'xgplayer-hls.js';
import 'xgplayer-hls';
import FlvJsPlayer from 'xgplayer-flv.js';
import FlvPlayer from 'xgplayer-flv';
import ShakaJsPlayer from 'xgplayer-shaka';
import Music from 'xgplayer-music';

export default {
  name: 'VueXgplayer',
  data: function () {
    return {
      player: null
    }
  },
  props: {
    config: {
      type: Object,
      default () {
        return { id: 'mse', url: '' }
      }
    },
    format: {
      type: String,
      default: 'mp4'
    },
    rootStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    init() {
      let self = this;
      if (this.config.url && this.config.url !== '') {
        this.config.ignores = this.config.ignores ? this.config.ignores.concat(['mp4player','hlsplayer','theme-default','cover','backward','forward','meta','next','prev', 'template']) : ['mp4player','hlsplayer','theme-default','cover','backward','forward','meta','next','prev', 'template'];
        if (this.format === 'hls') {
          this.player = new HlsJsPlayer(this.config);
        } else if (this.format === 'xg-hls') {
          this.config.ignores.splice(this.config.ignores.indexOf('hlsplayer'), 1);
          this.player = new Player(this.config);
        } else if (this.format === 'flv') {
          this.player = new FlvJsPlayer(this.config);
        } else if (this.format === 'xg-flv') {
          this.player = new FlvPlayer(this.config);
        } else if (this.format === 'dash') {
          this.player = new ShakaJsPlayer(this.config);
        } else if (this.format === 'xg-mp4') {
          this.config.ignores.splice(this.config.ignores.indexOf('mp4player'), 1);
          this.player = new Player(this.config);
        } else if (this.format === 'music') {
          ['theme-default','cover','backward','forward','meta','next','prev', 'template'].forEach(item => {
            this.config.ignores.splice(this.config.ignores.indexOf(item), 1);
          })
          this.player = new Music(this.config);
        } else {
          this.player = new Player(this.config);
        }
        this.$emit('player', this.player)
      }
    }
  },
  mounted() {
    this.init();
  },
  beforeUpdate() {
    this.init();
  }
}
</script>
