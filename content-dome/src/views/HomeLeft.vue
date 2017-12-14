<template>
    <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
      <div class="middle">
        <div class="inner">
          <p class="tab tBig text">{{ myText[lang].toUpperCase() }}</p>
          <p class="tMiddle text" v-show="lang == 'de'">{{text.de1}}</p>
        </div>
      </div>
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
