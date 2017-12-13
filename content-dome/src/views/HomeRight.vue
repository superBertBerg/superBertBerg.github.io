<template>
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div class="middle backgroundBlack">
        <img src="../assets/content_dome_immersive_media.png"/>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      text: 'text',
      lang: 'lang',
      viewport: 'viewport'
    }),
    myText () { return this.text.homeLeft }
  }
}
</script>

