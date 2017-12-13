<template>
  <transition :name="transition">
    <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
      <div class="middle">
        <div class="inner">
          <p class="tab tBig text">{{ myText[lang].toUpperCase() }}</p>
          <p class="tMiddle text" v-show="lang == 'de'">{{text.de1}}</p>
        </div>
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
    myText () { return this.text.homeLeft }
  }
}
</script>
