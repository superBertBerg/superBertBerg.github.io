//TODO es wird alles in der history gespeichert das soll so nicht sein....
var rescale = 700; // width rescale < mobile > desktop view

var viewPort = {
    mobile: (rescale > Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
};

var initalizMenu = [
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
];

var text = {
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
        en: 'Audio immersion evolves when sound is\n' +
        'not experienced through their sources (e.g. loudspeakers)\n' +
        'but as object-based, spatial acoustics.\n'
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
        de: 'IMPRESSUM',
        de1: 'Inhaltlich verantwortlich i.S. des Presserechtes bzw. des Telemediengesetzes (§ 5 TMG):',
        de2: 'the content dome - Gesellschaft für immersive Medien mbH,',
        de3: 'Grosse Reichenstr. 27 | 20457 Hamburg',
        de4: 'GF: Markus Schäfer, Peter Roeschies',
        de5: 'HRB: 127893  |  USt-IdNr.: DE290405001',
        de6: 'HAFTUNGSAUSSCHLUSS',
        de7: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmn wir keine Haftung für die Inhalte externer Links.\n' +
        'Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.\n' +
        'Alle Inhalte unterliegen dem Urheberrecht.',
        en: 'IMPRINT',
        en1: 'Publisher and responsible in terms of § 5 TMG:',
        en2: 'the content dome - Gesellschaft für immersive Medien mbH,',
        en3: 'Grosse Reichenstr. 27 | 20457 Hamburg',
        en4: 'GF: Markus Schäfer, Peter Roeschies',
        en5: 'HRB: 127893  |  VAT identification: DE290405001',
        en6: 'DISCLAIMER',
        en7: 'Although this site is checked and updated with due diligence on a regular basis we assume no responsibility for the contents of websites that can be accessed through hyperlinks. Contents and structure are copyright protected.'
    },
    contactRight: {
        de: 'the content dome GmbH • Grosse Reichenstr. 27 • 20457 Hamburg',
        de1: '+49 40 244 37 132',
        de2: 'info@thecontentdome.de',
        en: 'the content dome GmbH • Grosse Reichenstr. 27 • 20457 Hamburg',
        en1: '+49 40 244 37 132',
        en2: 'info@thecontentdome.de'
    }
};

var langWatch = {
    watch: {
        '$route': function () {
            this.lang = this.$route.query.lang;
        }
    }
};

var Main = {
    template: '<div class="MainView">' +
    '<div :class="{mobile: mobile.mobile}"class="middle">' +
    '<div class="inner">' +
    '<img v-on:click="linkTo(\'en\')" class="centerHelpVertical" src="./assets/content_dome_immersive_media.png" />' +
    '</div>' +
    '<div class="logoWrap link">' +
    '<a class="langLink" v-on:click="linkTo(\'de\')">DE</a>' +
    '<span> | </span>' +
    '<a class="langLink" v-on:click="linkTo(\'en\')">EN</a>' +
    '</div>' +
    '</div>' +
    '</div>',
    data: function () {
        return {mobile: viewPort}
    },
    methods: {
        linkTo: function (lang) {
            if (viewPort.mobile) {
                router.push({path: '/mobile/', query: {lang: lang}})
            } else {
                router.push({path: '/home/', query: {lang: lang}})
            }
        }
    }
};

var Nav = {
        template: '<transition name="side">' +
        '<div id="navi" class="positionNav">' +
        '<template v-for="item in menu" >' +
        '<a @mouseover="item.hover = true" @mouseleave="item.hover = false"><div class="line" :key="item.id" v-bind:class="{ activeLine: item.id==current }" v-on:click="highlight(item)">' +
        '<span><div :class="{navMenuHover: item.hover}" class="hidden">{{ item.name.toUpperCase() }}</div></span>' +
        '</div></a>' +
        '</template>' +
        '</div>' +
        '</transition>',
        data: function () {
            var current = 0;
            for (var subMenus in initalizMenu) {
                if (this.$route.path.indexOf(initalizMenu[subMenus].name) !== -1) {
                    current = initalizMenu[subMenus].id;
                }
            }
            return {menu: initalizMenu, current: current, active: false}
        },
        created: function () {
            var temp = this;
            this.menu.forEach(function (slot) {
                temp.$set(slot, 'hover', false)
            });
        },
        watch: {
            '$route': function (to) {
                var temp = to.path.slice(1, -1);
                for (var i=0; i<this.menu.length; i++) {
                    if(this.menu[i].name == temp) {
                        this.current = this.menu[i].id;
                        this.hoverBlink(this.menu[i])
                    }
                }
            }
        },
        methods: {
            highlight: function (x) {
                this.$router.push({
                    path: '/' + x.name + '/',
                    query: {lang: this.$route.query.lang}
                });
                this.current = x.id;
                this.hoverBlink(this.menu[this.current])
            },
            hoverBlink: function (path) {
                path.hover = true;
                setTimeout(function () {
                    path.hover = false;
                }, 1000)
            },
            scrollFunction: function (x) {
                if (x < 0) {
                    if (this.current - 1 >= 0) {
                        this.highlight(this.menu[this.current - 1])
                    }
                } else if (x > 0) {
                    if (this.current + 1 < this.menu.length) {
                        this.highlight(this.menu[this.current + 1])
                    }
                }
            }
        }
    }
