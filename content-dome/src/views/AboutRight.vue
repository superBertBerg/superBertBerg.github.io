<template>
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div :class="{mob: viewlandscape}" class="middle backgroundBlack">
        <div class="inner">
          <p :class="{mob: viewlandscape}" class="tab tMiddle text">{{ myText[lang] }}</p>
          <a :href="url" target="_blank">
            <img :class="{mob: viewlandscape}" class="maxSize" src="../assets/die_drei_fragezeichen.png"/>
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
    myText () { return this.text.aboutRight }
  }
}
</script>

