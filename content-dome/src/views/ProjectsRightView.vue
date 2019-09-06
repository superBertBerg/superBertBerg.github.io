<template>
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div :class="{mob: viewlandscape}" class="middle">
        <div class="inner">
          <h3 :class="{mob: viewlandscape}" class="tab tMiddle text" v-html="myText[lang]"></h3>
          <a :href="url" target="_blank">
            <img :class="{mob: viewlandscape}" class="maxSize" src="../assets/ekki_hugsa.png"/>
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
      default: 'https://www.dreifragezeichen.de/www/planetarium#/media/thumbs/Y21zMTY0NzE5Nzg1MjI1MGF1dG9rZXl2aXN1YWxkZnpobzNycmF1bWlua2FtdW1pZXF1YWRyYXRpc2NoLmpwZw==.jpg',
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
    myText () { return this.text.projectsRight }
  }
}
</script>

