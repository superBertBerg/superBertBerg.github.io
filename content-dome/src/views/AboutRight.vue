<template>
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div class="middle backgroundBlack">
        <div class="inner">
          <p class="tab tMiddle text">{{ myText[lang] }}</p>
          <img class="maxSize" src="../assets/die_drei_fragezeichen.png"/>
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
    myText () { return this.text.aboutRight }
  }
}
</script>

