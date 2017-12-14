<template>
  <transition name="side">
    <div id="navi" class="positionNav">
      <template v-for="item in initializeMenu" >
        <a @mouseover="item.hover = true" @mouseleave="item.hover = false"><div class="line" :key="item.id" v-bind:class="{ activeLine: item.id===current }" v-on:click="directNavigation(item)">
            <span><div :class="{navMenuHover: item.hover}" class="hidden">{{ item.name.toUpperCase() }}</div></span>
        </div></a>
      </template>
    </div>
  </transition>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    let current = 0
    for (var subMenus in this.initializeMenu) {
      if (this.$route.path.indexOf(this.initializeMenu[subMenus].name) !== -1) {
        current = this.initializeMenu[subMenus].id
      }
    }
    return {
      current: current,
      active: false
    }
  },
  created () {
    for (let slot of this.initializeMenu) {
      this.$set(slot, 'hover', false)
    }
  },
  mounted () {
    this.navUpdate()
  },
  computed: {
    ...mapGetters({
      initializeMenu: 'initializeMenu',
      reversed: 'reversed',
      lang: 'lang',
      transitionLeft: 'transitionLeft',
      transitionRight: 'transitionRight'
    })
  },
  methods: {
    highlight (x) {
      this.$router.push({
        path: '/' + x.name + '/',
        query: {lang: this.$route.query.lang}
      })
      this.current = x.id
      this.hoverBlink(this.initializeMenu[this.current])
    },
    directNavigation (x) {
      this.$store.dispatch('SET_TRANSITIONRIGHT', 'sideright')
      this.$store.dispatch('SET_TRANSITIONLEFT', 'sideleft')
      this.$router.push({
        path: '/' + x.name + '/',
        query: {lang: this.$route.query.lang}
      })
      this.current = x.id
      this.hoverBlink(this.initializeMenu[this.current])
    },
    hoverBlink (path) {
      path.hover = true
      setTimeout(function () {
        path.hover = false
      }, 1000)
    },
    navUpdate () {
      if (this.initializeMenu) {
        let temp = this.$route.path.slice(1, -1)
        for (let i = 0; i < this.initializeMenu.length; i++) {
          if (this.initializeMenu[i].name === temp) {
            this.current = this.initializeMenu[i].id
            this.hoverBlink(this.initializeMenu[i])
          }
        }
      }
    }
  },
  watch: {
    $route () {
      this.navUpdate()
    }
  }
}
</script>
