(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message"],{"25d1":function(t,e,a){},"29fa":function(t,e,a){},"3a13":function(t,e,a){"use strict";a("9a54")},"3e55":function(t,e,a){"use strict";a("29fa")},"684a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-container"},[a("DataForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},s=[],o={data:function(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit:function(){var t=this;this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,(function(e){t.$showMessage({content:e,type:"success",duration:1e3,container:t.$refs.form,callback:function(){t.isSubmiting=!1,t.formData.nickname="",t.formData.content=""}})})))}}},c=o,u=(a("3a13"),a("2877")),l=Object(u["a"])(c,i,s,!1,null,"f6ef7514",null),f=l.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},d=[],h=a("77c0"),p=a("ed08"),v={components:{Avatar:h["a"]},props:{list:{type:Array,default:function(){return[]}}},methods:{formatDate:p["b"]}},g=v,b=(a("bac8"),Object(u["a"])(g,m,d,!1,null,"6bbcd1b2",null)),w=b.exports,_={props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:function(){return[]}},isListLoading:{type:Boolean,default:!1}},components:{DataForm:f,DataList:w}},S=_,D=(a("3e55"),Object(u["a"])(S,n,r,!1,null,"081b83b7",null));e["a"]=D.exports},"8fc4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"messageContainer",staticClass:"message-container"},[a("MessageArea",{attrs:{title:"留言板",subTitle:"("+t.data.total+")",isListLoading:t.isLoading,list:t.data.rows},on:{submit:t.handleSubmit}})],1)},r=[],i=(a("99af"),a("96cf"),a("1da1")),s=a("684a"),o=a("e128"),c=a("0c6d");function u(){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,a=n.length>1&&void 0!==n[1]?n[1]:10,t.next=4,c["a"].get("/api/message",{params:{page:e,limit:a}});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].post("/api/message",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}var d=a("f119"),h={components:{MessageArea:s["a"]},data:function(){return{page:1,limit:10}},mixins:[Object(o["a"])({total:0,rows:[]}),Object(d["a"])("messageContainer")],created:function(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed:function(){this.$bus.$off("mainScroll",this.handleScroll)},computed:{hasMore:function(){return this.data.rows.length<this.data.total}},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",u(t.page,t.limit));case 1:case"end":return e.stop()}}),e)})))()},handleScroll:function(t){if(!this.isLoading&&t){var e=100,a=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);a<=e&&this.fetchMore()}},fetchMore:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasMore){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,t.page++,e.next=6,t.fetchData();case 6:a=e.sent,t.data.total=a.total,t.data.rows=t.data.rows.concat(a.rows),t.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},handleSubmit:function(t,e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,f(t);case 2:r=n.sent,e("感谢您的留言"),a.data.rows.unshift(r);case 5:case"end":return n.stop()}}),n)})))()}}},p=h,v=(a("cd0e"),a("2877")),g=Object(v["a"])(p,n,r,!1,null,"5d122bca",null);e["default"]=g.exports},"9a54":function(t,e,a){},bac8:function(t,e,a){"use strict";a("25d1")},cd0e:function(t,e,a){"use strict";a("e34a")},e128:function(t,e,a){"use strict";a("96cf");var n=a("1da1");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{data:function(){return{isLoading:!0,data:t}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.data=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()}}}},e34a:function(t,e,a){},f119:function(t,e,a){"use strict";e["a"]=function(t){return{mounted:function(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroy:function(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleSetMainScroll:function(e){this.$refs[t].scrollTop=e},handleMainScroll:function(){this.$bus.$emit("mainScroll",this.$refs[t])}}}}}}]);
//# sourceMappingURL=message.1c9610e5.js.map