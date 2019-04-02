(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports={timerWrap:"styles_timerWrap__gO9r2"}},205:function(e,t,a){e.exports=a(345)},344:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),i=a.n(c),o=a(43),s=a(38),l=a(33),m=a(37),u=a(125),d=a(122),p={tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(d.a)(t,["type"]);switch(a){case"ADD_TASK":return[].concat(Object(u.a)(e),[{id:n.id,name:n.name,startTime:n.startTime,endTime:n.endTime,spendTime:n.endTime-n.startTime}]);case"DELETE_TASK":return e.filter(function(e){return e.id!==n.id});default:return e}}};var h=!1;var b=a(24),E=a(25),g=a(27),f=a(26),k=a(28),T=a(17),v=a(62),y=a.n(v),j=a(65),O=a.n(j),x=a(64),C=a.n(x),w=a(63),S=a.n(w),D=a(21),N=a.n(D),W=function(e){var t=e.id,a=e.title,n=e.open,c=e.children,i=e.onClose;return r.a.createElement(y.a,{open:n,"aria-labelledby":"".concat(t,"-dialog-title"),"aria-describedby":"".concat(t,"-dialog-description")},r.a.createElement(S.a,{id:"".concat(t,"-dialog-title")},a),r.a.createElement(C.a,{id:"".concat(t,"-dialog-description")},c),r.a.createElement(O.a,null,r.a.createElement(N.a,{onClick:i,color:"primary",autoFocus:!0},"Close")))},L=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Math.floor(e%1e3/100),r=e/1e3,c=Math.floor(r%60),i=Math.floor(r%3600/60),o=Math.floor(r/3600%24),s=Math.floor((o+-(new Date).getTimezoneOffset()/60)%24);return t?a?"".concat(s<10?"0":"").concat(s,":").concat(i<10?"0":"").concat(i,":").concat(c<10?"0":"").concat(c,":").concat(n):"".concat(s<10?"0":"").concat(s,":").concat(i<10?"0":"").concat(i,":").concat(c<10?"0":"").concat(c):a?"".concat(o<10?"0":"").concat(o,":").concat(i<10?"0":"").concat(i,":").concat(c<10?"0":"").concat(c,":").concat(n):"".concat(o<10?"0":"").concat(o,":").concat(i<10?"0":"").concat(i,":").concat(c<10?"0":"").concat(c)},R=a(5),I=a.n(R),A=a(123),B=a.n(A),P=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).startTimer=function(e){a.setState({timerOn:!0,isResumed:!!e,startTime:Date.now()-a.state.time,time:a.state.time}),a.timerID=setInterval(function(){a.setState({time:Date.now()-a.state.startTime})},100)},a.pauseTimer=function(){a.setState({timerOn:!1,isPause:!0}),clearInterval(a.timerID)},a.resumeTimer=function(){a.startTimer(!0)},a.stopTimer=function(){var e=a.state,t=e.time,n=e.startTime,r=a.props,c=r.onTimerStop,i=r.shouldTimerContinue;if(a.pauseTimer(),"function"===typeof c){var o=i?a.resumeTimer:a.resetTimer;c({id:a.timerID,startTime:n,endTime:t+n},o)}else a.resetTimer()},a.resetTimer=function(){clearInterval(a.timerID),a.setState({timerOn:!1,isPause:!1,isResumed:!1,time:0,startTime:0})},a.state={timerOn:!1,isPause:!1,isResumed:!1,startTime:0,time:0},a.timerID=null,a}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.time,n=t.timerOn,c=t.isPause,i=t.isResumed;return r.a.createElement(I.a,{container:!0,spacing:16},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement("div",{className:B.a.timerWrap},L(a,!1,!0))),r.a.createElement(I.a,{item:!0,xs:12},n?i?r.a.createElement(I.a,{container:!0,justify:"center",spacing:16},r.a.createElement(I.a,{item:!0},r.a.createElement(N.a,{variant:"contained",color:"secondary",onClick:this.stopTimer},"Stop")),r.a.createElement(I.a,{item:!0},r.a.createElement(N.a,{variant:"contained",onClick:this.resetTimer},"Reset timer"))):r.a.createElement(N.a,{variant:"contained",color:"secondary",onClick:this.stopTimer},"Stop"):c?r.a.createElement(I.a,{container:!0,justify:"center",spacing:16},r.a.createElement(I.a,{item:!0},r.a.createElement(N.a,{variant:"contained",color:"secondary",onClick:this.stopTimer},"Stop")),r.a.createElement(I.a,{item:!0},r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:this.resumeTimer},"Resume"))):r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:function(){return e.startTimer(!1)}},"Start")))}}]),t}(n.Component);P.defaultProps={shouldTimerContinue:!1};var _=P,M=a(16),K=a(66),F=a.n(K),H=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).handleChangeTaskName=function(e){a.setState({taskName:e.target.value})},a.handleCloseErrorDialog=function(){a.setState({isShowErrorDialog:!1})},a.handleStopTimer=function(e,t){var n=a.state.taskName,r=a.props.onAddTask;n?(t(),r(Object(m.a)({name:n},e)),a.setState({taskName:""})):a.setState({isShowErrorDialog:!0})},a.state={taskName:"",isShowErrorDialog:!1},a}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.taskName,a=e.isShowErrorDialog,n=this.props.classes;return r.a.createElement(I.a,{container:!0,spacing:24},r.a.createElement(I.a,{item:!0,xs:12,classes:{item:n.taskInputWrap}},r.a.createElement(F.a,{value:t,onChange:this.handleChangeTaskName,placeholder:"Name of your Task",classes:{input:n.taskNameInput}}),r.a.createElement(W,{id:"task-name-error",open:a,title:"Empty task name",onClose:this.handleCloseErrorDialog},"You are trying close your task without name, enter the title and try again")),r.a.createElement(I.a,{item:!0,xs:12,classes:{item:n.timerWrap}},r.a.createElement(_,{onTimerStop:this.handleStopTimer})))}}]),t}(n.Component),z=Object(M.withStyles)(function(e){return{taskInputWrap:{textAlign:"center"},taskNameInput:{width:"270px",color:"#3e50c7",fontWeight:"500",textAlign:"center"},timerWrap:{textAlign:"center"}}})(H),G=a(67),J=a.n(G),X=a(69),Y=a.n(X),$=a(19),q=a.n($),Q=a(68),U=a.n(Q),V=a(42),Z=a.n(V),ee=function(e){var t=e.tasksList,a=e.classes,n=e.onDeleteTask;return r.a.createElement("div",{className:a.tableWrap},r.a.createElement(J.a,{className:a.table},r.a.createElement(U.a,null,r.a.createElement(Z.a,{classes:{root:a.headRow}},r.a.createElement(q.a,{classes:{head:a.headCell}},"\u2116"),r.a.createElement(q.a,{classes:{head:a.headCell}},"Task"),r.a.createElement(q.a,{classes:{head:a.headCell}},"Time start"),r.a.createElement(q.a,{classes:{head:a.headCell}},"Time end"),r.a.createElement(q.a,{classes:{head:a.headCell}},"Time spend"),r.a.createElement(q.a,{classes:{head:a.headCell}},"Info"),r.a.createElement(q.a,{classes:{head:a.headCell}},"Delete"))),r.a.createElement(Y.a,null,t.length>0?t.map(function(e,t){return r.a.createElement(Z.a,{key:e.id,className:a.bodyRow},r.a.createElement(q.a,{classes:{body:a.bodyCell}},t+1),r.a.createElement(q.a,{classes:{body:a.bodyCell}},e.name),r.a.createElement(q.a,{classes:{body:a.bodyCell}},L(e.startTime,!0)),r.a.createElement(q.a,{classes:{body:a.bodyCell}},L(e.endTime,!0)),r.a.createElement(q.a,{classes:{body:a.bodyCell}},L(e.spendTime)),r.a.createElement(q.a,{classes:{body:a.bodyCell}},r.a.createElement(N.a,{variant:"contained",classes:{contained:a.btn,label:a.btnLabel},component:s.b,to:"/tasks/".concat(e.id)},"Info")),r.a.createElement(q.a,null,r.a.createElement(N.a,{variant:"contained",classes:{contained:a.btn,label:a.btnLabel},onClick:function(){return n(e.id)}},"Delete")))}):r.a.createElement(Z.a,{className:a.bodyRow},r.a.createElement(q.a,{colSpan:7,align:"center",classes:{body:a.noTaskCell}},"No tasks for show")))))};ee.defaultProps={tasks:[]};var te=Object(M.withStyles)(function(e){return{tableWrap:{display:"block",overflowX:"auto",padding:"0 20px"},table:{width:"100%"},headRow:{backgroundColor:e.palette.common.white},headCell:{fontSize:"14px",color:"#9d9d9d"},bodyRow:{backgroundColor:"#eaf6ff"},bodyCell:{paddingTop:"10px",paddingBottom:"10px",fontWeight:"500",color:"#3e50c7"},noTaskCell:{paddingTop:"20px",paddingBottom:"20px"},btn:{backgroundColor:e.palette.common.white,borderRadius:"2px","&:hover":{backgroundColor:"#f5f5f5"}},btnLabel:{fontWeight:"normal",color:"#3e50c7"}}})(ee),ae=a(18),ne=a.n(ae),re=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne.a,{align:"center",color:"textPrimary"},"Hello, i`m chart component"))}}]),t}(n.Component),ce=a(32),ie=a.n(ce),oe=a(70),se=a.n(oe),le=a(71),me=a.n(le),ue=a(50),de=a.n(ue),pe=a(29),he=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleChangeTab=function(e,t){a.props.history.push(t)},a}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.location,a=e.tasks,n=e.classes,c=e.addTask,i=e.deleteTask;return r.a.createElement("div",{className:n.layout},r.a.createElement(ie.a,null,r.a.createElement(I.a,{container:!0,spacing:32,justify:"center"},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(z,{onAddTask:c})),r.a.createElement(I.a,{item:!0,xs:12,classes:{item:n.taskListWrap}},r.a.createElement(se.a,{position:"static"},r.a.createElement(me.a,{value:"/chart"===t.pathname?"chart":"tasks",centered:!0,variant:"fullWidth",onChange:this.handleChangeTab},r.a.createElement(de.a,{label:"Task Log",value:"tasks"}),r.a.createElement(de.a,{label:"Tasks Chart",value:"chart"}))),r.a.createElement("div",{className:n.tabsWrap},r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/chart",render:function(e){return r.a.createElement(re,Object.assign({},e,{tasksList:a}))}}),r.a.createElement(T.b,{exact:!0,path:"/tasks",render:function(e){return r.a.createElement(te,Object.assign({},e,{tasksList:a,onDeleteTask:i}))}})))))))}}]),t}(n.Component),be=Object(l.c)(Object(o.b)(function(e){return{tasks:e.tasks}},{addTask:function(e){return Object(m.a)({type:"ADD_TASK"},e)},deleteTask:function(e){return{type:"DELETE_TASK",id:e}}}),Object(M.withStyles)(function(e){var t;return{layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(pe.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(pe.a)(t,"padding","10px 15px"),t),taskListWrap:{textAlign:"center"},tabsWrap:{padding:"20px 0"}}}))(he),Ee=a(72),ge=a.n(Ee),fe=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.task,n=e.classes;return r.a.createElement("div",{className:n.layout},r.a.createElement(ie.a,{className:n.paper},a.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{container:!0,spacing:32,alignItems:"baseline",justify:"center"},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"h4",align:"left"},a.name)),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"h4",align:"right"},a.id))),r.a.createElement(ge.a,{className:n.divider}),r.a.createElement(I.a,{container:!0,spacing:32,justify:"center"},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"subtitle1"},"Task start time")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"subtitle2",align:"right"},L(a.startTime,!0)))),r.a.createElement(I.a,{container:!0,spacing:32,justify:"center"},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"subtitle1"},"Task end time")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"subtitle2",align:"right"},L(a.endTime,!0)))),r.a.createElement(I.a,{container:!0,spacing:32,justify:"center"},r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"subtitle1"},"Spend Time")),r.a.createElement(I.a,{item:!0,xs:6},r.a.createElement(ne.a,{variant:"h5",align:"right"},L(a.spendTime))))):r.a.createElement(ne.a,{variant:"h5",align:"right"},"Sorry, but task with ID: ".concat(t.params.id," - does not exist")),r.a.createElement("div",{className:n.homeBtn},r.a.createElement(N.a,{variant:"contained",color:"primary",component:s.b,to:"/"},"Go to Home"))))}}]),t}(n.Component),ke=Object(l.c)(Object(o.b)(function(e,t){return{task:e.tasks.reduce(function(e,a){return+t.match.params.id===a.id?Object(m.a)({},e,a):e},{})}}),Object(M.withStyles)(function(e){return{layout:Object(pe.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(pe.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit}),divider:{margin:"15px 0 25px 0"},homeBtn:{marginTop:"15px",textAlign:"center"}}}))(fe),Te=a(89),ve=Object(M.withStyles)(function(e){var t;return{layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(pe.a)(t,e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),Object(pe.a)(t,"padding","10px 15px"),t)}})(function(e){var t=e.location,a=e.classes;return r.a.createElement("div",{className:a.layout},r.a.createElement(ie.a,null,r.a.createElement(I.a,{container:!0,spacing:24,justify:"center"},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(ne.a,{align:"center",color:"textPrimary",variant:"h5"},t.state&&t.state.errorText?t.state.errorText:"No matches for this location: ".concat(t.pathname))),r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(ne.a,{align:"center"},r.a.createElement(Te.a,{color:"primary",variant:"contained",component:s.b,to:"/"},"Go to Home"))))))}),ye=a(73),je=a.n(ye),Oe=function(e){function t(){return Object(b.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,null),r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/",render:function(){return r.a.createElement(T.a,{to:"/tasks"})}}),r.a.createElement(T.b,{exact:!0,path:"/tasks/:id",component:ke}),r.a.createElement(T.b,{exact:!0,path:"/tasks",component:be}),r.a.createElement(T.b,{exact:!0,path:"/chart",component:be}),r.a.createElement(T.b,{component:ve})))}}]),t}(n.Component),xe=Object(M.withStyles)(function(e){return{taskListWrap:{textAlign:"center"}}})(Oe);a(344),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=Object(l.d)(Object(l.b)(Object(m.a)({},p)),h);i.a.render(r.a.createElement(o.a,{store:Ce},r.a.createElement(s.a,{basename:"/task-timer"},r.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[205,1,2]]]);
//# sourceMappingURL=main.c52d013a.chunk.js.map