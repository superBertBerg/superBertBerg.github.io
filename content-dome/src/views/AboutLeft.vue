<template>
    <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
      <div :class="{mob: viewlandscape}" class="middle">
        <div class="inner">
          <p :class="{mob: viewlandscape}" class="tab tMiddle text">{{ myText[lang] }}</p>
          <img :class="{mob: viewlandscape}" class="maxSize" src="../assets/tabaluga.png"/>
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
      viewport: 'viewport',
      viewlandscape: 'viewlandscape'
    }),
    myText () { return this.text.aboutLeft }
  }
}
</script>

