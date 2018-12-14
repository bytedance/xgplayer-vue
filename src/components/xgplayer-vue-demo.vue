<template>
  <div>
    <VueXgplayer :config="configMp4" :rootStyle="rootStyleMp4" @player="Mp4Player = $event"/>
  </div>
</template>
<script>
export default {
  name: 'videoPlayer',
  data () {
    return {
      configMp4: {
        id: 'vs',
        url: '/static/xgplayer-demo.mp4'
      },
      rootStyleMp4: {
        backgroundColor: 'rgba(0,0,0,0.87)'
      },
      Mp4Player: null
    }
  },
}
</script>
