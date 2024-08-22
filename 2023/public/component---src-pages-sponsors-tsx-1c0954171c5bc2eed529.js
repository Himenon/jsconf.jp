"use strict";(self.webpackChunkjsconfjp_2023=self.webpackChunkjsconfjp_2023||[]).push([[259],{9086:function(e,t,n){n.d(t,{a:function(){return c}});var r=n(7294),o=n(5086),l=n(1072),i=n(1883);const a=o.default.div.withConfig({displayName:"Breadcrumb__Box",componentId:"sc-17tpall-0"})(["display:flex;"]),s=o.default.span.withConfig({displayName:"Breadcrumb__Text",componentId:"sc-17tpall-1"})(["margin-right:0.5em;font-size:1.4rem;font-weight:bold;text-transform:uppercase;font-family:",";text-transform:uppercase;"],(e=>{let{theme:t}=e;return t.fonts.header}));function c(e){const{path:t}=e,{t:n}=(0,l.$G)();return r.createElement(a,null,r.createElement(i.Link,{to:"/"},r.createElement(s,null,n("top"))),t.filter((e=>!!e)).map((e=>{const t="string"==typeof e?{label:e,to:null}:e;return r.createElement(r.Fragment,{key:t.label},r.createElement(s,null,">"),t.to?r.createElement(i.Link,{to:t.to},r.createElement(s,null,t.label)):r.createElement(s,null,t.label))})))}},6653:function(e,t,n){n.d(t,{$:function(){return l}});var r=n(7294);const o=n(5086).default.div.withConfig({displayName:"ResponsiveBox__Box",componentId:"sc-1iujbbn-0"})(["width:100%;max-width:",";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"],(e=>{let{theme:t}=e;return t.innerWidth}));function l(e){const{children:t}=e;return r.createElement(o,null,t)}},7817:function(e,t,n){n.d(t,{X:function(){return h}});var r=n(7294),o=n(5086),l=n(1072),i=n(8409);const a=(0,o.default)(i.MS).withConfig({displayName:"Sponsor__Link",componentId:"sc-3ldy5q-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid ",";background-color:",";font-size:0;"],(e=>{let{theme:t}=e;return t.colors.border}),(e=>{let{theme:t}=e;return t.colors.base})),s=o.default.p.withConfig({displayName:"Sponsor__Text",componentId:"sc-3ldy5q-1"})(["font-family:",";font-size:1.4rem;"],(e=>{let{theme:t}=e;return t.fonts.text})),c=o.default.img.withConfig({displayName:"Sponsor__Img",componentId:"sc-3ldy5q-2"})(["padding:20px;object-fit:contain;box-sizing:border-box;width:100%;&.premium{width:780px;height:200px;","{width:100%;max-width:780px;max-height:160px;}}&.sponsor{width:100%;height:125px;max-width:440px;}","{padding:10px;&.sponsor{width:100%;max-height:64px;}}"],(e=>{let{theme:t}=e;return t.breakpoints.mobile}),(e=>{let{theme:t}=e;return t.breakpoints.mobile}));function m(e){const{logoUrl:t,url:n,grade:o,name:l,prText:i,showPrText:m}=e;return r.createElement("div",null,r.createElement(a,{href:n,target:"_blank"},r.createElement(c,{src:t,width:"100%",className:o,alt:l,title:i})),m?r.createElement(s,null,i):null)}const u=(0,o.css)(["grid-column-gap:60px;grid-row-gap:30px;","{grid-column-gap:20px;grid-row-gap:20px;}"],(e=>{let{theme:t}=e;return t.breakpoints.mobile})),d=o.default.div.withConfig({displayName:"SponsorList__LargeBox",componentId:"sc-fx81x2-0"})(["display:grid;grid-template-columns:repeat(1,1fr);width:100%;max-width:780px;margin:0 auto;",""],u),p=o.default.div.withConfig({displayName:"SponsorList__SmallBox",componentId:"sc-fx81x2-1"})(["display:grid;grid-template-columns:repeat(2,1fr);",""],u),f=o.default.h3.withConfig({displayName:"SponsorList__SubTitle",componentId:"sc-fx81x2-2"})(["font-family:",";text-align:center;font-size:",";"],(e=>{let{theme:t}=e;return t.fonts.header}),(e=>{let{theme:t}=e;return t.fontSizes.subTitle}));function h(e){var t,n;const{sponsors:o,showPrText:i}=e,{t:a}=(0,l.$G)(),s=o.reduce(((e,t)=>{var n;return{...e,[t.grade]:(null!==(n=e[t.grade])&&void 0!==n?n:[]).concat([t])}}),{});return r.createElement(r.Fragment,null,r.createElement(f,null,a("sponsor.premium")),r.createElement(d,null,null===(t=s.premium)||void 0===t?void 0:t.map((e=>r.createElement(m,Object.assign({key:e.url},e,{showPrText:i}))))),r.createElement(f,null,a("sponsor.sponsor")),r.createElement(p,null,null===(n=s.sponsor)||void 0===n?void 0:n.map((e=>r.createElement(m,Object.assign({key:e.url},e,{showPrText:i}))))))}},4743:function(e,t,n){n.d(t,{D:function(){return l}});var r=n(7294);const o=n(5086).default.h1.withConfig({displayName:"Title__Box",componentId:"sc-138vqym-0"})(["text-align:center;margin:40px 0 60px;font-size:",";text-transform:none;font-family:",";"],(e=>{let{theme:t}=e;return t.fontSizes.title}),(e=>{let{theme:t}=e;return t.fonts.header}));function l(e){const{children:t}=e;return r.createElement(o,null,t)}},3546:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),o=n(1883),l=n(1072),i=n(9216),a=n(2551),s=n(4743),c=n(7817),m=n(6653),u=n(9086);function d(){const e=(0,o.useStaticQuery)("3678834184").allSponsorsYaml.edges.map((e=>{let{node:t}=e;return t})),{t:t}=(0,l.$G)();return r.createElement(i.A,null,r.createElement(a.H,{title:t("sponsors"),description:t("sponsors.description")}),r.createElement(m.$,null,r.createElement(u.a,{path:[t("sponsors")]}),r.createElement(s.D,null,t("sponsors")),r.createElement(c.X,{sponsors:e,showPrText:!0})))}}}]);
//# sourceMappingURL=component---src-pages-sponsors-tsx-1c0954171c5bc2eed529.js.map