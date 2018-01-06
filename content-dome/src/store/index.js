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
    }
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
    }
  }
})

  // actions: {
  //   // ensure data for rendering given list type

  //   LOGIN: ({ commit }, userData) => {
  //     return new Promise((resolve, reject) => {
  //       api.login(userData, token => {
  //         var auth = {
  //           isAuthenticated: typeof token.token === 'string',
  //           tokenId: typeof token.token === 'string' ? token.token : '',
  //           groups: []
  //         }
  //         if (auth.isAuthenticated) {
  //           resolve(commit('SET_AUTHENTICATED', { auth }))
  //         } else {
  //           commit('SET_AUTHENTICATED', { auth })
  //           reject('wrong login data')
  //         }
  //       })
  //     })
  //   },
  //   LOGOUT: ({ commit }) => {
  //     return commit('SESSION_EXPIRED')
  //   },
  //   GET_USER_PROFILE: ({ commit }) => {
  //     return new Promise((resolve, reject) => {
  //       api.getUserProfile(store.getters.auth, profile => {
  //         if (profile.user) {
  //           resolve(commit('RECEIVE_USER_PROFILE', { profile }))
  //         } else if (profile.detail) {
  //           if (profile.detail === 'Signature has expired.') {
  //             resolve(commit('SESSION_EXPIRED'))
  //           } else {
  //             reject(profile.detail)
  //           }
  //         }
  //       })
  //     })
  //   },
  //   RENEW_TOKEN_ID: ({ commit }, oldTokenId) => {
  //     return new Promise((resolve, reject) => {
  //       api.renewToken(oldTokenId, token => {
  //         var auth = {
  //           isAuthenticated: typeof token.token === 'string',
  //           tokenId: typeof token.token === 'string' ? token.token : '',
  //           groups: []
  //         }
  //         if (auth.isAuthenticated) {
  //           resolve(commit('SET_AUTHENTICATED', { auth }))
  //         } else {
  //           resolve(commit('SESSION_EXPIRED'))
  //         }
  //       })
  //     })
  //   },
  //   CREATE_TEXT_RESULT: ({ commit }, textResult) => {
  //     return new Promise((resolve, reject) => {
  //       api.createTextResult(store.getters.auth, textResult, result => {
  //         let rejected = false
  //         for (let n in result) {
  //           if ((!Array.isArray(result[n]) && result[n] !== textResult[n]) ||
  //               (Array.isArray(result[n]) && result.length !== textResult.length)) {
  //             reject(result.detail)
  //             // rejected = true
  //           }
  //         }
  //         if (!rejected) {
  //           resolve()
  //         } else {
  //           resolve(commit('SESSION_EXPIRED'))
  //         }
  //       })
  //     })
  //   },
  //   GET_TEXT: ({ commit }, id) => {
  //     return new Promise((resolve, reject) => {
  //       api.getText(store.getters.auth, id, text => {
  //         if (typeof text.id === 'number') {
  //           resolve(commit('RECEIVE_TEXT', { text }))
  //         } else if (text.detail) {
  //           if (text.detail === 'Signature has expired.') {
  //             resolve(commit('SESSION_EXPIRED'))
  //           } else {
  //             reject(text.detail)
  //           }
  //         }
  //       })
  //     })
  //   },
  //   GET_RANDOM_TEXT: ({ commit }) => {
  //     return new Promise((resolve, reject) => {
  //       api.getRandomText(text => {
  //         if (typeof text.id === 'number') {
  //           resolve(commit('RECEIVE_TEXT', { text }))
  //         } else if (text.detail) {
  //           if (text.detail === 'Signature has expired.') {
  //             resolve(commit('SESSION_EXPIRED'))
  //           } else {
  //             reject(text.detail)
  //           }
  //         }
  //       })
  //     })
  //   },
  //   GET_ALL_TEXTS: ({ commit }) => {
  //     return new Promise((resolve, reject) => {
  //       api.getAllTexts(store.getters.auth, texts => {
  //         if (texts.results) {
  //           resolve(commit('RECEIVE_ALL_TEXTS', { texts: texts.results }))
  //         } else if (texts.detail) {
  //           if (texts.detail === 'Signature has expired.') {
  //             resolve(commit('SESSION_EXPIRED'))
  //           } else {
  //             reject(texts.detail)
  //           }
  //         }
  //       })
  //     })
  //   },
  //   GET_LESSON: ({ commit }) => {
  //     return new Promise((resolve, reject) => {
  //       api.getLesson(store.getters.auth, text => {
  //         if (typeof text.content === 'string') {
  //           resolve(commit('RECEIVE_TEXT', { text }))
  //         } else if (text.detail) {
  //           if (text.detail === 'Signature has expired.') {
  //             resolve(commit('SESSION_EXPIRED'))
  //           } else {
  //             reject(text.detail)
  //           }
  //         }
  //       })
  //     })
  //   },
  //   SET_CURRENT_TEXT: ({ commit }, text) => {
  //     return new Promise((resolve, reject) => resolve(commit('SET_CURRENT_TEXT', { text })))
  //   }
  // },

  // mutations: {
  //   SET_AUTHENTICATED: (state, { auth }) => {
  //     state.auth = auth
  //     window.localStorage.setItem('auth', JSON.stringify(state.auth))
  //   },
  //   RECEIVE_ALL_TEXTS: (state, { texts }) => {
  //     state.texts.all = texts
  //   },
  //   RECEIVE_TEXT: (state, { text }) => {
  //     state.currentText = text
  //   },
  //   RECEIVE_USER_PROFILE: (state, { profile }) => {
  //     state.userProfile = profile
  //   },
  //   SET_CURRENT_TEXT: (state, { text }) => {
  //     state.currentText = text
  //   },
  //   SESSION_EXPIRED: (state) => {
  //     state.auth = {
  //       tokenId: '',
  //       isAuthenticated: false,
  //       groups: []
  //     }
  //     window.localStorage.setItem('auth', JSON.stringify(state.auth))
  //   }
  // },

  // getters: {
  //   auth (state) {
  //     return state.auth
  //   },
  //   userProfile (state) {
  //     return state.userProfile
  //   },
  //   typingResults (state) {
  //     return state.userProfile ? state.userProfile.typingresults : []
  //   },
  //   charResults (state) {
  //     return state.userProfile ? state.userProfile.charresults : []
  //   },
  //   allTexts (state) {
  //     return state.texts.all
  //   },
  //   currentText (state) {
  //     return state.currentText
  //   }
  // }
// })

export default store
