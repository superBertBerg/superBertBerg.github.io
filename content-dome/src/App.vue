<template>
  <div id="app">
    <router-view name="main"></router-view>

    <nav-view v-show="!viewport && $route.path != '/'" ref="nav"/>

    <div class="mainWindow">
      <transition :name="transitionLeft">
        <router-view name="homeLeft"></router-view>
        <router-view name="aboutLeft"></router-view>
        <router-view name="servicesLeft"></router-view>
        <router-view name="contactLeft"></router-view>
      </transition>
      <transition :name="transitionRight">
        <router-view name="homeRight"></router-view>
        <router-view name="aboutRight"></router-view>
        <router-view name="servicesRight"></router-view>
        <router-view name="contactRight"></router-view>
      </transition>
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
      viewport: 'viewport',
      initializeMenu: 'initializeMenu',
      lang: 'lang'
    })
  },
  watch: {
    $route () {
      if (this.$route.query.lang === 'en' || this.$route.query.lang === 'de') {
        this.$store.dispatch('SET_LANG', this.$route.query.lang)
      }
    },
    viewport () {
      console.log("blalbla")
      if ('/' != this.$route.path) {
        if (this.viewport) {
          this.$router.replace({path: '/mobile/', query: {lang: this.lang}})
        } else {
          this.$router.replace({path: '/home/', query: {lang: this.lang}})
        }
      }
    }
  },
  data () {
    return {
      transitionLeft: 'down',
      transitionRight: 'up',
      wheelTimeout: null,
      resizeTimeout: null,
      tstart: 0,
      tend: 0,
      rescale: 700
    }
  },
  mounted () {
    window.addEventListener('wheel', e => {
      this.wheelThrottler(e)
      return false
    }, false)
    window.addEventListener('resize', this.resizeThrottler, false)
    this.resize()
  },
  methods: {
    scrolled (move) {
      if (!this.viewport) {
        if (move < 0) {
          this.transitionRight = "up"
          this.transitionLeft = "down"
          console.log(this.$refs.nav)
          this.$refs.nav.highlight(this.initializeMenu[this.$refs.nav.current - 1])
        } else {
          this.transitionRight = "down"
          this.transitionLeft = "up"
          this.$refs.nav.highlight(this.initializeMenu[this.$refs.nav.current + 1])
        }
      }
    },
    wheelThrottler (e) {
      if (!this.wheelTimeout) {
        this.wheelTimeout = setTimeout(() => { this.wheelTimeout = null }, 1000)
        this.scrolled(e.deltaY)
      }
    },
    resizeThrottler () {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null
          this.resize()
        }, 66)
      }
    },
    resize () {
      let retVal = false

      if (this.rescale > Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) {
        this.$store.dispatch('SET_VIEWPORT', true)

        this.$el.style.overflow = 'auto'
        this.$el.style['overflow-x'] = 'hidden'

        this.$el.removeEventListener('touchmove', this.stopIt)
        this.$el.removeEventListener('touchstart', () => {})
        this.$el.removeEventListener('touchend', () => {})
      } else {
        this.$store.dispatch('SET_VIEWPORT', false)
        this.$el.style.overflow = 'hidden'
        this.$el.addEventListener('touchmove', this.stopIt, {passive: false})
        this.$el.addEventListener('touchstart', this.startTouch)
        this.$el.addEventListener('touchend', this.endTouch)
      }
      return retVal
    },
    stopIt (e) {
      e.preventDefault()
      e.stopPropagation()
    },
    startTouch (e) {
      this.tstart = e.changedTouches[0].clientY
    },
    endTouch (e) {
      this.tend = e.changedTouches[0].clientY
      this.touchThrottler()
    },
    touchThrottler () {
      if (this.tstart - this.tend !== 0) {
        this.scrolled(this.tstart - this.tend)
      }
    }
  }
}
</script>
