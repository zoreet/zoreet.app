(function(t){function e(e){for(var s,o,r=e[0],d=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],n[o]&&h.push(n[o][0]),n[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var d=a[r];0!==n[d]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0233":function(t,e,a){"use strict";var s=a("8bfd"),n=a.n(s);n.a},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},1772:function(t,e,a){"use strict";var s=a("2426"),n=a.n(s);n.a},"21c7":function(t,e,a){"use strict";var s=a("3b21"),n=a.n(s);n.a},2426:function(t,e,a){},"3b21":function(t,e,a){},4211:function(t,e,a){},"446d":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("673e"),a("a481");var s=a("e814"),n=a.n(s),i=a("f499"),o=a.n(i),r=(a("cadf"),a("551c"),a("f751"),a("097d"),a("ba4c")),d=a.n(r),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{editingTask:t.editingTask},attrs:{id:"app"}},[a("router-view"),a("navbar"),t.showInstallMessage?a("div",{staticClass:"installMessage"},[a("img",{staticClass:"icon",attrs:{src:"/img/icon.svg",width:"60"}}),t._m(0),t._m(1)]):t._e()],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("strong",[t._v("Install this webapp on your iPhone")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[t._v("\n      Tap\n      "),a("img",{staticClass:"share-icon",attrs:{src:"/img/share-ios.svg",width:"20"}}),t._v(" and then\n      "),a("img",{staticClass:"add-icon",attrs:{src:"/img/add-to-homescreen.svg",width:"22"}}),t._v("\n      Add to Home Screen\n    ")])}],u=a("b0af"),h=a("c1df"),f=a.n(h),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Tasks")]),a("router-link",{staticClass:"link",attrs:{to:"/report"}},[t._v("Reports")]),a("router-link",{staticClass:"link",attrs:{to:"/settings"}},[t._v("Settings")])],1)},m=[],p={name:"Navbar",props:{},components:{},data:function(){return{}},mounted:function(){},methods:{gotoToday:function(){this.$store.dispatch("gotoDay",{today:!0})}}},g=p,k=(a("9c50"),a("2877")),y=Object(k["a"])(g,v,m,!1,null,"ef94601a",null),b=y.exports,D={name:"app",data:function(){return{isStandalone:"standalone"in window.navigator&&window.navigator.standalone,showInstallMessage:!1}},components:{navbar:b},computed:{editingTask:function(){return this.$store.state.editingTask}},beforeMount:function(){this.$store.dispatch("checkLogin")},mounted:function(){document.addEventListener("touchmove",function(t){t.target==document.body&&t.preventDefault()},{passive:!1});var t=function(){var t=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)};t()&&!this.isStandalone&&(this.showInstallMessage=!0)},methods:{}},C=D,j=(a("034f"),Object(k["a"])(C,c,l,!1,null,null,null)),w=j.exports,_=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{editingTask:t.editingTask},attrs:{id:"tasks"}},[a("alert",{staticStyle:{display:"none"},attrs:{id:"refresh",type:"info",action:t.refresh}},[a("strong",[t._v("A new version is available.")]),a("p",[t._v("Press here to get the latest changes")])]),t.errorMessage?a("alert",{attrs:{type:"error",action:t.login}},[a("strong",[t._v("There was an error connecting to the server")]),a("p",[t._v("Press here to log in again and fix the error")])]):t._e(),a("div",{staticClass:"windows"},t._l(t.days,function(e){return a("div",{key:e.id,staticClass:"window",class:{"window--past":e.id-t.currentDayId<0,"window--future":e.id-t.currentDayId>0,"window--current":e.id==t.currentDayId}},[a("day",{attrs:{id:"editor",dayId:e.id}})],1)}),0),a("panel",{attrs:{id:"calendar",title:"Pick a date"}},[a("month",{attrs:{action:t.gotoDay,date:t.currentDayId}}),a("div",{staticClass:"buttons"},[a("btn",{attrs:{role:"secondary"},on:{action:t.gotoToday}},[t._v("Today")])],1)],1)],1)},Y=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert",class:{error:"error"==t.type,info:"info"==t.type},on:{click:function(e){return e.preventDefault(),t.action(e)}}},[t._t("default")],2)},S=[],L={name:"Alert",props:{action:Function,type:String},components:{},data:function(){return{}},mounted:function(){},methods:{}},x=L,$=(a("8b27"),Object(k["a"])(x,T,S,!1,null,"c2e75e28",null)),I=$.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button",class:{secondary:"secondary"==t.role},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.action(e)}}},[t._t("default")],2)},P=[],O={name:"Button",props:{role:String},data:function(){return{}},mounted:function(){},methods:{action:function(){this.$emit("action")}}},z=O,R=(a("f37f"),Object(k["a"])(z,E,P,!1,null,"6ebce058",null)),A=R.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"day",class:{isLoading:t.isLoading},attrs:{id:t.id}},[a("div",{staticClass:"header"},[a("div",{staticClass:"header__copy"},[a("div",{staticClass:"subtitle",on:{click:function(e){return e.preventDefault(),t.showPanel("calendar")}}},[t._v("\n        "+t._s(t.dateSubtitle)+"\n        "),t.isToday?a("span",[t._v("- Today")]):t._e()]),a("h3",{staticClass:"title",on:{click:function(e){return e.preventDefault(),t.showPanel("calendar")}}},[t._v(t._s(t.dateTitle))])]),a("a",{staticClass:"header__add-task",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addFirstEmptyTask(e)}}},[t._v("+")]),a("a",{staticClass:"calendar",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showPanel("calendar")}}},[a("svg",{attrs:{width:"24px",height:"25px",viewBox:"0 0 30 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{id:"calendar",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M6,2 C6.27614237,2 6.5,2.22385763 6.5,2.5 C6.5,2.77614237 6.27614237,3 6,3 L4,3 C2.34314575,3 1,4.34314575 1,6 L1,28 C1,29.6568542 2.34314575,31 4,31 L26,31 C27.6568542,31 29,29.6568542 29,28 L29,6 C29,4.34314575 27.6568542,3 26,3 L24,3 C23.7238576,3 23.5,2.77614237 23.5,2.5 C23.5,2.22385763 23.7238576,2 24,2 L26,2 C28.209139,2 30,3.790861 30,6 L30,28 C30,30.209139 28.209139,32 26,32 L4,32 C1.790861,32 2.705415e-16,30.209139 0,28 L0,6 C-2.705415e-16,3.790861 1.790861,2 4,2 L6,2 Z",id:"Path",fill:"#000000","fill-rule":"nonzero"}}),a("rect",{attrs:{id:"Rectangle",fill:"#000000",x:"1",y:"12",width:"28",height:"1"}}),a("path",{attrs:{d:"M19,2 C19.2761424,2 19.5,2.22385763 19.5,2.5 C19.5,2.77614237 19.2761424,3 19,3 L11,3 C10.7238576,3 10.5,2.77614237 10.5,2.5 C10.5,2.22385763 10.7238576,2 11,2 L19,2 Z",id:"Path",fill:"#000000"}}),a("path",{attrs:{d:"M9,5.05000906 C10.1411202,5.28164422 11,6.29052104 11,7.5 C11,8.88071187 9.88071187,10 8.5,10 C7.11928813,10 6,8.88071187 6,7.5 C6,6.29052104 6.85887984,5.28164422 8,5.05000906 L8,0.5 C8,0.223857625 8.22385763,0 8.5,0 C8.77614237,0 9,0.223857625 9,0.5 L9,5.05000906 Z M8.5,9 C9.32842712,9 10,8.32842712 10,7.5 C10,6.67157288 9.32842712,6 8.5,6 C7.67157288,6 7,6.67157288 7,7.5 C7,8.32842712 7.67157288,9 8.5,9 Z",id:"Combined-Shape",fill:"#000000"}}),a("path",{attrs:{d:"M22,5.05000906 C23.1411202,5.28164422 24,6.29052104 24,7.5 C24,8.88071187 22.8807119,10 21.5,10 C20.1192881,10 19,8.88071187 19,7.5 C19,6.29052104 19.8588798,5.28164422 21,5.05000906 L21,0.5 C21,0.223857625 21.2238576,0 21.5,0 C21.7761424,0 22,0.223857625 22,0.5 L22,5.05000906 Z M21.5,9 C22.3284271,9 23,8.32842712 23,7.5 C23,6.67157288 22.3284271,6 21.5,6 C20.6715729,6 20,6.67157288 20,7.5 C20,8.32842712 20.6715729,9 21.5,9 Z",id:"Combined-Shape-Copy",fill:"#000000"}})])])])]),0==this.tasks.length?a("div",{staticClass:"empty-state content"},[a("div",[a("h3",{staticClass:"empty-state__title"},[t._v("Start planning your day")]),a("p",{staticClass:"empty-state__subtitle"},[t._v("You don't have any tasks added for this day")]),a("div",[a("btn",{on:{action:t.addFirstEmptyTask}},[t._v("Add first task")])],1)])]):a("draggable",{staticClass:"content",attrs:{delay:"200",options:{disabled:t.editingTask}},on:{end:[function(e){return e.preventDefault(),t.onDragEnd(e)},function(e){t.drag=!1}],start:function(e){t.drag=!0}},model:{value:t.tasks,callback:function(e){t.tasks=e},expression:"tasks"}},[a("transition-group",{attrs:{name:t.drag?null:"reorder-list"}},t._l(t.tasks,function(e){return a("task",{key:e.id,attrs:{task:e,important:t.isPast&&1==e.done||!t.isPast&&0==e.done,autofocus:e.id==t.focusedTask},on:{"update:task":function(t){e=t},addEmptyTaskAfter:t.addEmptyTaskAfter,updateTask:t.updateTask,removeTask:t.removeTask}})}),1)],1)],1)},B=[],Z=a("0a0d"),N=a.n(Z),F=(a("55dd"),a("28a5"),a("bc3a")),q=a.n(F),H=a("1980"),J=a.n(H),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task",class:{active:t.task.done,focused:t.autofocus,important:t.important,disabled:t.disabled}},[t.enabled?a("div",{staticClass:"checkbox",on:{click:t.toggleTask}}):a("div",{staticClass:"checkbox"}),a("div",{staticClass:"content"},[t.enabled?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.task.title},on:{change:t.updateHeight,keydown:[t.updateHeight,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"backspace",void 0,e.key,void 0)?null:t.removeTask(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.doneEditWithEnter(e))}],blur:t.doneEdit,focus:t.editTask,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)?null:t.cancelEdit(e)},paste:t.paste,input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}}):t._e(),a("div",{staticClass:"input-shadow"},[t._v(t._s(t.task.title))]),t.label?a("div",{staticClass:"label"},[t._v(t._s(t.label))]):t._e()])])},G=[],U={name:"Task",props:{task:Object,dayId:String,autofocus:Boolean,disabled:Boolean,important:Boolean},data:function(){return{beforeEditCache:"",input:null,inputShadow:null,isRemoved:!1}},computed:{enabled:function(){return!this.disabled},label:function(){var t=f()();if(this.task.date){var e=f()(this.task.date,"YYYYMMDD");return e.isSame(t,"year")?e.format("dddd, D MMMM"):e.format("dddd, D MMMM YYYY")}return null}},mounted:function(){var t=this;this.input=this.$el.querySelector(".input"),this.inputShadow=this.$el.querySelector(".input-shadow"),this.enabled&&this.updateHeight(),this.autofocus&&this.$nextTick(function(){t.input.focus(),t.input.setSelectionRange(t.input.value.length,t.input.value.length)})},methods:{editTask:function(){this.beforeEditCache=this.task.title,this.$store.commit("editingTask",!0)},doneEdit:function(){this.$store.commit("editingTask",!1),this.isRemoved||(this.task.title=this.task.title.trim(),this.task.title!==this.beforeEditCache&&this.$emit("updateTask",this.task),this.beforeEditCache="")},doneEditWithEnter:function(){this.doneEdit(),this.$emit("addEmptyTaskAfter",this.task)},cancelEdit:function(){this.task.title=this.beforeEditCache,this.input.blur()},removeTask:function(t){var e=this;0==this.task.title.length&&(t.preventDefault(),this.isRemoved=!0,setTimeout(function(){e.$emit("removeTask",e.task)},50))},toggleTask:function(){this.task.done=!this.task.done,this.$emit("updateTask",this.task)},updateHeight:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.input.style.height=t.inputShadow.offsetHeight+"px"},10)})},paste:function(){var t=this;setTimeout(function(){t.updateHeight()},50)}},watch:{autofocus:function(){this.input.focus(),this.input.setSelectionRange(this.input.value.length,this.input.value.length)}}},X=U,K=(a("6266"),Object(k["a"])(X,V,G,!1,null,"c1de10a6",null)),Q=K.exports,tt={name:"Day",props:{dayId:String,id:String},components:{btn:A,draggable:J.a,task:Q},data:function(){return{date:f()(this.dayId,"YYYYMMDD"),drag:!1,focusedTask:-1,isLoading:!0,tasks:[]}},computed:{isVisible:function(){return this.date.isSame(this.$store.state.currentDay,"day")},isPast:function(){return this.date.isBefore(this.$store.state.today,"day")},isToday:function(){return this.date.isSame(this.$store.state.today,"day")},isFuture:function(){return this.date.isAfter(this.$store.state.today,"day")},dateTitle:function(){var t=f()();return t.year()==this.date.year()?this.date.format("DD MMMM"):this.date.format("DD MMM Y")},dateSubtitle:function(){return this.date.format("dddd")},editingTask:function(){return this.$store.state.editingTask}},mounted:function(){var t=this;this.isVisible&&this.loadTasks(),this.$store.subscribe(function(e){switch(e.type){case"gotoDay":t.isVisible&&t.loadTasks();break}})},methods:{loadTasks:function(){var t=this;this.isLoading=!0,navigator.onLine&&q.a.get("https://api.zoreet.com/days/"+this.dayId,{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(function(e){var a=e.data.day.tasks;t.isLoading=!1,t.$store.commit("errorMessage","");try{t.tasks=JSON.parse(a)}catch(s){t.tasks=a.replace(/<br>/g,"").replace(/<div class="\s*[a-z]*\s*">\s*<\/div>/g,"").split("</div>").filter(function(t){return t.length}).map(function(e,a){var s=-1!==e.indexOf('<div class="active">'),i=e.trim().replace(/(<([^>]+)>)/gi,""),o=n()(t.date)+a;return{id:o,title:i,done:s}}).filter(function(t){return t.title.length})}t.sortTasks()}).catch(function(e){var a=e.response.data.error.message;t.$store.commit("errorMessage",a)})},saveTasks:function(){var t=this;navigator.onLine&&(this.sortTasks(),q.a.post("https://api.zoreet.com/days/"+this.dayId,{tasks:o()(this.tasks)},{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(function(){t.$store.commit("errorMessage","")}).catch(function(e){var a=e.response.data.error.message;t.$store.commit("errorMessage",a)}))},sortTasks:function(){this.isPast?this.tasks=this.tasks.sort(function(t,e){return t.done&&!e.done?-1:0}):this.tasks=this.tasks.sort(function(t,e){return e.done&&!t.done?-1:0})},onDragEnd:function(t){var e=t.newIndex,a=this.tasks[e],s=this.tasks[e-1],n=this.tasks[e+1];s&&n&&s.done==n.done&&s.done!==a.done&&(a.done=s.done),this.isPast?0==e&&0==a.done&&1==n.done?a.done=!0:e==this.tasks.length-1&&1==a.done&&0==s.done&&(a.done=!1):0==e&&1==a.done&&0==n.done?a.done=!1:e==this.tasks.length-1&&0==a.done&&1==s.done&&(a.done=!0),this.saveTasks()},addEmptyTaskAfter:function(t){var e=this.findTaskById(t.id),a={id:N()(),title:"",done:t.done};this.tasks.splice(e+1,0,a),this.$nextTick(function(){this.focusedTask=a.id})},addFirstEmptyTask:function(){var t={id:N()(),title:"",done:!1};this.tasks.unshift(t),this.$nextTick(function(){this.focusedTask=t.id})},updateTask:function(t){var e=this.findTaskById(t.id);this.tasks[e]=t,this.saveTasks()},findTaskById:function(t){for(var e=0;e<this.tasks.length;e++)if(this.tasks[e].id===t)return e},removeTask:function(t){var e=this;if(void 0==t.id)return!1;var a=this.findTaskById(t.id);this.tasks.splice(a,1),this.saveTasks(),this.$nextTick(function(){a?e.focusedTask=e.tasks[a-1].id:e.tasks.length&&(e.focusedTask,e.tasks[0].id)})},showPanel:function(t){this.$store.commit("changePanel",t)}}},et=tt,at=(a("8d9e"),Object(k["a"])(et,W,B,!1,null,"092043a5",null)),st=at.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"month"},[a("div",{staticClass:"header"},[a("div",{staticClass:"pagination",on:{click:t.prevMonth}}),a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"pagination",on:{click:t.nextMonth}})]),t._m(0),t.rangeMode?a("div",{staticClass:"days"},t._l(t.days,function(e){return a("div",{key:e.id,staticClass:"day",class:{startRange:e.date==t.selectedRange.startDate,endRange:e.date==t.selectedRange.endDate,range:e.date>t.selectedRange.startDate&&e.date<t.selectedRange.endDate,today:e.date==t.todayId,disabled:t.selectedRange.startDate&&!t.selectedRange.endDate&&e.date<=t.selectedRange.startDate}},[e.id>0?a("span",{staticClass:"day--label",on:{click:function(a){return t.changeDate(e.date)}}},[t._v(t._s(e.id))]):t._e()])}),0):a("div",{staticClass:"days"},t._l(t.days,function(e){return a("div",{key:e.id,staticClass:"day",class:{active:e.date==t.currentDateId,today:e.date==t.todayId}},[e.id>0?a("span",{staticClass:"day--label",on:{click:function(a){return t.changeDate(e.date)}}},[t._v(t._s(e.id))]):t._e()])}),0)])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"days weekdays"},[a("div",{staticClass:"day"},[t._v("M")]),a("div",{staticClass:"day"},[t._v("T")]),a("div",{staticClass:"day"},[t._v("W")]),a("div",{staticClass:"day"},[t._v("T")]),a("div",{staticClass:"day"},[t._v("F")]),a("div",{staticClass:"day"},[t._v("S")]),a("div",{staticClass:"day"},[t._v("S")])])}],ot=(a("ac6a"),a("75fc")),rt={name:"Month",props:{action:Function,date:String,mode:String,range:Object},data:function(){return{rangeMode:!1,days:[],visibleMonthId:null,selectedRange:this.range}},computed:{currentDateId:function(){return this.rangeMode?null:n()(this.date)||f()().format("YYYYMMDD")},visibleMonth:{get:function(){return f()(this.visibleMonthId,"YYYYMMDD")},set:function(t){this.visibleMonthId=t.format("YYYYMMDD")}},todayId:function(){return f()().format("YYYYMMDD")},lastDay:function(){var t=this.visibleMonth.endOf("month").format("DD");return t=n()(t),t||null},title:function(){return this.visibleMonth.format("MMMM YYYY")}},created:function(){this.rangeMode="range"==this.mode,this.rangeMode?(this.range.starDate=this.range.starDate||this.todayId,this.range.endDate=this.range.endDate||this.todayId,this.visibleMonthId=this.range.starDate):this.visibleMonthId=this.currentDateId,this.generateData()},methods:{generateData:function(){var t=this.visibleMonth,e=Object(ot["a"])(Array(this.lastDay).keys());this.days=e.map(function(e){return{id:e+1,date:t.set("date",e+1).format("YYYYMMDD")}});for(var a=f()(this.days[0].date).startOf("month").isoWeekday()-1;a>0;a--)this.days.unshift({id:0-a,date:null})},changeDate:function(t){this.rangeMode?this.selectedRange.startDate?this.selectedRange.endDate?(this.selectedRange.startDate=t,this.selectedRange.endDate=null):(this.selectedRange.endDate=t,this.action({startDate:this.selectedRange.startDate,endDate:this.selectedRange.endDate})):this.selectedRange.startDate=t:this.action(t)},prevMonth:function(){this.visibleMonth=this.visibleMonth.subtract(1,"months"),this.generateData()},nextMonth:function(){this.visibleMonth=this.visibleMonth.add(1,"months"),this.generateData()}},watch:{range:function(t){this.selectedRange=t}}},dt=rt,ct=(a("1772"),Object(k["a"])(dt,nt,it,!1,null,"38030ff5",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel",class:{active:t.active},attrs:{id:t.id}},[a("div",{staticClass:"header"},[a("h3",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.closePanel(e)}}},[t._v("Close")])]),a("div",{staticClass:"content"},[t._t("default")],2)])},ht=[],ft={name:"Panel",props:{id:String,title:String},components:{},data:function(){return{}},computed:{active:function(){return this.$store.state.activePanel==this.id}},mounted:function(){},methods:{closePanel:function(){this.$store.commit("changePanel","")}}},vt=ft,mt=(a("0233"),Object(k["a"])(vt,ut,ht,!1,null,"f24ee39c",null)),pt=mt.exports,gt=(a("cad3"),{name:"app",data:function(){return{swipe:null,user:{},webAuth:null,isStandalone:localStorage.getItem("isStandalone"),loggedIn:!1}},components:{alert:I,btn:A,day:st,month:lt,panel:pt},computed:{days:function(){return this.$store.state.days},currentDayId:function(){return this.$store.state.currentDay.format("YYYYMMDD")},activePanel:function(){return this.$store.state.activePanel},errorMessage:function(){return this.$store.state.errorMessage},editingTask:function(){return this.$store.state.editingTask}},mounted:function(){var t=this;this.$store.commit("addDay",this.currentDayId);var e=f()(this.currentDayId).subtract(1,"days").format("YYYYMMDD");this.$store.commit("addDay",e);var a=f()(this.currentDayId).add(1,"days").format("YYYYMMDD");this.$store.commit("addDay",a),document.querySelector(".windows").addEventListener("swipeLeft",function(){t.activePanel||t.gotoNextDay()}),document.querySelector(".windows").addEventListener("swipeRight",function(){t.activePanel||t.gotoPrevDay()})},methods:{gotoPrevDay:function(){this.$store.dispatch("gotoDay",{step:-1})},gotoNextDay:function(){this.$store.dispatch("gotoDay",{step:1})},gotoToday:function(){this.$store.dispatch("gotoDay",{today:!0})},gotoDay:function(t){this.$store.dispatch("gotoDay",{id:t})},swipeHandler:function(t,e){"textarea"!==e.target.type&&("left"==t?this.gotoNextDay():"right"==t&&this.gotoPrevDay())},refresh:function(){window.location.reload(!0)},login:function(){}}}),kt=gt,yt=(a("21c7"),Object(k["a"])(kt,M,Y,!1,null,null,null)),bt=yt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"report"}},[a("div",{staticClass:"day",class:{isLoading:t.isLoading}},[a("div",{staticClass:"header"},[a("div",{staticClass:"header__copy"},[a("div",{staticClass:"subtitle",on:{click:function(e){return e.preventDefault(),t.showPanel("calendar")}}},[t.tasks.length?a("span",[t._v(t._s(t.doneTasks.length))]):t._e(),t._v("\n          Tasks completed\n        ")]),a("h3",{staticClass:"title",on:{click:function(e){return e.preventDefault(),t.showPanel("calendar")}}},[t._v(t._s(t.title))])]),a("a",{staticClass:"calendar",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showPanel("calendar")}}},[a("svg",{attrs:{width:"24px",height:"25px",viewBox:"0 0 30 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{id:"calendar",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M6,2 C6.27614237,2 6.5,2.22385763 6.5,2.5 C6.5,2.77614237 6.27614237,3 6,3 L4,3 C2.34314575,3 1,4.34314575 1,6 L1,28 C1,29.6568542 2.34314575,31 4,31 L26,31 C27.6568542,31 29,29.6568542 29,28 L29,6 C29,4.34314575 27.6568542,3 26,3 L24,3 C23.7238576,3 23.5,2.77614237 23.5,2.5 C23.5,2.22385763 23.7238576,2 24,2 L26,2 C28.209139,2 30,3.790861 30,6 L30,28 C30,30.209139 28.209139,32 26,32 L4,32 C1.790861,32 2.705415e-16,30.209139 0,28 L0,6 C-2.705415e-16,3.790861 1.790861,2 4,2 L6,2 Z",id:"Path",fill:"#000000","fill-rule":"nonzero"}}),a("rect",{attrs:{id:"Rectangle",fill:"#000000",x:"1",y:"12",width:"28",height:"1"}}),a("path",{attrs:{d:"M19,2 C19.2761424,2 19.5,2.22385763 19.5,2.5 C19.5,2.77614237 19.2761424,3 19,3 L11,3 C10.7238576,3 10.5,2.77614237 10.5,2.5 C10.5,2.22385763 10.7238576,2 11,2 L19,2 Z",id:"Path",fill:"#000000"}}),a("path",{attrs:{d:"M9,5.05000906 C10.1411202,5.28164422 11,6.29052104 11,7.5 C11,8.88071187 9.88071187,10 8.5,10 C7.11928813,10 6,8.88071187 6,7.5 C6,6.29052104 6.85887984,5.28164422 8,5.05000906 L8,0.5 C8,0.223857625 8.22385763,0 8.5,0 C8.77614237,0 9,0.223857625 9,0.5 L9,5.05000906 Z M8.5,9 C9.32842712,9 10,8.32842712 10,7.5 C10,6.67157288 9.32842712,6 8.5,6 C7.67157288,6 7,6.67157288 7,7.5 C7,8.32842712 7.67157288,9 8.5,9 Z",id:"Combined-Shape",fill:"#000000"}}),a("path",{attrs:{d:"M22,5.05000906 C23.1411202,5.28164422 24,6.29052104 24,7.5 C24,8.88071187 22.8807119,10 21.5,10 C20.1192881,10 19,8.88071187 19,7.5 C19,6.29052104 19.8588798,5.28164422 21,5.05000906 L21,0.5 C21,0.223857625 21.2238576,0 21.5,0 C21.7761424,0 22,0.223857625 22,0.5 L22,5.05000906 Z M21.5,9 C22.3284271,9 23,8.32842712 23,7.5 C23,6.67157288 22.3284271,6 21.5,6 C20.6715729,6 20,6.67157288 20,7.5 C20,8.32842712 20.6715729,9 21.5,9 Z",id:"Combined-Shape-Copy",fill:"#000000"}})])])])]),0==this.doneTasks.length?a("div",{staticClass:"empty-state content"},[t._m(0)]):a("div",{staticClass:"content"},t._l(t.doneTasks,function(t){return a("task",{attrs:{task:t,important:!0,disabled:!0},on:{"update:task":function(e){t=e}}})}),1)]),a("panel",{attrs:{id:"calendar",title:"Generate report for"}},[a("month",{attrs:{mode:"range",action:t.rangeSelected,range:{startDate:t.startDate,endDate:t.endDate}}}),a("div",{staticClass:"buttons"},[a("btn",{on:{action:t.gotoLastWeek}},[t._v("Last Week")]),a("btn",{on:{action:t.gotoThisWeek}},[t._v("This Week")]),"auth0|5be5dd454aecba31291994c4"==t.user.sub?a("btn",{on:{action:t.gotoAll}},[t._v("So Far")]):t._e()],1)],1)],1)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"empty-state__title"},[t._v("Nothing found")]),a("p",{staticClass:"empty-state__subtitle"},[t._v("You don't have any tasks for this dates")])])}],jt={name:"Report",components:{btn:A,month:lt,panel:pt,task:Q},data:function(){return{attrs:{key:"today",highlight:{backgroundColor:"#ff8080"}},date:f()(this.dayId,"YYYYMMDD"),days:[],startDate:null,isLoading:!0,tasks:[],endDate:null,title:null}},computed:{user:function(){return this.$store.state.user},doneTasks:function(){return this.tasks.filter(function(t){return t.done})}},beforeMount:function(){var t=f()().isoWeekday();t<=2?this.gotoLastWeek():this.gotoThisWeek()},methods:{rangeSelected:function(t){this.startDate=t.startDate,this.endDate=t.endDate,this.showPanel(""),this.getTasks();var e=f()(t.startDate,"YYYYMMDD"),a=f()(t.endDate,"YYYYMMDD"),s=f()(),n="D",i="D MMM";!e.isSame(a,"month")&&e.isSame(a,"year")&&(n+=" MMM"),e.isSame(a,"year")?e.isSame(s,"year")||(i+=" 'YY"):(n+=" 'YY",i+=" 'YY"),this.title=e.format(n)+" - "+a.format(i)},gotoLastWeek:function(){this.title="Last Week";var t=f()().subtract(7,"days");this.startDate=t.isoWeekday(1).format("YYYYMMDD"),this.endDate=t.isoWeekday(7).format("YYYYMMDD"),this.showPanel(""),this.getTasks()},gotoThisWeek:function(){this.title="This Week",this.startDate=f()().isoWeekday(1).format("YYYYMMDD"),this.endDate=f()().isoWeekday(7).format("YYYYMMDD"),this.showPanel(""),this.getTasks()},gotoAll:function(){this.title="So Far",this.startDate=f()("20161128").format("YYYYMMDD"),this.endDate=f()().format("YYYYMMDD"),this.showPanel(""),this.getTasks()},showPanel:function(t){this.$store.commit("changePanel",t)},getTasks:function(){var t=this;this.isLoading=!0,this.days=[],this.tasks=[],navigator.onLine&&q.a.get("https://api.zoreet.com/reports/"+this.startDate+"/"+this.endDate,{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(function(e){t.days=e.data.days,t.days.sort(function(t,e){var a=n()(t.date),s=n()(e.date);return a<s?-1:0}),t.days.forEach(function(t){var e=t.tasks;try{var a=JSON.parse(e);t.tasks=a}catch(s){t.tasks=e.replace(/<br>/g,"").replace(/<div class="\s*[a-z]*\s*">\s*<\/div>/g,"").split("</div>").filter(function(t){return t.length}).map(function(e,a){var s=-1!==e.indexOf('<div class="active">'),i=e.trim().replace(/(<([^>]+)>)/gi,""),o=n()(t.date)+a;return{id:o,title:i,done:s}}).filter(function(t){return t.title.length})}}),t.days.forEach(function(e){e.tasks.forEach(function(a){t.tasks.push({id:a.id,title:a.title,done:a.done,date:e.date})})}),t.isLoading=!1,t.error=""}).catch(function(e){var a=e.response.data.error.message;t.error=a})}}},wt=jt,_t=(a("ffbf"),Object(k["a"])(wt,Dt,Ct,!1,null,"b448d982",null)),Mt=_t.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"settings"}},[t._m(0),a("div",{staticClass:"content"},[a("div",[a("h4",[t._v("Logged in as")]),a("div",{attrs:{id:"user--email"}},[t._v(t._s(t.user.email))]),a("btn",{on:{action:t.logout}},[t._v("Log out")])],1),a("div",{staticClass:"version"},[t._v("\n      You're using version\n      "),a("strong",[t._v("v3.1.3")]),t._v(" of zoreet.com\n      "),a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.refresh(e)}}},[t._v("force update")])])])])},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h3",{staticClass:"title"},[t._v("Settings")])])}],St={name:"Settings",components:{btn:A},data:function(){return{}},computed:{user:function(){return this.$store.state.user}},methods:{logout:function(){this.$store.dispatch("logout")},refresh:function(){window.location.reload(!0)}}},Lt=St,xt=(a("e1e4"),Object(k["a"])(Lt,Yt,Tt,!1,null,"29e780fe",null)),$t=xt.exports;d.a.use(_["a"]);var It=new _["a"]({routes:[{path:"/",component:bt},{path:"/report",component:Mt},{path:"/settings",component:$t}]}),Et=a("2f62");d.a.config.productionTip=!1,d.a.use(Et["a"]),window.onfocus=function(){var t=f()();zt.state.today.format("YYYYMMDD")!==t.format("YYYYMMDD")&&zt.commit("newToday",t),zt.state.today.format("YYYYMMDD")!==zt.state.currentDay.format("YYYYMMDD")&&zt.dispatch("gotoDay",{today:!0})},localStorage.removeItem("currentDayId");var Pt=f()().format("YYYYMMDD"),Ot=JSON.parse(localStorage.getItem("lastViewedDay"));Ot&&Ot.when&&Ot.id&&Ot.when==Pt&&(Pt=Ot.id);var zt=new Et["a"].Store({state:{today:f()(),currentDay:f()(Pt,"YYYYMMDD"),days:{},activePanel:"",errorMessage:"",editingTask:!1,token:null,user:null,webAuth:new u["a"].WebAuth({domain:"todayapp.eu.auth0.com",clientID:"Zz9d2EICFe1981TC5Ym7dfva9Y1jECmP",responseType:"token id_token",scope:"openid email profile",redirectUri:window.location.origin+"/",audience:"todayapp"})},mutations:{addDay:function(t,e){if(e&&!t.days[e]){var a=f()(e),s=[];a.isValid()&&d.a.set(t.days,a.format("YYYYMMDD"),{id:e,tasks:s})}},newToday:function(t,e){t.today="",t.today=e},gotoDay:function(t,e){var a=o()({id:e,when:t.today.format("YYYYMMDD")});t.currentDay="",t.currentDay=f()(e),localStorage.setItem("lastViewedDay",a)},changePanel:function(t,e){this.state.activePanel=e},token:function(t,e){t.token=e},user:function(t,e){t.user=e},errorMessage:function(t,e){t.errorMessage=e},editingTask:function(t,e){t.editingTask=e}},actions:{gotoDay:function(t,e){var a,s=t.state.currentDay.format("YYYYMMDD");if(e.step){var n=t.state.currentDay;n.add(e.step,"days"),a=n.format("YYYYMMDD")}else e.today?a=t.state.today.format("YYYYMMDD"):e.id&&(a=e.id);a!==s&&(t.state.days[a]?t.commit("gotoDay",a):(t.commit("addDay",a),t.commit("gotoDay",a)));var i=f()(a).subtract(1,"days").format("YYYYMMDD");t.state[i]||t.commit("addDay",i);var o=f()(a).add(1,"days").format("YYYYMMDD");t.state[o]||t.commit("addDay",o),this.state.activePanel=""},checkLogin:function(t){if(window.location.hash.length>20)this.dispatch("handleAuthentication");else{var e=n()(localStorage.getItem("expires_at")),a=(new Date).getTime(),s=e-a,i=localStorage.getItem("access_token");i&&e&&a<e?(t.commit("user",JSON.parse(localStorage.getItem("user"))),t.commit("token",i),t.dispatch("scheduleRenewal",s),window.onfocus=function(){var a=(new Date).getTime();e<a&&t.dispatch("silentLogin")}):this.dispatch("login")}},login:function(t){t.state.webAuth.authorize()},silentLogin:function(t){var e=this;t.state.webAuth.checkSession({},function(t,a){t?e.error=t:(e.error="",e.dispatch("saveLoginData",a))})},handleAuthentication:function(t){t.state.webAuth.parseHash(function(e,a){e?(alert("Error: "+e.error+". Check the console for further details."),console.log("This is the error you got: ",e)):a&&a.accessToken&&a.idToken?(t.dispatch("saveLoginData",a),window.location.replace("/")):(alert("Oups!/n/nTry again"),window.location.replace("/"))})},scheduleRenewal:function(t,e){e&&window.setTimeout(function(){t.dispatch("silentLogin")},e)},saveLoginData:function(t,e){var a=(new Date).getTime()+1e3*e.expiresIn,s=o()({email:e.idTokenPayload.email,nickname:e.idTokenPayload.nickname,sub:e.idTokenPayload.sub});localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",a),localStorage.setItem("user",s),t.commit("token",e.accessToken),t.commit("user",s),t.dispatch("scheduleRenewal",1e3*e.expiresIn)},clearSession:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("user")},logout:function(){document.querySelector("body").classList.add("loading"),localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("user"),localStorage.removeItem("user");var t=document.createElement("iframe");t.src="https://todayapp.eu.auth0.com/v2/logout",t.style.display="none",document.body.appendChild(t),window.setTimeout(function(){window.top.location.href="/"},2e3)}}});new d.a({el:"#app",store:zt,router:It,template:"<App/>",components:{App:w}})},"5a00":function(t,e,a){},6162:function(t,e,a){},6266:function(t,e,a){"use strict";var s=a("5a00"),n=a.n(s);n.a},"64a9":function(t,e,a){},"696c":function(t,e,a){},"8b27":function(t,e,a){"use strict";var s=a("696c"),n=a.n(s);n.a},"8bfd":function(t,e,a){},"8d9e":function(t,e,a){"use strict";var s=a("f126"),n=a.n(s);n.a},"9c50":function(t,e,a){"use strict";var s=a("6162"),n=a.n(s);n.a},cad3:function(t,e){document.addEventListener("touchstart",d,{passive:!1}),document.addEventListener("touchmove",c,{passive:!1});var a=null,s=null,n=null,i=new Event("swipeLeft"),o=new Event("swipeRight");function r(t){return t.touches||t.originalEvent.touches}function d(t){var e=r(t)[0];a=e.clientX,s=e.clientY,n=new Date}function c(t){if(a&&s){var e=t.touches[0].clientX,r=t.touches[0].clientY,d=a-e,c=s-r,l=new Date;l-n<100&&Math.abs(d)>100&&(Math.abs(d)>Math.abs(c)&&(d>100?document.querySelector(".windows").dispatchEvent(i):document.querySelector(".windows").dispatchEvent(o)),a=null,s=null,n=null)}}},e1e4:function(t,e,a){"use strict";var s=a("446d"),n=a.n(s);n.a},e51b:function(t,e,a){},f126:function(t,e,a){},f37f:function(t,e,a){"use strict";var s=a("4211"),n=a.n(s);n.a},ffbf:function(t,e,a){"use strict";var s=a("e51b"),n=a.n(s);n.a}});
//# sourceMappingURL=app.ec4d7e6b.js.map