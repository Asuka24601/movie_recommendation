<template>
  <div :style="videoWrapStyles">
    <video id="my-player" ref="videoRef" class="video-js w-full h-full">
      <source :src="src" />
    </video>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export default {
  name: 'MyVideoPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    const videoRef = ref(null);
    // eslint-disable-next-line no-unused-vars
    let videoPlayer = null;

    const videoWrapStyles = computed(() => ({
      width: props.width,
      height: props.height
    }));

    const initVideo = () => {
      const options = {
        language: 'zh-CN',
        controls: true,
        preload: 'auto',
        autoplay: true,
        fluid: false,
        src: props.src
      };

      if (videoRef.value) {
        videoPlayer = videojs(videoRef.value, options, () => {
          console.log('Player is ready');
        });
      }
    };

    onMounted(() => {
      initVideo();
    });

    return {
      videoRef,
      videoWrapStyles
    };
  }
};
</script>

<style scoped lang="css">
.w-full {
  width: 100%;
}
</style>
