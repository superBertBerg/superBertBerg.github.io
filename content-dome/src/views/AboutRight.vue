<template>
  <transition :name="transition">
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div class="middle backgroundBlack">
        <div class="inner">
          <p class="tab tMiddle text">{{ myText[lang] }}</p>
          <img class="maxSize" src="../assets/die_drei_fragezeichen.png"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { revDo } from '@/mixins'
import { mapGetters } from 'vuex'

export default {
  mixins: [revDo],
  computed: {
    ...mapGetters({
      text: 'text',
      lang: 'lang',
      viewport: 'viewport'
    }),
    myText () { return this.text.aboutRight }
  }
}
</script>

