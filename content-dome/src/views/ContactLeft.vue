<template>
  <div :class="[{mobile: viewport}, {left: !viewport}]" class="window">
    <div class="middle backgroundBlack">
      <div :class="{mob: viewlandscape}" class="inner">
        <div :class="{mobl: viewlandscape}">
          <img :class="{paddingBottom: viewlandscape}" v-show="!viewlandscape" src="../assets/content_dome_page.png"/>
          <p :class="{tSpaceB: !viewlandscape}" class="tSmall text">{{ myText[lang][0]}}</p><br/>
          <p class="tSmall text">{{ myText[lang][1]}}</p><br/>
          <p class="tSmall text">{{ myText[lang][2]}}</p>
          <p class="tSmall text">{{ myText[lang][3]}}</p><br/>
          <p class="tSmall text">{{ myText[lang][4]}}</p>
          <p class="tSmall text">{{ myText[lang][5]}}</p><br/>
        </div>
        <div :class="{mobr: viewlandscape}">
          <p class="tSmall text">{{ myText[lang][6]}}</p><br/>
          <p class="tSmall disc text">{{ myText[lang][7]}}</p>
          <p v-html='myText[lang][8]' class="tSpaceM tSmall text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        text: 'text',
        lang: 'lang',
        viewport: 'viewport',
        viewlandscape: 'viewlandscape'
      }),
      myText () {
        return this.text.contactLeft
      }
    }
  }
</script>
