(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{44:function(e,t,a){e.exports=a(70)},49:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),s=(a(49),a(10)),l=a(96),i=a(95),m=a(93),u=a(94),p=a(17),d=a.n(p),g=d.a.initializeApp({apiKey:"AIzaSyBUuAwmRxuRE2DxL251-GZ9_V1Kg3auvEo",authDomain:"cp-instagram-clone-65bd8.firebaseapp.com",databaseURL:"https://cp-instagram-clone-65bd8.firebaseio.com",projectId:"cp-instagram-clone-65bd8",storageBucket:"cp-instagram-clone-65bd8.appspot.com",messagingSenderId:"956173477105",appId:"1:956173477105:web:a1177fe18bca57b65e3550",measurementId:"G-JE1HL3E2RM"}).firestore(),f=d.a.auth(),b=d.a.storage(),E=(a(60),a(97));a(63);var v=function(e){var t=e.postId,a=e.user,r=e.username,o=e.caption,l=e.imgURL,i=Object(n.useState)([]),m=Object(s.a)(i,2),u=m[0],p=m[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),v=b[0],h=b[1];return Object(n.useEffect)((function(){var e;return t&&(e=g.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__header"},c.a.createElement(E.a,{className:"post__avatar",alt:"patryk",src:"/static/images/avatar/1.jpg"}),c.a.createElement("h3",null,r)),c.a.createElement("img",{className:"post__image",src:l,alt:""}),c.a.createElement("h4",{className:"post__text"},c.a.createElement("strong",null,r,": ")," ",o),c.a.createElement("div",{className:"post__comments"},u.map((function(e){return c.a.createElement("p",null,c.a.createElement("strong",null,e.username)," ",e.text)}))),a&&c.a.createElement("form",{className:"post__commentBox"},c.a.createElement("input",{className:"post__input",type:"text",placeholder:"Type a comment...",value:v,onChange:function(e){return h(e.target.value)}}),c.a.createElement("button",{className:"post__button",disabled:!v,type:"submit",onClick:function(e){e.preventDefault(),g.collection("posts").doc(t).collection("comments").add({text:v,username:a.displayName,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),h("")}},"Post")))};a(68);var h=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(0),m=Object(s.a)(l,2),u=m[0],p=m[1],f=Object(n.useState)(""),E=Object(s.a)(f,2),v=E[0],h=E[1];return c.a.createElement("div",{className:"imageUpload"},c.a.createElement("div",{className:"imageUpload__inputs"},c.a.createElement("progress",{className:"imageUpload__progress",value:u,max:"100"}),c.a.createElement("input",{type:"text",placeholder:"Enter a caption...",onChange:function(e){return h(e.target.value)},value:v}),c.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&o(e.target.files[0])}}),c.a.createElement(i.a,{onClick:function(t){b.ref("images/".concat(r.name)).put(r).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);p(t)}),(function(e){console.log(e),alert(e.message)}),(function(){b.ref("images").child(r.name).getDownloadURL().then((function(t){g.collection("posts").add({timestamp:d.a.firestore.FieldValue.serverTimestamp(),caption:v,imgURL:t,username:e.username}),p(0),h(""),o(null)}))}))}},"Upload")))};a(69);function _(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var j=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var O=function(){var e=j(),t=Object(n.useState)(_),a=Object(s.a)(t,1)[0],r=Object(n.useState)([]),o=Object(s.a)(r,2),m=o[0],p=o[1],d=Object(n.useState)(!1),b=Object(s.a)(d,2),E=b[0],O=b[1],y=Object(n.useState)(!1),N=Object(s.a)(y,2),w=N[0],S=N[1],C=Object(n.useState)(""),x=Object(s.a)(C,2),k=x[0],I=x[1],U=Object(n.useState)(""),L=Object(s.a)(U,2),R=L[0],A=L[1],B=Object(n.useState)(""),D=Object(s.a)(B,2),P=D[0],T=D[1],J=Object(n.useState)(null),M=Object(s.a)(J,2),V=M[0],z=M[1];return Object(n.useEffect)((function(){var e=f.onAuthStateChanged((function(e){e?(console.log(e),z(e)):z(null)}));return function(){e()}}),[V,k]),Object(n.useEffect)((function(){g.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(u.a,{open:E,onClose:function(){return O(!1)}},c.a.createElement("div",{style:a,className:e.paper},c.a.createElement("center",null,c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"})),c.a.createElement("form",{className:"app__signup"},c.a.createElement(l.a,{placeholder:"username",type:"text",value:k,onChange:function(e){return I(e.target.value)}}),c.a.createElement(l.a,{placeholder:"email",type:"text",value:R,onChange:function(e){return A(e.target.value)}}),c.a.createElement(l.a,{placeholder:"password",type:"password",value:P,onChange:function(e){return T(e.target.value)}}),c.a.createElement(i.a,{type:"submit",onClick:function(e){e.preventDefault(),f.createUserWithEmailAndPassword(R,P).then((function(e){return e.user.updateProfile({displayName:k})})).catch((function(e){return alert(e.message)})),O(!1)}},"Sign Up")))),c.a.createElement(u.a,{open:w,onClose:function(){return S(!1)}},c.a.createElement("div",{style:a,className:e.paper},c.a.createElement("center",null,c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"})),c.a.createElement("form",{className:"app__signup"},c.a.createElement(l.a,{placeholder:"email",type:"text",value:R,onChange:function(e){return A(e.target.value)}}),c.a.createElement(l.a,{placeholder:"password",type:"password",value:P,onChange:function(e){return T(e.target.value)}}),c.a.createElement(i.a,{type:"submit",onClick:function(e){e.preventDefault(),f.signInWithEmailAndPassword(R,P).catch((function(e){return alert(e.message)})),S(!1)}},"Sign In ")))),c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"}),V?c.a.createElement(i.a,{onClick:function(){return f.signOut()}},"Logout"):c.a.createElement("div",{className:"app__loginContainer"},c.a.createElement(i.a,{onClick:function(){return O(!0)}},"Sign Up"),c.a.createElement(i.a,{onClick:function(){return S(!0)}},"Sign In"))),c.a.createElement("div",{className:"app__posts"},m.map((function(e){var t=e.id,a=e.post;return c.a.createElement(v,{key:t,postId:t,user:V,username:a.username,caption:a.caption,imgURL:a.imgURL})}))),(null===V||void 0===V?void 0:V.displayName)?c.a.createElement(h,{username:V.displayName}):c.a.createElement("h3",null,"Log in to upload."))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.5360cee2.chunk.js.map