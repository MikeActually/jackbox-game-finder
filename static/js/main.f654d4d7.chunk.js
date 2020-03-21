(this["webpackJsonpjackbox-game-finder"]=this["webpackJsonpjackbox-game-finder"]||[]).push([[0],{35:function(e){e.exports=JSON.parse('{"games":[{"name":"You Don\'t Know Jack 2015","minPlayers":1,"maxPlayers":4,"pack":"jp1","audience":false},{"name":"Drawful","minPlayers":3,"maxPlayers":8,"pack":"jp1","audience":false},{"name":"Word Spud","minPlayers":2,"maxPlayers":8,"pack":"jp1","audience":false},{"name":"Lie Swatter","minPlayers":1,"maxPlayers":1000,"pack":"jp1"},{"name":"Fibbage XL","minPlayers":2,"maxPlayers":8,"pack":"jp1","audience":false},{"name":"Fibbage 2","minPlayers":2,"maxPlayers":8,"pack":"jp2","audience":true},{"name":"Earwax","minPlayers":3,"maxPlayers":8,"pack":"jp2","audience":true},{"name":"Bidiots","minPlayers":3,"maxPlayers":6,"pack":"jp2","audience":false},{"name":"Quiplash XL","minPlayers":3,"maxPlayers":8,"pack":"jp2","audience":true},{"name":"Bomb Corp","minPlayers":1,"maxPlayers":4,"pack":"jp2","audience":false},{"name":"Quiplash 2","minPlayers":3,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Trivia Murder Party","minPlayers":1,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Guesspionage","minPlayers":2,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Fakin\' It","minPlayers":3,"maxPlayers":6,"pack":"jp3","audience":true},{"name":"Tee K.O","minPlayers":3,"maxPlayers":8,"pack":"jp3","audience":true},{"name":"Fibbage 3","minPlayers":2,"maxPlayers":8,"pack":"jp4","audience":true},{"name":"Survive the Internet","minPlayers":3,"maxPlayers":8,"pack":"jp4","audience":true},{"name":"Monster Seeking Monster","minPlayers":3,"maxPlayers":7,"pack":"jp4","audience":true},{"name":"Bracketeering","minPlayers":3,"maxPlayers":16,"pack":"jp4","audience":true},{"name":"Civic Doodle","minPlayers":3,"maxPlayers":8,"pack":"jp4","audience":true},{"name":"You Don\'t Know Jack: Full Stream","minPlayers":1,"maxPlayers":8,"pack":"jp5","audience":true},{"name":"Split the Room","minPlayers":3,"maxPlayers":8,"pack":"jp5","audience":true},{"name":"Mad Verse City","minPlayers":3,"maxPlayers":8,"pack":"jp5","audience":true},{"name":"Zeeple Dome","minPlayers":1,"maxPlayers":6,"pack":"jp5","audience":false},{"name":"Patently Stupid","minPlayers":3,"maxPlayers":6,"pack":"jp5","audience":true},{"name":"Trivia Murder Party 2","minPlayers":1,"maxPlayers":8,"pack":"jp6","audience":true},{"name":"Role Models","minPlayers":3,"maxPlayers":6,"pack":"jp6","audience":true},{"name":"Joke Boat","minPlayers":3,"maxPlayers":8,"pack":"jp6","audience":true},{"name":"Dictionarium","minPlayers":3,"maxPlayers":8,"pack":"jp6","audience":true},{"name":"Push The Button","minPlayers":4,"maxPlayers":10,"pack":"jp6","audience":false}],"packs":{"jp1":"Jackbox Party Pack 1","jp2":"Jackbox Party Pack 2","jp3":"Jackbox Party Pack 3","jp4":"Jackbox Party Pack 4","jp5":"Jackbox Party Pack 5","jp6":"Jackbox Party Pack 6"}}')},50:function(e,a,n){e.exports=n(61)},55:function(e,a,n){},61:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),c=n(9),i=n.n(c),l=(n(55),n(27)),m=n(104),o=n(106),s=n(107),u=n(100),p=n(105),d=n(99),y=n(102),P=n(35);function k(e,a,n){return a[n]<e[n]?-1:a[n]>e[n]?1:0}function x(e,a,n){return a[n]===e[n]?0:!0===e[n]?1:-1}function f(e){var a=e.order,n=e.orderBy,r=e.playerCount,t=e.audience,c=P.games;return(c=function(e,a){var n=e.map((function(e,a){return[e,a]}));return n.sort((function(e,n){var r=a(e[0],n[0]);return 0!==r?r:e[1]-n[1]})),n.map((function(e){return e[0]}))}(c=function(e,a,n){return a=parseInt(a),isNaN(a)||(e=e.filter((function(e){return e.minPlayers<=a&&e.maxPlayers>=a||!0===n&&a>e.maxPlayers&&!0===e.audience}))),e}(c,r,t),function(e,a){var n=a,r=k;switch(a){case"playerCount":n="desc"===e?"maxPlayers":"minPlayers";break;case"audience":r=x}return"desc"===e?function(e,a){return r(e,a,n)}:function(e,a){return-r(e,a,n)}}(a,n))).forEach((function(e,a){c[a].packName=P.packs[e.pack]})),c}var j=n(95),g=n(112),b=[{id:"name",label:"Name"},{id:"pack",numeric:!0,label:"Pack"},{id:"playerCount",numeric:!0,label:"Player Count"},{id:"audience",numeric:!0,label:"Audience"}];function h(e){var a=e.orderBy,n=e.order,r=e.classes,c=e.onRequestSort;return t.a.createElement(j.a,null,t.a.createElement(d.a,null,b.map((function(e){return t.a.createElement(u.a,{key:e.id,align:e.numeric?"right":"left",sortDirection:a===e.id&&n},t.a.createElement(g.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(i=e.id,function(e){c(e,i)})},e.label,a===e.id?t.a.createElement("span",{className:r.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var i}))))}var E=n(101),v=n(109),w=n(113),S=n(111),C=n(103);function J(e){var a=e.onFilterPlayer,n=e.onAudienceFilter;return t.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(e.target.elements.playerCount.value)}},t.a.createElement(E.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"center"},t.a.createElement(E.a,{item:!0,container:!0,xs:12,sm:6,spacing:3,justify:"flex-end"},t.a.createElement(E.a,{item:!0,xs:12},t.a.createElement(v.a,{name:"playerCount",label:"Player Count",variant:"outlined",onChange:function(e){a(e.target.value)}})),t.a.createElement(E.a,{item:!0,xs:11},t.a.createElement(w.a,{control:t.a.createElement(S.a,{name:"audience",color:"primary",size:"small",onChange:function(e){n(e.target.checked)}}),label:"Overflow to Audience?"})),t.a.createElement(E.a,{item:!0,xs:12},t.a.createElement(C.a,null,"When toggle is on and your player count exceeds the maximum for a game, then games displayed will also allow player count to overflow into audience ")))))}var B=Object(m.a)((function(e){return{visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function F(){var e=B(),a=t.a.useState("asc"),n=Object(l.a)(a,2),r=n[0],c=n[1],i=t.a.useState("pack"),m=Object(l.a)(i,2),P=m[0],k=m[1],x=t.a.useState(""),j=Object(l.a)(x,2),g=j[0],b=j[1],v=t.a.useState(!1),w=Object(l.a)(v,2),S=w[0],C=w[1];return t.a.createElement(E.a,{container:!0,spacing:3},t.a.createElement(E.a,{item:!0,xs:12},t.a.createElement(J,{onFilterPlayer:function(e){b(e)},onAudienceFilter:function(e){C(e)},audience:!0})),t.a.createElement(E.a,{item:!0,xs:12},t.a.createElement(p.a,{component:y.a},t.a.createElement(o.a,{className:e.table,"aria-label":"simple table"},t.a.createElement(h,{orderBy:P,order:r,classes:e,onRequestSort:function(e,a){c(P===a&&"asc"===r?"desc":"asc"),k(a)}}),t.a.createElement(s.a,null,f({order:r,orderBy:P,playerCount:g,audience:S}).map((function(e,a){var n="enhanced-table-checkbox-".concat(a);return t.a.createElement(d.a,{key:n},t.a.createElement(u.a,{component:"th",scope:"row"},e.name),t.a.createElement(u.a,{align:"right"},e.packName),t.a.createElement(u.a,{align:"right"},e.minPlayers,"-",e.maxPlayers),t.a.createElement(u.a,{align:"right"},e.audience?"Yes":"No"))})))))))}var N=n(108);var D=function(){return t.a.createElement(N.a,{component:"main",maxWidth:"md"},t.a.createElement("h1",null,"Jackbox Game Finder"),t.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.f654d4d7.chunk.js.map