(this["webpackJsonpmonday-integration-quickstart-app"]=this["webpackJsonpmonday-integration-quickstart-app"]||[]).push([[0],{18:function(t,e,a){t.exports=a(46)},23:function(t,e,a){},24:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(11),r=a.n(o),i=(a(23),a(4)),c=a(12),u=a(13),l=a(17),d=a(16),h=(a(24),a(14)),m=a.n(h),p=(a(40),a(15)),g=a.n(p),b=m()(),v=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={settings:{},name:"",boardData:null,createCount:{}},n}return Object(u.a)(a,[{key:"createCount",value:function(){var t={};this.state.boardData.boards[0].items.map((function(e){var a=e.column_values[2].text;t[a]?t[a]+=1:t[a]=1})),this.setState({createCount:t}),console.log(this.state.createCount)}},{key:"mapKey",value:function(t){switch(t){case"primary":return"Working on it";case"success":return"Done";case"danger":return"Stuck";case"dark":return"null"}}},{key:"componentDidMount",value:function(){var t=this;b.listen("settings",(function(e){t.setState({settings:e.data})})),b.listen("context",(function(e){t.setState({context:e.data}),console.log(e.data),b.api("query { boards (ids:1825108644) {\n                          items {\n                            column_values {text}\n                          }\n        }\n                }",{variables:{boardIds:t.state.context.boardIds}}).then((function(e){t.setState({boardData:e.data}),t.createCount(),console.log(t.state.boardData)}))}))}},{key:"render",value:function(){var t;return s.a.createElement("div",{className:"App",style:{background:this.state.settings.background}},s.a.createElement(g.a,(t={title:"--Check Your Status Count(s) Here--",text:"Select a 'status type' from the drop-down menu on the right to get started!"},Object(i.a)(t,"text","Status Count: "+(this.state.createCount[this.mapKey(this.state.settings.statusType)]?this.state.createCount[this.mapKey(this.state.settings.statusType)]:0)),Object(i.a)(t,"type",this.state.settings.statusType),t)))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e552da05.chunk.js.map