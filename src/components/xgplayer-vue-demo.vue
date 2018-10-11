<template>
  <div>
    mp4:<VueXgplayer :config="configMp4" :rootStyle="rootStyleMp4" format='mp4' @player="Mp4Player = $event"/>
    xg-mp4:<VueXgplayer :config="configXgMp4" format='xg-mp4' @player="xgMp4Player = $event"/>
    flv:<VueXgplayer :config="configFlv" format='flv' @player="FlvPlayer = $event"/>
    xg-flv:<VueXgplayer :config="configXgFlv" format='xg-flv' @player="xgFlvPlayer = $event"/>
    hls:<VueXgplayer :config="configHls" format='hls' @player="HlsPlayer = $event"/>
    xg-hls:<VueXgplayer :config="configXgHls" format='xg-hls' @player="xgHlsPlayer = $event"/>
    dash:<VueXgplayer :config="configDash" format='dash' @player="DashPlayer = $event"/>
    music:<VueXgplayer :config="configMusic" format='music' @player="MusicPlayer = $event"/>
  </div>
</template>
<script>
export default {
  name: 'videoPlayer',
  data () {
    return {
      configMp4: {
        id: 'vs1',
        url: '/static/video/dash/xgplayer-demo.mp4'
      },
      rootStyleMp4: {
        backgroundColor: 'rgba(0,0,0,0.87)'
      },
      Mp4Player: null,

      configXgMp4: {
        id: 'vs2',
        url: '/static/video/dash/xgplayer-demo.mp4'
      },
      xgMp4Player: null,

      configFlv: {
        id: 'vs3',
        url: '/static/video/flv/xgplayer-demo.flv'
      },
      FlvPlayer: null,

      configXgFlv: {
        id: 'vs4',
        url: '/static/video/flv/xgplayer-demo.flv'
      },
      xgFlvPlayer: null,

      configHls: {
        id: 'vs5',
        url: '/static/video/hls/xgplayer-demo.m3u8'
      },
      HlsPlayer: null,

      configXgHls: {
        id: 'vs6',
        url: '/static/video/hls/xgplayer-demo.m3u8'
      },
      xgHlsPlayer: null,

      configDash: {
        id: 'vs7',
        url: '/static/video/dash/xgplayer-demo_dash.mpd'
      },
      DashPlayer: null,

      configMusic: {
        id: 'vs8',
        url: [
          {
            src: '/static/video/music/audio.mp3',
            name: '林宥嘉·脆弱一分钟',
            vid: '10000000',
            poster: '/static/video/music/sintel-poster.png'
          }
        ],
        width: 900,
        height: 50,
        volume: 0.6
      },
      MusicPlayer: null,
    }
  },
}
</script>
