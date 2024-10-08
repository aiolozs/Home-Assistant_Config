"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([[8742],{57772:function(e,t,r){r.d(t,{J:function(){return i}});r(82386),r(36604);var a=r(94100),n=r(23285),i=(0,a.A)((function(e){if(e.time_format===n.Hg.language||e.time_format===n.Hg.system){var t=e.time_format===n.Hg.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===n.Hg.am_pm}))},86466:function(e,t,r){r.r(t),r.d(t,{HaTimeSelector:function(){return f}});var a,n=r(64599),i=r(35806),o=r(71008),l=r(62193),d=r(2816),u=r(27927),s=(r(81027),r(66360)),c=r(29818),f=(r(22483),(0,u.A)([(0,c.EM)("ha-selector-time")],(function(e,t){var r=function(t){function r(){var t;(0,o.A)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=(0,l.A)(this,r,[].concat(n)),e(t),t}return(0,d.A)(r,t),(0,i.A)(r)}(t);return{F:r,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"method",key:"render",value:function(){var e;return(0,s.qy)(a||(a=(0,n.A)([' <ha-time-input .value="','" .locale="','" .disabled="','" .required="','" clearable .helper="','" .label="','" .enableSecond="','"></ha-time-input> '])),"string"==typeof this.value?this.value:void 0,this.hass.locale,this.disabled,this.required,this.helper,this.label,!(null!==(e=this.selector.time)&&void 0!==e&&e.no_second))}}]}}),s.WF))},22483:function(e,t,r){var a,n=r(64599),i=r(35806),o=r(71008),l=r(62193),d=r(2816),u=r(27927),s=(r(81027),r(29193),r(39790),r(7760),r(79977),r(66360)),c=r(29818),f=r(57772),v=r(50880);r(41351),(0,u.A)([(0,c.EM)("ha-time-input")],(function(e,t){var r=function(t){function r(){var t;(0,o.A)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=(0,l.A)(this,r,[].concat(n)),e(t),t}return(0,d.A)(r,t),(0,i.A)(r)}(t);return{F:r,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean,attribute:"enable-second"})],key:"enableSecond",value:function(){return!1}},{kind:"field",decorators:[(0,c.MZ)({type:Boolean,reflect:!0})],key:"clearable",value:void 0},{kind:"method",key:"render",value:function(){var e,t=(0,f.J)(this.locale),r=(null===(e=this.value)||void 0===e?void 0:e.split(":"))||[],i=r[0],o=Number(r[0]);return o&&t&&o>12&&o<24&&(i=String(o-12).padStart(2,"0")),t&&0===o&&(i="12"),(0,s.qy)(a||(a=(0,n.A)([' <ha-base-time-input .label="','" .hours="','" .minutes="','" .seconds="','" .format="','" .amPm="','" .disabled="','" @value-changed="','" .enableSecond="','" .required="','" .clearable="','" .helper="','"></ha-base-time-input> '])),this.label,Number(i),Number(r[1]),Number(r[2]),t?12:24,t&&o>=12?"PM":"AM",this.disabled,this._timeChanged,this.enableSecond,this.required,this.clearable&&void 0!==this.value,this.helper)}},{kind:"method",key:"_timeChanged",value:function(e){e.stopPropagation();var t,r=e.detail.value,a=(0,f.J)(this.locale);if(!(void 0===r||isNaN(r.hours)&&isNaN(r.minutes)&&isNaN(r.seconds))){var n=r.hours||0;r&&a&&("PM"===r.amPm&&n<12&&(n+=12),"AM"===r.amPm&&12===n&&(n=0)),t="".concat(n.toString().padStart(2,"0"),":").concat(r.minutes?r.minutes.toString().padStart(2,"0"):"00",":").concat(r.seconds?r.seconds.toString().padStart(2,"0"):"00")}t!==this.value&&(this.value=t,(0,v.r)(this,"change"),(0,v.r)(this,"value-changed",{value:t}))}}]}}),s.WF)},32350:function(e,t,r){var a=r(32174),n=r(23444),i=r(33616),o=r(36565),l=r(87149),d=Math.min,u=[].lastIndexOf,s=!!u&&1/[1].lastIndexOf(1,-0)<0,c=l("lastIndexOf"),f=s||!c;e.exports=f?function(e){if(s)return a(u,this,arguments)||0;var t=n(this),r=o(t);if(0===r)return-1;var l=r-1;for(arguments.length>1&&(l=d(l,i(arguments[1]))),l<0&&(l=r+l);l>=0;l--)if(l in t&&t[l]===e)return l||0;return-1}:u},90924:function(e,t,r){var a=r(33616),n=r(53138),i=r(22669),o=RangeError;e.exports=function(e){var t=n(i(this)),r="",l=a(e);if(l<0||l===1/0)throw new o("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(r+=t);return r}},15814:function(e,t,r){var a=r(41765),n=r(32350);a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})}}]);
//# sourceMappingURL=8742.VxAuesEt5UY.js.map