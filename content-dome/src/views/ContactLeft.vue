<template>
  <transition :name="transition">
    <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
      <div class="middle">
        <div class="inner">
          <img src="../assets/content_dome_page.png"/>
          <p class="tSpaceB tSmall text tab">{{ myText[lang][0] }}</p>
          <p class="tSmall text">{{ myText[lang][1]}}</p><br>
          <p class="tSmall text">{{ myText[lang][2]}}</p><br>
          <p class="tSmall text">{{ myText[lang][3]}}</p><br>
          <p class="tSmall text">{{ myText[lang][4]}}</p><br>
          <p class="tSmall text">{{ myText[lang][5]}}</p><br>
          <p class="tSmall text">{{ myText[lang][6]}}</p><br>
          <p class="tSmall disc text">{{ myText[lang][7]}}</p>
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
    myText () { return this.text.contactLeft },
    lang () { return this.$route.query.lang }
  }
}
</script>
