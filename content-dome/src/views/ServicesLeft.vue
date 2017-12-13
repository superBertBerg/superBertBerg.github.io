<template>
  <transition :name="transition">
  <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
    <div class="middle backgroundBlack">
      <img src="../assets/content_dome_immersive_media.png"/>
      </div>
    </div>
  </transition>
</template>

<script>
import { revUp } from '@/mixins'
import { mapGetters } from 'vuex'

export default {
  mixins: [revUp],
  computed: {
    ...mapGetters({
      viewport: 'viewport',
      lang: 'lang'
    })
  }
}
</script>
