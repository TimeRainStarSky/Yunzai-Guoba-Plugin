import{a6 as n,dN as a,dO as t,dP as i,dQ as o,dR as s,dS as e,dT as r,dU as d,dV as f,dW as u,dX as v,dY as c,dZ as l,d_ as p,d$ as g,e0 as _,e1 as m,e2 as b,e3 as h,e4 as y}from"./index.js";function j(o,s,e){if(!n(e))return!1;var r=typeof s;return!!("number"==r?a(e)&&t(s,e.length):"string"==r&&s in e)&&i(e[s],o)}function x(n){return o((function(a,t){var i=-1,o=t.length,s=o>1?t[o-1]:void 0,e=o>2?t[2]:void 0;for(s=n.length>3&&"function"==typeof s?(o--,s):void 0,e&&j(t[0],t[1],e)&&(s=o<3?void 0:s,o=1),a=Object(a);++i<o;){var r=t[i];r&&n(a,r,i,s)}return a}))}function O(n,a,t){(void 0!==t&&!i(n[a],t)||void 0===t&&!(a in n))&&s(n,a,t)}function w(n,a){if(("constructor"!==a||"function"!=typeof n[a])&&"__proto__"!=a)return n[a]}function N(n){return e(n,r(n))}function P(a,t,i,o,s){a!==t&&h(t,(function(e,r){if(s||(s=new y),n(e))!function(a,t,i,o,s,e,r){var h=w(a,i),y=w(t,i),j=r.get(y);if(j)O(a,i,j);else{var x=e?e(h,y,i+"",a,t,r):void 0,P=void 0===x;if(P){var Q=d(y),R=!Q&&f(y),S=!Q&&!R&&u(y);x=y,Q||R||S?d(h)?x=h:v(h)?x=c(h):R?(P=!1,x=l(y,!0)):S?(P=!1,x=p(y,!0)):x=[]:g(y)||_(y)?(x=h,_(h)?x=N(h):n(h)&&!m(h)||(x=b(y))):P=!1}P&&(r.set(y,x),s(x,y,o,e,r),r.delete(y)),O(a,i,x)}}(a,t,r,i,P,o,s);else{var h=o?o(w(a,r),e,r+"",a,t,s):void 0;void 0===h&&(h=e),O(a,r,h)}}),r)}var Q=x((function(n,a,t){P(n,a,t)}));export{P as b,x as c,j as i,Q as m,N as t};
