(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[1],{139:function(e,t,n){e.exports=n(228)},144:function(e,t,n){},145:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Nav_nav__fmJkU",active_link:"Nav_active_link__1XDvz"}},228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(43),i=n.n(u);n(144),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(32),c=n(33),s=n(35),l=n(34),d=(n(145),n(17)),f=n.n(d),p=n(11),m=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",null,r.a.createElement(p.b,{to:"/news",activeClassName:f.a.active_link},"News")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.active_link},"Profile")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/users",activeClassName:f.a.active_link},"Users")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.active_link},"Dialogs")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/music",activeClassName:f.a.active_link},"Music")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/bookmarks",activeClassName:f.a.active_link},"Bookmarks")),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/settings",activeClassName:f.a.active_link},"Settings")))},g=n(82),v=n.n(g),h=function(e){return r.a.createElement("div",{className:v.a.dialogs},"Music")},E=n(83),b=n.n(E),_=function(e){return r.a.createElement("div",{className:b.a.dialogs},"Settings")},O=n(84),S=n.n(O),w=function(e){return r.a.createElement("div",{className:S.a.dialogs},"News")},k=n(85),j=n.n(k),I=function(e){return r.a.createElement("div",{className:j.a.dialogs},"Bookmarks")},x=n(20),T=n(54),y=n.n(T),N=function(e){return r.a.createElement("header",{className:y.a.header},r.a.createElement("img",{src:"https://pngimg.com/uploads/pokemon/pokemon_PNG73.png",alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"}),r.a.createElement("div",{className:y.a.loginBlock},e.isAuth?r.a.createElement("div",null,r.a.createElement("p",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"logout"))):r.a.createElement(p.b,{to:"/login"},"Login")))},P=n(26),U=n(24),C=n(14),D=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(N,this.props)}}]),n}(r.a.Component),A=Object(C.d)(Object(P.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:U.d}))(D),L=n(5),F={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(L.a)({},e,{initialized:!0});default:return e}},G=n(47),M=n(58),z=n(73),Y={},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;arguments.length>1&&arguments[1];return e},W=n(80),H=n(89),J=n(79),X=Object(C.c)({ProfilePage:M.b,DialogsPage:z.a,sidebar:B,UsersPage:W.a,auth:U.b,form:J.a,app:R}),Z=Object(C.e)(X,Object(C.a)(H.a));window.store=Z;var q=Z,K=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(G.a,null)},r.a.createElement(e,t))}},$=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,305))})),Q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,303))})),V=r.a.lazy((function(){return n.e(6).then(n.bind(null,304))})),ee=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,302))})),te=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(A,null),r.a.createElement(m,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(x.b,{path:"/dialogs",render:K($)}),r.a.createElement(x.b,{path:"/profile/:userId?",render:K(Q)}),r.a.createElement(x.b,{path:"/users",render:K(V)}),r.a.createElement(x.b,{path:"/news",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(x.b,{path:"/settings",render:function(){return r.a.createElement(_,null)}}),r.a.createElement(x.b,{path:"/bookmarks",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(x.b,{path:"/music",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(x.b,{path:"/login",render:K(ee)})))}}]),n}(r.a.Component),ne=Object(C.d)(x.f,Object(P.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(U.a)());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(te),ae=function(e){return r.a.createElement(p.a,null,r.a.createElement(P.a,{store:q},r.a.createElement(ne,null)))};i.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p}));var a=n(4),r=n.n(a),u=n(10),i=n(5),o=n(7),c=n(44),s={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},d=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){var n,a,u,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,u=a.id,i=a.email,c=a.login,t(l(u,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var a=Object(u.a)(r.a.mark((function a(u){var i,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(e,t,n);case 2:0===(i=a.sent).data.resultCode?u(d()):(s=i.data.messages.length>0?i.data.messages[0]:"Some error",u(Object(c.b)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(u.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(i.a)({},e,{},t.data);default:return e}}},47:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(88),i=n.n(u);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:i.a,alt:"...loading..."}))}},54:function(e,t,n){e.exports={header:"Header_header__18DUm",loginBlock:"Header_loginBlock__aUdtO"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return g}));var a=n(4),r=n.n(a),u=n(10),i=n(25),o=n(5),c=n(7),s="profile/ADD-POST",l={PostsData:[{id:1,text:"hello",likesCount:4},{id:2,text:"lol kek cheburek",likesCount:51}],profile:null,status:""},d=function(e){return{type:s,newPostText:e}},f=function(e){return{type:"profile/SET_STATUS",status:e}},p=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:3,text:t.newPostText,likesCount:0};return Object(o.a)({},e,{PostsData:[].concat(Object(i.a)(e.PostsData),[n])});case"profile/SET_USER_PROFILE":return Object(o.a)({},e,{profile:t.profile});case"profile/SET_STATUS":return Object(o.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(o.a)({},e,{PostsData:e.PostsData.filter((function(e){return e.id!==t.postId}))});default:return e}}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(87),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"48d27174-95eb-4258-826a-c0656d2c3fa8"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))}},i={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},o={authMe:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(25),r=n(5),u={DialogsData:[{id:1,name:"Amidomaru"},{id:2,name:"Yo"},{id:3,name:"Riko"},{id:4,name:"Moon"},{id:5,name:"Ogurchik"}],MessagesData:[{id:1,chatId:1,text:"Ya Amidomaru"},{id:1,chatId:2,text:"Yo Yo"},{id:1,chatId:3,text:"Ya Riko"},{id:1,chatId:4,text:"Ya Moon"},{id:1,chatId:5,text:"Ya Ogurchik"}]},i=function(e){return{type:"dialogs/SEND-MESSSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSSAGE":var n={id:2,chatId:1,text:t.newMessageText};return Object(r.a)({},e,{MessagesData:[].concat(Object(a.a)(e.MessagesData),[n])});default:return e}}},80:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return _}));var a=n(4),r=n.n(a),u=n(10),i=n(25),o=n(5),c=n(7),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)({},e,{},a):e}))},l="users/FOLLOW",d={UsersData:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowingInProgress:[],portionSize:10},f=function(e){return{type:l,userId:e}},p=function(e){return{type:"users/UNFOLLOW",userId:e}},m=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},g=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},v=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_IN_PROGRESS",isFollowingInProgress:e,userId:t}},h=function(e,t){return function(){var n=Object(u.a)(r.a.mark((function n(a){var u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(m(e)),a(g(!0)),n.next=4,c.c.getUsers(e,t);case 4:u=n.sent,a(g(!1)),a({type:"users/SET_USERS",UsersData:u.data.items}),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:u.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(u.a)(r.a.mark((function e(t,n,a,u){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(u(n)),t(v(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),b=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,c.c.follow.bind(c.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,c.c.unfollow.bind(c.c),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)({},e,{UsersData:s(e.UsersData,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(o.a)({},e,{UsersData:s(e.UsersData,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(o.a)({},e,{UsersData:t.UsersData});case"users/SET_CURRENT_PAGE":return Object(o.a)({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(o.a)({},e,{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(o.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_IN_PROGRESS":return Object(o.a)({},e,{isFollowingInProgress:t.isFollowingInProgress?[].concat(Object(i.a)(e.isFollowingInProgress),[t.userId]):e.isFollowingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},82:function(e,t,n){e.exports={dialogs:"Music_dialogs__XE_Y6"}},83:function(e,t,n){e.exports={dialogs:"Settings_dialogs__2m43o"}},84:function(e,t,n){e.exports={dialogs:"News_dialogs__2xL_J"}},85:function(e,t,n){e.exports={dialogs:"Bookmarks_dialogs__2xFqF"}},88:function(e,t,n){e.exports=n.p+"static/media/Spinner.fb0de157.svg"}},[[139,2,3]]]);
//# sourceMappingURL=main.63b2c7d7.chunk.js.map