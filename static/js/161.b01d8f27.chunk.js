(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});i(2791);var n=i(1523),s=i(6842),r=i(7892),a=i.n(r),o=i(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("/SiyuanZhao").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"ChromPolymerDB",subtitle:"A Web Database for High-Resolution Ensemble Models of 3D Single-Cell Chromatin Conformations.",image:"/images/projects/ChromPolymerDB.png",link:"https://github.com/ScheWann/CS522_Project",date:"Present",desc:"A Web Database for High-Resolution Ensemble Models of 3D Single-Cell Chromatin Conformations."},{title:"A Part-to-Whole Circular Cell Explorer",subtitle:"IEEE VIS 2024 Bio+Med+Vis Challenge Published",image:"/images/projects/Cell_Explorer.png",link:"https://github.com/ScheWann/A-Part-to-Whole-Circular-Cell-Explorer",date:"2024-10",desc:"This work provides deeper insights into the molecular mechanisms underlying complex biological processes within tissues. It has been accepted by IEEE VIS 2024 Bio+Med+Vis Challenge workshop."},{title:"Potato vs Chef",subtitle:"UIC CS 426 Final Unity Game Project",image:"/images/projects/PvC.png",link:"https://github.com/ScheWann/CS426_PvC",date:"2024-05",desc:"Potato vs Chef is a multiplayer PC game designed for children aged 6-14, player vs player game. The game revolves around a culinary chase where players take on the roles of Chef and Potato."},{title:"Electrical activity visualization analysis tool for diagnosing epileptic seizures and propagation",subtitle:"Electrical activity visualization analysis tool for diagnosing epileptic seizures and propagation",image:"/images/projects/epliepsy.png",link:"https://schewann.github.io/CS529_VDS_Epilepsy/",date:"2023-08",desc:"To enhance the diagnosis and management of patients with severe epilepsy, it's imperative to detect epileptic seizures using EEG signals from multiple electrodes accurately. This project endeavors to introduce a sophisticated visual analysis tool. This will empower physicians to more accurately determine the origin and the intracranial propagation pathways of epileptic activity."},{title:"Gun death distribution",subtitle:"Gun death distribution",image:"/images/projects/CS529.png",link:"https://github.com/ScheWann/CS529HW1",date:"2023-08",desc:"In this visualization, the map is bifurcated into two distinct sections to represent states and counties, offering a nuanced view of gun death distribution across these geographical divisions. It incorporates a packed bubble chart to articulate extensive data from large U.S. counties and a stacked bar chart that provides in-depth information for each state. Adding to its interactivity and detailed exploration, an interactive scatter plot reveals statistics about male and female victims of gun deaths when a state on the map is selected, thereby enhancing the overall clarity and effectiveness of the visualization."},{title:"Design and implementation of integrated game website",subtitle:"game website",image:"/images/projects/game.png",link:"https://github.com/ScheWann/gamewebsite",date:"2019-09",desc:"This is my fabulous Nuxt.js project. After discovering the shortcomings of Vue.js in search engine optimization (SEO), I re-studied and explored Nuxt.js (an improved front-end framework for SEO), and all applied in this project.Here is a completed front-end design."},{title:"Government data crawling and visualization system based on xlrd",subtitle:"Government data crawling and visualization system based on xlrd",link:"https://github.com/ScheWann/Government",image:"/images/projects/govCharts.jpg",date:"2020-04",desc:"Designed and implemented a web crawler using selenium, which crawled all the financial data of the 2016 \u2019resident life\u2019 part of 34 provinces in China and automatically entered Mysql. And for a few provinces with special fiscal data, used BeautifulSoup4 for direct data crawling and storage."},{title:"Intramural Forum Website",subtitle:"A Intramural Forum Website",link:"https://github.com/ScheWann/Intramural-Forum-Website",image:"/images/projects/wpi-forum.png",date:"2022-04",desc:"This is a Forum-Website for WPI students and Professors. including creating your own dashboards, and topics and reply others' comments."}],l=function(){return(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Siyuan Zhao's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,i=36e5,n="millisecond",s="second",r="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},$={s:v,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+v(n,2,"0")+":"+v(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,u),r=i-s<0,a=e.clone().add(n+(r?-1:1),u);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:d,h:a,m:r,s:s,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=g;var S=function(t){return t instanceof j},w=function t(e,i,n){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();b[r]&&(s=r),i&&(b[r]=i,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,s=o}return!n&&s&&(y=s),s||!n&&y},M=function(t,e){if(S(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new j(i)},D=$;D.l=w,D.i=S,D.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(m);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var i=M(t);return this.startOf(e)<=i&&i<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,i){return D.u(t)?this[e]:this.set(i,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var i=this,n=!!D.u(e)||e,l=D.p(t),f=function(t,e){var s=D.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return n?s:s.endOf(o)},m=function(t,e){return D.w(i.toDate()[t].apply(i.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},p=this.$W,g=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case h:return n?f(1,0):f(31,11);case u:return n?f(1,g):f(0,g+1);case c:var y=this.$locale().weekStart||0,b=(p<y?p+7:p)-y;return f(n?v-b:v+(6-b),g);case o:case d:return m($+"Hours",0);case a:return m($+"Minutes",1);case r:return m($+"Seconds",2);case s:return m($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var i,c=D.p(t),l="set"+(this.$u?"UTC":""),f=(i={},i[o]=l+"Date",i[d]=l+"Date",i[u]=l+"Month",i[h]=l+"FullYear",i[a]=l+"Hours",i[r]=l+"Minutes",i[s]=l+"Seconds",i[n]=l+"Milliseconds",i)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(n,l){var d,f=this;n=Number(n);var m=D.p(l),p=function(t){var e=M(f);return D.w(e.date(e.date()+Math.round(t*n)),f)};if(m===u)return this.set(u,this.$M+n);if(m===h)return this.set(h,this.$y+n);if(m===o)return p(1);if(m===c)return p(7);var g=(d={},d[r]=e,d[a]=i,d[s]=t,d)[m]||1,v=this.$d.getTime()+n*g;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,l=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].slice(0,r)},h=function(t){return D.s(r%12||12,t,"0")},d=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:l(i.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,c,2),ddd:l(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:D.s(r,2,"0"),h:h(1),hh:h(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return n.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var m,p=D.p(d),g=M(n),v=(g.utcOffset()-this.utcOffset())*e,$=this-g,y=D.m(this,g);return y=(m={},m[h]=y/12,m[u]=y,m[l]=y/3,m[c]=($-v)/6048e5,m[o]=($-v)/864e5,m[a]=$/i,m[r]=$/e,m[s]=$/t,m)[p]||$,f?y:D.a(y)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return b[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=w(t,e,!0);return n&&(i.$L=n),i},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),C=j.prototype;return M.prototype=C,[["$ms",n],["$s",s],["$m",r],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,j,M),t.$i=!0),M},M.locale=w,M.isDayjs=S,M.unix=function(t){return M(1e3*t)},M.en=b[y],M.Ls=b,M.p={},M}()}}]);
//# sourceMappingURL=161.b01d8f27.chunk.js.map