;

var HomeLeft = {
    mixins: [langWatch],
    template: '<transition name="up">' +
    '<div :class="[{mobile: mobile.mobile}, {left: !mobile.mobile}]" class="window">' +
    '<div class="middle">' +
    '<div class="inner">' +
    '<p class="tab tBig text">{{ text[lang].toUpperCase() }}</p>' +
    '<p class="tMiddle text" v-show="lang == \'de\'">{{text.de1}}</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {lang: this.$route.query.lang, text: text.homeLeft, mobile: viewPort}
    }
};

var HomeRight = {
    mixins: [langWatch],
    template: '<transition name="down">' +
    '<div :class="[{mobile: mobile.mobile}, {right: !mobile.mobile}]" class="window">' +
    '<div class="middle backgroundBlack">' +
    '<img src="./assets/content_dome_immersive_media.png"/>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {mobile: viewPort}
    }
};

var AboutLeft = {
    mixins: [langWatch],
    template: '<transition name="up">' +
    '<div :class="[{mobile: mobile.mobile}, {left: !mobile.mobile}]" class="window">' +
    '<div class="middle">' +
    '<div class="inner">' +
    '<p class="tab tMiddle text">{{ text[lang] }}</p> ' +
    '<img class="maxSize" src="./assets/tabaluga.png"/>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {lang: this.$route.query.lang, text: text.aboutLeft, mobile: viewPort}
    }
};

var AboutRight = {
    mixins: [langWatch],
    template: '<transition name="down">' +
    '<div :class="[{mobile: mobile.mobile}, {right: !mobile.mobile}]" class="window">' +
    '<div class="middle backgroundBlack">' +
    '<div class="inner">' +
    '<p class="tab tMiddle text">{{ text[lang] }}</p> ' +
    '<img class="maxSize" src="./assets/die_drei_fragezeichen.png"/>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {lang: this.$route.query.lang, text: text.aboutRight, mobile: viewPort}
    }
};

var ServicesLeft = {
    mixins: [langWatch],
    template: '<transition name="up">' +
    '<div :class="[{mobile: mobile.mobile}, {left: !mobile.mobile}]" class="window">' +
    '<div class="middle backgroundBlack">' +
    '<img src="./assets/content_dome_immersive_media.png"/>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {mobile: viewPort}
    }
};

var ServicesRight = {
    mixins: [langWatch],
    template: '<transition name="down">' +
    '<div :class="[{mobile: mobile.mobile}, {right: !mobile.mobile}]" class="window">' +
    '<div class="middle">' +
    '<div class="inner">' +
    '<br><br><p class="tMiddle text">{{ text[lang] }}</p><br><br>' +
    '<p class="tMiddle text">{{ text[lang+"1"] }}</p><br><br>' +
    '<p class="tMiddle text">{{ text[lang+"2"] }}</p><br><br>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {lang: this.$route.query.lang, text: text.servicesRight, mobile: viewPort}
    }
};

var ContactLeft = {
    mixins: [langWatch],
    template: '<transition name="up">' +
    '<div :class="[{mobile: mobile.mobile}, {left: !mobile.mobile}]" class="window">' +
    '<div class="middle">' +
    '<div class="inner">' +
    '<img src="./assets/content_dome_page.png"/>' +
    '<p class="tSpaceB tSmall text tab">{{ text[lang] }}</p>' +
    '<p class="tSmall text">{{ text[lang + "1" ]}}</p><br>' +
    '<p class="tSmall text">{{ text[lang + "2" ]}}</p><br>' +
    '<p class="tSmall text">{{ text[lang + "3" ]}}</p><br>' +
    '<p class="tSmall text">{{ text[lang + "4" ]}}</p><br>' +
    '<p class="tSmall text">{{ text[lang + "5" ]}}</p><br>' +
    '<p class="tSmall text">{{ text[lang + "6" ]}}</p><br>' +
    '<p class="tSmall disc text">{{ text[lang + "7" ]}}</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {lang: this.$route.query.lang, text: text.contactLeft, mobile: viewPort}
    }
};

