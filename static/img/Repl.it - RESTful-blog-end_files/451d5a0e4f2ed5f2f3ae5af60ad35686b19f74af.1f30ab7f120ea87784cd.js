(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"7lhO":function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n("q1tI"),a=n("f47c");function o(){var e=t.useContext(a.a);if(!e)throw new Error("Expected repl id to be in context");return e}},EP3k:function(e,r,n){"use strict";n.d(r,"a",(function(){return i}));var t=n("ln6h"),a=n.n(t),o=n("0gYX"),c=n.n(o),u=n("gfZM");function i(e){var r,n,t,o,i,s;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return r=e.fs,n=e.language,l.next=3,a.a.awrap(r.readDir("."));case 3:if(!(t=l.sent).error){l.next=6;break}throw new Error("Could not read files");case 6:return o=t.children,!(i=c.a.getMainFileName(n))&&o.length&&(i=o[0].filename),l.next=11,a.a.awrap(r.readFile(i));case 11:if(!(s=l.sent).error){l.next=14;break}throw s.error;case 14:return l.abrupt("return",u.a.from(s.content).toString());case 15:case"end":return l.stop()}}))}},IjuC:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n("ln6h"),a=n.n(t);function o(e){return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(window.navigator.clipboard){r.next=3;break}return c(e),r.abrupt("return");case 3:return r.prev=3,r.next=6,a.a.awrap(window.navigator.clipboard.writeText(e));case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(3),c(e);case 11:case"end":return r.stop()}}),null,null,[[3,8]])}function c(e){var r=document.createElement("textarea");r.value=e,r.style.top="0",r.style.left="0",r.style.position="fixed",document.body.appendChild(r),r.focus(),r.select(),document.execCommand("copy"),document.body.removeChild(r)}},JOwT:function(e,r,n){"use strict";r.a=["package.json","package-lock.json","yarn.lock","node_modules","poetry.lock","pyproject.toml","requirements.txt",".venv/",".local","go.mod","go.sum","Gemfile","Gemfile.lock","pom.xml","target"]},LTTG:function(e,r,n){"use strict";var t,a=n("ln6h"),o=n.n(a),c=n("eVuF"),u=n.n(c),i=n("RPwF"),s=n("zgDP");!function(e){e.STATE_CHANGE="STATE_CHANGE",e.OUTPUT="OUTPUT",e.ERROR="ERROR"}(t||(t={}));var l=n("HADy"),p=n("Fz/E");function f(e){var r,a=e.beforeRun,c=e.getMainFileContents,f=Object(p.a)(),d=l.b.OFFLINE;function b(e){d=e,f.emit(t.STATE_CHANGE,d)}function h(){var e;if(!(null===(e=r)||void 0===e?void 0:e.replbox))throw new Error("replbox not loaded. runState is; "+d);b(l.b.OFFLINE),r.replbox.destroy(),r=null}function v(e){var n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(r){a.next=2;break}throw new Error("replbox not loaded. runState is; "+d);case 2:return d!==l.b.RUNNING&&b(l.b.RUNNING),a.next=5,o.a.awrap(r.replbox.evaluate(e,{stdout:function(e){return f.emit(t.OUTPUT,e)}}));case 5:if(n=a.sent,d===l.b.RUNNING){a.next=8;break}return a.abrupt("return");case 8:if(!n.error){a.next=11;break}return f.emit(t.ERROR,n.error),a.abrupt("return");case 11:f.emit(t.OUTPUT,n.data),b(l.b.IDLE);case 13:case"end":return a.stop()}}))}return{load:function e(a){var c,p,d,v,g,E,w,m,k,x,O;return o.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return c=a.replId,p=a.hostedUrl,d=a.language,v=a.iframeParent,g=a.timeout,E=void 0===g?5e3:g,r&&h(),y.next=4,o.a.awrap(n.e(50).then(n.t.bind(null,"i5jj",7)).then((function(e){return e.default})));case 4:if(w=y.sent,v)for(;v.firstChild;)v.removeChild(v.firstChild);if((m=new w(d,{useIframe:!0,iframeParent:v,track:s.track})).on("warn",(function(e){f.emit(t.OUTPUT,e)})),k="https://replbox.repl.it/public/secure/","html"!==d){y.next=13;break}if(p){y.next=12;break}throw new Error("Expected hostedUrl for "+d);case 12:k=p+"/__debug_wrapper.html";case 13:return x="".concat(window.location.origin,"/public/replbox_lang/").concat(i.version,"/").concat(d,".js"),O=!1,y.next=17,o.a.awrap(new u.a((function(e,r){var n=setTimeout((function(){O=!0,Object(s.track)(s.events.LOAD_REPLBOX_ENGINE_TIMED_OUT,{language:d}),e()}),E),t=window.performance.now();m.load({iframeOrigin:k,languageBundleSrc:x}).then((function(){clearTimeout(n),Object(s.track)(s.events.LOAD_REPLBOX_ENGINE_TIME,{time:window.performance.now()-t}),e()})).catch((function(e){clearTimeout(n),r(e)}))})));case 17:if(!O){y.next=20;break}return m.destroy(),y.abrupt("return",e({replId:c,language:d,hostedUrl:p,iframeParent:v}));case 20:r={replId:c,replbox:m,language:d,hostedUrl:p},b(l.b.IDLE);case 22:case"end":return y.stop()}}))},run:function(){var e,n,u,i=arguments;return o.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:{},n=e.clean,r){s.next=3;break}throw new Error("replbox not loaded. runState is; "+d);case 3:if("web_project"!==r.language){s.next=5;break}throw new Error("TODO?");case 5:return b(l.b.RUNNING),s.next=8,o.a.awrap(a(r.language));case 8:if(d===l.b.RUNNING){s.next=10;break}return s.abrupt("return");case 10:if(r){s.next=12;break}throw new Error("replbox not loaded. runState is; "+d);case 12:if("html"!==r.language){s.next=16;break}return s.next=15,o.a.awrap(r.replbox.runProject([],{stdout:function(e){return f.emit(t.OUTPUT,e)},stderr:function(e){return f.emit(t.ERROR,e)},replId:r.replId,url:r.hostedUrl}));case 15:return s.abrupt("return");case 16:if(!n){s.next=21;break}return s.next=19,o.a.awrap(r.replbox.reset());case 19:if(d===l.b.RUNNING){s.next=21;break}return s.abrupt("return");case 21:return s.next=23,o.a.awrap(c(r.language));case 23:if(u=s.sent,d===l.b.RUNNING){s.next=26;break}return s.abrupt("return");case 26:return s.abrupt("return",v(u));case 27:case"end":return s.stop()}}))},evalCode:v,refreshWebview:function(){if(!r)throw new Error("replbox not loaded. runState is; "+d);r.replbox.refreshWebProject()},stopRun:function(){if(!r)throw new Error("replbox not loaded. runState is; "+d);try{r.replbox.stop()}catch(e){if(e.message.match(/postmessage/i))return;throw e}b(l.b.IDLE)},destroy:h,onOutput:function(e){return f.on(t.OUTPUT,e),function(){f.removeListener(t.OUTPUT,e)}},onStateChanged:function(e){return f.on(t.STATE_CHANGE,e),function(){f.removeListener(t.STATE_CHANGE,e)}},getRunState:function(){return d}}}n.d(r,"a",(function(){return f}))},OQjE:function(e,r,n){"use strict";n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return a}));var t="idle";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"EVAL_STARTED":case"EVAL_SETUP":return"running";case"STOP_EVAL":return"stopping";case"EVAL_ENDED":return"idle";case"SET_RUN_STATE":return r.runstate;default:return e}}},Qbrf:function(e,r,n){"use strict";n.d(r,"a",(function(){return m}));var t=n("hfKm"),a=n.n(t),o=n("2Eek"),c=n.n(o),u=n("XoMD"),i=n.n(u),s=n("Jo+v"),l=n.n(s),p=n("4mXO"),f=n.n(p),d=n("XXOK"),b=n.n(d),h=n("vYYK"),v=n("pLtp"),g=n.n(v);function E(e,r){var n=g()(e);if(f.a){var t=f()(e);r&&(t=t.filter((function(r){return l()(e,r).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?E(Object(n),!0).forEach((function(r){Object(h.a)(e,r,n[r])})):i.a?c()(e,i()(n)):E(Object(n)).forEach((function(r){a()(e,r,l()(n,r))}))}return e}function m(e){"function"!==typeof e.primary&&(e.primary=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e});var r=g()(e);return function(n,t){var a=!1,o={},c=!0,u=!1,i=void 0;try{for(var s,l=b()(r);!(c=(s=l.next()).done);c=!0){var p=s.value;if("primary"!==p){var f=e[p],d=n?n[p]:void 0,h=f(d,t);o[p]=h,a=a||h!==d}}}catch(E){u=!0,i=E}finally{try{c||null==l.return||l.return()}finally{if(u)throw i}}var v=n?a?w({},n,{},o):n:void 0,g=e.primary(v,t);return(a=a||g!==v)?w({},o,{},g):n}}},QdtJ:function(e,r,n){"use strict";n.d(r,"a",(function(){return v}));var t=n("MX0m"),a=n.n(t),o=n("q1tI"),c=n("7FmB"),u=n.n(c),i=n("irrw"),s=n.n(i),l=n("gF3W"),p=n("dwxc"),f=n.n(p),d=n("dI/k"),b=o.createElement,h=function(e){return(e=e.map(d.b)).length<2?e[0]:"".concat(e.slice(0,-1).join(", ")," and ").concat(e.slice(-1))};function v(e){var r=e.paths,n=e.onCancel,t=e.onConfirm;return b("div",{className:"jsx-4280829187 content"},b(l.VStack,{spacing:4},b(l.VStack,{spacing:1},b(s.a,{level:3},"Overwrite?"),b(f.a,{foreground:2},h(r)," already exist in destination, are you sure you want overwrite them?"),b(f.a,{foreground:2},"This action cannot be reversed.")),b(l.HStack,{spacing:1},b(u.a,{onClick:function(){return n()}},"Cancel"),b(u.a,{color:"negative",filled:!0,onClick:function(){return t()}},"Replace"))),b(a.a,{id:"4280829187"},[".content.jsx-4280829187{padding:var(--spacing-4);}"]))}},RPwF:function(e){e.exports=JSON.parse('{"name":"@replit/replbox","version":"2.20.0","description":"A sandboxed browser REPL","main":"dist/index.js","files":["/dist"],"scripts":{"prepublishOnly":"yarn build && cp stuffjschild.html dist","clean":"rm -rf ./dist","build":"yarn clean && NODE_ENV=production webpack --config ./webpack.config.js --bail","test":"prettier --check  \\"src/**/*.js\\" && jest","prettier":"prettier --write \\"src/**/*.js\\"","dev":"NODE_ENV=development node dev_server.js"},"author":"amjad@repl.it","license":"UNLICENSED","devDependencies":{"@replit/alcor":"^0.1.0","@sentry/browser":"^5.7.1","apl":"git+https://github.com/ngn/apl.git#cc314fe3be5f2d018d556b7e91916711e46d265e","babel-core":"^6.25.0","babel-generator":"6.26.0","babel-loader":"7.1.2","babel-polyfill":"6.26.0","babel-preset-env":"1.6.1","babel-preset-stage-2":"6.24.1","babel-template":"6.26.0","babel-traverse":"6.26.0","babel-types":"^6.26.0","babylon":"6.18.0","biwascheme":"git+https://github.com/masad-frost/biwascheme.git#3c0d5a67cd1af696c69ab7fb085b2f42c8b0586c","codemirror":"^5.52.0","context-eval":"^0.1.0","empty-module":"^0.0.2","express":"^4.17.1","happypack":"^4.0.1","inspect-x":"1.7.0","jasmine-core":"^2.4.1","jasmine_dom_matchers":"^1.4.0","jest":"^24.9.0","prettier":"^1.18.2","puppeteer":"^1.11.0","script-loader":"0.7.0","serve-handler":"^6.1.2","stuff.js":"^0.4.1","underscore":"1.2.2","underscore.string":"2.0.0","webpack":"3.10","webpack-dev-middleware":"^2","whatwg-fetch":"^3.0.0"},"dependencies":{},"jest":{"globalSetup":"<rootDir>/jest_setup.js","globalTeardown":"<rootDir>/jest_teardown.js","verbose":true,"bail":1},"prettier":{"trailingComma":"all","tabWidth":2,"semi":true,"singleQuote":true}}')},S6NQ:function(e,r,n){"use strict";n.d(r,"b",(function(){return N})),n.d(r,"a",(function(){return _}));var t=n("hfKm"),a=n.n(t),o=n("2Eek"),c=n.n(o),u=n("XoMD"),i=n.n(u),s=n("Jo+v"),l=n.n(s),p=n("4mXO"),f=n.n(p),d=n("pLtp"),b=n.n(d),h=n("XXOK"),v=n.n(h),g=n("9Jkg"),E=n.n(g),w=n("doui"),m=n("vYYK"),k=n("g7Gn"),x=n("gfZM"),O=n("NuhN"),y=n("tSgl"),T=n.n(y),R=n("XE6U");function j(e,r){var n=b()(e);if(f.a){var t=f()(e);r&&(t=t.filter((function(r){return l()(e,r).enumerable}))),n.push.apply(n,t)}return n}function C(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?j(Object(n),!0).forEach((function(r){Object(m.a)(e,r,n[r])})):i.a?c()(e,i()(n)):j(Object(n)).forEach((function(r){a()(e,r,l()(n,r))}))}return e}var N={};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,r=arguments.length>1?arguments[1]:void 0;if("string"===typeof r.path&&T()(r.path))return e;var n=function(){switch(r.type){case"FILE_UNLOAD":return C({},e,Object(m.a)({},r.path,{path:r.path,loaded:!1}));case"FILE_LOADED":case"FILE_CACHE_HIT":return C({},e,Object(m.a)({},r.path,C({},e[r.path],{},r.file)));case"CREATE_FILE":return C({},e,Object(m.a)({},r.path,r.file||{path:r.path,loaded:!1}));case"MOVE_FILE":var n=Object(O.g)(e,r.path,r.to);if(!n.length)return e;var t=C({},e);return n.forEach((function(r){var n=Object(w.a)(r,2),a=n[0],o=n[1];delete t[a];var c=e[a];if(!c)throw new Error("No source file!");t[o]=C({},c,{path:o})})),t;case"DELETE_FILE":var a=Object(O.e)(e,r.path);if(a.length&&e[r.path])throw new R.a("matched children and node while deleting").setExtras({path:r.path,fileState:e});var o=C({},e);return a.length?a.forEach((function(e){delete o[e]})):delete o[r.path],o;case"OT_FILE_OP":if(!r.changeSource)throw new Error("Expected changeSource on action OT_FILE_OP got "+E()(r));var c=e[r.path];if(!c)throw new Error("tried to perform an OT op on "+r.path+" but we don't know about that file.");if(!c.loaded)return e;var u=function(e,r){var n=e,t=0,a=!0,o=!1,c=void 0;try{for(var u,i=v()(r);!(a=(u=i.next()).done);a=!0){var s=u.value;if("string"===typeof s)n=n.slice(0,t)+s+n.slice(t),t+=s.length;else if("object"===typeof s&&"number"===typeof s.d)n=n.slice(0,t)+n.slice(t+s.d);else{if("number"!==typeof s)throw new Error("bad ot op: "+s);t+=s}}}catch(l){o=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(o)throw c}}return n}(x.a.from(c.content).toString("utf8"),r.op);return C({},e,Object(m.a)({},r.path,C({},c,{content:x.a.from(u)})));default:return e}}();return n!==e&&!e[r.path]&&n[r.path]&&"CREATE_FILE"!==r.type&&k.m((function(n){n.setExtra("action",r),n.setExtra("prevstate",e),k.c(new Error("created file without using CREATE_FILE or FILE_CACHE_HIT"))})),n}},VwSA:function(e,r,n){"use strict";r.a={py:"#78ABC0",rb:"#DD646A",js:"#C5B007",java:"#84BEE2",html:"#F98545",css:"#28AAE6",cpp:"#659AD1",c:"#A8B9CB"}},ceSv:function(e,r,n){"use strict";n.d(r,"a",(function(){return h}));var t=n("kOwS"),a=n("doui"),o=n("qNsG"),c=n("q1tI"),u=n("7FmB"),i=n.n(u),s=n("tidx"),l=n("IPFe"),p=n.n(l),f=n("8Vt8"),d=n("sMwv"),b=c.createElement;function h(e){var r=e.replId,n=e.onFork,u=e.isLoggedIn,l=e.onAuthCancel,h=e.trackingContext,v=Object(o.a)(e,["replId","onFork","isLoggedIn","onAuthCancel","trackingContext"]),g=c.useState(!1),E=Object(a.a)(g,2),w=E[0],m=E[1];c.useEffect((function(){!w&&l&&l()}),[w,l]);var k=Object(d.a)({onFork:n}),x=Object(a.a)(k,2),O=x[0],y=x[1].loading;return b(c.Fragment,null,b(i.a,Object(t.a)({},v,{Icon:p.a,disabled:y,onClick:function(e){v.onClick&&v.onClick(e),u?y||O(r,{trackingData:{context:h}}):m(!0)}}),y?"Forking...":"Fork"),u?null:b(f.a,{isOpen:w,onRequestClose:function(){m(!1)}},b(s.a,{title:"Sign up or log in to fork this repl",onSuccess:function(e){e&&O(r,{trackingData:{context:h,authType:u?"login":"signup"}})}})))}},f47c:function(e,r,n){"use strict";var t=n("q1tI"),a=t.createContext(null);r.a=a},gnTG:function(e,r,n){"use strict";var t,a=n("doui"),o=n("ln6h"),c=n.n(o),u=n("eVuF"),i=n.n(u),s=n("Fz/E"),l=n("g7Gn"),p=n("5/z4"),f=n("0gYX"),d=n.n(f),b=n("XWHH"),h=n.n(b);!function(e){e.OUTPUT="OUTPUT",e.ERROR="ERROR",e.STATE_CHANGED="STATE_CHANGED",e.CHANNEL_OPENED="CHANNEL_OPENED"}(t||(t={}));var v=n("6bXu");function g(e){var r=e.container,n=Object(s.a)(),o=null,u=function(e){var r=e.repl;return!(window["flag-packager-service"]||Object(v.a)())||!d.a.supportsPackager3(r.language)};function f(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||"open"!==o.status){e.next=2;break}return e.abrupt("return",o);case 2:return e.abrupt("return",new i.a((function(e){n.once(t.CHANNEL_OPENED,(function(r){e(r)}))})));case 3:case"end":return e.stop()}}))}function b(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new i.a((function(e,n){var t=!1,a=r.openChannel({service:"packager3",skip:u},(function(r){var o=r.channel,c=r.error;if(t)throw new Error("getAnonymousChannel fullfilled but openChannelCb called again");if(!c)return e([o,a]),function(e){e.willReconnect&&a(),t||(t=!0,n(new Error("Expected getAnonymousChannel promise to be fulfilled when closing")))};n(c)}))})));case 1:case"end":return e.stop()}}))}return r.openChannel({service:"packager3",name:"packager",skip:u},(function(e){var r=e.channel;if(!e.error){if(!r)throw new Error("Expected channel");return r.onCommand((function(e){switch(e.body){case"state":var r=e.state===p.api.State.Running;n.emit(t.STATE_CHANGED,r);break;case"output":n.emit(t.OUTPUT,e.output);break;case"error":n.emit(t.ERROR,e.error)}})),o=r,n.emit(t.CHANNEL_OPENED,r),function(){o=null}}})),{addPackages:function(e){var r,n,t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(f());case 2:return r=a.sent,n=e.map((function(e){return{name:e}})),a.next=6,c.a.awrap(r.request({packageAdd:{pkgs:n}}));case 6:if(!(t=a.sent).channelClosed){a.next=9;break}return a.abrupt("return",!1);case 9:return a.abrupt("return",Boolean(t.ok));case 10:case"end":return a.stop()}}))},removePackages:function(e){var r,n,t;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.awrap(f());case 2:return r=a.sent,n=e.map((function(e){return{name:e}})),a.next=6,c.a.awrap(r.request({packageRemove:{pkgs:n}}));case 6:if(!(t=a.sent).channelClosed){a.next=9;break}return a.abrupt("return",!1);case 9:return a.abrupt("return",Boolean(t.ok));case 10:case"end":return a.stop()}}))},searchPackages:function(e){var n,t,o,u,i,s,p;return c.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if((null===(t=null===(n=r.getRepl())||void 0===n?void 0:n.language)||void 0===t||!t.includes("python"))&&"pygame"!==t){f.next=10;break}return f.prev=2,f.abrupt("return",h()("https://pipsearch.amasad.repl.co/search?name="+encodeURIComponent(e),{mode:"cors"}).then((function(e){return e.json()})));case 6:return f.prev=6,f.t0=f.catch(2),l.c(f.t0),f.abrupt("return",[]);case 10:return f.next=12,c.a.awrap(b());case 12:return o=f.sent,u=Object(a.a)(o,2),i=u[0],s=u[1],f.next=18,c.a.awrap(i.request({packageSearch:{query:e}}));case 18:if(!(p=f.sent).channelClosed){f.next=21;break}return f.abrupt("return",[]);case 21:if(s(),"packageSearchResp"!==p.body||!p.packageSearchResp){f.next=24;break}return f.abrupt("return",p.packageSearchResp.results||[]);case 24:return l.c(new Error("Unknown packager3 command ".concat(p.body,". ")+"Expected packageSearchResp. Received error: ".concat(p.error))),f.abrupt("return",[]);case 26:case"end":return f.stop()}}),null,null,[[2,6]])},fetchPackageInfo:function(e){var r,n,t,o,u;return c.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,c.a.awrap(b());case 2:return r=i.sent,n=Object(a.a)(r,2),t=n[0],o=n[1],i.next=8,c.a.awrap(t.request({packageInfo:{pkg:{name:e}}}));case 8:if(!(u=i.sent).channelClosed){i.next=11;break}return i.abrupt("return",void 0);case 11:if(o(),"packageInfoResp"!==u.body||!u.packageInfoResp){i.next=14;break}return i.abrupt("return",u.packageInfoResp.pkg||void 0);case 14:return l.c(new Error("Unknown packager3 command ".concat(u.body,". ")+"Expected packageInfoResp. Received error: ".concat(u.error))),i.abrupt("return",void 0);case 16:case"end":return i.stop()}}))},installPackages:function(){var e,r;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(f());case 2:return e=n.sent,n.next=5,c.a.awrap(e.request({packageInstall:{}}));case 5:if(!(r=n.sent).channelClosed){n.next=8;break}return n.abrupt("return",!1);case 8:return n.abrupt("return",Boolean(r.ok));case 9:case"end":return n.stop()}}))},listSpecfile:function(){var e,r,n,t,o,u,i,s;return c.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,c.a.awrap(b());case 2:return e=p.sent,r=Object(a.a)(e,2),n=r[0],t=r[1],p.next=8,c.a.awrap(n.request({packageListSpecfile:{}}));case 8:if(!(o=p.sent).channelClosed){p.next=11;break}return p.abrupt("return",{packages:null,error:"channel closed"});case 11:t(),p.t0=o.body,p.next="error"===p.t0?15:"packageListSpecfileResp"===p.t0?16:20;break;case 15:return p.abrupt("return",{packages:null,error:"list specfile failed: ".concat(o.error)});case 16:if(i=null===(u=o.packageListSpecfileResp)||void 0===u?void 0:u.pkgs){p.next=19;break}return p.abrupt("return",{packages:null,error:"list specfile returned an empty response"});case 19:return p.abrupt("return",{packages:i,error:null});case 20:return s="Unknown packager3 listSpecFile command ".concat(o.body,". ")+"Expected error or packageListSpecfileResp",l.c(new Error(s)),p.abrupt("return",{packages:null,error:s});case 23:case"end":return p.stop()}}))},onOutput:function(e){return n.on(t.OUTPUT,e),function(){n.removeListener(t.OUTPUT,e)}},onError:function(e){return n.on(t.ERROR,e),function(){n.removeListener(t.ERROR,e)}},onStateChanged:function(e){return n.on(t.STATE_CHANGED,e),function(){n.removeListener(t.STATE_CHANGED,e)}}}}n.d(r,"a",(function(){return g}))},h7rM:function(e,r,n){"use strict";n.d(r,"a",(function(){return a})),n.d(r,"b",(function(){return o}));var t=n("/MKj");function a(e,r,n,t){var a=e.workspace[r].plugins[n];if(a.type!==t)throw new Error("expected type to be "+t);return a.state}function o(e,r,n,o){var c=Object(t.f)((function(t){return a(t,e,r,n)}),o),u=Object(t.e)();return[c,function(n){u({type:"SET_STATE",wid:e,pud:r,state:n})}]}},sMwv:function(e,r,n){"use strict";n.d(r,"a",(function(){return l}));var t=n("doui"),a=n("q1tI"),o=n("nOHt"),c=n("VoYB"),u=n("tZOq"),i=n("Z+Ew"),s=n("zgDP");function l(){var e,r,n,l=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).onFork,p=Object(o.useRouter)(),f=Object(c.a)().showError,d=Object(u.cc)({onCompleted:function(e){var r="Repl"===(null===e||void 0===e?void 0:e.createRepl.__typename)?e.createRepl:null;r&&(l&&l(),p.push({pathname:Object(i.a)(),query:{replUrl:r.url}},{pathname:r.url}))}}),b=Object(t.a)(d,2),h=b[0],v=b[1],g="UserError"===(null===(e=v.data)||void 0===e?void 0:e.createRepl.__typename)?null===(r=v.data)||void 0===r?void 0:r.createRepl.message:null===(n=v.error)||void 0===n?void 0:n.message;return a.useEffect((function(){g&&f(g)}),[g,f]),[a.useCallback((function(e,r){var n=r.trackingData;h({variables:{input:{originId:e}}}),Object(s.track)(s.events.REPL_FORKED,n)}),[h]),{loading:v.loading}]}}}]);
//# sourceMappingURL=451d5a0e4f2ed5f2f3ae5af60ad35686b19f74af.1f30ab7f120ea87784cd.js.map