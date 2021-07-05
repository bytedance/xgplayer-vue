<template>
  <div class="container">
    <div class="title">demo</div>
    <VueXgplayer :config="configMp4"  style="background-color:rgba(0,0,0,0.87)" @player="player"/>
  </div>
</template>
<script>
export default {
  name: 'videoPlayer',
  data () {
    return {
      configMp4: {
        id: 'vs',
        url: '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4'
      },
      Mp4Player: null
    }
  },
  mounted(){
    this.Mp4Player.on('ready', ()=>{ console.log('ready') });
    this.Mp4Player.on('play', ()=>{ console.log('play') });
    this.Mp4Player.on('timeupdate', (player)=>{ console.log(player.currentTime) });
  },
  methods: {
    player(player){
      this.Mp4Player = player;
    },
  }
}
</script>

<style scoped>
 .container {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100vh;
 }
 .title {
   margin-bottom: 30px;
   font-size: 20px;
   font-weight: 400;
   text-align: center;
 }
</style>
