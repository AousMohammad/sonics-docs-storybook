import{w as s}from"./window.2b53b05b.js";import{l as i}from"./index.e58082c8.js";var l=s.window,f=function(a,e){return a.length===e.length&&a.every(function(n,o){return n===e[o]})},u=function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")};function d(){return l.STORYBOOK_HOOKS_CONTEXT||null}function c(){var r=d();if(r==null)throw u();return r}function g(r,a,e){var n=c();if(n.currentPhase==="MOUNT"){e!=null&&!Array.isArray(e)&&i.warn("".concat(r," received a final argument that is not an array (instead, received ").concat(e,"). When specified, the final argument must be an array."));var o={name:r,deps:e};return n.currentHooks.push(o),a(o),o}if(n.currentPhase==="UPDATE"){var t=n.getNextHook();if(t==null)throw new Error("Rendered more hooks than during the previous render.");return t.name!==r&&i.warn("Storybook has detected a change in the order of Hooks".concat(n.currentDecoratorName?" called by ".concat(n.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),e!=null&&t.deps==null&&i.warn("".concat(r," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),e!=null&&t.deps!=null&&e.length!==t.deps.length&&i.warn("The final argument passed to ".concat(r,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(t.deps,`
Incoming: `).concat(e)),(e==null||t.deps==null||!f(e,t.deps))&&(a(t),t.deps=e),t}throw u()}function h(r,a,e){var n=g(r,function(t){t.memoizedState=a()},e),o=n.memoizedState;return o}function w(r,a){var e=c(),n=h("useEffect",function(){return{create:r}},a);e.currentEffects.includes(n)||e.currentEffects.push(n)}export{w as u};
//# sourceMappingURL=hooks.54ff01f1.js.map
