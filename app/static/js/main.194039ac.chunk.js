(this.webpackJsonpfrontend_ui=this.webpackJsonpfrontend_ui||[]).push([[0],{59:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var n=s(51),c=s.n(n),i=(s(59),s(5)),a=s(6),r=s(2),o=s(8),d=s(7),l=s(1),u=s.n(l),j=s(0),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).add=n.add.bind(Object(r.a)(n)),n}return Object(a.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container d-flex row gx-4",children:[Object(j.jsx)("div",{className:"col row",children:Object(j.jsx)("input",{className:"input-prompt border-curve-10",type:"text",id:"email"})}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsx)("button",{className:"btn btn-primary border-curve-10",onClick:this.add,children:"+"})})]})}},{key:"add",value:function(){this.props.addFriend(document.getElementById("email").value)}}]),s}(u.a.Component);var p=function(e){return Object(j.jsx)("div",{className:"border-bottom border-curve-10 border-success h-10-percent d-flex align-items-center",children:Object(j.jsx)(b,{addFriend:e.addFriend})})},m=s(54),h=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={email:n.props.data.email,name:n.props.data.name},n.clickEvent=n.clickEvent.bind(Object(r.a)(n)),n.accept=n.accept.bind(Object(r.a)(n)),n.decline=n.decline.bind(Object(r.a)(n)),n}return Object(a.a)(s,[{key:"render",value:function(){return"pending"===this.props.data.status?Object(j.jsxs)("div",{className:"row gap-1 m-1 border-bottom border-top border-success border-curve-10 clickable",children:[Object(j.jsx)("div",{className:"col-7 d-flex align-items-center pt-1",children:Object(j.jsx)("h5",{children:this.props.data.name})}),Object(j.jsxs)("div",{className:"col-2 d-grid gap-2 d-md-flex pt-1",children:[Object(j.jsx)("button",{className:"btn btn-primary btn-sm h-29-w-29",onClick:this.accept,children:"+"}),Object(j.jsx)("button",{className:"btn btn-primary btn-sm h-29-w-29",onClick:this.decline,children:"-"})]})]}):Object(j.jsxs)("div",{className:"row gap-1 m-1 border-bottom border-top border-success border-curve-10 clickable",onClick:this.clickEvent,children:[Object(j.jsx)("div",{className:"col-9 d-flex align-items-center pt-1",children:Object(j.jsx)("h5",{children:this.props.data.name})}),Object(j.jsx)("div",{className:"col-1 d-flex align-items-center pt-1",children:Object(j.jsx)("h6",{children:this.props.data.messageCount})})]})}},{key:"clickEvent",value:function(){this.props.changeCurrentRecipient({email:this.state.email,name:this.state.name})}},{key:"accept",value:function(){this.props.accept(this.state.email)}},{key:"decline",value:function(){this.props.decline(this.state.email)}}]),s}(u.a.Component),O=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(a.a)(s,[{key:"render",value:function(){var e=[];if(void 0!==this.props.friendList)for(var t=0,s=Object.entries(this.props.friendList);t<s.length;t++){var n=Object(m.a)(s[t],2),c=n[0],i=n[1];e.push(Object(j.jsx)(h,{data:i,changeCurrentRecipient:this.props.changeCurrentRecipient,accept:this.props.accept,decline:this.props.decline},c))}return Object(j.jsx)("div",{className:"d-flex row h-80-percent-oflow",children:Object(j.jsx)("div",{children:e})})}}]),s}(u.a.Component),g=s(3),v=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).logout=n.logout.bind(Object(r.a)(n)),n.state={pressed:!1},n}return Object(a.a)(s,[{key:"render",value:function(){return this.state.pressed?Object(j.jsx)(g.a,{to:"/login"}):Object(j.jsxs)("div",{className:"border-top border-success border-curve-10 h-10-percent d-flex align-items-center justify-content-center",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("h6",{className:"d-flex justify-content-center",id:"account-name",children:this.props.account.name})}),Object(j.jsx)("div",{className:"col d-flex justify-content-center",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:this.logout,children:"Logout"})})]})}},{key:"logout",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"===t.response&&e.setState({pressed:!0})})),t.open("GET","http://https://warm-classy-quiet.glitch.me/logout"),t.send()}}]),s}(u.a.Component);var x=function(e){return Object(j.jsxs)("div",{className:"recipient-list col border-end border-success border-curve-10",children:[Object(j.jsx)(p,{addFriend:e.addFriend}),Object(j.jsx)(O,{changeCurrentRecipient:e.changeCurrentRecipient,friendList:e.friendList,accept:e.accept,decline:e.decline}),Object(j.jsx)(v,{account:e.account})]})};var f=function(e){return Object(j.jsx)("div",{className:"border-bottom border-curve-10 border-success h-10-percent d-flex align-items-center",children:Object(j.jsx)("div",{className:"p-4",children:Object(j.jsx)("h2",{children:e.recipientName})})})};var y=function(e){return"outgoing"===e.data.type?Object(j.jsx)("div",{className:"row m-2 justify-content-end",children:Object(j.jsxs)("div",{className:"col-5 border-top border-bottom border-success border-curve-10 text-wrap",children:[Object(j.jsx)("div",{className:"p-1 text-end text-break",children:e.data.message}),Object(j.jsx)("div",{className:"row justify-content-end message-time p-1",children:e.data.time})]})}):Object(j.jsx)("div",{className:"row m-2 justify-content-start",children:Object(j.jsxs)("div",{className:"col-5 border-top border-bottom border-success border-curve-10",children:[Object(j.jsx)("div",{className:"p-1 text-break",children:e.data.message}),Object(j.jsx)("div",{className:"row justify-content-end message-time p-1",children:e.data.time})]})})},k=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){var e="";return void 0!==this.props.messages&&(e=this.props.messages.message.map((function(e,t){return Object(j.jsx)(y,{data:e},t)}))),Object(j.jsx)("div",{className:"h-80-percent-oflow",children:Object(j.jsx)("div",{children:e})})}}]),s}(u.a.Component),N=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).send=n.send.bind(Object(r.a)(n)),n}return Object(a.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container d-flex row gx-4",children:[Object(j.jsx)("div",{className:"col row",children:Object(j.jsx)("input",{className:"input-prompt border-curve-10",id:"message",type:"text"})}),Object(j.jsx)("div",{className:"col-1",children:Object(j.jsx)("button",{className:"btn btn-primary border-curve-10",onClick:this.send,children:"^"})})]})}},{key:"send",value:function(){this.props.sendMessage(document.getElementById("message").value)}}]),s}(u.a.Component);var w=function(e){return Object(j.jsx)("div",{className:"border-top border-success border-curve-10 h-10-percent d-flex align-items-center",children:Object(j.jsx)(N,{sendMessage:e.sendMessage})})};var C=function(e){return Object(j.jsxs)("div",{className:"message-room col-8 border-start border-success border-curve-10",children:[Object(j.jsx)(f,{recipientName:e.recipientName}),Object(j.jsx)(k,{messages:e.messages}),Object(j.jsx)(w,{sendMessage:e.sendMessage})]})},E=s(53),L=s.n(E),R=s(18),M=s.n(R),q=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).sock=L()("http://https://warm-classy-quiet.glitch.me:5000",{query:{UID:M.a.load("UID")}}),void 0===M.a.load("UID")?n.state={loggedin:!1}:n.state={account:{},loggedin:!0,current_recipient:{},messages:{"friend_1@gmail.com":{email:"friend_1@gmail.com",name:"friend_1",message:[],messageCount:null,status:void 0}}},n.setCallbacks=n.setCallbacks.bind(Object(r.a)(n)),n.getAccountName=n.getAccountName.bind(Object(r.a)(n)),n.changeCurrentRecipient=n.changeCurrentRecipient.bind(Object(r.a)(n)),n.sendMessage=n.sendMessage.bind(Object(r.a)(n)),n.newMessage=n.newMessage.bind(Object(r.a)(n)),n.addFriend=n.addFriend.bind(Object(r.a)(n)),n.refreshRecipientList=n.refreshRecipientList.bind(Object(r.a)(n)),n.accept=n.accept.bind(Object(r.a)(n)),n.decline=n.decline.bind(Object(r.a)(n)),n}return Object(a.a)(s,[{key:"render",value:function(){return this.state.loggedin?Object(j.jsxs)("div",{className:"message-gallery border-curve-10 row",children:[Object(j.jsx)(x,{changeCurrentRecipient:this.changeCurrentRecipient,addFriend:this.addFriend,account:this.state.account,friendList:this.state.messages,accept:this.accept,decline:this.decline}),Object(j.jsx)(C,{sendMessage:this.sendMessage,recipientName:this.state.current_recipient.name,messages:this.state.messages[this.state.current_recipient.email]})]}):Object(j.jsx)(g.a,{to:"/signup"})}},{key:"componentDidMount",value:function(){this.state.loggedin&&(this.setCallbacks(),this.getAccountName(),this.refreshRecipientList())}},{key:"setCallbacks",value:function(){var e=this;this.sock.on("refresh_recipient_list",(function(t){e.refreshRecipientList()})),this.sock.on("message",(function(t){e.newMessage(t)}))}},{key:"getAccountName",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){e.setState({account:JSON.parse(t.responseText)})})),t.open("GET","http://localhost:4000/account"),t.send()}},{key:"refreshRecipientList",value:function(){var e=this;console.log("works");var t=new XMLHttpRequest;t.addEventListener("load",(function(){for(var s=JSON.parse(t.responseText),n={},c=e.state.messages,i=0;i<s.length;i++)n[s[i].email]=s[i],c[s[i].email]?n[s[i].email].message=c[s[i].email].message:n[s[i].email].message=[];e.setState({messages:n}),console.log(e.state.messages)})),t.open("GET","http://localhost:4000/friend"),t.send()}},{key:"changeCurrentRecipient",value:function(e){this.setState({current_recipient:e})}},{key:"sendMessage",value:function(e){var t=new Date,s=t.getHours()+":"+t.getMinutes(),n={message:e,recipient:this.state.current_recipient.email,time:s,type:"outgoing"},c=this.state.messages;c[n.recipient].message.push(n),this.setState({messages:c}),this.sock.emit("message",n)}},{key:"newMessage",value:function(e){console.log(e);var t=this.state.messages;t[e.sender].message.push(e),this.setState({messages:t})}},{key:"addFriend",value:function(e){this.sock.emit("add_friend",{email:e}),this.refreshRecipientList()}},{key:"accept",value:function(e){this.sock.emit("accept_request",{requestFrom:e,requestTo:this.state.account.email}),this.refreshRecipientList()}},{key:"decline",value:function(e){this.sock.emit("decline_request",{requestFrom:e,requestTo:this.state.account.email}),this.refreshRecipientList()}}]),s}(u.a.Component),_=s(17),S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).signup=n.signup.bind(Object(r.a)(n)),void 0!==M.a.load("UID")?n.state={redirect:"/"}:n.state={redirect:"default"},n}return Object(a.a)(s,[{key:"render",value:function(){return"login"===this.state.redirect?Object(j.jsx)("div",{id:"signup-info",children:Object(j.jsx)(g.a,{to:"/login"})}):"/"===this.state.redirect?Object(j.jsx)("div",{id:"signup-info",children:Object(j.jsx)(g.a,{to:"/"})}):Object(j.jsxs)("div",{id:"signup-info",children:["Enter Email: ",Object(j.jsx)("input",{id:"email",type:"text"})," ",Object(j.jsx)("br",{}),"Enter name: ",Object(j.jsx)("input",{id:"name",type:"text"})," ",Object(j.jsx)("br",{}),"Enter Password: ",Object(j.jsx)("input",{id:"password",type:"password"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",onClick:this.signup})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{children:Object(j.jsx)(_.b,{to:"/login",children:"Have an account? Login"})})]})}},{key:"signup",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"===t.responseText?e.setState({redirect:"login"}):window.alert("Perhaps the email is invalid or in use")})),t.open("POST","http://https://warm-classy-quiet.glitch.me/signup"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:document.getElementById("email").value,name:document.getElementById("name").value,password:document.getElementById("password").value}))}},{key:"componentWillUnmount",value:function(){delete this.state.redirect}}]),s}(u.a.Component),I=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).login=n.login.bind(Object(r.a)(n)),void 0!==M.a.load("UID")?n.state={login:!0}:n.state={login:!1},n}return Object(a.a)(s,[{key:"render",value:function(){return this.state.login?Object(j.jsx)("div",{id:"signup-info",children:Object(j.jsx)(g.a,{to:"/"})}):Object(j.jsxs)("div",{id:"signup-info",children:["Enter Email: ",Object(j.jsx)("input",{id:"email",type:"text"})," ",Object(j.jsx)("br",{}),"Enter Password: ",Object(j.jsx)("input",{id:"password",type:"password"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",onClick:this.login})," ",Object(j.jsx)("br",{})]})}},{key:"login",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){"ok"===t.responseText?e.setState({login:!0}):window.alert("Enter proper credentials")})),t.open("POST","http://https://warm-classy-quiet.glitch.me/login"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:document.getElementById("email").value,password:document.getElementById("password").value}))}}]),s}(u.a.Component);var T=function(){return Object(j.jsx)(_.a,{children:Object(j.jsx)("div",{className:"container h-100 d-flex justify-content-center align-items-center",children:Object(j.jsxs)(g.d,{children:[Object(j.jsx)(g.b,{exact:!0,path:"/",children:Object(j.jsx)(q,{})}),Object(j.jsx)(g.b,{path:"/signup",children:Object(j.jsx)(S,{})}),Object(j.jsx)(g.b,{path:"/login",children:Object(j.jsx)(I,{})})]})})})};c.a.render(Object(j.jsx)(T,{className:"root-div"}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.194039ac.chunk.js.map