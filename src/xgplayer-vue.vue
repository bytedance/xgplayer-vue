<template>
  <div :id='config.id'>
  </div>
</template>

<script>
import Player from 'xgplayer';

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
    }
  },
  methods: {
    initPlayer() {
      this.player = new Player(this.config);
      this.$emit('player', this.player);
    }
  },
  mounted() {
   this.initPlayer();
  },
  beforeDestroy() {
    this.player && typeof this.player.destroy === 'function' && this.player.destroy();
  }
}
</script>
