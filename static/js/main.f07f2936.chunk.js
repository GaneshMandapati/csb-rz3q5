(this["webpackJsonptask-manager-redux"]=this["webpackJsonptask-manager-redux"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),s=n(26),i=n(40),r=n(72),o=n(81),l=n(21),j="SHOW_ALL_TASKS",u="SHOW_TASK",d="ADD_TASK",b="EDIT_TASK",O="DELETE_TASK",h={tasks:[]},p=Object(i.b)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:case u:return Object(l.a)(Object(l.a)({},e),{},{tasks:t.payload});case d:return Object(l.a)(Object(l.a)({},e),{},{tasks:[].concat(Object(o.a)(e.tasks),[t.payload])});case b:return Object(l.a)(Object(l.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload?e=t.payload:e}))});case O:return Object(l.a)(Object(l.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.id!==t.payload}))});default:return e}}}),x=[r.a],m=Object(i.d)(p,Object(i.c)(i.a.apply(void 0,x),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),k=n(12),f=n(159),g=n(156),v=n(149),y=n(0),T=n(78),N=n.n(T),A=n(79),_=n.n(A),w=n(80),I=n.n(w),S=n(158),Y=n(153),D=n(155),Z=n(20),C=n.n(Z),J=n(41),W=n(42),M=n.n(W),E={headers:{"Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjU4ODY5NzMsIm5iZiI6MTYyNTg4Njk3MywianRpIjoiNGIxYzk3ZmYtZjk2Yi00MjRiLTg5YTQtMDlkYTk4ZDVkZGVkIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1YmkgU2lyIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl82YmVlYzQ1OTkxNWY0NTA3YThkMjUyMGU2MGUwM2MzZSIsImNvbXBhbnlfaWQiOiJjb21wYW55XzNjNjhjZDk0ZWJkNjQ4Yzc4ZDc2ODcyY2ZhOWY4Y2ZiIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mMmU5YWNkZWM4MTdlMjRkMjk4MGQ4NTNlODkzODVmNT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.-eN6bCHhA3wq41wTyecN-LcJiDylUSxB5AuzE00yZCk",Accept:"application / json"}},L=function(e){return function(){var e=Object(J.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M.a.put("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/task_b459a96f228147d68a70145e5c7c1517",E).then((function(e){console.log("sucesss"),t({type:b,payload:e.data.results})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=n(2);var X=Object(s.b)((function(e){return{taskData:e.tasks.tasks}}),(function(e){return{addTask:function(t){return e(function(e){return function(){var t=Object(J.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M.a.post("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",JSON.stringify(e),E).then((function(e){console.log(e),n({type:d,payload:e.data.results})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e,t){var n=e.addTask;console.log(t);var c=Object(y.useState)(null),a=Object(k.a)(c,2),s=(a[0],a[1],Object(y.useState)("")),i=Object(k.a)(s,2),r=i[0],o=i[1],l=Object(y.useState)(""),j=Object(k.a)(l,2),u=j[0],d=j[1],b=Object(y.useState)(""),O=Object(k.a)(b,2),h=O[0],p=O[1],x=Object(y.useState)(""),m=Object(k.a)(x,2),f=m[0],T=m[1],N=Object(y.useState)(t),A=Object(k.a)(N,2),_=A[0],w=A[1],I=function(){w(!_)};return _?Object(z.jsxs)("div",{className:"addTask",children:[Object(z.jsxs)(v.a,{container:!0,spacing:4,children:[Object(z.jsxs)(v.a,{container:!0,item:!0,xs:12,direction:"column",children:[Object(z.jsx)(S.a,{htmlFor:"my-input",children:"Task Description"}),Object(z.jsx)(Y.a,{name:"taskDescription",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsx)(D.a,{type:"date",defaultValue:"2017-05-24",InputLabelProps:{shrink:!0},onChange:function(e){return d(e.target.value)}})}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsx)(D.a,{type:"time",defaultValue:"07:30",onChange:function(e){return p(e.target.value)},value:h,InputLabelProps:{shrink:!0}})}),Object(z.jsxs)(v.a,{container:!0,item:!0,xs:12,direction:"column",children:[Object(z.jsx)(S.a,{id:"demo-simple-select-helper-label",children:"Assign User"}),Object(z.jsxs)("select",{name:"taskAssigne",value:f,onChange:function(e){return T(e.target.value)},children:[Object(z.jsx)("option",{value:"Assigne 1",children:"Assigne 1"}),Object(z.jsx)("option",{value:"Assigne 2",children:"Assigne 2"}),Object(z.jsx)("option",{value:"Assigne 3",children:"Assigne 3"}),Object(z.jsx)("option",{value:"Assigne 4",children:"Assigne 4"})]})]}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column"}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsxs)(v.a,{container:!0,spacing:4,m:2,children:[Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,onClick:I,children:Object(z.jsx)(g.a,{style:{backgroundColor:"white"},children:"cancel"})}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,children:Object(z.jsx)(g.a,{style:{backgroundColor:"#088647",color:"white"},onClick:function(e){I(),n({assigned_user:"user_6beec459915f4507a8d2520e60e03c3e",task_date:u,task_time:1625923948263,is_completed:0,time_zone:1625924164333,task_msg:r})},children:"save"})})]})})]}),Object(z.jsx)("br",{})]}):null}));Object(s.b)(null,(function(e){return{editTask:function(t){return e(L())}}}))((function(e,t){var n=e.editTask,c=Object(y.useState)(""),a=Object(k.a)(c,2),s=a[0],i=a[1],r=Object(y.useState)(""),o=Object(k.a)(r,2),l=o[0],j=o[1],u=Object(y.useState)(""),d=Object(k.a)(u,2),b=d[0],O=d[1],h=Object(y.useState)(""),p=Object(k.a)(h,2),x=p[0],m=p[1],f=Object(y.useState)(!0),T=Object(k.a)(f,2),N=T[0],A=T[1],_=function(){A(!N)};return N?Object(z.jsxs)("div",{className:"addTask",children:[Object(z.jsxs)(v.a,{container:!0,spacing:4,children:[Object(z.jsxs)(v.a,{container:!0,item:!0,xs:12,direction:"column",children:[Object(z.jsx)(S.a,{htmlFor:"my-input",children:"Task Description"}),Object(z.jsx)(Y.a,{name:"taskDescription",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsx)(D.a,{type:"date",defaultValue:"2017-05-24",InputLabelProps:{shrink:!0},onChange:function(e){return j(e.target.value)}})}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsx)(D.a,{type:"time",defaultValue:"07:30",onChange:function(e){return O(e.target.value)},value:b,InputLabelProps:{shrink:!0}})}),Object(z.jsxs)(v.a,{container:!0,item:!0,xs:12,direction:"column",children:[Object(z.jsx)(S.a,{id:"demo-simple-select-helper-label",children:"Assign User"}),Object(z.jsxs)("select",{name:"taskAssigne",value:x,onChange:function(e){return m(e.target.value)},children:[Object(z.jsx)("option",{value:"Assigne 1",children:"Assigne 1"}),Object(z.jsx)("option",{value:"Assigne 2",children:"Assigne 2"}),Object(z.jsx)("option",{value:"Assigne 3",children:"Assigne 3"}),Object(z.jsx)("option",{value:"Assigne 4",children:"Assigne 4"})]})]}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column"}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsxs)(v.a,{container:!0,spacing:4,m:2,children:[Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,onClick:_,children:Object(z.jsx)(g.a,{style:{backgroundColor:"white"},children:"cancel"})}),Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,children:Object(z.jsx)(g.a,{style:{backgroundColor:"#088647",color:"white"},onClick:function(e){_(),n({assigned_user:"user_6beec459915f4507a8d2520e60e03c3e",task_date:l,task_time:1625923948263,is_completed:0,time_zone:1625924164333,task_msg:s})},children:"save"})})]})})]}),Object(z.jsx)("br",{})]}):null}));var V=Object(s.b)((function(e){return{taskData:e.tasks.tasks}}),(function(e){return{showAllTasks:function(){return e(function(){var e=Object(J.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38",E).then((function(e){t({type:j,payload:e.data.results})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},deleteTask:function(t){return e(function(e){return function(){var t=Object(J.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.delete("https://stage.api.sloovi.com/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/".concat(e),E).then((function(){console.log("sucesss"),n({type:O,payload:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},editTask:function(t){return e(L())}}}))((function(e){var t=e.taskData,n=e.showAllTasks,c=e.deleteTask,a=Object(y.useState)(!1),s=Object(k.a)(a,2),i=s[0],r=s[1],o=Object(y.useState)(!1),l=Object(k.a)(o,2);return l[0],l[1],Object(y.useEffect)((function(){n()}),[t.length]),Object(z.jsxs)("div",{className:"task",children:[Object(z.jsxs)("div",{className:"taskHeader",children:[Object(z.jsx)("div",{children:Object(z.jsxs)("p",{children:[" Tasks ",t.length]})}),Object(z.jsx)("div",{children:Object(z.jsx)(f.a,{title:"New Task",placement:"top",children:Object(z.jsx)(g.a,{onClick:function(){r((function(e){return!e}))},children:Object(z.jsx)(N.a,{})})})})]}),i?Object(z.jsx)(X,{}):null,Object(z.jsx)("div",{className:"taskList",children:t&&t.map((function(e,t){return Object(z.jsx)("div",{children:Object(z.jsx)("div",{className:"taskItem",children:Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,direction:"column",children:Object(z.jsxs)(v.a,{container:!0,spacing:4,m:2,children:[Object(z.jsx)(v.a,{container:!0,item:!0,xs:6,children:Object(z.jsxs)("div",{className:"taskDesc",children:[Object(z.jsx)("p",{className:"taskMsg",children:e.task_msg}),Object(z.jsx)("p",{className:"taskDate",children:e.task_date})]})}),Object(z.jsxs)(v.a,{container:!0,item:!0,xs:6,style:{display:"flex",alignItems:"center"},children:[Object(z.jsx)(f.a,{title:"Delete Task",placement:"top",children:Object(z.jsx)(g.a,{style:{height:"20px"},onClick:function(){var t;window.confirm("Are you sure you wish to delete this item?")&&(t=e.id,c(t))},children:Object(z.jsx)(_.a,{})})}),Object(z.jsx)(f.a,{title:"Edit Task",placement:"top",children:Object(z.jsx)(g.a,{style:{height:"20px"},children:Object(z.jsx)(I.a,{})})})]})]})})})},t)}))})]})}));n(119);function U(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)("h1",{children:"Task Manager App"}),Object(z.jsx)(V,{})]})}var G=document.getElementById("root");a.a.render(Object(z.jsx)(s.a,{store:m,children:Object(z.jsx)(U,{})}),G)}},[[120,1,2]]]);
//# sourceMappingURL=main.f07f2936.chunk.js.map