var ContactRight = {
    mixins: [langWatch],
    template: '<transition name="down">' +
    '<div :class="[{mobile: mobile.mobile}, {right: !mobile.mobile}]" class="window">' +
    '<div class="middle">' +
    '<div class="inner">' +
    '<img src="./assets/content_dome_page.png"/>' +
    '<p class="tSpaceB"></p>' +
    '<img src="./assets/ic_location_on_white_24px.svg">' +
    '<p class="tSpaceM tab tSmall text">{{ text[lang] }}</p>' +
    '<img src="./assets/ic_phone_iphone_white_24px.svg">' +
    '<p class="tSpaceM tSmall text">{{ text[lang + "1" ]}}</p>' +
    '<img src="./assets/ic_mail_outline_white_24px.svg">' +
    '<p class="tSpaceM tSmall text">{{ text[lang + "2" ]}}</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</transition>',
    data: function () {
        return {lang: this.$route.query.lang, text: text.contactRight, mobile: viewPort}
    }
};


var router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                main: Main
            }
        },
        {
            path: '/home/',
            components: {
                homeLeft: HomeLeft,
                homeRight: HomeRight,
                nav: Nav
            }
        },
        {
            path: '/about/',
            components: {
                aboutLeft: AboutLeft,
                aboutRight: AboutRight,
                nav: Nav
            }
        },
        {
            path: '/services/',
            components: {
                servicesLeft: ServicesLeft,
                servicesRight: ServicesRight,
                nav: Nav
            }
        },
        {
            path: '/contact/',
            components: {
                contactLeft: ContactLeft,
                contactRight: ContactRight,
                nav: Nav
            }
        },
        {
            path: '/mobile/',
            components: {
                homeLeft: HomeLeft,
                homeRight: HomeRight,
                aboutLeft: AboutLeft,
                aboutRight: AboutRight,
                servicesLeft: ServicesLeft,
                servicesRight: ServicesRight,
                contactLeft: ContactLeft,
                contactRight: ContactRight
            }
        }
    ]
});

var app = new Vue({
    router: router,
    el: '#app',
    data: {
        mobile: viewPort
    },
    created: function () {
        resize();
    },
    watch: {
        'mobile': {
            handler: function () {
                if ('/' != this._route.path) {
                    var lang;
                    if (this._route.query.lang == undefined) {
                        lang = 'de'
                    } else {
                        lang = this._route.query.lang;
                    }
                    if (this.mobile.mobile) {
                        router.replace({path: '/mobile/', query: {lang: lang}})
                    } else {
                        router.replace({path: '/home/', query: {lang: lang}})
                    }
                }
            },
            deep: true
        }
    }
});

(function () {

    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;

    function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();

                // The actualResizeHandler will execute at a rate of 15fps
            }, 66);
        }
    }

    function actualResizeHandler() {
        resize()
    }

}());

(function () {

    window.addEventListener("wheel", function (e) {
        wheelThrottler(e);
        return false;
    }, false);

    var wheelTimeout;

    function wheelThrottler(e) {
        if (!wheelTimeout) {
            wheelTimeout = setTimeout(function () {
                wheelTimeout = null;
            }, 1000);
            actualWheelHandler(e);
        }
    }

    function actualWheelHandler(e) {
        scrolled(e.deltaY)
    }
}());


(function () {

    var prev;

    window.addEventListener('touchmove', function (e) {
        touchThrottler(e.targetTouches[0].clientY)
        prev = e.targetTouches[0].clientY
    }, true);

    var wheelTimeout;

    function touchThrottler(e) {
        if (!wheelTimeout) {
            wheelTimeout = setTimeout(function () {
                wheelTimeout = null;
            }, 500);
            actualWheelHandler(e - prev);
        }
    }

    function actualWheelHandler(e) {
        scrolled(e)
    }

}());


window.addEventListener('keyup', function (e) {

    if (e.key == "ArrowUp" || e.key == "PageUp") {
        scrolled(-10)
    } else if (e.key == "ArrowDown" || e.key == "PageDown") {
        scrolled(10)
    }
}, true);

function scrolled(move) {
    for (var i = 0; i < app.$children.length; i++) {
        if (app.$children[i].$el.id == 'navi') {
            app.$children[i].scrollFunction(move);
        }
    }
}

function resize() {
    console.log(viewPort.mobile)
    if (rescale > Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) {
        viewPort.mobile = true
        document.getElementById('over').style.overflow = 'auto';
        // document.getElementById('over').style.position = 'relative';
        document.getElementById('over').style['overflow-x'] = 'hidden';
    } else {
        viewPort.mobile = false
        document.getElementById('over').style.overflow = 'hidden'
    }
}