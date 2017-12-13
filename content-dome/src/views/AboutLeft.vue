<template>
  <transition :name="transition">
    <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
      <div class="middle">
        <div class="inner">
          <p class="tab tMiddle text">{{ myText[lang] }}</p>
          <img class="maxSize" src="../assets/tabaluga.png"/>
        </div>
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
      text: 'text',
      lang: 'lang',
      viewport: 'viewport'
    }),
    myText () { return this.text.aboutLeft }
  }
}
</script>

