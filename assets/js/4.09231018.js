(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(t,e,n){},326:function(t,e,n){},358:function(t,e,n){"use strict";var a=n(322);n.n(a).a},363:function(t,e,n){"use strict";var a=n(326);n.n(a).a},367:function(t,e,n){"use strict";var a=n(311),r=n(357),s=n.n(r),i=n(333),o=n.n(i),c={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return p(u.PREV,this)},next:function(){return p(u.NEXT,this)}}};var u={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function p(t,e){var n=e.$themeConfig,r=e.$page,i=e.$route,c=e.$site,u=e.sidebarItems,p=t.resolveLink,h=t.getThemeLinkConfig,l=t.getPageLinkConfig,g=h(n),v=l(r),f=o()(v)?g:v;return!1===f?void 0:s()(f)?Object(a.k)(c.pages,f,i.path):p(r,u)}function h(t,e,n){var a=[];!function t(e,n){for(var a=0,r=e.length;a<r;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var r=0;r<a.length;r++){var s=a[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return a[r+n]}}var l=c,g=(n(358),n(26)),v=Object(g.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"page-nav__button prev"},["external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[n("span",{staticClass:"page-nav__button__icon"},[n("vp-icon",{attrs:{color:"#4A4A4A",name:"chev-left",size:"18px"}})],1),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[n("span",{staticClass:"page-nav__button__icon"},[n("vp-icon",{attrs:{color:"#4A4A4A",name:"chev-left",size:"18px"}})],1),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"page-nav__button next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("span",{staticClass:"page-nav__button__icon"},[n("vp-icon",{attrs:{color:"#4A4A4A",name:"chev-right",size:"18px"}})],1),t._v(" "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("span",{staticClass:"page-nav__button__icon"},[n("vp-icon",{attrs:{color:"#4A4A4A",name:"chev-right",size:"18px"}})],1)])],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=v.exports},371:function(t,e,n){"use strict";n.r(e);var a=n(368),r=n(365),s=n(366),i=n(334),o=n(335),c={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:o.a},props:["items"]},u=(n(363),n(26)),p=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar__link"},[n("a",{attrs:{href:t.$withBase("/")}},[n("img",{staticClass:"sidebar__img",attrs:{src:t.$withBase("/assets/img/biome.svg")}})])]),t._v(" "),n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),n("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports,h=n(311),l={name:"Layout",components:{Home:a.a,Page:s.a,Sidebar:p,Navbar:r.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(h.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},g=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[n("footer",{staticClass:"footer"},[n("a",{attrs:{href:"https://www.recogn.ai/",target:"_blank"}},[n("img",{staticClass:"footer__img",attrs:{src:t.$withBase("/assets/img/recognai.png")}})])]),t._v(" "),t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=g.exports}}]);