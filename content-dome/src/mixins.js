
export const langWatch = {
  watch: {
    '$route': function () {
      console.log('asdfsdfadsfga')
      this.lang = this.$route.query.lang
    }
  }
}

export const revDo = {
  props: {
    transition: {
      default: 'up',
      type: String
    },
    addPosition: {
      default: 'left',
      type: String
    }
  },
  methods: {
    changeTransition: function () {
      console.log('right Function', this.reversed)
      if (this.reversed === 'up') {
        console.log('right: down')
        this.transition = 'down'
      } else if (this.reversed === 'down') {
        console.log('right: up')
        this.transition = 'up'
      } else {
        this.transition = 'down'
      }
    }
  },
  beforeRouteUpdate: function (to, from, next) {
    this.changeTransition()
  },
  watch: {
    '$route': function () {
      this.lang = this.$route.query.lang
      this.changeTransition()
      console.log('down', this.transition)
    }
  }
}

export const revUp = {
  props: {
    transition: {
      default: 'up',
      type: String
    },
    addPosition: {
      default: 'right',
      type: String
    }
  },
  methods: {
    changeTransition: function () {
      console.log('left Function', this.reversed)
      if (this.reversed === 'up') {
        console.log('left: up')
        this.transition = 'up'
      } else if (this.reversed === 'down') {
        console.log('left: down')
        this.transition = 'down'
      } else {
        this.transition = 'up'
      }
    }
  },
  beforeRouteUpdate: function (to, from, next) {
    console.log(to, from, next)
  },
  watch: {
    '$route': function () {
      this.lang = this.$route.query.lang
      this.changeTransition()
      console.log('up', this.transition)
    }
  }
}
