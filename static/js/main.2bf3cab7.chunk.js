(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),s=n.n(r),o=n(6),i=(n(73),n(7)),u=n(5),l=n(4),j=n(37),b=n(113),d=n(114),m=n(112),O={getFilter:function(e){return e.filter},getUserName:function(e){return e.auth.name},getIsLoggedIn:function(e){return e.auth.isLoggedIn},getToken:function(e){return e.auth.token}},p=n(58),h=n(16),g=Object(p.a)({reducerPath:"contactsApi",baseQuery:Object(h.d)({baseUrl:"https://connections-api.herokuapp.com",prepareHeaders:function(e,t){var n=(0,t.getState)().auth.token;return n&&e.set("authorization","Bearer ".concat(n)),e}}),tagTypes:["Contacts"],endpoints:function(e){return{signup:e.mutation({query:function(e){return{url:"/users/signup",method:"POST",body:e}}}),login:e.mutation({query:function(e){return{url:"/users/login",method:"POST",body:e}}}),logout:e.mutation({query:function(){return{url:"/users/logout",method:"POST"}}}),getUser:e.query({query:function(){return"/users/current"}}),getContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:{name:e.name,number:e.number}}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),f=g.useSignupMutation,x=g.useLoginMutation,v=g.useLogoutMutation,_=g.useGetUserQuery,y=g.useGetContactsQuery,C=g.useAddContactMutation,N=g.useDeleteContactMutation,L=n(2),I=Object(L.createSlice)({name:"filter",initialState:"",reducers:{setFilter:function(e,t){return t.payload}}}),S=Object(L.createSlice)({name:"auth",initialState:{name:"",token:"",isLoggedIn:!1},reducers:{setCredentials:function(e,t){var n=t.payload,a=n.user,c=n.token;e.name=a.name,e.token=c,e.isLoggedIn=!0},setUser:function(e,t){var n=t.payload;e.name=n.name,e.isLoggedIn=!0},setLogout:function(e,t){e.name="",e.token="",e.isLoggedIn=!1}}}),k=I.actions.setFilter,w=S.actions,T=w.setCredentials,F=w.setUser,P=w.setLogout,B=n(28),A=n.n(B),U=n(1);var M=function(){var e,t=Object(o.d)(),n=Object(o.e)(O.getIsLoggedIn),a=Object(o.e)(O.getUserName),c=v(),r=Object(u.a)(c,2),s=r[0],p=r[1].isLoading,h=Object(l.g)();return Object(U.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:A.a.container,children:[Object(U.jsx)(b.a.Brand,{}),Object(U.jsxs)(d.a,{className:"mr-auto",children:[Object(U.jsx)(j.b,{to:"/",className:A.a.name,children:"Home"}),Object(U.jsx)(j.b,{to:"/contacts",className:A.a.name,children:"Contacts"})]}),n?Object(U.jsxs)("div",{children:[Object(U.jsxs)("span",{className:A.a.titleText,children:["Welcome ",a,"!"]}),Object(U.jsx)(m.a,{variant:"secondary",onClick:function(){s(),t(P())},disabled:p,className:A.a.userBtn,children:"Log Out"})]}):Object(U.jsxs)(d.a,{children:[Object(U.jsx)(m.a,(e={variant:"light",className:"mx-3",onClick:function(){return h("/login")}},Object(i.a)(e,"className",A.a.userBtn),Object(i.a)(e,"children","Log In"),e)),Object(U.jsx)(m.a,{className:A.a.userBtn,onClick:function(){return h("/signup")},children:"Sign up"})]})]})};function q(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/":n;return Object(o.e)(O.getIsLoggedIn)?t:Object(U.jsx)(l.a,{to:a})}function z(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/":n;return Object(o.e)(O.getIsLoggedIn)?Object(U.jsx)(l.a,{to:a}):t}var D=n(38),E=n.n(D),H=n(61),Z=n.n(H);var J=function(){var e=Object(o.d)(),t=Object(o.e)(O.getFilter),n=E.a.generate();return Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{htmlFor:n,children:"Find contacts by name"}),Object(U.jsx)("input",{id:n,type:"text",name:"filter",value:t,className:Z.a.filterInput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan \u0438 \u0442. \u043f.",onChange:function(t){return e(k(t.currentTarget.value))}})]})},Q=n(33),R=n.n(Q),G=n(50),W=n.n(G);var $=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),o=s[0],i=s[1],l=Object(a.useRef)(E.a.generate()),j=Object(a.useRef)(E.a.generate()),b=C(),d=Object(u.a)(b,2),m=d[0],O=d[1].isLoading;return Object(U.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({name:n,number:o}),c(""),i("")},children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{htmlFor:l,children:"Name"}),Object(U.jsx)("input",{id:l,type:"text",name:"name",value:n,className:W.a.formInput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){c(e.currentTarget.value)}}),Object(U.jsx)("label",{htmlFor:j,children:"Number"}),Object(U.jsx)("input",{id:j,type:"tel",name:"number",value:o,className:W.a.formInput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){i(e.currentTarget.value)}})]}),Object(U.jsx)("button",{type:"submit",className:W.a.formBtn,disabled:O,children:O?Object(U.jsx)(R.a,{type:"TailSpin",color:"#00BFFF",height:20,width:85}):"Add contact"})]})},V=n(54),K=n.n(V);function X(e){var t=e.el,n=N(),a=Object(u.a)(n,2),c=a[0],r=a[1].isLoading;return Object(U.jsxs)("p",{className:K.a.contactDescription,children:[t.name,": ",t.number,Object(U.jsx)("button",{type:"button",className:K.a.deleteBtn,"data-id":t.id,onClick:function(){c(t.id)},disabled:r,children:r?Object(U.jsx)(R.a,{type:"TailSpin",color:"#00BFFF",height:15,width:45}):"Delete"})]})}var Y=function(){var e=Object(o.e)(O.getFilter),t=y(),n=t.data,a=t.isLoading;return Object(U.jsxs)("div",{children:[a&&Object(U.jsx)(R.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100}),n&&n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(e){return Object(U.jsx)(X,{el:e},e.id)}))]})},ee=n(55),te=n.n(ee);function ne(){return Object(U.jsx)("div",{className:te.a.container,children:Object(U.jsxs)("div",{className:te.a.form,children:[Object(U.jsx)("h1",{children:"Phonebook"}),Object(U.jsx)($,{}),Object(U.jsx)("h2",{children:"Contacts"}),Object(U.jsx)(J,{}),Object(U.jsx)(Y,{})]})})}var ae=n(34),ce=n.n(ae),re=n(47),se=n(39),oe=n.n(se);function ie(){var e=Object(o.d)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],j=i[1],b=x(),d=Object(u.a)(b,1)[0],m=function(){var t=Object(re.a)(ce.a.mark((function t(n){var a;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,d({email:c,password:l}).unwrap();case 4:a=t.sent,e(T(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:r(""),j("");case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsx)("div",{className:oe.a.container,children:Object(U.jsxs)("form",{className:oe.a.form,name:"login_form",autoComplete:"on",onSubmit:m,children:[Object(U.jsx)("h2",{children:"Log In"}),Object(U.jsxs)("div",{children:[Object(U.jsxs)("label",{className:oe.a.label,children:["Email",Object(U.jsx)("input",{type:"email",name:"email",className:"form-control",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(U.jsxs)("label",{className:oe.a.label,children:["Password",Object(U.jsx)("input",{type:"password",name:"password",className:"form-control",value:l,onChange:function(e){return j(e.target.value)}})]})]}),Object(U.jsx)("button",{type:"submit",children:"Log In"})]})})}var ue=n(56),le=n.n(ue),je=function(){return Object(U.jsx)("div",{className:le.a.container,children:Object(U.jsx)("h1",{className:le.a.title,children:"Welcome to your Phonebook"})})},be=n(35),de=n.n(be);function me(){var e=Object(o.d)(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(a.useState)(""),d=Object(u.a)(b,2),m=d[0],O=d[1],p=f(),h=function(){var t=Object(re.a)(ce.a.mark((function t(n){var a;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,p({name:c,email:l,password:m}).unwrap();case 4:a=t.sent,e(T(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:r(""),j(""),O("");case 14:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsx)("div",{className:de.a.container,children:Object(U.jsxs)("form",{name:"signup_form",autoComplete:"on",className:de.a.form,onSubmit:h,children:[Object(U.jsx)("h2",{children:"Sign Up"}),Object(U.jsxs)("div",{children:[Object(U.jsxs)("label",{className:de.a.label,children:["Name",Object(U.jsx)("input",{type:"text",name:"name",className:"form-control",value:c,autoFocus:!0,onChange:function(e){return r(e.target.value)}})]}),Object(U.jsxs)("label",{className:de.a.label,children:["Email",Object(U.jsx)("input",{type:"email",name:"email",className:"form-control",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(U.jsxs)("label",{className:de.a.label,children:["Password",Object(U.jsx)("input",{type:"password",name:"password",className:"form-control",value:m,onChange:function(e){return O(e.target.value)}})]})]}),Object(U.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})]})})}var Oe,pe=function(){var e=Object(o.d)(),t=_().data;return Object(a.useEffect)((function(){t&&e(F(t))}),[t,e]),Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)(j.a,{basename:"/goit-react-hw-08-phonebook",children:[Object(U.jsx)(M,{}),Object(U.jsxs)(l.d,{children:[Object(U.jsx)(l.b,{path:"/",element:Object(U.jsx)(je,{})}),Object(U.jsx)(l.b,{path:"contacts",element:Object(U.jsx)(q,{redirectTo:"/login",children:Object(U.jsx)(ne,{})})}),Object(U.jsx)(l.b,{path:"login",element:Object(U.jsx)(z,{children:Object(U.jsx)(ie,{})})}),Object(U.jsx)(l.b,{path:"signup",element:Object(U.jsx)(z,{children:Object(U.jsx)(me,{})})})]})]})})},he=n(63),ge=n(29),fe=n(62),xe=n.n(fe),ve=n(30),_e={key:"contacts",storage:xe.a,whitelist:["token"]},ye=Object(L.configureStore)({reducer:(Oe={},Object(i.a)(Oe,g.reducerPath,g.reducer),Object(i.a)(Oe,"filter",I.reducer),Object(i.a)(Oe,"auth",Object(ve.a)(_e,S.reducer)),Oe),middleware:function(e){return e({serializableCheck:{ignoredActions:[ge.a,ge.f,ge.b,ge.c,ge.d,ge.e]}}).concat(g.middleware)}});Object(he.setupListeners)(ye.dispatch);Object(ge.g)(ye);s.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(o.a,{store:ye,children:Object(U.jsx)(pe,{})})}),document.getElementById("root"))},28:function(e,t,n){e.exports={container:"UserMenu_container__2IPA-",name:"UserMenu_name__2RtjI",titleText:"UserMenu_titleText__I6fI1",userBtn:"UserMenu_userBtn__1jbr-"}},35:function(e,t,n){e.exports={container:"SingupPage_container__1bfQf",form:"SingupPage_form__14Pq2",label:"SingupPage_label__1hLRH"}},39:function(e,t,n){e.exports={label:"LoginPage_label__2yAv5",container:"LoginPage_container__pio_d",form:"LoginPage_form__8yraF"}},50:function(e,t,n){e.exports={formInput:"ContactForm_formInput__3d6v-",formBtn:"ContactForm_formBtn__3H10J"}},54:function(e,t,n){e.exports={contactList:"ContactList_contactList__mTUa1",contactItem:"ContactList_contactItem__2i6x3",contactDescription:"ContactList_contactDescription__1r_L2",deleteBtn:"ContactList_deleteBtn__1mrTl"}},55:function(e,t,n){e.exports={label:"Contacts_label__2U3rI",container:"Contacts_container__MPjDC",form:"Contacts_form__1slIP"}},56:function(e,t,n){e.exports={container:"HomePage_container__3r0Vk",title:"HomePage_title__1pBH6"}},61:function(e,t,n){e.exports={filterInput:"Filter_filterInput__1yxfO"}},73:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.2bf3cab7.chunk.js.map