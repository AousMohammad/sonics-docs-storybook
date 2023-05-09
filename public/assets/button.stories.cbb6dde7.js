import{R as u}from"./index.ef144be7.js";import{A as x,M as C,a as T,C as h,S as j}from"./Props.7b1972f4.js";import{j as D}from"./jsx-runtime.1665ac84.js";import"./index.e58082c8.js";import"./window.2b53b05b.js";import"./iframe.af71a2c2.js";import"./string.8f30b532.js";import"./_baseIsEqual.7aaaa3b8.js";import"./index.1cfb97e5.js";import"./runtime.a7ac95d6.js";function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(r){P(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function S(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function w(e,t){if(e==null)return{};var n=S(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}var M=function(t){return typeof t=="function"},E=u.createContext({}),_=function(t){var n=u.useContext(E),r=n;return t&&(r=M(t)?t(n):s(s({},n),t)),r},N="mdxType",X={inlineCode:"code",wrapper:function(t){var n=t.children;return u.createElement(u.Fragment,{},n)}},O=u.forwardRef(function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=w(e,["components","mdxType","originalType","parentName"]),m=_(n),l=r,d=m["".concat(a,".").concat(l)]||m[l]||X[l]||o;return n?u.createElement(d,s(s({ref:t},p),{},{components:n})):u.createElement(d,s({ref:t},p))});O.displayName="MDXCreateElement";function i(e,t){var n=arguments,r=t&&t.mdxType;if(typeof e=="string"||r){var o=n.length,a=new Array(o);a[0]=O;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[N]=typeof e=="string"?e:r,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return u.createElement.apply(null,a)}return u.createElement.apply(null,n)}function c(e){return D("button",{onClick:e.onClick,children:e.children})}c.displayName="Button";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}const B={},F="wrapper";function g({components:e,...t}){return i(F,y({},B,t,{components:e,mdxType:"MDXLayout"}),i(C,{title:"Components/Button",component:c,mdxType:"Meta"}),i("h1",null,"Button"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, euismod aliquam nisl nunc euismod."),i("h2",null,"Props"),i(T,{of:c,mdxType:"ArgsTable"}),i("h2",null,"Examples"),i(h,{mdxType:"Canvas"},i(j,{name:"Default",mdxType:"Story"},i(c,{mdxType:"Button"},"Hello"))))}g.isMDXComponent=!0;const b=()=>i(c,null,"Hello");b.storyName="Default";b.parameters={storySource:{source:"<Button>Hello</Button>"}};const f={title:"Components/Button",component:c,includeStories:["defaultStory"]},L={Default:"defaultStory"};f.parameters=f.parameters||{};f.parameters.docs={...f.parameters.docs||{},page:()=>i(x,{mdxStoryNameToKey:L,mdxComponentAnnotations:f},i(g,null))};const G=["defaultStory"];export{G as __namedExportsOrder,f as default,b as defaultStory};
//# sourceMappingURL=button.stories.cbb6dde7.js.map
