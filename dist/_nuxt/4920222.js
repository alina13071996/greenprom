(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{454:function(t,e,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1b7833da",content,!0,{sourceMap:!1})},482:function(t,e,n){"use strict";n(11),n(13),n(15),n(16);var r=n(2),o=(n(6),n(51),n(64),n(33),n(12),n(25),n(56),n(432),n(47),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(48),n(10),n(446),n(1)),l=n(108),c=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(c.v)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},w=m("align",(function(){return{type:String,default:null,validator:y}})),_=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=m("justify",(function(){return{type:String,default:null,validator:_}})),x=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:x}})),C={align:Object.keys(w),justify:Object.keys(O),alignContent:Object.keys(j)},T={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=T[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},w),{},{justify:{type:String,default:null,validator:_}},O),{},{alignContent:{type:String,default:null,validator:x}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var d in n)c+=String(n[d]);var h=S.get(c);return h||function(){var t,e;for(e in h=[],C)C[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&h.push(o)}));h.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(c,h)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:h}),o)}})},483:function(t,e,n){"use strict";n(454)},484:function(t,e,n){var r=n(21)(!1);r.push([t.i,"input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.my-text-style{color:red}.asd{border-radius:0;box-shadow:none}.slide .absolute{position:absolute;right:0;width:56%;height:90%;background:transparent}.carousel{height:80px}",""]),t.exports=r},485:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2d62e390",content,!0,{sourceMap:!1})},486:function(t,e,n){var r=n(21)(!1);r.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=r},492:function(t,e,n){"use strict";n.r(e);n(29);var r={name:"IndexPage",methods:{modal:function(){console.log(this.$refs.modal)},sendMessage:function(){this.$refs.form.validate()&&(this.$axios.post("/mail.php",{key:0,name:this.name,tel:"+375 ".concat(this.tel)}),this.dialog=!1)}},computed:{isMobile:{get:function(){return this.$store.getters.isMobile}},height:{get:function(){return this.$store.getters.height}}},data:function(){return{dialog:!1,item:"salts",valid:!0,name:"",tel:"",nameRules:[function(t){return!!t||"Укажите имя"},function(t){return t&&t.length<=10||"Имя должно быть не больше 10 символов"}],numberRules:[function(t){return!!t||"Укажите номер вашего телефона"},function(t){return t&&t.length<=9||"Номер телефона должно быть не больше 9 символов"}],slides:{salts:{src1:"saltwater.png",name:"Морские соли с микроэлементами",style:""},brikets:{src1:"briketswater.png",name:"Брикеты солевые с сильвинитом",style:"height: 100%;"},lamps:{src1:"lam.png",name:"Лампы солевые",style:"height: 450px;"},speleo:{src1:"Speleo.png",name:"Спелеокомната под ключ",style:"height: 450px;"},briket:{src1:"briket.png",name:"Брикеты для пола в спелеокомнатах",style:"height: 450px;"}}}}},o=(n(483),n(83)),l=n(196),c=n.n(l),d=n(197),h=(n(12),n(11),n(13),n(6),n(15),n(10),n(16),n(2)),f=(n(27),n(55),n(485),n(190)),v=n(259),m=n(84),y=n(269),w=n(74),_=w.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return w.a.options.computed.classes.call(this)}},methods:{genData:w.a.options.methods.genData}}),O=n(0),x=n(14);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var T=f.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return C(C({},f.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(x.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:f.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(v.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(m.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(_,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(y.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=f.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(O.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),k=n(451),S=n(96),D=n(99),P=n(9),$=Object(P.a)(k.a,Object(S.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:D.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(O.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(O.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),E=n(164),V=n(46);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function G(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M=Object(P.a)($,V.a).extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(E.a,{staticClass:"v-carousel__item",props:G(G({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(O.m)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}}),R=n(489),I=n(495),A=n(490),H=n(187),z=n(482),L=n(491),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide fill-height"},[n("div",{staticClass:"d-flex fill-height"},[n("div",{staticClass:"d-flex flex-column justify-center",style:t.isMobile?"width:100%":"width:50%"},[n("div",{staticClass:"Roboto_Medium text-center",staticStyle:{color:"rgba(0, 120, 15, 1)","font-size":"50px"}},[t._v('\n        ООО "ГринПром"')]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"d-flex justify-center",attrs:{color:"transparent"}},[n("v-dialog",{attrs:{width:"400px",persistent:"","content-class":"asd"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("button",t._g(t._b({class:"Roboto_Regular "+(t.isMobile?"color_btn1_mobile":"color_btn1"),staticStyle:{"margin-top":"35px"}},"button",o,!1),r),[t._v("\n                  Заказать звонок")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("div",{staticClass:"align-center",staticStyle:{background:"#C1D9C4","border-radius":"0px 40px"},attrs:{width:"300px",elevation:"0"}},[n("div",{staticClass:"d-flex justify-end"},[n("button",{staticClass:"pr-5 pt-2",on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)]),t._v(" "),n("v-row",{staticClass:"d-flex mx-auto pb-0",attrs:{justify:"center"}},[n("v-card-title",{staticClass:"Roboto_Medium",staticStyle:{"font-size":"25px",color:"black",padding:"0px"}},[t._v("\n                  Обратный звонок")])],1),t._v(" "),n("v-card-text",{staticClass:"Roboto_Regular d-flex justify-center",staticStyle:{"font-size":"11px"}},[t._v("\n                      Перезвоним в течения дня.")]),t._v(" "),n("v-col",{staticClass:"mx-auto",staticStyle:{height:"200px"},attrs:{cols:"8",justify:"center"}},[n("v-form",{ref:"form"},[n("v-text-field",{staticStyle:{"border-radius":"0px 20px"},attrs:{rules:t.nameRules,label:"Имя",required:"",color:"green",outlined:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{staticStyle:{"border-radius":"0px 20px"},attrs:{type:"number",color:"green",maxlength:"9",rules:t.numberRules,prefix:"+375 ",required:"",outlined:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1)],1),t._v(" "),n("div",{staticClass:"d-flex justify-center pb-5"},[n("button",{class:t.isMobile?"color_btn1_mobile":"color_btn1",on:{click:t.sendMessage}},[t._v("\n                      Заказать звонок")])])],1)])],1)]),t._v(" "),t.isMobile?t._e():n("div",{staticStyle:{width:"50%",background:"#84B489"}},[n("v-carousel",{attrs:{"show-arrows":!1,height:"100%","hide-delimiter-background":"",cycle:""}},t._l(t.slides,(function(e,i){return n("v-carousel-item",{key:i,attrs:{value:i}},[n("div",{staticClass:"d-flex full-width",style:"height: "+(t.height-48-50)+"px"},[n("div",{staticClass:"my-auto full-width"},[n("v-img",{staticClass:"full-width",attrs:{src:e.src1}}),t._v(" "),n("div",{staticClass:"Roboto_Regular text-center mt-1",staticStyle:{"font-size":"1.5vw",color:"white"}},[t._v(t._s(e.name)+"\n                  ")])],1)])])})),1)],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Roboto_Medium mt-5 text-center"},[t._v("Производство бальнеологической"),n("br"),t._v("\n           и парфюмерно-космической продукции")])}],!1,null,null,null);e.default=component.exports;c()(component,{VCardText:d.a,VCardTitle:d.b,VCarousel:T,VCarouselItem:M,VCol:R.a,VDialog:I.a,VForm:A.a,VIcon:H.a,VImg:E.a,VRow:z.a,VTextField:L.a})}}]);