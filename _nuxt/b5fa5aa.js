(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(t){t.exports=JSON.parse('{"name":"@sc-voice/ebt-site","version":"1.0.36","private":true,"scripts":{"dev":"nuxt","build":"scripts/build","build:nuxt":"nuxt build","build:nuxt-config":"scripts/build-nuxt-config","start":"nuxt start","generate":"scripts/nuxt-routes.js && nuxt generate","generate:deploy":"export BABEL_ENV=deploy; scripts/nuxt-routes.js && nuxt generate","deploy":"scripts/deploy","deploy:branch":"push-dir --dir=dist --branch=gh-pages --cleanup","hello":"scripts/hello","version:nuxt":"nuxt --version"},"dependencies":{"@mdi/js":"^5.9.55","@sc-voice/scv-static":"^0.4.71","axios":"^0.21.1","core-js":"^3.8.3","push-dir":"^0.4.1"},"devDependencies":{"@nuxt/content":"^1.14.0","@nuxtjs/vuetify":"^1.11.3","@vue/test-utils":"^1.1.2","babel-core":"7.0.0-bridge.0","babel-jest":"^26.6.3","express":"^4.17.1","jest":"^26.6.3","nuxt":"^2.14.12","scv-bilara":"^1.9.8","vue-jest":"^3.0.4"}}')},184:function(t,o,r){"use strict";var e=r(65);o.a=function(t,o){e.ScvClient.default(t,o)}},215:function(t,o,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("7388ab72",content,!0,{sourceMap:!1})},234:function(t,o,r){var content=r(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("56b15182",content,!0,{sourceMap:!1})},251:function(t,o,r){"use strict";r(13);var e=r(65),c=r(178).version,n=r(21).mdiGithub,l=e.ScvVue.ScvAppBar,v={components:{ScvCursor:e.ScvVue.ScvCursor,ScvAppBar:l},data:function(){return{clipped:!1,mdiGithub:n}},mounted:function(){console.log("layouts/default mounted",this.$nuxt)},methods:{},computed:{version:function(){return c},ebtLang:function(){return this.$nuxt.context.env.ebt_lang},ebtSiteImage:function(){return this.$nuxt.context.env.ebt_site_image},githubUrl:function(){var t=this.$nuxt.context.env,o=t.ebt_repository,r=t.ebt_account;return"https://github.com/".concat(r,"/").concat(o)}}},d=(r(392),r(11)),f=r(25),m=r.n(f),h=r(421),x=r(423),w=r(424),k=r(425),y=r(422),_=r(179),component=Object(d.a)(v,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-app",[r("v-app-bar",{attrs:{dark:"","clipped-left":t.clipped,fixed:"",app:"","hide-on-scroll":""}},[r("scv-app-bar",{attrs:{title:"EBT-Site",imgUrl:t.ebtSiteImage,monolingual:t.ebtLang}},[r("v-btn",{staticClass:"scv-icon-btn",attrs:{icon:"",title:"Github",href:t.githubUrl,target:"_blank"}},[r("v-icon",[t._v(t._s(t.mdiGithub))])],1)],1)],1),t._v(" "),r("div",{staticClass:"site-main"},[r("v-container",{staticClass:"site-content"},[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{app:"",dark:""}},[r("scv-cursor")],1)],1)}),[],!1,null,null,null);o.a=component.exports;m()(component,{VApp:h.a,VAppBar:x.a,VBtn:w.a,VContainer:k.a,VFooter:y.a,VIcon:_.a})},255:function(t,o,r){r(256),t.exports=r(257)},271:function(t,o,r){"use strict";r.r(o),o.default=function(t){t.store;var o=t.redirect;console.log("redirecting to wiki/welcome"),o("/wiki/welcome")}},281:function(t,o,r){"use strict";r(215)},282:function(t,o,r){var e=r(7)(!1);e.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},287:function(t,o,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("22618b18",content,!0,{sourceMap:!1})},288:function(t,o,r){var e=r(7)(!1);e.push([t.i,':root{--scv-text-width:45em;--scv-text-line-height:1.5;--scv-sutta-title-font-size:20px;--scv-division-title-font-size:12px;--scv-header-margin-bottom:64px;--scv-segment-margin-bottom:0.5em;--scv-text-font-size:16px;--scv-sc-sans-font:"Roboto","Skolar Sans PE","Noto Sans",sans-serif;--scv-sc-serif-font:"Roboto","Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--scv-sans-font:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;--scv-sc-sans-font:"Skolar Sans PE","Noto Sans",sans-serif;--scv-sc-serif-font:"Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--scv-focus-font-weight:600;--scv-focus-color-light:#820;--scv-focus-color-dark:#ff9f80;--scv-focus-background-color-dark:#000;--scv-focus-background-color-light:#fff;--scv-background-color-light:#eee;--scv-background-color-dark:#000;--scv-settings-width:350px;--scv-setting-width:330px;--scv-label-color:rgba(0,0,0,0.6);--scv-color-dark:#fff;--scv-color-light:#222;--scv-cursor-border:0.15em}@media(max-width:599px){:root{--scv-text-line-height:1.4;--scv-sutta-title-font-size:18px;--scv-header-margin-bottom:32px;--scv-segment-margin-bottom:0.3em;--scv-text-font-size:16px}}label{color:rgba(0,0,0,.6);color:var(--scv-label-color)}.scv-checkbox{padding-top:.2em;padding-bottom:.2em;padding-left:2em;margin-right:.5rem;text-indent:-1.8em}.scv-checkbox label{color:rgba(0,0,0,.6);color:var(--scv-label-color)}.scv-checkbox input{margin-left:.4em;margin-right:.4em}.scv-checkbox[focus-within]{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-checkbox:focus-within{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-summary{margin:2pt;padding-left:.4rem}.scv-summary:focus{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-select{padding:.5em;text-align:right}.scv-select:focus{box-shadow:-1 0 3pt 2pt #820;box-shadow:-1 0 3pt 2pt var(--scv-focus-color-light)}.scv-select-container{display:flex;justify-content:space-between;align-items:baseline;padding-right:.5rem}.scv-select-container select{max-width:290px}.scv-text{line-height:1.5;line-height:var(--scv-text-line-height);font-size:16px;font-size:var(--scv-text-font-size);max-width:45em;max-width:var(--scv-text-width)}.scv-root{font-style:italic}.scv-root,.scv-trans{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font)}.scv-text-root{padding-bottom:.3em;font-style:italic}.scv-text-root,.scv-text-trans{max-width:45em;max-width:var(--scv-text-width);font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font)}.scv-text-trans{padding-bottom:.7em}.scv-matched{color:#232323;font-weight:600;font-weight:var(--scv-focus-font-weight)}.scv-text-container .scv-matched{cursor:pointer;text-decoration:underline}.scv-text-container .scv-matched:focus,.scv-text-container .scv-matched:hover{color:#820;color:var(--scv-focus-color-light);-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--scv-focus-color-light);text-decoration-color:var(--scv-focus-color-light)}.scv-text-btn{margin-left:1px;border-radius:4px;text-align:center;margin-bottom:1em;border:1pt solid #222;height:24px;-webkit-text-decoration-color:#222;text-decoration-color:#222;-webkit-text-decoration-color:var(--scv-color-light);text-decoration-color:var(--scv-color-light)}.scv-text-btn .v-btn__content{font-size:.75rem;text-transform:none;font-feature-settings:"smcp";font-variant:small-caps;font-weight:400}.scv-text-btn .v-btn__content:hover,.scv-text-btn[focus-within] .v-btn__content{color:#820;color:var(--scv-focus-color-light);font-weight:600;font-weight:var(--scv-focus-font-weight)}.scv-text-btn .v-btn__content:hover,.scv-text-btn:focus-within .v-btn__content{color:#820;color:var(--scv-focus-color-light);font-weight:600;font-weight:var(--scv-focus-font-weight)}.scv-text-btn:hover,.scv-text-btn[focus-within]{border:1pt solid #820;border:1pt solid var(--scv-focus-color-light);border-radius:0;outline:1pt solid #820;outline:1pt solid var(--scv-focus-color-light);text-decoration:underline;-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--scv-focus-color-light);text-decoration-color:var(--scv-focus-color-light);color:#820;color:var(--scv-focus-color-light);background-color:#fff;background-color:var(--scv-focus-background-color-light)}.scv-text-btn:focus-within,.scv-text-btn:hover{border:1pt solid #820;border:1pt solid var(--scv-focus-color-light);border-radius:0;outline:1pt solid #820;outline:1pt solid var(--scv-focus-color-light);text-decoration:underline;-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--scv-focus-color-light);text-decoration-color:var(--scv-focus-color-light);color:#820;color:var(--scv-focus-color-light);background-color:#fff;background-color:var(--scv-focus-background-color-light)}.theme--dark.scv-text-btn:hover,.theme--dark.scv-text-btn[focus-within]{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark);border:1pt solid #ff9f80;border:1pt solid var(--scv-focus-color-dark);outline:1pt solid #ff9f80;outline:1pt solid var(--scv-focus-color-dark)}.theme--dark.scv-text-btn:focus-within,.theme--dark.scv-text-btn:hover{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark);border:1pt solid #ff9f80;border:1pt solid var(--scv-focus-color-dark);outline:1pt solid #ff9f80;outline:1pt solid var(--scv-focus-color-dark)}.scv-text-btn[focus-within] .theme--dark.v-btn__content,.theme--dark.scv-text-btn .v-btn__content:hover{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.scv-text-btn:focus-within .theme--dark.v-btn__content,.theme--dark.scv-text-btn .v-btn__content:hover{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.scv-inspire-row{margin:-.8em 0 .5em;display:flex;justify-content:center;width:100%}.scv-icon-btn{margin:0 2px;border-radius:5px;border:none;font-size:1rem!important}.scv-icon-btn svg{bottom:0!important}.scv-icon-btn:focus,.scv-icon-btn:hover{outline:2px solid #820;outline:2px solid var(--scv-focus-color-light)}.theme--dark.scv-icon-btn:focus,.theme--dark.scv-icon-btn:hover{outline:2px solid #ff9f80;outline:2px solid var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.theme--dark.scv-icon-btn:hover svg,.theme--dark.scv-icon-btn[focus-within] svg{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.theme--dark.scv-icon-btn:focus-within svg,.theme--dark.scv-icon-btn:hover svg{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}summary:focus,summary:hover{border-radius:var(--scv-focus-width);outline:#820;outline:var(--scv-focus-color-light);box-shadow:inset var(--scv-focus-width) var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) #820,inset 0-var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) #820;box-shadow:inset var(--scv-focus-width) var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-color-light),inset 0-var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-color-light)}.scv-settings{background-color:#eee;background-color:var(--scv-background-color-light);color:#222;color:var(--scv-color-light);z-index:1000}.scv-settings.theme--dark{background-color:#000;background-color:var(--scv-background-color-dark);color:#fff;color:var(--scv-color-dark)}.scv-settings-detail{max-width:350px;max-width:var(--scv-settings-width);padding-left:1.2rem;padding-bottom:.5rem}.scv-settings-title{width:330px;width:var(--scv-setting-width);display:inline-flex;flex-flow:row nowrap;justify-content:space-between;align-items:baseline;margin-top:.1em;font-size:120%;font-weight:500;padding-right:.2rem}.scv-settings-title:focus{border-color:#820;border-color:var(--scv-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--scv-focus-color-light)}.scv-settings-title .scv-setting-icon,.scv-settings-title .scv-setting-icon svg{width:1rem;height:1rem}.scv-settings-icon{background-color:--var(scv-background-color-dark);color:--var(scv-color-dark)}.scv-settings-icon:focus>svg{background-color:--var(scv-focus-color-dark);margin-bottom:5px}.scv-more-menu{position:absolute;list-style:none;top:3em;right:0;min-width:23em;text-align:left;padding-left:0!important;padding-right:0!important;padding-top:.3em;padding-bottom:.3rem;border:1pt solid #555;border-radius:2pt;background-color:#eee;background-color:var(--scv-background-color-light)}.scv-scid{display:inline-block;font-size:xx-small;color:#888;margin-top:.6em;margin-left:.2em}.scv-sutta{margin-top:2em}.scv-results{width:35rem}.scv-result-summary{display:inline-flex;flex-flow:row wrap;justify-content:space-between;min-width:500px;max-width:550px}.scv-result-details summary{max-width:520px}.scv-result-details summary:focus{max-width:520px;box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-result-text{padding-left:1.15em;width:32rem}@media (max-width:599px){.scv-results{width:340px}.scv-result-details summary{max-width:305px}.scv-result-summary{min-width:240px}.scv-result-text{max-width:290px}}.scv-result-icons{cursor:pointer;font-size:1.25rem;margin-top:-.4em;margin-bottom:.4em}.scv-result-title{padding-left:3em;text-indent:-3em;padding-right:.5em}.scv-division{font-size:12px;font-size:var(--scv-division-title-font-size);display:flex;flex-flow:column nowrap;align-items:center}.scv-division-root{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font);font-style:italic}.scv-division-trans{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font)}.scv-sutta-title{font-size:20px;font-size:var(--scv-sutta-title-font-size);text-align:center;font-weight:400;line-height:1.2em;margin-top:.5rem;letter-spacing:.02em}.scv-sutta-title-root{font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font);font-style:italic}.scv-sutta-title-root,.scv-sutta-title-trans{xfont-variant-caps:small-caps;padding-left:1em;padding-right:1em}.scv-sutta-title-trans{xfont-feature-settings:normal;font-family:var(--scv-serif-font)}.scv-text-container{font-size:16px;font-size:var(--scv-text-font-size);line-height:1.5;line-height:var(--scv-text-line-height);margin-left:auto;margin-right:auto}.scv-sutta-cursor{border-left:.15em solid #820;border-left:var(--scv-cursor-border) solid var(--scv-focus-color-light);border-right:.15em solid #820;border-right:var(--scv-cursor-border) solid var(--scv-focus-color-light);border-radius:.15em;border-radius:var(--scv-cursor-border);background-color:#fff;background-color:var(--scv-focus-background-color-light)}.scv-segment{margin-bottom:.5em;margin-bottom:var(--scv-segment-margin-bottom);margin-left:auto;margin-right:auto;padding-left:.8em;padding-right:1em}.scv-header{margin-bottom:64px;margin-bottom:var(--scv-header-margin-bottom)}.scv-nav-cursor{align-items:center}.scv-nav-cursor,.scv-nav-sutta{display:flex;flex-flow:row noWrap;justify-content:space-between;width:100%}.scv-nav-sutta{align-items:baseline}.scv-nav-sutta>button{width:8em!important}.scv-nav-btn{min-width:5rem;background-color:transparent;border:none;margin-bottom:0}.scv-nav-btn-disabled svg{min-width:5rem;color:hsla(0,0%,49.8%,.25)}.scv-nav-app{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%}.scv-nav-title{margin-left:.5em;cursor:pointer}.scv-nav-img{height:56px;border-bottom:1px solid transparent;border-top:1px solid transparent}.scv-nav-app-title{justify-content:flex-start;cursor:pointer}.scv-nav-app-icons,.scv-nav-app-title{display:flex;flex-flow:row nowrap;align-items:center;width:50%}.scv-nav-app-icons{justify-content:flex-end}.v-app-bar .v-toolbar__content{padding-left:0;padding-right:.5em}.v-btn:before{background-color:inherit!important}.theme--light.v-application{background-color:#eee!important;background-color:var(--scv-background-color-light)!important}.theme--dark.v-sheet{background-color:#000!important;background-color:var(--scv-background-color-dark)!important}.theme--light.v-sheet{background-color:#eee!important;background-color:var(--scv-background-color-light)!important}.v-input__slot[focus-within]{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.v-input__slot:focus-within{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.v-btn:hover,.v-btn[focus-within]{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.v-btn:focus-within,.v-btn:hover{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.scv-article{padding:1em 1em 20em;font-size:14px}.scv-wiki-heading{display:flex;flex-flow:row wrap;align-items:flex-start}.scv-wiki-heading img{margin-right:1em;height:175px;border-top-left-radius:.5em}.nuxt-content{max-width:55em}.nuxt-content a{color:#222!important;color:var(--scv-color-light)!important;font-weight:700;text-decoration:none}.nuxt-content a:focus,.nuxt-content a:hover{color:#820!important;color:var(--scv-focus-color-light)!important;text-decoration:underline}.nuxt-content nav{font-size:12px;margin-top:1em}.nuxt-content h1,h2,h3,h4,h5,h6{margin:36px 0 10px;font-weight:600}.nuxt-content h1,h2,h3,h4,h5{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font);margin-top:1.5em}.nuxt-content h1,h2,h3{display:block;border-bottom:1px solid #ccc;padding-bottom:5px}.nuxt-content h1{font-size:24px;margin-top:0}[dir=ltr] .nuxt-content h3{margin-left:0}[dir=ltr] .nuxt-content h3,[dir=rtl] .nuxt-content h3{margin-right:0}[dir=rtl] .nuxt-content h3{margin-left:0}.nuxt-content h3{font-size:1.17em;margin-top:1em;margin-bottom:1em}[dir=ltr] .nuxt-content p{margin-left:0}[dir=ltr] .nuxt-content p,[dir=rtl] .nuxt-content p{margin-right:0}[dir=rtl] .nuxt-content p{margin-left:0}.nuxt-content p{display:block;margin-top:1em;margin-bottom:1em}.nuxt-content table{border-collapse:collapse}.nuxt-content thead th{border-bottom:1pt solid #888}.nuxt-content td,.nuxt-content th{padding:.25em}.scv-toc{margin:1em}.scv-toc-item a{display:flex;flex-flow:row wrap;align-item:flex-start;margin-top:.4em}.scv-toc-item-text{margin-top:.3em;margin-left:1em}.scv-toc-item-subtitle{font-size:smaller;font-weight:400}.scv-thumbnail{height:4em;width:5em;overflow:hidden;border-top-left-radius:.5em}.scv-thumbnail img{height:4.5em}.scv-article-link a{font-size:18px;font-weight:400}.site-content{display:flex;flex-flow:column;align-items:center}blockquote,pre{border-left:3pt solid #ccc;padding-left:.5em}',""]),t.exports=e},289:function(t,o,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("95e86550",content,!0,{sourceMap:!1})},290:function(t,o,r){var e=r(7)(!1);e.push([t.i,':root{--scv-text-width:45em;--scv-text-line-height:1.5;--scv-sutta-title-font-size:20px;--scv-division-title-font-size:12px;--scv-header-margin-bottom:64px;--scv-segment-margin-bottom:0.5em;--scv-text-font-size:16px;--scv-sc-sans-font:"Roboto","Skolar Sans PE","Noto Sans",sans-serif;--scv-sc-serif-font:"Roboto","Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--scv-sans-font:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;--scv-sc-sans-font:"Skolar Sans PE","Noto Sans",sans-serif;--scv-sc-serif-font:"Skolar PE","Noto Serif","Skolar Sans PE","Noto Sans",serif;--scv-focus-font-weight:600;--scv-focus-color-light:#820;--scv-focus-color-dark:#ff9f80;--scv-focus-background-color-dark:#000;--scv-focus-background-color-light:#fff;--scv-background-color-light:#eee;--scv-background-color-dark:#000;--scv-settings-width:350px;--scv-setting-width:330px;--scv-label-color:rgba(0,0,0,0.6);--scv-color-dark:#fff;--scv-color-light:#222;--scv-cursor-border:0.15em}@media(max-width:599px){:root{--scv-text-line-height:1.4;--scv-sutta-title-font-size:18px;--scv-header-margin-bottom:32px;--scv-segment-margin-bottom:0.3em;--scv-text-font-size:16px}}label{color:rgba(0,0,0,.6);color:var(--scv-label-color)}.scv-checkbox{padding-top:.2em;padding-bottom:.2em;padding-left:2em;margin-right:.5rem;text-indent:-1.8em}.scv-checkbox label{color:rgba(0,0,0,.6);color:var(--scv-label-color)}.scv-checkbox input{margin-left:.4em;margin-right:.4em}.scv-checkbox[focus-within]{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-checkbox:focus-within{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-summary{margin:2pt;padding-left:.4rem}.scv-summary:focus{box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-select{padding:.5em;text-align:right}.scv-select:focus{box-shadow:-1 0 3pt 2pt #820;box-shadow:-1 0 3pt 2pt var(--scv-focus-color-light)}.scv-select-container{display:flex;justify-content:space-between;align-items:baseline;padding-right:.5rem}.scv-select-container select{max-width:290px}.scv-text{line-height:1.5;line-height:var(--scv-text-line-height);font-size:16px;font-size:var(--scv-text-font-size);max-width:45em;max-width:var(--scv-text-width)}.scv-root{font-style:italic}.scv-root,.scv-trans{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font)}.scv-text-root{padding-bottom:.3em;font-style:italic}.scv-text-root,.scv-text-trans{max-width:45em;max-width:var(--scv-text-width);font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font)}.scv-text-trans{padding-bottom:.7em}.scv-matched{color:#232323;font-weight:600;font-weight:var(--scv-focus-font-weight)}.scv-text-container .scv-matched{cursor:pointer;text-decoration:underline}.scv-text-container .scv-matched:focus,.scv-text-container .scv-matched:hover{color:#820;color:var(--scv-focus-color-light);-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--scv-focus-color-light);text-decoration-color:var(--scv-focus-color-light)}.scv-text-btn{margin-left:1px;border-radius:4px;text-align:center;margin-bottom:1em;border:1pt solid #222;height:24px;-webkit-text-decoration-color:#222;text-decoration-color:#222;-webkit-text-decoration-color:var(--scv-color-light);text-decoration-color:var(--scv-color-light)}.scv-text-btn .v-btn__content{font-size:.75rem;text-transform:none;font-feature-settings:"smcp";font-variant:small-caps;font-weight:400}.scv-text-btn .v-btn__content:hover,.scv-text-btn[focus-within] .v-btn__content{color:#820;color:var(--scv-focus-color-light);font-weight:600;font-weight:var(--scv-focus-font-weight)}.scv-text-btn .v-btn__content:hover,.scv-text-btn:focus-within .v-btn__content{color:#820;color:var(--scv-focus-color-light);font-weight:600;font-weight:var(--scv-focus-font-weight)}.scv-text-btn:hover,.scv-text-btn[focus-within]{border:1pt solid #820;border:1pt solid var(--scv-focus-color-light);border-radius:0;outline:1pt solid #820;outline:1pt solid var(--scv-focus-color-light);text-decoration:underline;-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--scv-focus-color-light);text-decoration-color:var(--scv-focus-color-light);color:#820;color:var(--scv-focus-color-light);background-color:#fff;background-color:var(--scv-focus-background-color-light)}.scv-text-btn:focus-within,.scv-text-btn:hover{border:1pt solid #820;border:1pt solid var(--scv-focus-color-light);border-radius:0;outline:1pt solid #820;outline:1pt solid var(--scv-focus-color-light);text-decoration:underline;-webkit-text-decoration-color:#820;text-decoration-color:#820;-webkit-text-decoration-color:var(--scv-focus-color-light);text-decoration-color:var(--scv-focus-color-light);color:#820;color:var(--scv-focus-color-light);background-color:#fff;background-color:var(--scv-focus-background-color-light)}.theme--dark.scv-text-btn:hover,.theme--dark.scv-text-btn[focus-within]{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark);border:1pt solid #ff9f80;border:1pt solid var(--scv-focus-color-dark);outline:1pt solid #ff9f80;outline:1pt solid var(--scv-focus-color-dark)}.theme--dark.scv-text-btn:focus-within,.theme--dark.scv-text-btn:hover{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark);border:1pt solid #ff9f80;border:1pt solid var(--scv-focus-color-dark);outline:1pt solid #ff9f80;outline:1pt solid var(--scv-focus-color-dark)}.scv-text-btn[focus-within] .theme--dark.v-btn__content,.theme--dark.scv-text-btn .v-btn__content:hover{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.scv-text-btn:focus-within .theme--dark.v-btn__content,.theme--dark.scv-text-btn .v-btn__content:hover{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.scv-inspire-row{margin:-.8em 0 .5em;display:flex;justify-content:center;width:100%}.scv-icon-btn{margin:0 2px;border-radius:5px;border:none;font-size:1rem!important}.scv-icon-btn svg{bottom:0!important}.scv-icon-btn:focus,.scv-icon-btn:hover{outline:2px solid #820;outline:2px solid var(--scv-focus-color-light)}.theme--dark.scv-icon-btn:focus,.theme--dark.scv-icon-btn:hover{outline:2px solid #ff9f80;outline:2px solid var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.theme--dark.scv-icon-btn:hover svg,.theme--dark.scv-icon-btn[focus-within] svg{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}.theme--dark.scv-icon-btn:focus-within svg,.theme--dark.scv-icon-btn:hover svg{color:#ff9f80;color:var(--scv-focus-color-dark);background-color:#000;background-color:var(--scv-focus-background-color-dark)}summary:focus,summary:hover{border-radius:var(--scv-focus-width);outline:#820;outline:var(--scv-focus-color-light);box-shadow:inset var(--scv-focus-width) var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) #820,inset 0-var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) #820;box-shadow:inset var(--scv-focus-width) var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-color-light),inset 0-var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-width) 0-var(--scv-focus-width) var(--scv-focus-color-light)}.scv-settings{background-color:#eee;background-color:var(--scv-background-color-light);color:#222;color:var(--scv-color-light);z-index:1000}.scv-settings.theme--dark{background-color:#000;background-color:var(--scv-background-color-dark);color:#fff;color:var(--scv-color-dark)}.scv-settings-detail{max-width:350px;max-width:var(--scv-settings-width);padding-left:1.2rem;padding-bottom:.5rem}.scv-settings-title{width:330px;width:var(--scv-setting-width);display:inline-flex;flex-flow:row nowrap;justify-content:space-between;align-items:baseline;margin-top:.1em;font-size:120%;font-weight:500;padding-right:.2rem}.scv-settings-title:focus{border-color:#820;border-color:var(--scv-focus-color-light);outline:1pt solid #820;outline:1pt solid var(--scv-focus-color-light)}.scv-settings-title .scv-setting-icon,.scv-settings-title .scv-setting-icon svg{width:1rem;height:1rem}.scv-settings-icon{background-color:--var(scv-background-color-dark);color:--var(scv-color-dark)}.scv-settings-icon:focus>svg{background-color:--var(scv-focus-color-dark);margin-bottom:5px}.scv-more-menu{position:absolute;list-style:none;top:3em;right:0;min-width:23em;text-align:left;padding-left:0!important;padding-right:0!important;padding-top:.3em;padding-bottom:.3rem;border:1pt solid #555;border-radius:2pt;background-color:#eee;background-color:var(--scv-background-color-light)}.scv-scid{display:inline-block;font-size:xx-small;color:#888;margin-top:.6em;margin-left:.2em}.scv-sutta{margin-top:2em}.scv-results{width:35rem}.scv-result-summary{display:inline-flex;flex-flow:row wrap;justify-content:space-between;min-width:500px;max-width:550px}.scv-result-details summary{max-width:520px}.scv-result-details summary:focus{max-width:520px;box-shadow:0 0 3pt 2pt #820;box-shadow:0 0 3pt 2pt var(--scv-focus-color-light)}.scv-result-text{padding-left:1.15em;width:32rem}@media (max-width:599px){.scv-results{width:340px}.scv-result-details summary{max-width:305px}.scv-result-summary{min-width:240px}.scv-result-text{max-width:290px}}.scv-result-icons{cursor:pointer;font-size:1.25rem;margin-top:-.4em;margin-bottom:.4em}.scv-result-title{padding-left:3em;text-indent:-3em;padding-right:.5em}.scv-division{font-size:12px;font-size:var(--scv-division-title-font-size);display:flex;flex-flow:column nowrap;align-items:center}.scv-division-root{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font);font-style:italic}.scv-division-trans{xfont-variant-caps:all-small-caps;font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font)}.scv-sutta-title{font-size:20px;font-size:var(--scv-sutta-title-font-size);text-align:center;font-weight:400;line-height:1.2em;margin-top:.5rem;letter-spacing:.02em}.scv-sutta-title-root{font-feature-settings:normal;font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font);font-style:italic}.scv-sutta-title-root,.scv-sutta-title-trans{xfont-variant-caps:small-caps;padding-left:1em;padding-right:1em}.scv-sutta-title-trans{xfont-feature-settings:normal;font-family:var(--scv-serif-font)}.scv-text-container{font-size:16px;font-size:var(--scv-text-font-size);line-height:1.5;line-height:var(--scv-text-line-height);margin-left:auto;margin-right:auto}.scv-sutta-cursor{border-left:.15em solid #820;border-left:var(--scv-cursor-border) solid var(--scv-focus-color-light);border-right:.15em solid #820;border-right:var(--scv-cursor-border) solid var(--scv-focus-color-light);border-radius:.15em;border-radius:var(--scv-cursor-border);background-color:#fff;background-color:var(--scv-focus-background-color-light)}.scv-segment{margin-bottom:.5em;margin-bottom:var(--scv-segment-margin-bottom);margin-left:auto;margin-right:auto;padding-left:.8em;padding-right:1em}.scv-header{margin-bottom:64px;margin-bottom:var(--scv-header-margin-bottom)}.scv-nav-cursor{align-items:center}.scv-nav-cursor,.scv-nav-sutta{display:flex;flex-flow:row noWrap;justify-content:space-between;width:100%}.scv-nav-sutta{align-items:baseline}.scv-nav-sutta>button{width:8em!important}.scv-nav-btn{min-width:5rem;background-color:transparent;border:none;margin-bottom:0}.scv-nav-btn-disabled svg{min-width:5rem;color:hsla(0,0%,49.8%,.25)}.scv-nav-app{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;width:100%}.scv-nav-title{margin-left:.5em;cursor:pointer}.scv-nav-img{height:56px;border-bottom:1px solid transparent;border-top:1px solid transparent}.scv-nav-app-title{justify-content:flex-start;cursor:pointer}.scv-nav-app-icons,.scv-nav-app-title{display:flex;flex-flow:row nowrap;align-items:center;width:50%}.scv-nav-app-icons{justify-content:flex-end}.v-app-bar .v-toolbar__content{padding-left:0;padding-right:.5em}.v-btn:before{background-color:inherit!important}.theme--light.v-application{background-color:#eee!important;background-color:var(--scv-background-color-light)!important}.theme--dark.v-sheet{background-color:#000!important;background-color:var(--scv-background-color-dark)!important}.theme--light.v-sheet{background-color:#eee!important;background-color:var(--scv-background-color-light)!important}.v-input__slot[focus-within]{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.v-input__slot:focus-within{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.v-btn:hover,.v-btn[focus-within]{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.v-btn:focus-within,.v-btn:hover{background-color:#fff;background-color:var(--scv-focus-background-color-light)}.scv-article{padding:1em 1em 20em;font-size:14px}.scv-wiki-heading{display:flex;flex-flow:row wrap;align-items:flex-start}.scv-wiki-heading img{margin-right:1em;height:175px;border-top-left-radius:.5em}.nuxt-content{max-width:55em}.nuxt-content a{color:#222!important;color:var(--scv-color-light)!important;font-weight:700;text-decoration:none}.nuxt-content a:focus,.nuxt-content a:hover{color:#820!important;color:var(--scv-focus-color-light)!important;text-decoration:underline}.nuxt-content nav{font-size:12px;margin-top:1em}.nuxt-content h1,h2,h3,h4,h5,h6{margin:36px 0 10px;font-weight:600}.nuxt-content h1,h2,h3,h4,h5{font-family:"Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;font-family:var(--scv-sans-font);margin-top:1.5em}.nuxt-content h1,h2,h3{display:block;border-bottom:1px solid #ccc;padding-bottom:5px}.nuxt-content h1{font-size:24px;margin-top:0}[dir=ltr] .nuxt-content h3{margin-left:0}[dir=ltr] .nuxt-content h3,[dir=rtl] .nuxt-content h3{margin-right:0}[dir=rtl] .nuxt-content h3{margin-left:0}.nuxt-content h3{font-size:1.17em;margin-top:1em;margin-bottom:1em}[dir=ltr] .nuxt-content p{margin-left:0}[dir=ltr] .nuxt-content p,[dir=rtl] .nuxt-content p{margin-right:0}[dir=rtl] .nuxt-content p{margin-left:0}.nuxt-content p{display:block;margin-top:1em;margin-bottom:1em}.nuxt-content table{border-collapse:collapse}.nuxt-content thead th{border-bottom:1pt solid #888}.nuxt-content td,.nuxt-content th{padding:.25em}.scv-toc{margin:1em}.scv-toc-item a{display:flex;flex-flow:row wrap;align-item:flex-start;margin-top:.4em}.scv-toc-item-text{margin-top:.3em;margin-left:1em}.scv-toc-item-subtitle{font-size:smaller;font-weight:400}.scv-thumbnail{height:4em;width:5em;overflow:hidden;border-top-left-radius:.5em}.scv-thumbnail img{height:4.5em}.scv-article-link a{font-size:18px;font-weight:400}.site-content{display:flex;flex-flow:column;align-items:center}blockquote,pre{border-left:3pt solid #ccc;padding-left:.5em}',""]),t.exports=e},392:function(t,o,r){"use strict";r(234)},393:function(t,o,r){var e=r(7)(!1);e.push([t.i,".site-content{margin-top:90px;padding:0 0 60px}",""]),t.exports=e},406:function(t,o,r){"use strict";r.r(o),r.d(o,"actions",(function(){return c})),r.d(o,"getters",(function(){return n})),r.d(o,"mutations",(function(){return l})),r.d(o,"state",(function(){return v}));var e=r(65),c=e.ScvStore.actions,n=e.ScvStore.getters,l=e.ScvStore.mutations,v=e.ScvStore.state},83:function(t,o,r){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(281),r(11)),n=r(25),l=r.n(n),v=r(421),component=Object(c.a)(e,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);o.a=component.exports;l()(component,{VApp:v.a})}},[[255,12,1,13]]]);