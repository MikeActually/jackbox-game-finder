(this["webpackJsonpjackbox-game-finder"]=this["webpackJsonpjackbox-game-finder"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('{"games":[{"name":"You Don\'t Know Jack 2015","minPlayers":1,"maxPlayers":4,"pack":"jp1","audience":false},{"name":"Drawful","minPlayers":3,"maxPlayers":8,"pack":"jp1","audience":false},{"name":"Word Spud","minPlayers":2,"maxPlayers":8,"pack":"jp1","audience":false},{"name":"Lie Swatter","minPlayers":1,"maxPlayers":1000,"pack":"jp1"},{"name":"Fibbage XL","minPlayers":2,"maxPlayers":8,"pack":"jp1","audience":false},{"name":"Fibbage 2","minPlayers":2,"maxPlayers":8,"pack":"jp2","audience":true},{"name":"Earwax","minPlayers":3,"maxPlayers":8,"pack":"jp2","audience":true},{"name":"Bidiots","minPlayers":3,"maxPlayers":6,"pack":"jp2","audience":false},{"name":"Quiplash XL","minPlayers":3,"maxPlayers":8,"pack":"jp2","audience":true},{"name":"Bomb Corp","minPlayers":1,"maxPlayers":4,"pack":"jp2","audience":false},{"name":"Quiplash 2","minPlayers":3,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Trivia Murder Party","minPlayers":1,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Guesspionage","minPlayers":2,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Fakin\' It","minPlayers":3,"maxPlayers":6,"pack":"jp3","audience":true},{"name":"Tee K.O","minPlayers":3,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Fibbage 3","minPlayers":2,"maxPlayers":8,"pack":"jp4","audience":true},{"name":"Survive the Internet","minPlayers":3,"maxPlayers":8,"pack":"jp4","audience":true},{"name":"Monster Seeking Monster","minPlayers":3,"maxPlayers":7,"pack":"jp4","audience":true},{"name":"Bracketeering","minPlayers":3,"maxPlayers":16,"pack":"jp4","audience":true},{"name":"Civic Doodle","minPlayers":3,"maxPlayers":8,"pack":"jp4","audience":true},{"name":"You Don\'t Know Jack: Full Stream","minPlayers":1,"maxPlayers":8,"pack":"jp5","audience":true},{"name":"Split the Room","minPlayers":3,"maxPlayers":8,"pack":"jp5","audience":true},{"name":"Mad Verse City","minPlayers":3,"maxPlayers":8,"pack":"jp5","audience":true},{"name":"Zeeple Dome","minPlayers":1,"maxPlayers":6,"pack":"jp5","audience":false},{"name":"Patently Stupid","minPlayers":3,"maxPlayers":6,"pack":"jp5","audience":true},{"name":"Trivia Murder Party 2","minPlayers":1,"maxPlayers":8,"pack":"jp6","audience":true},{"name":"Role Models","minPlayers":3,"maxPlayers":6,"pack":"jp6","audience":true},{"name":"Joke Boat","minPlayers":3,"maxPlayers":8,"pack":"jp6","audience":true},{"name":"Dictionarium","minPlayers":3,"maxPlayers":8,"pack":"jp6","audience":true},{"name":"Push The Button","minPlayers":4,"maxPlayers":10,"pack":"jp6","audience":false}],"packs":{"jp1":"Jackbox Party Pack 1","jp2":"Jackbox Party Pack 2","jp3":"Jackbox Party Pack 3","jp4":"Jackbox Party Pack 4","jp5":"Jackbox Party Pack 5","jp6":"Jackbox Party Pack 6"}}')},44:function(e,a,n){e.exports=n(56)},49:function(e,a,n){},50:function(e,a,n){},56:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),c=n(8),i=n.n(c),l=(n(49),n(50),n(28)),m=n(96),s=n(98),u=n(99),o=n(94),p=n(97),d=n(93),y=n(95),P=n(30);function k(e,a,n){return a[n]<e[n]?-1:a[n]>e[n]?1:0}function x(e,a,n){return a[n]===e[n]?0:!0===e[n]?1:-1}function f(e){var a=e.order,n=e.orderBy,r=e.playerCount,t=P.games;return(t=function(e,a){var n=e.map((function(e,a){return[e,a]}));return n.sort((function(e,n){var r=a(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}(t=function(e,a){return a=parseInt(a),isNaN(a)||(e=e.filter((function(e){return e.minPlayers<=a&&e.maxPlayers>=a||a>e.maxPlayers&&!0===e.audience}))),e}(t,r),function(e,a){var n=a,r=k;switch(a){case"playerCount":n="desc"===e?"maxPlayers":"minPlayers";break;case"audience":r=x}return"desc"===e?function(e,a){return r(e,a,n)}:function(e,a){return-r(e,a,n)}}(a,n))).forEach((function(e,a){t[a].packName=P.packs[e.pack]})),t}var j=n(89),b=n(102),h=[{id:"name",label:"Name"},{id:"pack",numeric:!0,label:"Pack"},{id:"playerCount",numeric:!0,label:"Player Count"},{id:"audience",numeric:!0,label:"Audience"}];function g(e){var a=e.orderBy,n=e.order,r=e.classes,c=e.onRequestSort;return t.a.createElement(j.a,null,t.a.createElement(d.a,null,h.map((function(e){return t.a.createElement(o.a,{key:e.id,align:e.numeric?"right":"left",sortDirection:a===e.id&&n},t.a.createElement(b.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(i=e.id,function(e){c(e,i)})},e.label,a===e.id?t.a.createElement("span",{className:r.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var i}))))}var v=n(101);function E(e){var a=e.onFilterPlayer;return t.a.createElement("div",{style:{textAlign:"left"}},t.a.createElement("form",null,t.a.createElement(v.a,{id:"playerCount",label:"Number of Players",variant:"outlined",onChange:a})))}var w=Object(m.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function J(){var e=w(),a=t.a.useState("asc"),n=Object(l.a)(a,2),r=n[0],c=n[1],i=t.a.useState("pack"),m=Object(l.a)(i,2),P=m[0],k=m[1],x=t.a.useState("playerCount"),j=Object(l.a)(x,2),b=j[0],h=j[1];return t.a.createElement("div",null,t.a.createElement(E,{onFilterPlayer:function(e){h(e.target.value)}}),t.a.createElement(p.a,{component:y.a},t.a.createElement(s.a,{className:e.table,"aria-label":"simple table"},t.a.createElement(g,{orderBy:P,order:r,classes:e,onRequestSort:function(e,a){c(P===a&&"asc"===r?"desc":"asc"),k(a)}}),t.a.createElement(u.a,null,f({order:r,orderBy:P,playerCount:b}).map((function(e,a){var n="enhanced-table-checkbox-".concat(a);return t.a.createElement(d.a,{key:n},t.a.createElement(o.a,{component:"th",scope:"row"},e.name),t.a.createElement(o.a,{align:"right"},e.packName),t.a.createElement(o.a,{align:"right"},e.minPlayers,"-",e.maxPlayers),t.a.createElement(o.a,{align:"right"},e.audience?"Yes":"No"))}))))))}var S=n(100);var B=function(){return t.a.createElement(S.a,{component:"main",maxWidth:"md"},t.a.createElement("div",{className:"App"},t.a.createElement("h1",null,"Jackbox Game Finder"),t.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.2ae9f82c.chunk.js.map