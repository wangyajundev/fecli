(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{371:function(e,a,t){},372:function(e,a,t){},373:function(e,a,t){e.exports=t.p+"img/n_img.edff158.png"},374:function(e,a,t){"use strict";var s=t(371);t.n(s).a},375:function(e,a,t){"use strict";var s=t(372);t.n(s).a},376:function(e,a,t){"use strict";t.r(a);var s=t(367),r=t.n(s),n=t(368),o=t.n(n),i=t(369),u=t.n(i),c={baseURL:"/api",headers:{"Content-Type":"application/json;charset=UTF-8"},data:{},timeout:5e3,withCredentials:!1,responseType:"json"},p=t(370),l=t.n(p),d=u.a.create({baseURL:c.baseURL,headers:c.headers,transformResponse:[function(e){}]});d.interceptors.request.use(function(e){return e},function(e){"ECONNABORTED"===e.code&&e.message.indexOf("timeout");var a=e.response;return console.log(a),e}),d.interceptors.response.use(function(e){var a;return(a=(a=void 0===e.data?e.request.responseText:e.data)?JSON.parse(a):{}).error&&401===a.error.code&&l.a.set("username",void 0),a},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录";break;case 404:e.message="404"}return e});var m,v,h,g,f=d,_={name:"Login",data:function(){return{githubLoading:!1,name:"",avatar_url:"",params:{username:"",password:""}}},created:function(){this.$route.query.code&&(this.githubLoading=!0,this.getGithubAccessToken(this.$route.query))},methods:{postSignIn:(g=o()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.params,f.post("/user/signIn",a);case 2:(t=e.sent).data.err?alert(t.data.errMsg):(sessionStorage.setItem("name",t.data.data.name),sessionStorage.setItem("avatar_url",t.data.data.avatar_url),this.$router.replace("/home"));case 4:case"end":return e.stop()}var a},e,this)})),function(){return g.apply(this,arguments)}),postSignUp:(h=o()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.params,f.post("/user/signUp",a);case 2:(t=e.sent).data.err?alert(t.data.errMsg):(sessionStorage.setItem("name",t.data.data.name),sessionStorage.setItem("avatar_url",t.data.data.avatar_url),this.$router.replace("/home"));case 4:case"end":return e.stop()}var a},e,this)})),function(){return h.apply(this,arguments)}),getGithubAuthorize:(v=o()(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=this.params,f.get("/github/login/oauth/authorize",a);case 2:(t=e.sent).data.err?alert(t.data.errMsg):location.href=t.data.redirect_uri;case 4:case"end":return e.stop()}var a},e,this)})),function(){return v.apply(this,arguments)}),getGithubAccessToken:(m=o()(r.a.mark(function e(t){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=t,f.get("/github/login/oauth/accessToken",{params:a});case 2:(s=e.sent).data.err?alert(s.data.errMsg):(this.name=s.data.userInfo.name,this.avatar_url=s.data.userInfo.avatar_url,sessionStorage.setItem("name",this.name),sessionStorage.setItem("avatar_url",this.avatar_url),this.$router.replace("/home"));case 4:case"end":return e.stop()}var a},e,this)})),function(e){return m.apply(this,arguments)})}},w=(t(375),t(99)),b=Object(w.a)(_,function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"login"},[a.githubLoading?t("div",[a._v("Login...")]):t("div",[t("h3",[a._v("login")]),a._v(" "),t("label",{attrs:{for:"username"}}),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.params.username,expression:"params.username"}],attrs:{type:"text",id:"username",placeholder:"请输入用户名"},domProps:{value:a.params.username},on:{input:function(e){e.target.composing||a.$set(a.params,"username",e.target.value)}}}),a._v(" "),t("label",{attrs:{for:"password"}}),a._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:a.params.password,expression:"params.password"}],attrs:{type:"password",id:"password",placeholder:"请输入密码"},domProps:{value:a.params.password},on:{input:function(e){e.target.composing||a.$set(a.params,"password",e.target.value)}}}),a._v(" "),t("button",{on:{click:a.postSignIn}},[a._v("登录")]),a._v(" "),t("button",{on:{click:a.postSignUp}},[a._v("注册")]),a._v(" "),t("span",{staticClass:"githubLogo",on:{click:a.getGithubAuthorize}})])])},[],!1,null,"0147bcd4",null);a.default=b.exports},378:function(e,a,t){"use strict";t.r(a);var s=t(373),r=t.n(s),n={name:"Home",data:function(){return{name:sessionStorage.getItem("name"),avatar_url:sessionStorage.getItem("avatar_url")||r.a}},methods:{logout:function(){this.$router.push("/login")}}},o=(t(374),t(99)),i=Object(o.a)(n,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("header",{attrs:{id:"header"}},[t("div",{staticClass:"headerInner main-width"},[e._m(0),e._v(" "),t("div",{staticClass:"userBar"},[t("span",{staticClass:"usrAvatar",style:"background-image: url('"+e.avatar_url+"')"}),e._v(" "),t("span",{staticClass:"usrName"},[e._v(e._s(e.name))]),e._v(" "),t("span",{staticClass:"logout",on:{click:e.logout}},[e._v("logout")])])])])])},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"nav"},[t("div",{staticClass:"logo"}),e._v(" "),t("ul",[t("li",[e._v("nav1")]),e._v(" "),t("li",[e._v("nav2")])])])}],!1,null,"ec18c416",null);a.default=i.exports}}]);
//# sourceMappingURL=home.b95c298.js.map