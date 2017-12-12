<template>
  <div class="MainView">
    <div :class="{mobile: viewport}"class="middle">
      <div class="inner">
        <img v-on:click="linkTo('en')" class="centerHelpVertical" src="../assets/content_dome_immersive_media.png" />
      </div>
      <div class="logoWrap link">
        <a class="langLink" v-on:click="linkTo('de')">DE</a>
        <span> | </span>
        <a class="langLink" v-on:click="linkTo('en')">EN</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainView',
  computed: {
    ...mapGetters({
      viewport: 'viewport'
    })
  },
  methods: {
    linkTo (lang) {
      if (this.viewport) {
        this.$router.push({path: '/mobile/', query: {lang: lang}})
      } else {
        this.$router.push({path: '/home/', query: {lang: lang}})
      }
    }
  }
}
</script>
