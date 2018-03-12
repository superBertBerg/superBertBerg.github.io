import Vue from 'vue'
import Vuex from 'vuex'
// import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lang: 'de',
    initializeMenu: [
      {
        name: 'home',
        id: 0
      },
      {
        name: 'about',
        id: 1
      },
      {
        name: 'services',
        id: 2
      },
      {
        name: 'contact',
        id: 3
      }
    ],
    viewport: false,
    viewlandscape: false,
    transitionLeft: 'down',
    transitionRight: 'up',
    text: {
      homeLeft: {
        de: 'Immersion ist die Überführung in einen Bewusstseinszustand, bei dem sich die Wahrnehmung der eigenen Person in der realen Welt vermindert und gleichzeitig in der virtuellen Welt vergrößert.',
        de1: 'Einfach ausgedrückt: Immersiv ist, was Dich in eine fiktive Welt eintauchen lässt.',
        en: 'IMMERSION IS A TRANSITION IN CONSCIOUSNESS, WHEN YOUR PERCEPTION IN THE REAL WORLD IS FADING WHILE AT THE SAME TIME GROWING IN A VIRTUAL WORLD.'
      },
      aboutLeft: {
        de: 'Auf planaren Medien (Leinwand , Bildschirm) wird Immersion i.d.R. mit 3D-Brillen erzielt. In umgebenden Medien (z.B. in der Kuppel eines Planetariums) taucht man auch ohne stereoskopisches 3D in die Inhalte ein.',
        en: 'On planar screens immersion is usually\n' +
        'triggered by the use of 3D-glasses. In surrounding\n' +
        'media spaces like a dome, visitors can immerse\n' +
        'themselves in pictures or movies without the use of\n' +
        'stereoscopic devices.'
      },
      aboutRight: {
        de: 'Auf der Audioseite entsteht Immersion, wenn Klang nicht aus seinen Quellen (also Lautsprechern) wahrgenommen wird, sondern objektbasiert und als dreidimensionaler Raumklang.',
        en: `Audio immersion evolves when sound is
        not experienced through their sources (e.g. loudspeakers)
        but as object-based, spatial acoustics.`
      },
      servicesRight: {
        de: 'Wir produzieren, vermarkten und vertreiben\n' +
        'immersive Inhalte (content) für umgebende Medien.',
        de1: 'Der aktuelle Schwerpunkt unserer Tätigkeiten liegt auf der Produktion von Fulldome-Filmen und 3D-Audioproduktionen für den Einsatz in Planetarien, Mediendomes und auf VR-Brillen.',
        de2: 'Wir lizenzieren oder kooperieren mit großen Entertainment-Marken und kreieren für sie eine neue Auswertungsebene.',
        en: 'We produce, market and distribute immersive content for surrounding media.',
        en1: 'Our work currently focusses on the production of fulldome movies and spatial audioplays for use in planetaria, media domes and on VR-devices.',
        en2: 'We license or co-produce and market content from successful entertainment companies, in order to create a new level of exploitation for their brands.'
      },
      contactLeft: {
        de: [
          'IMPRESSUM\n',
          'Inhaltlich verantwortlich i.S. des Presserechtes bzw. des Telemediengesetzes (§ 5 TMG):\n',
          'the content dome - Gesellschaft für immersive Medien mbH,\n',
          'Grosse Reichenstr. 27 | 20457 Hamburg\n',
          'GF: Markus Schäfer, Peter Roeschies\n',
          'HRB: 127893  |  USt-IdNr.: DE290405001\n',
          'HAFTUNGSAUSSCHLUSS\n',
          'Trotz sorgfältiger inhaltlicher Kontrolle übernehmn wir keine Haftung für die Inhalte externer Links.\n' +
          'Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.\n' +
          'Alle Inhalte unterliegen dem Urheberrecht.'
        ],
        en: [
          'IMPRINT',
          'Publisher and responsible in terms of § 5 TMG:',
          'the content dome - Gesellschaft für immersive Medien mbH,',
          'Grosse Reichenstr. 27 | 20457 Hamburg',
          'GF: Markus Schäfer, Peter Roeschies',
          'HRB: 127893  |  VAT identification: DE290405001',
          'DISCLAIMER',
          'Although this site is checked and updated with due diligence on a regular basis we assume no responsibility for the contents of websites that can be accessed through hyperlinks. Contents and structure are copyright protected.'
        ]
      },
      contactRight: {
        de: 'the content dome GmbH • Grosse Reichenstr. 27 • 20457 Hamburg',
        de1: '+49 40 244 37 132',
        de2: 'info@thecontentdome.de',
        en: 'the content dome GmbH • Grosse Reichenstr. 27 • 20457 Hamburg',
        en1: '+49 40 244 37 132',
        en2: 'info@thecontentdome.de'
      }
    },
    iOS: false
  },
  actions: {
    SET_VIEWPORT: ({ commit }, viewport) => {
      return new Promise((resolve, reject) => resolve(commit('SET_VIEWPORT', { viewport })))
    },
    SET_VIEWLANDSCAPE: ({ commit }, viewlandscape) => {
      return new Promise((resolve, reject) => resolve(commit('SET_VIEWLANDSCAPE', { viewlandscape })))
    },
    SET_LANG: ({ commit }, lang) => {
      return new Promise((resolve, reject) => resolve(commit('SET_LANG', { lang })))
    },
    SET_TRANSITIONLEFT: ({ commit }, transitionLeft) => {
      return new Promise((resolve, reject) => resolve(commit('SET_TRANSITIONLEFT', { transitionLeft })))
    },
    SET_TRANSITIONRIGHT: ({ commit }, transitionRight) => {
      return new Promise((resolve, reject) => resolve(commit('SET_TRANSITIONRIGHT', { transitionRight })))
    },
    SET_IOS: ({ commit }, iOS) => {
      return new Promise((resolve, reject) => resolve(commit('SET_IOS', { iOS })))
    }
  },
  mutations: {
    SET_VIEWPORT: (state, { viewport }) => {
      state.viewport = viewport
    },
    SET_LANG: (state, { lang }) => {
      state.lang = lang
    },
    SET_VIEWLANDSCAPE: (state, { viewlandscape }) => {
      state.viewlandscape = viewlandscape
    },
    SET_TRANSITIONLEFT: (state, { transitionLeft }) => {
      state.transitionLeft = transitionLeft
    },
    SET_TRANSITIONRIGHT: (state, { transitionRight }) => {
      state.transitionRight = transitionRight
    },
    SET_IOS: (state, { iOS }) => {
      state.iOS = iOS
    }
  },
  getters: {
    initializeMenu (state) {
      return state.initializeMenu
    },
    viewport (state) {
      return state.viewport
    },
    text (state) {
      return state.text
    },
    lang (state) {
      return state.lang
    },
    viewlandscape (state) {
      return state.viewlandscape
    },
    transitionLeft (state) {
      return state.transitionLeft
    },
    transitionRight (state) {
      return state.transitionRight
    },
    iOS (state) {
      return state.iOS
    }
  }
})

export default store
