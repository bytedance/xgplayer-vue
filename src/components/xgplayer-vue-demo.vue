<template>
  <div>
    <VueXgplayer :config="configMp4"  style="background-color:rgba(0,0,0,0.87)" @player="Mp4Player = playerInstance"/>
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
      Mp4Player: null
    }
  },
  mounted(){
    
    this.changeConfig();
  },
  methods: {
    // 播放器配置修改
    changeConfig(){
     this.configMp4.id="xgplayer"
    }
  }
}
</script>
