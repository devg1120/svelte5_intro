import{a as O,t as L}from"../chunks/B4nvuYTy.js";import{K as $,x as ee,y as E,C as N,z as ae,l as A,A as te,B as K,D as R,J as T,F as z,G as F,I as re,ag as S,ae as G,m as V,ah as le,ai as ne,P as ie,aj as se,X as de,N as fe,ak as oe,ab as ue,al as ve,h as X,am as ce,an as he,ao as ge,M as _e,w as me,f as J,s as I,c as b,d as m,t as P,ap as be,j as pe,p as U,b as Q}from"../chunks/CJlLnzGF.js";import{d as xe,s as Y}from"../chunks/BpTnGrrI.js";import{s as H}from"../chunks/Bz3NVuBy.js";import{a as ye,e as we}from"../chunks/CSBOTBi8.js";import{b as Ee}from"../chunks/DgOb3btL.js";function Ae(i,e,a,l){for(var s=[],n=e.length,d=0;d<n;d++)ne(e[d].e,s,!0);var c=n>0&&s.length===0&&a!==null;if(c){var h=a.parentNode;ie(h),h.append(a),l.clear(),y(i,e[0].prev,e[n-1].next)}se(s,()=>{for(var u=0;u<n;u++){var t=e[u];c||(l.delete(t.k),y(i,t.prev,t.next)),de(t.e,!c)}})}function ke(i,e,a,l,s,n=null){var d=i,c={flags:e,items:new Map,first:null};{var h=i;d=E?N(fe(h)):h.appendChild($())}E&&ae();var u=null,t=!1,g=oe(()=>{var r=a();return me(r)?r:r==null?[]:G(r)});ee(()=>{var r=A(g),v=r.length;if(t&&v===0)return;t=v===0;let f=!1;if(E){var k=d.data===te;k!==(v===0)&&(d=K(),N(d),R(!1),f=!0)}if(E){for(var p=null,o,_=0;_<v;_++){if(T.nodeType===8&&T.data===ue){d=T,f=!0,R(!1);break}var M=r[_],w=l(M,_);o=W(T,c,p,null,M,w,_,s,e,a),c.items.set(w,o),p=o}v>0&&N(K())}E||Ie(r,c,d,s,e,l,a),n!==null&&(v===0?u?z(u):u=F(()=>n(d)):u!==null&&re(u,()=>{u=null})),f&&R(!0),A(g)}),E&&(d=T)}function Ie(i,e,a,l,s,n,d){var c=i.length,h=e.items,u=e.first,t=u,g,r=null,v=[],f=[],k,p,o,_;for(_=0;_<c;_+=1){if(k=i[_],p=n(k,_),o=h.get(p),o===void 0){var M=t?t.e.nodes_start:a;r=W(M,e,r,r===null?e.first:r.next,k,p,_,l,s,d),h.set(p,r),v=[],f=[],t=r.next;continue}if(Te(o,k,_),o.e.f&S&&z(o.e),o!==t){if(g!==void 0&&g.has(o)){if(v.length<f.length){var w=f[0],x;r=w.prev;var B=v[0],C=v[v.length-1];for(x=0;x<v.length;x+=1)q(v[x],w,a);for(x=0;x<f.length;x+=1)g.delete(f[x]);y(e,B.prev,C.next),y(e,r,B),y(e,C,w),t=w,r=C,_-=1,v=[],f=[]}else g.delete(o),q(o,t,a),y(e,o.prev,o.next),y(e,o,r===null?e.first:r.next),y(e,r,o),r=o;continue}for(v=[],f=[];t!==null&&t.k!==p;)t.e.f&S||(g??(g=new Set)).add(t),f.push(t),t=t.next;if(t===null)continue;o=t}v.push(o),r=o,t=o.next}if(t!==null||g!==void 0){for(var D=g===void 0?[]:G(g);t!==null;)t.e.f&S||D.push(t),t=t.next;var Z=D.length;if(Z>0){var j=c===0?a:null;Ae(e,D,j,h)}}V.first=e.first&&e.first.e,V.last=r&&r.e}function Te(i,e,a,l){le(i.v,e),i.i=a}function W(i,e,a,l,s,n,d,c,h,u){var t=(h&he)!==0,g=(h&ge)===0,r=t?g?ve(s):X(s):s,v=h&ce?X(d):d,f={i:v,v:r,k:n,a:null,e:null,prev:a,next:l};try{return f.e=F(()=>c(i,r,v,u),E),f.e.prev=a&&a.e,f.e.next=l&&l.e,a===null?e.first=f:(a.next=f,a.e.next=f.e),l!==null&&(l.prev=f,l.e.prev=f.e),f}finally{}}function q(i,e,a){for(var l=i.next?i.next.e.nodes_start:a,s=e?e.e.nodes_start:a,n=i.e.nodes_start;n!==l;){var d=_e(n);s.before(n),n=d}}function y(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const Me=(i,e)=>{var a;(a=A(e))==null||a.showModal()};var Ce=L('<button type="button" class="bg-red-500 text-white px-4 py-2 rounded-lg">削除</button> <dialog class="p-4 w-96 backdrop:backdrop-blur-sm backdrop:bg-black/40 bg-white rounded-lg" aria-labelledby="modal-title"><form><h2 id="modal-title" class="text-xl font-bold">記事の削除</h2> <p>本当に削除しますか？</p> <div class="mt-4 flex justify-end"><button class="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg" formmethod="dialog">キャンセル</button> <button class="bg-red-500 text-white px-4 py-2 rounded-lg ml-2" formmethod="post">OK</button></div></form></dialog>',1);function De(i,e){let a=be(null);var l=Ce(),s=J(l);s.__click=[Me,a];var n=I(s,2),d=b(n),c=I(b(d),4),h=I(b(c),2);m(c),m(d),ye(d,u=>{var t;return(t=we)==null?void 0:t(u)}),m(n),Ee(n,u=>pe(a,u),()=>A(a)),P(()=>H(h,"formaction",`/articles/${e.id??""}/delete`)),O(i,l)}xe(["click"]);var Ne=L('<div class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out flex justify-between"><div><a class="hover:underline"><h2 class="text-lg font-bold"> </h2></a> <time class="text-sm text-gray-500"> </time></div> <div><!></div></div>');function Re(i,e){U(e,!0);var a=Ne(),l=b(a),s=b(l),n=b(s),d=b(n,!0);m(n),m(s);var c=I(s,2),h=b(c,!0);m(c),m(l);var u=I(l,2),t=b(u);De(t,{get id(){return e.id}}),m(u),m(a),P((g,r)=>{H(s,"href",`/articles/${e.id??""}`),Y(d,e.title),H(c,"datetime",g),Y(h,r)},[()=>e.createdAt.toISOString(),()=>e.createdAt.toLocaleDateString()]),O(i,a),Q()}var Se=L('<h1 class="text-3xl font-bold mt-4">記事一覧</h1> <ul class="mt-4 grid grid-cols-1 gap-4"></ul>',1);function Xe(i,e){U(e,!0);var a=Se(),l=I(J(a),2);ke(l,21,()=>e.data.articles,s=>s.id,(s,n)=>{Re(s,{get id(){return A(n).id},get title(){return A(n).title},get createdAt(){return A(n).createdAt}})}),m(l),O(i,a),Q()}export{Xe as component};
