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
    init() {
      if (this.config.url && this.config.url !== '') {
        this.player = new Player(this.config);
        this.$emit('player', this.player)
      }
    }
  },
  watch:{
    config:{
      handler: function () {
        this.init();
       },
      deep: true
    }
  },
  mounted() {
   this.init();
  },
  beforeDestroy() {
    this.player && typeof this.player.destroy === 'function' && this.player.destroy();
  }
}
</script>
