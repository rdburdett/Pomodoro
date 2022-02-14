(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n.p+"static/media/alarm.2f5bc5e7.mp3"},function(t,e,n){t.exports=n.p+"static/media/tomato-splat.21e6c7e2.mp3"},function(t,e,n){t.exports=n(14)},,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),l=n(5),o=n.n(l),s=n(1),a=(n(13),n(3));function c(t){var e=Math.floor(t).toString().padStart(2,"0");return"".concat(e,":00")}var u=function(t){var e=t.session,n=t.duration,r=100-(null===e||void 0===e?void 0:e.timeRemaining)/(60*n)*100,l=i.a.createElement("div",null,i.a.createElement("div",{className:"row mt-4 mb-2"},i.a.createElement("div",{className:"col text-light"},i.a.createElement("h2",{"data-testid":"session-title"},null===e||void 0===e?void 0:e.label," for ",c(n)," minutes"),i.a.createElement("p",{className:"lead text-light","data-testid":"session-sub-title"},function(t){var e=Math.floor(t%3600/60).toString().padStart(2,"0"),n=Math.round(t%60).toString().padStart(2,"0");return"".concat(e,":").concat(n)}(null===e||void 0===e?void 0:e.timeRemaining)," remaining"))),i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"progress",style:{height:"20px"}},i.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":r,style:{width:"".concat(r,"%")}})))));return e?l:null};var m=function(t){var e,n=t.isTimerRunning,r=t.stopBtnDisabled,l=t.stopTimer,o=t.playPause,a=t.splatCountHandler,c=t.splat;return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},i.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:function(){o(),c(),a()}},i.a.createElement("span",{className:(e={oi:!0,"oi-media-play":!n,"oi-media-pause":n},Object.entries(e).reduce((function(t,e){var n=Object(s.a)(e,2),r=n[0],i=n[1];return t.concat(i?r:void 0)}),[]).filter((function(t){return void 0!==t})).join(" "))})),i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",onClick:function(){l(),c(),a()},disabled:r},i.a.createElement("span",{className:"oi oi-media-stop"})))))};var d=n(2),k=n(6),f=n.n(k),F=n(7),p=n.n(F);var E=function(t){var e=t.focusDuration,n=t.decreaseFocus,r=t.increaseFocus,l=t.splatCountHandler,o=t.splat;return i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"justify-content-center input-group input-group-lg mb-2"},i.a.createElement("span",{className:"input-group-text bg-secondary text-light border border-secondary end-fix","data-testid":"duration-focus"},"Focus Duration: ",c(e)),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:function(){n(),o(),l()}},i.a.createElement("span",{className:"oi oi-minus"})),i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:function(){r(),o(),l()}},i.a.createElement("span",{className:"oi oi-plus"}))))))};var C=function(t){var e=t.breakDuration,n=t.decreaseBreak,r=t.increaseBreak,l=t.splatCountHandler,o=t.splat;return i.a.createElement("div",{className:"row mb-2"},i.a.createElement("div",{className:"col"},i.a.createElement("div",null,i.a.createElement("div",{className:"justify-content-center input-group input-group-lg mb-2"},i.a.createElement("span",{className:"input-group-text bg-secondary text-light border border-secondary end-fix","data-testid":"duration-break"},"Break Duration: ",c(e)),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:function(){n(),o(),l()}},i.a.createElement("span",{className:"oi oi-minus"})),i.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:function(){r(),o(),l()}},i.a.createElement("span",{className:"oi oi-plus"})))))))};function b(t){var e=Math.max(0,t.timeRemaining-1);return Object(a.a)(Object(a.a)({},t),{},{timeRemaining:e})}var j=function(t){var e=t.splatCountHandler,n=Object(r.useState)(!1),l=Object(s.a)(n,2),o=l[0],a=l[1],c=Object(r.useState)(null),k=Object(s.a)(c,2),F=k[0],j=k[1],v=Object(r.useState)(25),g=Object(s.a)(v,2),B=g[0],N=g[1],D=Object(r.useState)(5),y=Object(s.a)(D,2),h=y[0],O=y[1],A=Object(r.useState)(!0),x=Object(s.a)(A,2),S=x[0],M=x[1];!function(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=t}),[t]),Object(r.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])}((function(){return 0===F.timeRemaining?(_(),j(function(t,e){return function(n){return"Focusing"===n.label?{label:"On Break",timeRemaining:60*e}:{label:"Focusing",timeRemaining:60*t}}}(B,h))):j(b)}),o?1e3:null);var w=Object(d.a)(f.a),_=Object(s.a)(w,1)[0],R=Object(d.a)(p.a),I=Object(s.a)(R,1)[0],H="Focusing"===(null===F||void 0===F?void 0:F.label)?B:h;return i.a.createElement("div",{className:"pomodoro"},i.a.createElement(E,{focusDuration:B,decreaseFocus:function(){!o&&B>=10&&N((function(t){return t-5}))},increaseFocus:function(){!o&&B<=55&&N((function(t){return t+5}))},splatCountHandler:e,splat:I}),i.a.createElement(C,{breakDuration:h,decreaseBreak:function(){!o&&h>=2&&O((function(t){return t-1}))},increaseBreak:function(){!o&&h<=14&&O((function(t){return t+1}))},splatCountHandler:e,splat:I}),i.a.createElement(m,{isTimerRunning:o,stopBtnDisabled:S,playPause:function(){a((function(t){var e=!t;return e&&j((function(t){return null===t?(M(!1),{label:"Focusing",timeRemaining:60*B}):t})),e}))},stopTimer:function(){a(!1),j(null),M(!0)},splatCountHandler:e,splat:I}),i.a.createElement(u,{session:F,duration:H}))};var v,g,B=function(t){var e=t.splatScore;return i.a.createElement("div",null,"Splat Score: ",e)},N=["svgRef","title"];function D(){return(D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var h=function(t){var e=t.svgRef,n=t.title,r=y(t,N);return i.a.createElement("svg",D({id:"Icons",x:"0px",y:"0px",viewBox:"0 0 48 48",style:{enableBackground:"new 0 0 48 48"},xmlSpace:"preserve",ref:e},r),n?i.a.createElement("title",null,n):null,v||(v=i.a.createElement("style",{type:"text/css"},"\n\t.st0{opacity:0.15;fill:#45413C;}\n\t.st1{fill:#FFE500;}\n\t.st2{fill:#EBCB00;}\n\t.st3{fill:none;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st4{fill:#FFAA54;}\n\t.st5{fill:#FF8A14;}\n\t.st6{fill:#FFB0CA;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st7{fill:#FF87AF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st8{fill:#FFCC99;}\n\t.st9{fill:#FFFFFF;}\n\t.st10{fill:#F0F0F0;}\n\t.st11{fill:#BF8256;}\n\t.st12{fill:#915E3A;}\n\t.st13{fill:#DEA47A;}\n\t.st14{fill:#F0D5A8;}\n\t.st15{fill:#DEBB7E;}\n\t.st16{fill:#F7E5C6;}\n\t.st17{fill:#FF8A14;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st18{fill:#FFF5E3;}\n\t.st19{fill:#FFF48C;}\n\t.st20{fill:#FFFACF;}\n\t.st21{fill:#FFFCE5;}\n\t.st22{fill:#FF87AF;}\n\t.st23{fill:#FFB0CA;}\n\t.st24{fill:#FFE500;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st25{fill:#9CEB60;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st26{fill:#FFFACF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st27{fill:#00F5BC;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st28{fill:#BF8256;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st29{fill:#FFE3CF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st30{fill:#FF6242;}\n\t.st31{fill:#FF866E;}\n\t.st32{fill:none;stroke:#E04122;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st33{fill:#FFFEF2;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st34{fill:#FF6242;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st35{fill:#FFA694;}\n\t.st36{fill:#FFFFFF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st37{fill:#FFFEF2;}\n\t.st38{fill:#FF6196;}\n\t.st39{fill:#B89558;}\n\t.st40{fill:none;stroke:#915E3A;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st41{fill:#DEBB7E;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st42{fill:#6DD627;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st43{fill:#E5F8FF;}\n\t.st44{fill:#E8F4FA;}\n\t.st45{fill:#E8F4FA;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st46{fill:#FFCCDD;}\n\t.st47{fill:#E5F8FF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st48{fill:#00B8F0;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st49{fill:#00B8F0;}\n\t.st50{fill:#4ACFFF;}\n\t.st51{fill:#E04122;}\n\t.st52{fill:#E04122;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st53{fill:#87898C;}\n\t.st54{fill:#BDBEC0;}\n\t.st55{fill:#656769;}\n\t.st56{fill:#525252;}\n\t.st57{fill:#FFF48C;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st58{fill:#6DD627;}\n\t.st59{fill:#EB6D00;}\n\t.st60{fill:#46B000;}\n\t.st61{fill:#80DDFF;}\n\t.st62{fill:#DAEDF7;}\n\t.st63{fill:#BF8DF2;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st64{fill:#9F5AE5;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st65{fill:#C8FFA1;}\n\t.st66{fill:#E4FFD1;}\n\t.st67{fill:#9CEB60;}\n\t.st68{fill:#E5FEFF;}\n\t.st69{fill:#B8ECFF;}\n\t.st70{fill:#E0E0E0;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st71{fill:#E0E0E0;}\n\t.st72{fill:none;stroke:#4F4B45;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st73{fill:none;stroke:#4F4B45;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st74{fill:#E0366F;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st75{fill:none;stroke:#45413C;stroke-miterlimit:10;}\n\t.st76{fill:#FF866E;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st77{fill:#45413C;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st78{fill:#9F5AE5;}\n\t.st79{fill:#803EC2;}\n\t.st80{fill:#803EC2;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st81{fill:#BF8DF2;}\n\t.st82{fill:#FFAA54;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st83{fill:none;stroke:#45413C;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st84{fill:#FFCCDD;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st85{fill:#FF6196;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st86{fill:#FFE5EE;}\n\t.st87{fill:#F7E5C6;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st88{fill:#E5FFF9;}\n\t.st89{fill:none;stroke:#45413C;stroke-width:1.0064;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st90{fill:#4AEFF7;}\n\t.st91{fill:#A6FBFF;}\n\t.st92{fill:#E5FEFF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st93{fill:#46B000;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st94{fill:#FFFFFF;stroke:#45413C;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st95{fill:#FFFFFF;stroke:#45413C;stroke-miterlimit:10;}\n\t.st96{fill:#009FD9;}\n\t.st97{fill:#00DFEB;}\n\t.st98{fill:#C0DCEB;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st99{fill:#00DFEB;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st100{fill:#FFE5EE;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st101{fill:#8CA4B8;}\n\t.st102{fill:#ADC4D9;}\n\t.st103{fill:#656769;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st104{fill:#F0F0F0;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st105{fill:#C0DCEB;}\n\t.st106{fill:#45413C;}\n\t.st107{fill:#FFCABF;}\n\t.st108{fill:#87898C;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st109{fill:#EBCB00;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n")),g||(g=i.a.createElement("g",{id:"XMLID_13254_"},i.a.createElement("ellipse",{id:"XMLID_13261_",className:"st0",cx:24,cy:44.6,rx:18,ry:2.4}),i.a.createElement("path",{className:"st30",d:"M28.8,9.5h-9.7c-9,0-16.3,6.7-16.3,15.7C2.8,35.2,11,44,21,44h6c10,0,18.2-8.8,18.2-18.8 C45.2,16.2,37.9,9.5,28.8,9.5z"}),i.a.createElement("path",{id:"XMLID_13260_",className:"st51",d:"M27,38.6h-6c-9.1,0-16.6-7.2-17.9-16.1c-0.1,0.8-0.2,1.7-0.2,2.6C2.8,35.2,11,44,21,44h6 c10,0,18.2-8.8,18.2-18.8c0-0.9-0.1-1.8-0.2-2.6C43.6,31.4,36.1,38.6,27,38.6z"}),i.a.createElement("path",{className:"st3",d:"M28.8,9.5h-9.7c-9,0-16.3,6.7-16.3,15.7C2.8,35.2,11,44,21,44h6c10,0,18.2-8.8,18.2-18.8 C45.2,16.2,37.9,9.5,28.8,9.5z"}),i.a.createElement("path",{id:"XMLID_13259_",className:"st58",d:"M24.2,15.9c3.4,0.8,6.8,2.7,8.6,3.8c0.6,0.4,1.3-0.1,1.2-0.8c-0.3-1.6-1-4-2.9-5.6 c-0.4-0.3-0.4-1,0.1-1.2c1.2-0.7,2.8-1.1,4.1-1.4c0.7-0.1,0.9-1.1,0.2-1.5c-1.5-0.8-3.7-1.6-6-1.2c-2.7,0.4-4.2,1.6-4.9,2.4 c-0.3,0.3-0.8,0.3-1.2,0c-0.7-0.8-2.2-2-4.9-2.4c-2.4-0.3-4.6,0.5-6,1.2c-0.7,0.3-0.5,1.3,0.2,1.5c1.3,0.3,3,0.7,4.1,1.4 c0.5,0.3,0.5,0.9,0.1,1.2c-1.9,1.6-2.7,4-2.9,5.6c-0.1,0.7,0.6,1.2,1.2,0.8c1.8-1.1,5.2-3,8.6-3.8C23.9,15.9,24.1,15.9,24.2,15.9z"}),i.a.createElement("g",{id:"XMLID_13257_"},i.a.createElement("path",{id:"XMLID_13258_",className:"st67",d:"M12.7,10.7c0.4,0.1,0.8,0.2,1.2,0.3c1.3-0.5,2.9-0.8,4.6-0.6c2.7,0.4,4.2,1.6,4.9,2.4 c0.3,0.3,0.8,0.3,1.2,0c0.7-0.8,2.2-2,4.9-2.4c1.7-0.2,3.3,0.1,4.6,0.6c0.4-0.1,0.8-0.2,1.2-0.3c0.7-0.1,0.9-1.1,0.2-1.5 c-1.5-0.8-3.7-1.6-6-1.2c-2.7,0.4-4.2,1.6-4.9,2.4c-0.3,0.3-0.8,0.3-1.2,0c-0.7-0.8-2.2-2-4.9-2.4c-2.4-0.3-4.6,0.5-6,1.2 C11.8,9.6,12,10.6,12.7,10.7z"})),i.a.createElement("path",{id:"XMLID_13256_",className:"st3",d:"M24.2,15.9c3.4,0.8,6.8,2.7,8.6,3.8c0.6,0.4,1.3-0.1,1.2-0.8c-0.3-1.6-1-4-2.9-5.6 c-0.4-0.3-0.4-1,0.1-1.2c1.2-0.7,2.8-1.1,4.1-1.4c0.7-0.1,0.9-1.1,0.2-1.5c-1.5-0.8-3.7-1.6-6-1.2c-2.7,0.4-4.2,1.6-4.9,2.4 c-0.3,0.3-0.8,0.3-1.2,0c-0.7-0.8-2.2-2-4.9-2.4c-2.4-0.3-4.6,0.5-6,1.2c-0.7,0.3-0.5,1.3,0.2,1.5c1.3,0.3,3,0.7,4.1,1.4 c0.5,0.3,0.5,0.9,0.1,1.2c-1.9,1.6-2.7,4-2.9,5.6c-0.1,0.7,0.6,1.2,1.2,0.8c1.8-1.1,5.2-3,8.6-3.8C23.9,15.9,24.1,15.9,24.2,15.9z"}),i.a.createElement("path",{id:"XMLID_13255_",className:"st42",d:"M22.4,13.1c0,0-0.3-3.9,2.4-6.7c0.3-0.3,0.6-0.4,1-0.4c0.4,0,0.7,0.1,1,0.2 c0.7,0.3,0.8,1.1,0.4,1.7c-1.3,1.8-2.1,5.3-2.1,5.3"}))))},O=i.a.forwardRef((function(t,e){return i.a.createElement(h,D({svgRef:e},t))}));n.p;var A=function(){var t=Object(r.useState)(0),e=Object(s.a)(t,2),n=e[0],l=e[1];return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header p-3 container text-light mb-2"},i.a.createElement("div",{className:"mx-auto tomato-pic d-flex flex-row justify-content-center"},i.a.createElement(O,null)),i.a.createElement("h1",null,"Pomodoro Timer"),i.a.createElement(B,{splatScore:n})),i.a.createElement("div",{className:"container"},i.a.createElement(j,{splatCountHandler:function(){l(n+1)}})))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(A,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.feba76a7.chunk.js.map