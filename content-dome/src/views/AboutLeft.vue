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
import { langWatch, revUp } from '@/mixins'
import { mapGetters } from 'vuex'

export default {
  mixins: [langWatch, revUp],
  computed: {
    ...mapGetters({
      text: 'text',
      viewport: 'viewport'
    }),
    myText () { return this.text.aboutLeft },
    lang () { return this.$route.query.lang }
  }
}
</script>

