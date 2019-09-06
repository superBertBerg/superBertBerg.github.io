<template>
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div class="middle">
        <div :class="{mob: viewlandscape}" class="inner">
          <div :class="{mobl: viewlandscape}">
            <img :class="{paddingHalf: viewlandscape}" src="../assets/content_dome_page.png"/>
            <p :class="{padding: viewlandscape}" class="tSpaceB"></p>
            <img src="../assets/ic_location_on_white_24px.svg">
            <p class="tSpaceM tab tSmall text">{{ myText[lang] }}</p>
          </div>
          <div :class="{mobr: viewlandscape}">
            <img src="../assets/ic_phone_iphone_white_24px.svg">
            <p class="tSpaceM tSmall text">{{ myText[lang + "1" ]}}</p>
            <img src="../assets/ic_mail_outline_white_24px.svg">
            <p v-html='myText[lang + "2" ]' class="tSpaceM tSmall text"></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      text: 'text',
      lang: 'lang',
      viewport: 'viewport',
      viewlandscape: 'viewlandscape'
    }),
    myText () { return this.text.contactRight }
  }
}
</script>
