<template>
  <transition :name="transition">
    <div :class="[{mobile: viewport}, {right: !viewport}]" class="window">
      <div class="middle">
        <div class="inner">
          <img src="../assets/content_dome_page.png"/>
          <p class="tSpaceB"></p>
          <img src="../assets/ic_location_on_white_24px.svg">
          <p class="tSpaceM tab tSmall text">{{ myText[lang] }}</p>
          <img src="../assets/ic_phone_iphone_white_24px.svg">
          <p class="tSpaceM tSmall text">{{ myText[lang + "1" ]}}</p>
          <img src="../assets/ic_mail_outline_white_24px.svg">
          <p class="tSpaceM tSmall text">{{ myText[lang + "2" ]}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

import { revUp } from '@/mixins'
import { mapGetters } from 'vuex'

export default {
  mixins: [revUp],
  computed: {
    ...mapGetters({
      text: 'text',
      lang: 'lang',
      viewport: 'viewport'
    }),
    myText () { return this.text.contactRight }
  }
}
</script>
