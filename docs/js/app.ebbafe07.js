(function(t){function e(e){for(var a,r,l=e[0],c=e[1],o=e[2],h=0,d=[];h<l.length;h++)r=l[h],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={1:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;n.push([9,0]),s()})({"4whY":function(t,e,s){},9:function(t,e,s){t.exports=s("Vtdi")},CzV1:function(t,e,s){"use strict";var a=s("4whY"),i=s.n(a);i.a},EMJC:function(t,e,s){"use strict";var a=s("txfn"),i=s.n(a);i.a},EQmY:function(t,e,s){},FVmc:function(t,e,s){"use strict";var a=s("N+NP"),i=s.n(a);i.a},LeIx:function(t,e,s){"use strict";var a=s("EQmY"),i=s.n(a);i.a},"N+NP":function(t,e,s){},Qv4F:function(t,e,s){"use strict";var a=s("rtCM"),i=s.n(a);i.a},Vtdi:function(t,e,s){"use strict";s.r(e);s("VRzm");var a=s("Kw5r"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("parallax"),s("router-view"),s("navigation")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("ul",[s("router-link",{attrs:{to:"/",tag:"li"}},[s("a")]),s("router-link",{attrs:{to:"/skills",tag:"li"}},[s("a")]),s("router-link",{attrs:{to:"/webdev",tag:"li"}},[s("a")]),s("router-link",{attrs:{to:"/design",tag:"li"}},[s("a")]),s("router-link",{attrs:{to:"/contact",tag:"li"}},[s("a")])],1)])},l=[],c={},o=c,u=(s("CzV1"),s("KHd+")),h=Object(u["a"])(o,r,l,!1,null,null,null),d=h.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parallax__container"},[s("div",{staticClass:"parallax__background",attrs:{"data-depth":"0.075"}}),s("div",{staticClass:"parallax__midground",attrs:{"data-depth":"0.2"}}),s("div",{staticClass:"parallax__foreground",attrs:{"data-depth":"0.4"}})])}],p=s("patp"),_=s.n(p),m={mounted:function(){if(window.screen.width>768){var t=document.querySelector(".parallax__container");new _.a(t,{relativeInput:!0,hoverOnly:!0})}}},g=m,w=(s("LeIx"),Object(u["a"])(g,f,v,!1,null,null,null)),b=w.exports,k=s("xmWZ"),C=s("qpph"),x=function(){function t(e,s){Object(k["a"])(this,t);this.callback=s,this.touches={touchstart:{x:-1,y:-1},touchmove:{x:-1,y:-1},touchend:!1,direction:"undetermined"},e.addEventListener("touchstart",this.touchHandler.bind(this),!1),e.addEventListener("touchmove",this.touchHandler.bind(this),!1),e.addEventListener("touchend",this.touchHandler.bind(this),!1)}return Object(C["a"])(t,[{key:"touchHandler",value:function(t){var e;if("undefined"!==typeof t&&"undefined"!==typeof t.touches)switch(e=t.touches[0],t.type){case"touchstart":case"touchmove":this.touches[t.type].x=e.pageX,this.touches[t.type].y=e.pageY;break;case"touchend":this.touches[t.type]=!0;var s=this.touches.touchstart.x-this.touches.touchmove.x,a=this.touches.touchstart.y-this.touches.touchmove.y;s<0&&(s/=-1),a<0&&(a/=-1),this.touches.direction=s>a?this.touches.touchstart.x<this.touches.touchmove.x?"right":"left":this.touches.touchstart.y<this.touches.touchmove.y?"down":"up",this.callback(t,this.touches.direction);break}}}]),t}(),y=x,E={components:{navigation:d,parallax:b},data:function(){return{page:1}},created:function(){this.$store.dispatch("getWorks")},mounted:function(){var t=this,e=document.querySelector("#app");e.addEventListener("wheel",function(s){t.scroller(e,null,s)});new y(e,function(s,a){switch(a){case"up":t.scroller(e,100);break;case"down":t.scroller(e,-100);break;case"left":break;case"right":break}})},methods:{scroller:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;0==t.classList.contains("scroll__active")&&(t.classList.add("scroll__active"),this.$router.push({path:this.pageName(s,e)}),setTimeout(function(){t.classList.remove("scroll__active")},400))},pageName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e||(e=t.deltaY),e>0?this.page++:this.page--,this.page<1)this.page=1;else if(this.page>5)this.page=5;else switch(!0){case 1==this.page:return"/";case 2==this.page:return"/skills";case 3==this.page:return"/webdev";case 4==this.page:return"/design";case 5==this.page:return"/contact";default:return"/"}}}},j=E,S=(s("Qv4F"),Object(u["a"])(j,i,n,!1,null,null,null)),O=S.exports,M=s("jE9Z"),F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"first-half about__text"},[s("h1",{staticClass:"headline headline__large"},[t._v("I'm Jonas Perez")]),s("p",{staticClass:"subhead"},[t._v("An aspiring web developer and designer looking to create things that make a difference.")])]),s("div",{staticClass:"about__picture second-half"},[s("div",{staticClass:"picture-1"}),s("div",{staticClass:"picture-2"})])])}],H={},L=H,z=(s("FVmc"),Object(u["a"])(L,F,V,!1,null,null,null)),P=z.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[t._m(0),s("div",{staticClass:"second-half skills__list copy"},[t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),s("div",{staticClass:"skills skill__7"},[s("div",[s("div",{staticClass:"skill__photoshop"},[s("svg",{staticStyle:{"enable-background":"new 0 0 17.469 17.469"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 17.469 17.469","xml:space":"preserve"}},[s("g",[s("g",[s("path",{staticStyle:{fill:"#FFF"},attrs:{d:"M5.925,4.982c-0.442,0-0.742,0.043-0.898,0.087v2.841C5.213,7.952,5.44,7.966,5.754,7.966\n                                        c1.157,0,1.871-0.585,1.871-1.571C7.624,5.511,7.01,4.982,5.925,4.982z"}}),s("path",{staticStyle:{fill:"#FFF"},attrs:{d:"M16.4,0.002H1.07C0.479,0.002,0,0.48,0,1.069v15.329c0,0.59,0.479,1.069,1.07,1.069H16.4\n                                        c0.59,0,1.069-0.479,1.069-1.069V1.07C17.469,0.48,16.99,0.002,16.4,0.002z M8.894,8.624c-0.741,0.7-1.842,1.014-3.125,1.014\n                                        c-0.287,0-0.543-0.014-0.743-0.043v3.442H2.869V3.541C3.54,3.428,4.482,3.342,5.811,3.342c1.341,0,2.299,0.256,2.94,0.771\n                                        c0.617,0.486,1.03,1.286,1.03,2.228S9.466,8.08,8.894,8.624z M12.145,13.179c-0.916,0-1.729-0.198-2.258-0.485l0.385-1.556\n                                        c0.4,0.241,1.229,0.527,1.873,0.527c0.655,0,0.927-0.228,0.927-0.586c0-0.356-0.214-0.527-1.027-0.799\n                                        c-1.442-0.485-2-1.271-1.986-2.099c0-1.298,1.114-2.286,2.842-2.286c0.814,0,1.542,0.187,1.97,0.4l-0.385,1.5\n                                        c-0.314-0.172-0.913-0.399-1.514-0.399c-0.527,0-0.826,0.214-0.826,0.571c0,0.328,0.269,0.499,1.126,0.8\n                                        c1.328,0.456,1.886,1.128,1.899,2.154C15.171,12.222,14.141,13.179,12.145,13.179z"}})])])])])]),s("p",[t._v("Adobe Photoshop")])]),s("div",{staticClass:"skills skill__8"},[s("div",{staticClass:"skill__illustrator"},[s("svg",{staticStyle:{"enable-background":"new 0 0 16.871 16.871"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 16.871 16.871","xml:space":"preserve"}},[s("g",[s("g",[s("path",{staticStyle:{fill:"#FFF"},attrs:{d:"M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429\n                                C7.128,6.919,6.975,6.283,6.847,5.772z"}}),s("path",{staticStyle:{fill:"#FFF"},attrs:{d:"M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805\n                                c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014\n                                l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914\n                                c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979\n                                C13.857,5.48,13.45,5.914,12.813,5.914z"}})])])])]),s("p",[t._v("Adobe Illustrator")])])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"first-half skills__text text-left"},[s("h1",{staticClass:"headline headline__large"},[t._v("What I do")]),s("p",{staticClass:"subhead"},[t._v("I specialize in web development, web design, responsive design, and SEO. My everyday goal is to deliver with the highest quality.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills skill__1"},[s("div",[s("i",{staticClass:"fab fa-html5"})]),s("p",[t._v("HTML")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills skill__2"},[s("div",[s("i",{staticClass:"fab fa-css3-alt"})]),s("p",[t._v("CSS/Bootstrap")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills skill__3"},[s("div",[s("i",{staticClass:"fab fa-js"})]),s("p",[t._v("Javascript/JQuery")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills skill__4"},[s("div",[s("i",{staticClass:"fab fa-vuejs"})]),s("p",[t._v("Vuejs/Nuxtjs")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills skill__5"},[s("div",[s("i",{staticClass:"fab fa-php"})]),s("p",[t._v("PHP/MySQL")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills skill__6"},[s("div",[s("i",{staticClass:"fas fa-search"})]),s("p",[t._v("SEO")])])}],N=(s("jtfl"),{}),T=Object(u["a"])(N,W,q,!1,null,null,null),I=T.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"first-half showcase__head"},[s("h1",{staticClass:"headline headline__small"},[t._v("Here are some of the websites I've made.")])]),s("div",{staticClass:"second-half showcase"},[s("div",{staticClass:"showcase__item"},[s("div",{staticClass:"showcase__text copy"},[s("h3",[t._v("Bolg")]),s("p",[t._v("Website similar to Medium.com where users can create blog posts and share their stories. Personal project.")]),s("a",{attrs:{href:"https://jonasbros.github.io/bolg",target:"_blank"}},[t._v("Visit site "),s("i",{staticClass:"fas fa-external-link-alt"})])])]),s("div"),s("div")])])}],B=(s("uN67"),{}),Q=Object(u["a"])(B,J,Y,!1,null,null,null),A=Q.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[t._m(0),s("div",{staticClass:"second-half carousel__container is-empty"},[s("div",{staticClass:"slider-for"},t._l(t.works,function(t,e){return s("div",{key:e,staticClass:"slider-item slider__item"},[s("img",{attrs:{src:t.images.standard_resolution.url,alt:""}})])})),s("div",{staticClass:"slider-nav"},t._l(t.works,function(t,e){return s("div",{key:e,staticClass:"slider-item slider__nav-item"},[s("img",{attrs:{src:t.images.low_resolution.url,alt:""}})])}))])])},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"first-half design__text"},[s("h1",{staticClass:"headline headline__large"},[t._v("Design work")]),s("p",{staticClass:"subhead"},[t._v("I also do logo design work, so if you want a new logo, we can talk about that too.")]),s("small",[s("a",{attrs:{href:"https://www.instagram.com/jonasbros00/",target:"_blank"}},[t._v("Check out my instagram for more.")])])])}],R=(s("rGqo"),s("yt8O"),s("RW0V"),s("vDqi")),Z=s.n(R),G={data:function(){return{isVisited:!1}},computed:{works:function(){return this.$store.getters.getWorks}},watch:{works:function(t){var e=this;setTimeout(function(){e.initSlick()},150)}},mounted:function(){Object.keys(this.works).length>0&&this.initSlick()},methods:{initSlick:function(){$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",centerMode:!0,focusOnSelect:!0}),document.querySelector(".carousel__container").classList.remove("is-empty"),this.isVisited=!0}}},U=G,X=(s("lM9r"),Object(u["a"])(U,D,K,!1,null,null,null)),tt=X.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"full-width text-center contact"},[s("h1",{staticClass:"headline headline__large"},[t._v("Let's get in touch")]),s("div",{staticClass:"link-container text-left"},[s("p",{staticClass:"subhead"},[s("i",{staticClass:"fas fa-envelope-square"}),t._v(" 00jonasperez@gmail.com")]),s("p",{staticClass:"subhead"},[s("i",{staticClass:"fab fa-twitter-square"}),t._v(" "),s("a",{attrs:{href:"https://twitter.com/__jonasbros",target:"_blank"}},[t._v("Twitter")])]),s("p",{staticClass:"subhead"},[s("i",{staticClass:"fab fa-instagram"}),t._v(" "),s("a",{attrs:{href:"https://www.instagram.com/jonasbros00/",target:"_blank"}},[t._v("Instagram")])])])])])}],at=(s("EMJC"),{}),it=Object(u["a"])(at,et,st,!1,null,null,null),nt=it.exports;a["a"].use(M["a"]);var rt=new M["a"]({routes:[{path:"/",name:"about",component:P},{path:"/skills",name:"skills",component:I},{path:"/webdev",name:"webdev",component:A},{path:"/design",name:"design",component:tt},{path:"/contact",name:"contact",component:nt}]}),lt=s("L2JU");a["a"].use(lt["a"]);var ct=new lt["a"].Store({state:{works:[]},mutations:{setWork:function(t,e){t.works=e}},actions:{getWorks:function(t){Z.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=3432270165.9d39885.a02424bcdaee4b02a866d8afa82febfb").then(function(e){t.commit("setWork",e.data.data)}).catch(function(t){console.log(t)})}},getters:{getWorks:function(t){return t.works}}});a["a"].config.productionTip=!1,new a["a"]({router:rt,store:ct,render:function(t){return t(O)}}).$mount("#app")},iYpW:function(t,e,s){},jtfl:function(t,e,s){"use strict";var a=s("iYpW"),i=s.n(a);i.a},lM9r:function(t,e,s){"use strict";var a=s("oBqE"),i=s.n(a);i.a},oBqE:function(t,e,s){},pdk7:function(t,e,s){},rtCM:function(t,e,s){},txfn:function(t,e,s){},uN67:function(t,e,s){"use strict";var a=s("pdk7"),i=s.n(a);i.a}});
//# sourceMappingURL=app.ebbafe07.js.map