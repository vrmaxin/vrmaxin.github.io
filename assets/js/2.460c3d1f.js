(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{272:function(t,e,l){},274:function(t,e,l){"use strict";var s=l(272);l.n(s).a},275:function(t,e,l){},276:function(t,e,l){"use strict";l.r(e);var s={props:["title"],data:function(){return{}},methods:{}},a=(l(274),l(1)),r=Object(a.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mltLive"}},[e("div",{staticClass:"box"},[e("header",[this._t("title")],2),this._v(" "),e("section",[this._t("default")],2)])])},[],!1,null,null,null);r.options.__file="List.vue";e.default=r.exports},278:function(t,e,l){"use strict";var s=l(275);l.n(s).a},292:function(t,e,l){"use strict";l.r(e);var s={components:{CommonList:l(276).default},data:function(){return{baseUrl:"mlt",songs:[{name:"Hallelujah",url:"hallelujah",score:"/score/Hallelujah_-_Pentatonix_A_Cappella.pdf",list:[{title:"【沐耳道】Hallelujah（Cover Pentonix）：中以友谊音乐会",desc:"",url:"Hallelujah_release.mp4",poster:"cover_Hallelujah_release.png"},{title:"【沐耳道】Hallelujah（Cover Pentonix）：中以友谊音乐会彩排",desc:"",url:"Hallelujah_beta.mp4",poster:"cover_Hallelujah_beta.png"}]},{name:"鼓舞",url:"gw",list:[{title:"【沐耳道】鼓舞（Cover 赞美之泉）：日常练习",desc:"",url:"鼓舞_alpha.mp4",poster:"cover_鼓舞_alpha.png"}]}]}},methods:{getUrl:function(t,e){return"/"+this.baseUrl+"/"+t+"/"+e}}},a=(l(278),l(1)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"mltLive"}},[l("div",{staticClass:"box"},t._l(t.songs,function(e,s){return l("section",{key:s},[l("CommonList",[l("template",{slot:"title"},[l("h2",[t._v(t._s(e.name)),e.score?l("a",{attrs:{href:"/pdf/web/viewer.html?file="+e.score}},[t._v("歌谱")]):t._e()])]),t._v(" "),t._l(e.list,function(s,a){return l("div",{staticClass:"item"},[l("video",{key:a,attrs:{poster:s.poster?"/"+t.baseUrl+"/"+e.url+"/"+s.poster:"",controls:"",src:t.getUrl(e.url,s.url)}}),t._v(" "),l("p",{staticClass:"title",attrs:{title:s.title}},[t._v(t._s(s.title))])])})],2)],1)}))])},[],!1,null,null,null);r.options.__file="Video.vue";e.default=r.exports}}]);