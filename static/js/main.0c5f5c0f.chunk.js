(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),c=(n(22),n(12)),i=n(13),m=n(16),s=n(15);var u=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"Employee Directory"))};n(23),n(24);var h=function(e){return r.a.createElement("div",{className:"card",style:{margin:"10px auto",borderRadius:"30px"}},r.a.createElement("div",{className:"conatiner"},r.a.createElement("img",{alt:e.name,src:e.image,style:{height:130,float:"left",borderTopLeftRadius:"30px",borderBottomRightRadius:"30px"}}),r.a.createElement("h4",null,r.a.createElement("strong",null,"Name:")," ",e.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone Number:")," ",e.phone),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.email)))},p=n(14),d=n.n(p),E=function(){return d.a.get("https://randomuser.me/api/?results=100&nat=us&inc=name,email,phone,cell,picture,id")};var g=function(e){return r.a.createElement("header",{style:{margin:"20px"}},"Employee List")};var y=function(e){return r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,type:"text",name:"search",placeholder:"Search Employee Here",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit},"Search"))},f=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],searchEmployees:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state),E().then((function(t){e.setState({employees:t.data.results}),console.log(t.data.results),console.log(e.state)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(y,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(g,null),this.state.employees.map((function(e){return r.a.createElement(h,{id:e.id,key:e.key,name:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,image:e.picture.medium})})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.0c5f5c0f.chunk.js.map