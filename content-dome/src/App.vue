<template>
  <div id="app">
    <router-view name="main"></router-view>

    <nav-view v-if="!viewport" ref="nav"/>

    <div class="mainWindow">
      <router-view name="homeLeft"></router-view>
      <router-view name="homeRight"></router-view>
      <router-view name="aboutLeft"></router-view>
      <router-view name="aboutRight"></router-view>
      <router-view name="servicesLeft"></router-view>
      <router-view name="servicesRight"></router-view>
      <router-view name="contactLeft"></router-view>
      <router-view name="contactRight"></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavView from '@/views/Nav'

export default {
  name: 'app',
  components: {
    NavView
  },
  computed: {
    ...mapGetters({
      viewport: 'viewport'
    })
  },
  watch: {
    $route () {
      if (this.$route.query.lang === 'en' || this.$route.query.lang === 'de') {
        this.$store.dispatch('SET_LANG', this.$route.query.lang)
      }
    }
  },
  data () {
    return { wheelTimeout: null }
  },
  mounted () {
    window.addEventListener('wheel', e => {
      this.wheelThrottler(e)
      return false
    }, false)
  },
  methods: {
    scrolled (move) {
      if (!this.viewport) {
        this.$refs.nav.scrollFunction(move)
      }
    },
    wheelThrottler (e) {
      if (!this.wheelTimeout) {
        this.wheelTimeout = setTimeout(() => { this.wheelTimeout = null }, 1000)
        this.scrolled(e.deltaY)
      }
    }
  }
}
</script>
