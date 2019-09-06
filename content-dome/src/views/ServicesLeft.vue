<template>
  <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
    <div class="middle">
      <img src="../assets/content_dome_immersive_media.png"/>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      viewport: 'viewport',
      lang: 'lang'
    })
  }
}
</script>
