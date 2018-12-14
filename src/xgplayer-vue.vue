<template>
  <div :id='config.id' :style='rootStyle'>
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
        this.player = new Player(this.config);
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
