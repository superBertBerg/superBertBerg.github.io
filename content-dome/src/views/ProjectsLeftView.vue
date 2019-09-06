<template>
    <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
      <div :class="{mob: viewlandscape}" class="middle backgroundBlack">
        <div class="inner">
          <h3 :class="{mob: viewlandscape}" class="tab tMiddle text" v-html="myText[lang]"></h3>
          <a :href="url" target="_blank">
            <img :class="{mob: viewlandscape}" class="maxSize" src="../assets/hotzenplotz.png"/>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    url: {
      default: 'http://www.zeitversteher.de/',
      type: String
    }
  },
  computed: {
    ...mapGetters({
      text: 'text',
      lang: 'lang',
      viewport: 'viewport',
      viewlandscape: 'viewlandscape'
    }),
    myText () { return this.text.projectsLeft }
  }
}
</script>

