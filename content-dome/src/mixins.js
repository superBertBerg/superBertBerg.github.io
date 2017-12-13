export let revDo = {
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
  watch: {
    '$route': function () {
      console.log('down', this.transition)
      this.changeTransition()
    }
  }
}

export let revUp = {
  props: {
    transition: {
      default: 'down',
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
  watch: {
    '$route': function () {
      console.log('up', this.transition)
      this.changeTransition()
    }
  }
}
