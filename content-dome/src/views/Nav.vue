<template>
  <transition name="side">
    <div id="navi" class="positionNav">
      <template v-for="item in initializeMenu" >
        <a @mouseover="item.hover = true" @mouseleave="item.hover = false"><div class="line" :key="item.id" v-bind:class="{ activeLine: item.id===current }" v-on:click="highlight(item)">
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
    var current = 0
    for (var subMenus in this.initializeMenu) {
      if (this.$route.path.indexOf(this.initializeMenu[subMenus].name) !== -1) {
        current = this.initializeMenu[subMenus].id
      }
    }
    return {
      current: current,
      active: false,
      test: 'falsearst'
    }
  },
  created () {
    for (let slot of this.initializeMenu) {
      this.$set(slot, 'hover', false)
    }
  },
  computed: {
    ...mapGetters({
      initializeMenu: 'initializeMenu',
      reversed: 'reversed'
    })
  },
  watch: {
    $route (to) {
      if(this.initializeMenu) {
        var temp = to.path.slice(1, -1)
        for (var i = 0; i < this.initializeMenu.length; i++) {
          if (this.initializeMenu[i].name === temp) {
            this.current = this.initializeMenu[i].id
            this.hoverBlink(this.initializeMenu[i])
          }
        }
      }
      console.log('asdf')
    }
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
    hoverBlink (path) {
      path.hover = true
      setTimeout(function () {
        path.hover = false
      }, 1000)
    },
    scrollFunction (x) {
      if (x < 0) {
        if (this.current - 1 >= 0) {
          this.$store.dispatch('SET_REVERSED', 'down').then(() => this.highlight(this.initializeMenu[this.current - 1]))
        }
      } else if (x > 0) {
        if (this.current + 1 < this.initializeMenu.length) {
          this.$store.dispatch('SET_REVERSED', 'up').then(() => this.highlight(this.initializeMenu[this.current + 1]))
        }
      }
    }
  }
}
</script>
