webpackJsonp([2,13,17,20],{"3qgg":function(e,t){},"6f/g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=(n("gyMJ"),n("8HvM")),r=n("jqh9"),o=n("sPSN"),u=n("R4Sj"),c=n("0xDb"),l={components:{Topbar:i.default,Sidebar:r.default,ContentTabs:o.default},data:function(){return{loading:!1}},mounted:function(){var e=this;this.resetDocumentClientHeight(),window.onresize=function(){e.resetDocumentClientHeight()};var t=JSON.parse(Object(c.a)("userInfo")).account;this.UPDATE_USER_NAME({name:t.username}),this.UPDATE_USER_ID({id:t.id})},computed:{siteWarpperClasses:function(){return[{"site-sidebar--collapse":this.$store.state.sidebarCollapse}]},siteContentWarpperStyles:function(){return"iframe"==this.$store.state.contentAcitveTab.type?[{height:this.$store.state.documentClientHeight+"px"}]:[{minHeight:this.$store.state.documentClientHeight+"px"}]}},methods:s()({resetDocumentClientHeight:function(){this.UPDATE_DOCUMENT_CLIENT_HEIGHT({height:document.documentElement.clientHeight-10});var e=document.documentElement.clientHeight-240;this.$store.dispatch("setUPDATE_DOCUMENT_CLIENT_IFRAME",e),this.UPDATE_DOCUMENT_CLIENT_IFRAME({height:document.documentElement.clientHeight-240})}},Object(u.b)(["UPDATE_DOCUMENT_CLIENT_HEIGHT","UPDATE_DOCUMENT_CLIENT_IFRAME","UPDATE_USER_NAME","UPDATE_USER_ID"]))},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",class:e.siteWarpperClasses,attrs:{"element-loading-text":"拼命加载中"}},[e.loading?e._e():[n("topbar"),e._v(" "),n("sidebar"),e._v(" "),n("div",{staticClass:"site-content__wrapper",style:e.siteContentWarpperStyles},[n("content-tabs"),e._v(" "),"iframe"==e.$store.state.contentAcitveTab.type?n("iframe",{attrs:{src:e.$store.state.contentAcitveTab.iframurl,width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("router-view")],1)]],2)},staticRenderFns:[]},d=n("C7Lr")(l,m,!1,null,null,null);t.default=d.exports},"8HvM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=n("gyMJ"),r=n("R4Sj"),o=n("0xDb"),u={data:function(){return{}},components:{},methods:s()({switchSidebarCollapseHandle:function(){this.SWITCH_SIDEBAR_COLLAPSE({collapse:!this.$store.state.sidebarCollapse})},logoutHandle:function(){var e=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.a.common.logout().then(function(t){t&&"200"===t.code&&(e.DELETE_CONTENT_TABS([]),Object(o.c)("userInfo"),e.$router.replace({name:"login"}))})})}},Object(r.b)(["SWITCH_SIDEBAR_COLLAPSE","DELETE_CONTENT_TABS"]))},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"site-topbar"},[a("div",{staticClass:"site-topbar__header"},[a("h1",{staticClass:"site-logo",on:{click:function(t){return e.$router.push({name:"dashboard"})}}},[a("a",{staticClass:"site-logo__lg",attrs:{href:"javascript:;"}},[e._v("一善堂")]),e._v(" "),a("a",{staticClass:"site-logo__mini",attrs:{href:"javascript:;"}},[e._v("MPR-T")])])]),e._v(" "),a("div",{staticClass:"site-topbar__body clearfix"},[a("el-menu",{staticClass:"site-topbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__switch",attrs:{index:"1-1"},on:{click:function(t){return e.switchSidebarCollapseHandle()}}},[a("i",{staticClass:"icon-custom-nav"})])],1),e._v(" "),a("el-menu",{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__avatar",attrs:{index:"1-2"}},[a("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("zQrT"),alt:e.$store.state.user.name}}),e._v(e._s(e.$store.state.user.name)+"\n          ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.logoutHandle()}}},[e._v("退出")])],1)],1)],1)],1)],1)])},staticRenderFns:[]},l=n("C7Lr")(u,c,!1,null,null,null);t.default=l.exports},jqh9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("aA9S"),s=n.n(a),i=n("4YfN"),r=n.n(i),o={name:"sub-menu-nav",props:{menuNav:Object,required:!0},components:{SubMenuNav:c},methods:{gotoRouteHandle:function(e){/\S/.test(e)&&this.$router.push({path:e})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menuNav.children&&e.menuNav.children.length>=1?n("el-submenu",{attrs:{"data-idx":e.menuNav.menuId+"",index:e.menuNav.menuId+""}},[n("template",{slot:"title"},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"icon-custom-shouye"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])]),e._v(" "),e._l(e.menuNav.children,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2):n("el-menu-item",{attrs:{index:e.menuNav.menuId+"","data-idx":e.menuNav.menuId+""},on:{click:function(t){return e.gotoRouteHandle(e.menuNav.url)}}},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"icon-custom-shouye"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])])},staticRenderFns:[]},c=n("C7Lr")(o,u,!1,null,null,null).exports,l=n("R4Sj"),m=n("eCRn"),d=n.n(m),_=n("0xDb"),h=(n("gyMJ"),{components:{SubMenuNav:c},watch:{$route:"routeHandle"},data:function(){return{menuNavActive:"1-1",menudash:{menuId:"1-1",parentId:0,parentName:null,name:"首页",url:"/dashboard",perms:null,type:1,icon:"icon-custom-shouye",orderNum:0,open:null,children:[]},menuList:[]}},created:function(){},mounted:function(){var e=JSON.parse(Object(_.a)("userInfo"));this.menuList=Object(_.e)(e.menuList,"menuId"),this.menuList.sort(function(e,t){return e.orderNum-t.orderNum}),this.menuList.forEach(function(e){e.children&&e.children.length>0&&e.children.sort(function(e,t){return e.orderNum-t.orderNum})}),this.menuList.unshift(this.menudash),this.UPDATE_MENU_NAV_LIST(this.menuList),this.routeHandle(this.$route)},methods:r()({routeHandle:function(e){if(e.path){var t=this.$store.state.contentTabs.filter(function(t){return t.name===e.name})[0];if(d()(t)){var n=this.getMenuNavByRouteName(e.path,this.$store.state.menuNavList);d()(n)||(t={id:n.menuId,name:e.name,isNew:!0,title:n.name,type:1==n.type?"module":"iframe",url:n.url,iframurl:n.iframurl},this.ADD_CONTENT_TAB(t))}else(t=s()({},t)).isNew=!1;this.menuNavActive=t.id+"",this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e.name}),this.UPDATE_CONTENT_TABS_ACTIVE(t)}},getMenuNavByRouteName:function(e,t){for(var n=0;n<t.length;n++)if(t[n].children&&t[n].children.length>=1){for(var a=0;a<t[n].children.length;a++)if(t[n].children[a].url===e)return t[n].children[a]}else if(t[n].url===e)return t[n]}},Object(l.b)(["UPDATE_MENU_NAV_LIST","ADD_CONTENT_TAB","UPDATE_CONTENT_TABS_ACTIVE_NAME","UPDATE_CONTENT_TABS_ACTIVE"]))}),f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"site-sidebar"},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":e.menuNavActive,collapse:e.$store.state.sidebarCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},e._l(e.$store.state.menuNavList,function(t){return 18!==t.menuId&&25!==t.menuId&&31!==t.menuId?n("sub-menu-nav",{key:t.menuId,attrs:{"menu-nav":t}}):e._e()}),1)],1)])},staticRenderFns:[]};var v=n("C7Lr")(h,f,!1,function(e){n("3qgg")},"data-v-1bdd41fc",null);t.default=v.exports},sPSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),i=n("eCRn"),r=n.n(i),o=n("R4Sj"),u={data:function(){return{}},computed:{tabActiveName:{get:function(){return this.$store.state.contentTabsActiveName},set:function(e){this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e})}}},methods:s()({contentViewHeight:function(e){var t=this.$store.state.documentClientHeight;return t-=50,t-=40,t-=15,t-=15,t-=2,t+="px","iframe"===e.type?{height:t}:{minHeight:t}},getNestIframeUrl:function(e){return window.SITE_CONFIG.nestIframeUrl+e},selectedTabHandle:function(e){e=this.$store.state.contentTabs.filter(function(t){return t.name===e.name}),r()(e)||this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this,n=this.$store.state.contentTabs.filter(function(t){return t.name!==e});e===this.tabActiveName&&this.$router.push({name:n[n.length-1].name},function(){t.tabActiveName=t.$route.name}),this.UPDATE_CONTENT_TABS(n)}},Object(o.b)(["UPDATE_CONTENT_TABS","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-content site-content--tabs"},[n("el-tabs",{attrs:{closable:e.$store.state.contentTabs.length>1},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},e._l(e.$store.state.contentTabs,function(e){return n("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}})}),1)],1)},staticRenderFns:[]},l=n("C7Lr")(u,c,!1,null,null,null);t.default=l.exports},zQrT:function(e,t,n){e.exports=n.p+"static/img/avatar.c58e465.png"}});
//# sourceMappingURL=2.73caf81b2db3427e71ec.js.map