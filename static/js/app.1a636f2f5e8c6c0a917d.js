webpackJsonp([1],{"/HcM":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiAyQzguMTMgMiA1IDUuMTMgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg3LTMuMTMtNy03LTd6bTAgOS41Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"},"3RKn":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0yMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjZjMC0xLjEtLjktMi0yLTJ6bTAgMTRINFY4bDggNSA4LTV2MTB6bS04LTdMNCA2aDE2bC04IDV6Ii8+Cjwvc3ZnPg=="},"BH/i":function(t,e,i){t.exports=i.p+"static/img/content_dome_immersive_media.33f70b5.png"},"Fj/r":function(t,e,i){t.exports=i.p+"static/img/die_drei_fragezeichen.5de645e.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n=i("Dd8w"),a=i.n(n),r=i("NYxO"),o=i("BO1k"),h=i.n(o),l={data:function(){var t=0;for(var e in this.initializeMenu)-1!==this.$route.path.indexOf(this.initializeMenu[e].name)&&(t=this.initializeMenu[e].id);return{current:t,active:!1}},created:function(){var t=!0,e=!1,i=void 0;try{for(var s,n=h()(this.initializeMenu);!(t=(s=n.next()).done);t=!0){var a=s.value;this.$set(a,"hover",!1)}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}},mounted:function(){this.navUpdate()},computed:a()({},Object(r.b)({initializeMenu:"initializeMenu",reversed:"reversed",lang:"lang",transitionLeft:"transitionLeft",transitionRight:"transitionRight"})),methods:{highlight:function(t){this.$router.push({path:"/"+t.name+"/",query:{lang:this.$route.query.lang}}),this.current=t.id,this.hoverBlink(this.initializeMenu[this.current])},directNavigation:function(t){this.$store.dispatch("SET_TRANSITIONRIGHT","sideright"),this.$store.dispatch("SET_TRANSITIONLEFT","sideleft"),this.$router.push({path:"/"+t.name+"/",query:{lang:this.$route.query.lang}}),this.current=t.id,this.hoverBlink(this.initializeMenu[this.current])},hoverBlink:function(t){t.hover=!0,setTimeout(function(){t.hover=!1},1e3)},navUpdate:function(){if(this.initializeMenu)for(var t=this.$route.path.slice(1,-1),e=0;e<this.initializeMenu.length;e++)this.initializeMenu[e].name===t&&(this.current=this.initializeMenu[e].id,this.hoverBlink(this.initializeMenu[e]))}},watch:{$route:function(){this.navUpdate()}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"side"}},[i("div",{staticClass:"positionNav",attrs:{id:"navi"}},[t._l(t.initializeMenu,function(e){return[i("a",{on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[i("div",{key:e.id,staticClass:"line",class:{activeLine:e.id===t.current},on:{click:function(i){t.directNavigation(e)}}},[i("span",[i("div",{staticClass:"hidden",class:{navMenuHover:e.hover}},[t._v(t._s(e.name.toUpperCase()))])])])])]})],2)])},staticRenderFns:[]},u={name:"app",components:{NavView:i("VU/8")(l,c,!1,null,null,null).exports},computed:a()({},Object(r.b)({viewport:"viewport",viewlandscape:"viewlandscape",initializeMenu:"initializeMenu",lang:"lang",transitionLeft:"transitionLeft",transitionRight:"transitionRight"})),watch:{$route:function(){"en"!==this.$route.query.lang&&"de"!==this.$route.query.lang||this.$store.dispatch("SET_LANG",this.$route.query.lang)},viewport:function(){this.viewportChange()},viewlandscape:function(){this.viewportChange()}},data:function(){return{wheelTimeout:null,resizeTimeout:null,tstart:0,tend:0,rescale:813,pseudoKey:[0,1,2,3,4,5,6,7]}},mounted:function(){var t=this;"en"!==this.$route.query.lang&&"de"!==this.$route.query.lang||this.$store.dispatch("SET_LANG",this.$route.query.lang);var e=document.body;this.viewport?(e.style.overflow="auto",e.style["overflow-x"]="hidden"):e.style.overflow="hidden",window.addEventListener("wheel",function(e){return t.wheelThrottler(e),!1},!1),window.addEventListener("resize",this.resizeThrottler,!1),window.addEventListener("keyup",function(e){return t.keyUp(e),!1},!1),this.resize(),this.setOverflowAndEvents()},methods:{scrolled:function(t){if(!this.viewport){console.log(this.viewport);var e=this.$refs.nav.current;t<0?(this.$store.dispatch("SET_TRANSITIONRIGHT","up"),this.$store.dispatch("SET_TRANSITIONLEFT","down"),e-1>=0&&this.$refs.nav.highlight(this.initializeMenu[this.$refs.nav.current-1])):(this.$store.dispatch("SET_TRANSITIONRIGHT","down"),this.$store.dispatch("SET_TRANSITIONLEFT","up"),e+1<this.initializeMenu.length&&this.$refs.nav.highlight(this.initializeMenu[this.$refs.nav.current+1]))}},wheelThrottler:function(t){var e=this;this.wheelTimeout||(this.wheelTimeout=setTimeout(function(){e.wheelTimeout=null},1e3),this.scrolled(t.deltaY))},resizeThrottler:function(){var t=this;this.resizeTimeout||(this.resizeTimeout=setTimeout(function(){t.resizeTimeout=null,t.resize()},66))},resize:function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return this.rescale>t?(this.$store.dispatch("SET_VIEWPORT",!0),this.$store.dispatch("SET_VIEWLANDSCAPE",!1),t>=480&&e>300&&e<450&&this.$store.dispatch("SET_VIEWLANDSCAPE",!0),this.$el.removeEventListener("touchmove",this.stopIt),this.$el.removeEventListener("touchstart",function(){}),this.$el.removeEventListener("touchend",function(){})):(this.$store.dispatch("SET_VIEWLANDSCAPE",!1),this.$store.dispatch("SET_VIEWPORT",!1),this.$el.addEventListener("touchmove",this.stopIt,{passive:!1}),this.$el.addEventListener("touchstart",this.startTouch),this.$el.addEventListener("touchend",this.endTouch)),!1},stopIt:function(t){t.preventDefault(),t.stopPropagation()},startTouch:function(t){this.tstart=t.changedTouches[0].clientY},endTouch:function(t){this.tend=t.changedTouches[0].clientY,this.touchThrottler()},touchThrottler:function(){this.tstart-this.tend!=0&&this.scrolled(this.tstart-this.tend)},setOverflowAndEvents:function(){var t=document.body;this.viewport?(t.style.overflow="auto",t.style["overflow-x"]="hidden"):(t.style.overflow="hidden",this.$store.dispatch("SET_TRANSITIONLEFT",null),this.$store.dispatch("SET_TRANSITIONRIGHT",null))},viewportChange:function(){"/"!==this.$route.path&&(this.viewport?(this.setOverflowAndEvents(),this.$router.replace({path:"/mobile/",query:{lang:this.lang}})):(this.setOverflowAndEvents(),this.$router.replace({path:"/home/",query:{lang:this.lang}}),this.$refs.nav.current=0))},keyUp:function(t){"ArrowUp"===t.key||"PageUp"===t.key?this.scrolled(-10):"ArrowDown"!==t.key&&"PageDown"!==t.key||this.scrolled(10)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"main"}}),this._v(" "),e("nav-view",{directives:[{name:"show",rawName:"v-show",value:!this.viewport&&"/"!=this.$route.path,expression:"!viewport && $route.path != '/'"}],ref:"nav"}),this._v(" "),e("div",{staticClass:"mainWindow"},[e("transition-group",{attrs:{name:this.transitionLeft}},[e("router-view",{key:this.pseudoKey[0],attrs:{name:"homeLeft"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionRight}},[e("router-view",{key:this.pseudoKey[4],attrs:{name:"homeRight"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionLeft}},[e("router-view",{key:this.pseudoKey[5],attrs:{name:"aboutLeft"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionRight}},[e("router-view",{key:this.pseudoKey[5],attrs:{name:"aboutRight"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionRight}},[e("router-view",{key:this.pseudoKey[6],attrs:{name:"servicesRight"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionLeft}},[e("router-view",{key:this.pseudoKey[6],attrs:{name:"servicesLeft"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionLeft}},[e("router-view",{key:this.pseudoKey[7],attrs:{name:"contactLeft"}})],1),this._v(" "),e("transition-group",{attrs:{name:this.transitionRight}},[e("router-view",{key:this.pseudoKey[7],attrs:{name:"contactRight"}})],1)],1)],1)},staticRenderFns:[]},v=i("VU/8")(u,d,!1,null,null,null).exports,m=i("/ocq"),p={name:"MainView",computed:a()({},Object(r.b)({viewport:"viewport"})),methods:{linkTo:function(t){this.viewport?(this.$router.push({path:"/mobile/",query:{lang:t}}),this.$store.dispatch("SET_VIEWPORT",!0)):(this.$router.push({path:"/home/",query:{lang:t}}),this.$store.dispatch("SET_VIEWPORT",!1))}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MainView"},[s("div",{staticClass:"middle",class:{mobile:t.viewport}},[s("div",{staticClass:"inner"},[s("img",{staticClass:"centerHelpVertical",attrs:{src:i("BH/i")},on:{click:function(e){t.linkTo("en")}}})]),t._v(" "),s("div",{staticClass:"logoWrap link"},[s("a",{staticClass:"langLink",on:{click:function(e){t.linkTo("de")}}},[t._v("DE")]),t._v(" "),s("span",[t._v(" | ")]),t._v(" "),s("a",{staticClass:"langLink",on:{click:function(e){t.linkTo("en")}}},[t._v("EN")])])])])},staticRenderFns:[]},w=i("VU/8")(p,g,!1,null,null,null).exports,I={computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport",viewlandscape:"viewlandscape"}),{myText:function(){return this.text.contactLeft}})},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"window",class:[{mobile:this.viewport},{left:!this.viewport}]},[e("div",{staticClass:"middle"},[e("div",{staticClass:"inner",class:{mob:this.viewlandscape}},[e("div",{class:{mobl:this.viewlandscape}},[e("img",{directives:[{name:"show",rawName:"v-show",value:!this.viewlandscape,expression:"!viewlandscape"}],attrs:{src:i("wz7p")}}),this._v(" "),e("p",{staticClass:"tSmall text"},[this._v(this._s(this.myText[this.lang][1]))]),e("br"),this._v(" "),e("p",{staticClass:"tSmall text"},[this._v(this._s(this.myText[this.lang][2]))]),e("br"),this._v(" "),e("p",{staticClass:"tSmall text"},[this._v(this._s(this.myText[this.lang][3]))]),e("br"),this._v(" "),e("p",{staticClass:"tSmall text"},[this._v(this._s(this.myText[this.lang][4]))]),e("br"),this._v(" "),e("p",{staticClass:"tSmall text"},[this._v(this._s(this.myText[this.lang][5]))]),e("br")]),this._v(" "),e("div",{class:{mobr:this.viewlandscape}},[e("p",{staticClass:"tSmall text"},[this._v(this._s(this.myText[this.lang][6]))]),e("br"),this._v(" "),e("p",{staticClass:"tSmall disc text"},[this._v(this._s(this.myText[this.lang][7]))])])])])])},staticRenderFns:[]},A=i("VU/8")(I,f,!1,null,null,null).exports,T={computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport",viewlandscape:"viewlandscape"}),{myText:function(){return this.text.contactRight}})},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"window",class:[{mobile:this.viewport},{right:!this.viewport}]},[e("div",{staticClass:"middle"},[e("div",{staticClass:"inner",class:{mob:this.viewlandscape}},[e("div",{class:{mobl:this.viewlandscape}},[e("img",{class:{paddingHalf:this.viewlandscape},attrs:{src:i("wz7p")}}),this._v(" "),e("p",{staticClass:"tSpaceB",class:{padding:this.viewlandscape}}),this._v(" "),e("img",{attrs:{src:i("/HcM")}}),this._v(" "),e("p",{staticClass:"tSpaceM tab tSmall text"},[this._v(this._s(this.myText[this.lang]))])]),this._v(" "),e("div",{class:{mobr:this.viewlandscape}},[e("img",{attrs:{src:i("yttx")}}),this._v(" "),e("p",{staticClass:"tSpaceM tSmall text"},[this._v(this._s(this.myText[this.lang+"1"]))]),this._v(" "),e("img",{attrs:{src:i("3RKn")}}),this._v(" "),e("p",{staticClass:"tSpaceM tSmall text"},[this._v(this._s(this.myText[this.lang+"2"]))])])])])])},staticRenderFns:[]},S=i("VU/8")(T,M,!1,null,null,null).exports,b={computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport"}),{myText:function(){return this.text.homeLeft}})},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"window",class:[{mobile:this.viewport},{left:!this.viewport}]},[e("div",{staticClass:"middle"},[e("div",{staticClass:"inner"},[e("p",{staticClass:"tab tBig text"},[this._v(this._s(this.myText[this.lang].toUpperCase()))]),this._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:"de"==this.lang,expression:"lang == 'de'"}],staticClass:"tMiddle text"},[this._v(this._s(this.myText[this.lang+"1"]))])])])])},staticRenderFns:[]},R=i("VU/8")(b,E,!1,null,null,null).exports,L={computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport"}),{myText:function(){return this.text.homeLeft}})},x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"window",class:[{mobile:this.viewport},{right:!this.viewport}]},[this._m(0,!1,!1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"middle backgroundBlack"},[e("img",{attrs:{src:i("BH/i")}})])}]},N=i("VU/8")(L,x,!1,null,null,null).exports,y={props:{url:{default:"https://www.dreifragezeichen.de/www/planetarium#/media/thumbs/Y21zMTY0NzE5Nzg1MjI1MGF1dG9rZXl2aXN1YWxkZnpobzNycmF1bWlua2FtdW1pZXF1YWRyYXRpc2NoLmpwZw==.jpg",type:String}},computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport",viewlandscape:"viewlandscape"}),{myText:function(){return this.text.aboutRight}})},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"window",class:[{mobile:this.viewport},{right:!this.viewport}]},[e("div",{staticClass:"middle backgroundBlack",class:{mob:this.viewlandscape}},[e("div",{staticClass:"inner"},[e("p",{staticClass:"tab tMiddle text",class:{mob:this.viewlandscape}},[this._v(this._s(this.myText[this.lang]))]),this._v(" "),e("a",{attrs:{href:this.url,target:"_blank"}},[e("img",{staticClass:"maxSize",class:{mob:this.viewlandscape},attrs:{src:i("Fj/r")}})])])])])},staticRenderFns:[]},C=i("VU/8")(y,k,!1,null,null,null).exports,_={props:{url:{default:"http://www.zeitversteher.de/",type:String}},computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport",viewlandscape:"viewlandscape"}),{myText:function(){return this.text.aboutLeft}})},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"window",class:[{mobile:this.viewport},{left:!this.viewport}]},[e("div",{staticClass:"middle",class:{mob:this.viewlandscape}},[e("div",{staticClass:"inner"},[e("p",{staticClass:"tab tMiddle text",class:{mob:this.viewlandscape}},[this._v(this._s(this.myText[this.lang]))]),this._v(" "),e("a",{attrs:{href:this.url,target:"_blank"}},[e("img",{staticClass:"maxSize",class:{mob:this.viewlandscape},attrs:{src:i("qMk2")}})])])])])},staticRenderFns:[]},G=i("VU/8")(_,D,!1,null,null,null).exports,j={computed:a()({},Object(r.b)({text:"text",lang:"lang",viewport:"viewport"}),{myText:function(){return this.text.servicesRight}})},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"window",class:[{mobile:this.viewport},{right:!this.viewport}]},[e("div",{staticClass:"middle"},[e("div",{staticClass:"inner"},[e("br"),e("br"),e("p",{staticClass:"tMiddle text"},[this._v(this._s(this.myText[this.lang]))]),e("br"),e("br"),this._v(" "),e("p",{staticClass:"tMiddle text"},[this._v(this._s(this.myText[this.lang+"1"]))]),e("br"),e("br"),this._v(" "),e("p",{staticClass:"tMiddle text"},[this._v(this._s(this.myText[this.lang+"2"]))]),e("br"),e("br")])])])},staticRenderFns:[]},O=i("VU/8")(j,z,!1,null,null,null).exports,H={computed:a()({},Object(r.b)({viewport:"viewport",lang:"lang"}))},B={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"window",class:[{mobile:this.viewport},{left:!this.viewport}]},[this._m(0,!1,!1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"middle backgroundBlack"},[e("img",{attrs:{src:i("BH/i")}})])}]},Y=i("VU/8")(H,B,!1,null,null,null).exports;s.a.use(m.a);var Q=new m.a({routes:[{path:"/",components:{main:w}},{path:"/home/",components:{homeLeft:R,homeRight:N}},{path:"/about/",components:{aboutLeft:G,aboutRight:C}},{path:"/services/",components:{servicesLeft:Y,servicesRight:O}},{path:"/contact/",components:{contactLeft:A,contactRight:S}},{path:"/mobile/",components:{homeLeft:R,homeRight:N,aboutLeft:G,aboutRight:C,servicesLeft:Y,servicesRight:O,contactLeft:A,contactRight:S}}]}),W=i("//Fk"),Z=i.n(W);s.a.use(r.a);var U=new r.a.Store({state:{lang:"de",initializeMenu:[{name:"home",id:0},{name:"about",id:1},{name:"services",id:2},{name:"contact",id:3}],viewport:!1,viewlandscape:!1,transitionLeft:"down",transitionRight:"up",text:{homeLeft:{de:"Immersion ist die Überführung in einen Bewusstseinszustand, bei dem sich die Wahrnehmung der eigenen Person in der realen Welt vermindert und gleichzeitig in der virtuellen Welt vergrößert.",de1:"Einfach ausgedrückt: Immersiv ist, was Dich in eine fiktive Welt eintauchen lässt.",en:"IMMERSION IS A TRANSITION IN CONSCIOUSNESS, WHEN YOUR PERCEPTION IN THE REAL WORLD IS FADING WHILE AT THE SAME TIME GROWING IN A VIRTUAL WORLD."},aboutLeft:{de:"Auf planaren Medien (Leinwand , Bildschirm) wird Immersion i.d.R. mit 3D-Brillen erzielt. In umgebenden Medien (z.B. in der Kuppel eines Planetariums) taucht man auch ohne stereoskopisches 3D in die Inhalte ein.",en:"On planar screens immersion is usually\ntriggered by the use of 3D-glasses. In surrounding\nmedia spaces like a dome, visitors can immerse\nthemselves in pictures or movies without the use of\nstereoscopic devices."},aboutRight:{de:"Auf der Audioseite entsteht Immersion, wenn Klang nicht aus seinen Quellen (also Lautsprechern) wahrgenommen wird, sondern objektbasiert und als dreidimensionaler Raumklang.",en:"Audio immersion evolves when sound is\n        not experienced through their sources (e.g. loudspeakers)\n        but as object-based, spatial acoustics."},servicesRight:{de:"Wir produzieren, vermarkten und vertreiben\nimmersive Inhalte (content) für umgebende Medien.",de1:"Der aktuelle Schwerpunkt unserer Tätigkeiten liegt auf der Produktion von Fulldome-Filmen und 3D-Audioproduktionen für den Einsatz in Planetarien, Mediendomes und auf VR-Brillen.",de2:"Wir lizenzieren oder kooperieren mit großen Entertainment-Marken und kreieren für sie eine neue Auswertungsebene.",en:"We produce, market and distribute immersive content for surrounding media.",en1:"Our work currently focusses on the production of fulldome movies and spatial audioplays for use in planetaria, media domes and on VR-devices.",en2:"We license or co-produce and market content from successful entertainment companies, in order to create a new level of exploitation for their brands."},contactLeft:{de:["IMPRESSUM\n","Inhaltlich verantwortlich i.S. des Presserechtes bzw. des Telemediengesetzes (§ 5 TMG):\n","the content dome - Gesellschaft für immersive Medien mbH,\n","Grosse Reichenstr. 27 | 20457 Hamburg\n","GF: Markus Schäfer, Peter Roeschies\n","HRB: 127893  |  USt-IdNr.: DE290405001\n","HAFTUNGSAUSSCHLUSS\n","Trotz sorgfältiger inhaltlicher Kontrolle übernehmn wir keine Haftung für die Inhalte externer Links.\nFür den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.\nAlle Inhalte unterliegen dem Urheberrecht."],en:["IMPRINT","Publisher and responsible in terms of § 5 TMG:","the content dome - Gesellschaft für immersive Medien mbH,","Grosse Reichenstr. 27 | 20457 Hamburg","GF: Markus Schäfer, Peter Roeschies","HRB: 127893  |  VAT identification: DE290405001","DISCLAIMER","Although this site is checked and updated with due diligence on a regular basis we assume no responsibility for the contents of websites that can be accessed through hyperlinks. Contents and structure are copyright protected."]},contactRight:{de:"the content dome GmbH • Grosse Reichenstr. 27 • 20457 Hamburg",de1:"+49 40 244 37 132",de2:"info@thecontentdome.de",en:"the content dome GmbH • Grosse Reichenstr. 27 • 20457 Hamburg",en1:"+49 40 244 37 132",en2:"info@thecontentdome.de"}}},actions:{SET_VIEWPORT:function(t,e){var i=t.commit;return new Z.a(function(t,s){return t(i("SET_VIEWPORT",{viewport:e}))})},SET_VIEWLANDSCAPE:function(t,e){var i=t.commit;return new Z.a(function(t,s){return t(i("SET_VIEWLANDSCAPE",{viewlandscape:e}))})},SET_LANG:function(t,e){var i=t.commit;return new Z.a(function(t,s){return t(i("SET_LANG",{lang:e}))})},SET_TRANSITIONLEFT:function(t,e){var i=t.commit;return new Z.a(function(t,s){return t(i("SET_TRANSITIONLEFT",{transitionLeft:e}))})},SET_TRANSITIONRIGHT:function(t,e){var i=t.commit;return new Z.a(function(t,s){return t(i("SET_TRANSITIONRIGHT",{transitionRight:e}))})}},mutations:{SET_VIEWPORT:function(t,e){var i=e.viewport;t.viewport=i},SET_LANG:function(t,e){var i=e.lang;t.lang=i},SET_VIEWLANDSCAPE:function(t,e){var i=e.viewlandscape;t.viewlandscape=i},SET_TRANSITIONLEFT:function(t,e){var i=e.transitionLeft;t.transitionLeft=i},SET_TRANSITIONRIGHT:function(t,e){var i=e.transitionRight;t.transitionRight=i}},getters:{initializeMenu:function(t){return t.initializeMenu},viewport:function(t){return t.viewport},text:function(t){return t.text},lang:function(t){return t.lang},viewlandscape:function(t){return t.viewlandscape},transitionLeft:function(t){return t.transitionLeft},transitionRight:function(t){return t.transitionRight}}});s.a.config.productionTip=!1,new s.a({el:"#app",router:Q,store:U,render:function(t){return t(v)}})},qMk2:function(t,e,i){t.exports=i.p+"static/img/tabaluga.5329d10.png"},wz7p:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAyCAYAAAFHfZm1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEyOEYzMzQwOTc3MTFFN0E3MTQ5MkY4QUQ3RDg4QkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEyOEYzMzUwOTc3MTFFN0E3MTQ5MkY4QUQ3RDg4QkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTI4RjMzMjA5NzcxMUU3QTcxNDkyRjhBRDdEODhCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTI4RjMzMzA5NzcxMUU3QTcxNDkyRjhBRDdEODhCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhYgE9oAAASESURBVHjaYvj//z8DFJ8GYnMQm4UBAv4DMSOMzQQkjiAJgMA0kLZQJCNA+D8jiIGkvRmI7WGCKADZIjgACCCYOfxAfAdmLthgJEsug2jG/xBDkZ0EdicGAAkKAPFdZJ/hdBK6KCNAAKF4DwreA/E1IPZGdhlINxsQ/0RzFcIkiOmHQaofovkJHWf9R7M2F4fC/8iRxog1TBkYpGByMG/LAvEPBuwApOANQAChW1MBxI+BeAWyOIzhiRQ0J4H4DxBfAuKnyIpAQB6HB3bBGA9x+JIflrb+4whc/EkAW5IAASO8qoC27cYTTf//Y0kZyljEGJB19f9HBa9gclhTJK5MI4pHzQ/kPIgLdAEEEDYfcQLxvf+EQQm6XmSOL5riGXhS+Xo0tSiGPUCSsMBjCDr+g6SPE56XoECRBIMwDGSAZoL/BDIvPpwO0wxKgzcYKAPW6OUmDHwi0VWGSHqXYCvxQCCTCIOQQQ160gBhkf+kgXnI+gnlEV0gdgNidSD+BsQHgHgDLsVEZThiARNaAUou7gUZABBA+ALYCohXQWvHx9DythSIuXHpwSZYSUTA3wViFkKGvcKi8SrUVV+BeAcQtwLxG6icEy7DkMFfINbE4R0+NLXu6IYdQJI8Q0SC1cRVBHEjCf4iISs5Iem7DzPsMJIgN4l58wWSXjZYHcgAbWhwkJhOtYH4CpSdiRzwbWSWZzBwBDkHnKYwN8kjG8ZOoWH/kA2zodCwmwzY0guZySMEJLAMSUCVRMN+YGtlkOO6ciQ9O5ANayLRwDx8NToIn0JT0IDFEHVo1kEGPLiKoKUkVih8hApHaSB+S8CQDmzeJ1ShBIH6QtA8C6r5dwLxNbrXThQDWBuUF5o3GckwAxQEj5Grut7/lAGwOTBv/qGGNwECjJQIkAHiRCD2B2JjEu05AcSbgHg+EL8gSgeBLKgLxMcpCEpQr+0RlEYGe6E5k4GUlgYIx0LrdFzgGxAvBOJwIDYAYlFoV4QLiMWhjf9oaCMVVjNPBOLfaOaASsNgYhymiFarIgNQr8OPzLqQDYizgfgZDrNB7TVZXA7LxKHpKjQUGKiEFdC6VsggBd1hOTgUtlDRQeh4Ig47s2AO08WhoJKGjoLhbhx264AkF2CR2A0bFKMxZoEO4qGD+aBC0RJLKbKRwAgBtQCoMF6LRdwK5DBuLBLXGOgHXmIR4wY57AMWCQM6OkwWi9gHkMP2YpGIRaqVaQk4gTgBi/heUAKUg46LooM5dEj8q7DY+w5U2MIUuOKogjbQ0FF7sdj3B9YHRlZohjZohaw4hooOSgTif1js+YVUtzJgK1f24am8p0NbzKQ6Rg46toMLbAcNkRHTugbllFVAbIEn4b4D4lPQttZ9IP4IbbbyA7EyVK8pdJoAFwCNJYUB8WtS22MgXIinxUEOeAStm/HaS2oXQhGI44DYBYg1gFiEgPpX0H7MdiBeBsSPaNG0pitgYhikYNA6DL3aKQfiNOjoKyOd3ABKS1xAPAuIO3E5DNRTVRqgQGLHF2I/oa2Nj3QOMX6o3XAAADy+DvPuyhyFAAAAAElFTkSuQmCC"},yttx:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNS41IDFoLThDNi4xMiAxIDUgMi4xMiA1IDMuNXYxN0M1IDIxLjg4IDYuMTIgMjMgNy41IDIzaDhjMS4zOCAwIDIuNS0xLjEyIDIuNS0yLjV2LTE3QzE4IDIuMTIgMTYuODggMSAxNS41IDF6bS00IDIxYy0uODMgMC0xLjUtLjY3LTEuNS0xLjVzLjY3LTEuNSAxLjUtMS41IDEuNS42NyAxLjUgMS41LS42NyAxLjUtMS41IDEuNXptNC41LTRIN1Y0aDl2MTR6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="}},["NHnr"]);
//# sourceMappingURL=app.1a636f2f5e8c6c0a917d.js.map