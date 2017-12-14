<template>
  <div id="app">
    <router-view name="main"></router-view>

    <nav-view v-show="!viewport && $route.path != '/'" ref="nav"/>

    <div class="mainWindow">
      <transition-group :name="transitionLeft">
        <router-view name="homeLeft" v-bind:key="pseudoKey[0]"></router-view>
      </transition-group>
      <transition-group :name="transitionRight">
        <router-view name="homeRight" v-bind:key="pseudoKey[4]"></router-view>
      </transition-group>
      <transition-group :name="transitionLeft">
        <router-view name="aboutLeft" v-bind:key="pseudoKey[5]"></router-view>
      </transition-group>
      <transition-group :name="transitionRight">
        <router-view name="aboutRight" v-bind:key="pseudoKey[5]"></router-view>
      </transition-group>
      <transition-group :name="transitionRight">
        <router-view name="servicesRight" v-bind:key="pseudoKey[6]"></router-view>
      </transition-group>
      <transition-group :name="transitionLeft">
        <router-view name="servicesLeft" v-bind:key="pseudoKey[6]"></router-view>
      </transition-group>
      <transition-group :name="transitionLeft">
        <router-view name="contactLeft" v-bind:key="pseudoKey[7]"></router-view>
      </transition-group>
      <transition-group :name="transitionRight">
        <router-view name="contactRight" v-bind:key="pseudoKey[7]"></router-view>
      </transition-group>
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
      viewlandscape: 'viewlandscape',
      initializeMenu: 'initializeMenu',
      lang: 'lang',
      transitionLeft: 'transitionLeft',
      transitionRight: 'transitionRight'
    })
  },
  watch: {
    $route () {
      if (this.$route.query.lang === 'en' || this.$route.query.lang === 'de') {
        this.$store.dispatch('SET_LANG', this.$route.query.lang)
      }
    },
    viewport () {
      this.viewportChange()
    },
    viewlandscape () {
      this.viewportChange()
    }
  },
  data () {
    return {
      wheelTimeout: null,
      resizeTimeout: null,
      tstart: 0,
      tend: 0,
      rescale: 700,
      pseudoKey: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    }
  },
  mounted () {
    if (this.$route.query.lang === 'en' || this.$route.query.lang === 'de') {
      this.$store.dispatch('SET_LANG', this.$route.query.lang)
    }
    let body = document.body
    if (this.viewport) {
      body.style.overflow = 'auto'
      body.style['overflow-x'] = 'hidden'
    } else {
      body.style.overflow = 'hidden'
    }
    window.addEventListener('wheel', e => {
      this.wheelThrottler(e)
      return false
    }, false)
    window.addEventListener('resize', this.resizeThrottler, false)
    window.addEventListener('keyup', e => {
      this.keyUp(e)
      return false
    }, false)
    this.resize()
    this.setOverflowAndEvents()
  },
  methods: {
    scrolled (move) {
      if (!this.viewport) {
        let leng = this.$refs.nav.current
        if (move < 0) {
          this.$store.dispatch('SET_TRANSITIONRIGHT', 'up')
          this.$store.dispatch('SET_TRANSITIONLEFT', 'down')
          if (leng - 1 >= 0) {
            this.$refs.nav.highlight(this.initializeMenu[this.$refs.nav.current - 1])
          }
        } else {
          this.$store.dispatch('SET_TRANSITIONRIGHT', 'down')
          this.$store.dispatch('SET_TRANSITIONLEFT', 'up')
          if (leng + 1 < this.initializeMenu.length) {
            this.$refs.nav.highlight(this.initializeMenu[this.$refs.nav.current + 1])
          }
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
      let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      if (this.rescale > w) {
        this.$store.dispatch('SET_VIEWPORT', true)
        this.$store.dispatch('SET_VIEWLANDSCAPE', false)
        if (w >= 480 && h > 300 && h < 450) {
          this.$store.dispatch('SET_VIEWLANDSCAPE', true)
        }
        this.$el.removeEventListener('touchmove', this.stopIt)
        this.$el.removeEventListener('touchstart', () => {})
        this.$el.removeEventListener('touchend', () => {})
      } else {
        this.$store.dispatch('SET_VIEWLANDSCAPE', false)
        this.$store.dispatch('SET_VIEWPORT', false)
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
    },
    setOverflowAndEvents () {
      this.addressBar()
      let body = document.body
      if (this.viewport) {
        body.style.overflow = 'auto'
        body.style['overflow-x'] = 'hidden'
      } else {
        body.style.overflow = 'hidden'
        this.$store.dispatch('SET_TRANSITIONLEFT', null)
        this.$store.dispatch('SET_TRANSITIONRIGHT', null)
      }
    },
    addressBar () {
      if (this.$route.path !== '/' && !this.viewlandscape) {
        console.log('hehe')
        setTimeout(function () {
          window.scrollTo(0, 100)
        }, 10)
      }
    },
    viewportChange () {
      if (this.$route.path !== '/') {
        if (this.viewport) {
          this.setOverflowAndEvents()
          this.$router.replace({path: '/mobile/', query: {lang: this.lang}})
        } else {
          this.setOverflowAndEvents()
          this.$router.replace({path: '/home/', query: {lang: this.lang}})
          this.$refs.nav.current = 0
        }
      }
    },
    keyUp (e) {
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        this.scrolled(-10)
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        this.scrolled(10)
      }
    }
  }
}
</script>
