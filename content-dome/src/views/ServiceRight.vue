<template>
  <transition :name="direction">
  <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
    <div class="middle">
      <div class="inner">
        <br><br><p class="tMiddle text">{{ myText[lang] }}</p><br><br>
        <p class="tMiddle text">{{ myText[lang+"1"] }}</p><br><br>
        <p class="tMiddle text">{{ myText[lang+"2"] }}</p><br><br>
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
    myText () { return this.text.servicesLeft },
    lang () { return this.$route.query.lang }
  }
}
</script>

