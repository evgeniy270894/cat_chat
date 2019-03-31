<template>
  <div>
    <div class="camera-modal">
      <video ref="video" class="camera-stream"/>
      <v-btn @click="currentFace = !currentFace"
             fab dark class="elevation-0 btn__loop_position"
             color="transparent"
      >
        <v-icon color="accent">loop</v-icon>
      </v-btn>
      <v-btn @click="capture"
             fab dark class="elevation-0 btn__camera_position"
             color="accent"
      >
        <v-icon>camera</v-icon>
      </v-btn>
    </div>
    <div>
      <img id="img_blob" src="">
    </div>
  </div>
</template>

<script>
  import {storage} from '../service/firebase'

  export default {
    name: "Camera",
    data() {
      return {
        mediaStream: null,
        currentFace: true,
      }
    },
    mounted() {
      this.startCamera('environment');
    },
    methods: {
      capture() {
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
        const imageCapture = new window.ImageCapture(mediaStreamTrack)
        imageCapture.takePhoto().then(blob => {
          let url = URL.createObjectURL(blob)
          document.getElementById('img_blob').src = url
          // storage.ref().child(`images/picture-${new Date().getTime()}`).put(blob)
          //   .then(res => { console.log(res) })
          // this.$router.go(-1)
        })
      },
      startCamera(face) {
        this.stop();
        this.changeFace(face);
      },
      stop() {
        return this.$refs.video.srcObject && this.$refs.video.srcObject.getTracks().map(x => x.stop());
      },
      changeFace(face) {
        navigator.mediaDevices.getUserMedia({video: {facingMode: face}})
          .then(stream => {
            console.log(stream)
            this.$refs.video.srcObject = stream;
            this.mediaStream = stream;
            this.$refs.video.play()
          })
      }
    },
    watch: {
      currentFace(val) {
        let face = val ? 'environment' : 'user'
        this.startCamera(face)
      }
    },
    destroyed() {
      const tracks = this.mediaStream.getTracks()
      tracks.map(track => track.stop())
    },
  }
</script>

<style scoped>
  .camera-modal {
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 5;
    position: relative;
  }

  .camera-stream {
    width: 100%;
    max-height: 100%;
  }

  #img_blob {
    width: 100%;
  }
  .btn__loop_position{
    position: absolute;
    top: 0;
    right: 0;
  }
  .btn__camera_position{
    position: absolute;
    bottom: 5%;
    right: 50%;
    transform: translateX(50%);

  }
</style>
