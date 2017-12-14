<template>
  <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
    <div class="middle">
      <div class="inner">
        <br><br><p class="tMiddle text">{{ myText[lang] }}</p><br><br>
        <p class="tMiddle text">{{ myText[lang+"1"] }}</p><br><br>
        <p class="tMiddle text">{{ myText[lang+"2"] }}</p><br><br>
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
    myText () { return this.text.servicesRight }
  }
}
</script>

