(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s.n(a),c=s(29),r=s.n(c),l=(s(37),s(17)),o=(s.p,s(38),s(19)),d=s(6),j=s(12),h=s(13),u=s(15),b=s(14),x=s(59),O=s(53),m=s(30),p=s(54),v=s(60),g=s(55),C=s(58),f=s(56),w=(s(39),s.p+"static/media/plumbing1.0af04adf.jpg"),y=s.p+"static/media/auto1.924f1c52.jpg",B=s.p+"static/media/resto3.a4f8ff41.jpg",I="https://hamzahfirman-nearbyplaces-api.herokuapp.com",k={fetchPlaces:function(){return fetch(I+"/places").then((function(e){return e.json()}))},fetchReviews:function(e){return fetch(I+"/reviews/".concat(e)).then((function(e){return e.json()}))},pushAPlace:function(e){return fetch(I+"/place",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},L={totalReviews:0,reviews:[]},S=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleSearchSubmitted=function(){var e=a.state,t=e.place,s=e.address.split(", "),n=s[0][0].toUpperCase()+s[0].substring(1).toLowerCase(),i=s[1].toUpperCase(),c=t.toLowerCase();"restaurants"===c||"plumbers"===c||"auto repairs"===c?a.props.history.push({pathname:"/businesses",business:c[0].toUpperCase()+c.substring(1),address:n+", "+i}):a.props.history.push({pathname:"/businesses",business:a.state.place,address:a.state.address})},a.handleInputChange=function(e){var t=e.target.value,s=e.target.name;L[s]=t,a.setState({newBusiness:L})},a.handleOnClickAddBusiness=function(){alert("Login is required")},a.handleOnClickWriteReview=function(){alert("Login is required")},a.handleOnClickAddBusinessState=function(){a.setState({addBusiness:!0})},a.handleOnClick=function(e,t){a.props.history.push({pathname:"/businesses",business:e,address:t})},a.handleAReview=function(e){a.props.history.push({pathname:"/place",details:e})},a.addBusinessSubmit=function(e){console.log(a.state.newBusiness),k.pushAPlace(a.state.newBusiness),L={totalReviews:0},a.setState({newBusiness:L}),a.setState({addBusiness:!1}),e.preventDefault()},a.goToLogin=function(){a.props.history.push({pathname:"/login"})},a.goLogout=function(){a.props.history.push({pathname:"/"})},a.selectBusinesses=function(e){return Object(n.jsxs)("div",{children:["The Best Businesses in ",e]})},a.addBusiness=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"titleNewBusiness",children:"Add a Business"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{id:"addBusinessForm",children:Object(n.jsxs)(x.a,{onSubmit:a.addBusinessSubmit,children:[Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Place Name"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"name",placeholder:"Place Name"})})]}),Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalPassword",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Address"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"address",placeholder:"Street Name"})})]}),Object(n.jsxs)(x.a.Row,{children:[Object(n.jsxs)(x.a.Group,{as:m.a,controlId:"formGridCity",children:[Object(n.jsx)(x.a.Label,{children:"City"}),Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"zip"})]}),Object(n.jsxs)(x.a.Group,{as:m.a,controlId:"formGridState",children:[Object(n.jsx)(x.a.Label,{children:"State"}),Object(n.jsxs)(x.a.Control,{as:"select",defaultValue:"State",name:"state",onChange:a.handleInputChange,children:[Object(n.jsx)("option",{children:"State"}),Object(n.jsx)("option",{children:"AZ"})]})]}),Object(n.jsxs)(x.a.Group,{as:m.a,controlId:"formGridZip",children:[Object(n.jsx)(x.a.Label,{children:"Zip"}),Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"zip",placeholder:"xxxxx"})]})]}),Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Hours"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"hours",placeholder:"Ex: xx:xx AM - xx:xx PM "})})]}),Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Phone"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"phone",placeholder:"Ex: (xxx) xxx-xxxx"})})]}),Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Category"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"categories",placeholder:"Ex: Pizza, Plumbing, Noodles, etc,."})})]}),Object(n.jsxs)(x.a.Group,{as:O.a,children:[Object(n.jsx)(x.a.Label,{as:"legend",column:!0,sm:2,children:"Cost"}),Object(n.jsxs)(m.a,{sm:10,children:[Object(n.jsx)(x.a.Check,{type:"radio",onChange:a.handleInputChange,value:"$",label:"$",name:"cost"}),Object(n.jsx)(x.a.Check,{type:"radio",onChange:a.handleInputChange,value:"$$",label:"$$",name:"cost"}),Object(n.jsx)(x.a.Check,{type:"radio",onChange:a.handleInputChange,value:"$$$",label:"$$$",name:"cost"})]})]}),Object(n.jsxs)(x.a.Group,{as:O.a,children:[Object(n.jsx)(x.a.Label,{as:"legend",column:!0,sm:2,children:"Business"}),Object(n.jsxs)(m.a,{sm:10,children:[Object(n.jsx)(x.a.Check,{type:"radio",onChange:a.handleInputChange,value:"restaurants",label:"Restaurant",name:"type"}),Object(n.jsx)(x.a.Check,{type:"radio",onChange:a.handleInputChange,value:"plumbers",label:"Plumbing",name:"type"}),Object(n.jsx)(x.a.Check,{type:"radio",onChange:a.handleInputChange,value:"auto pairs",label:"Auto Pairs",name:"type"})]})]}),Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Website"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"website",placeholder:"Ex: test123.com"})})]}),Object(n.jsxs)(x.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(x.a.Label,{column:!0,sm:2,children:"Link"}),Object(n.jsx)(m.a,{sm:5,children:Object(n.jsx)(x.a.Control,{onChange:a.handleInputChange,name:"link",placeholder:"Ex: https://test123.com"})})]}),Object(n.jsx)(p.a,{as:"input",id:"textSubmit",placeholder:"Submit",type:"submit"})]})})]})},a.tableBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("table",{className:"tableBusinesses",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsxs)(v.a,{style:{width:"10rem"},children:[Object(n.jsx)(v.a.Img,{variant:"top",src:B}),Object(n.jsx)(v.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(p.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Restaurants",e)},children:"Restaurants"})})})]})}),Object(n.jsx)("td",{children:Object(n.jsxs)(v.a,{style:{width:"10rem"},children:[Object(n.jsx)(v.a.Img,{variant:"top",src:w}),Object(n.jsx)(v.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(p.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Plumbers",e)},children:"Plumbers"})})})]})}),Object(n.jsx)("td",{children:Object(n.jsxs)(v.a,{style:{width:"10rem"},children:[Object(n.jsx)(v.a.Img,{variant:"top",src:y}),Object(n.jsx)(v.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(p.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Auto Repairs",e)},children:"Auto Repairs"})})})]})})]})})})},a.getBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(v.a,{className:"cardBusiness",style:{width:"12rem"},children:[Object(n.jsx)(v.a.Header,{children:e.name}),Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(g.a,{id:"imageBusiness",src:B,fluid:!0}),Object(n.jsxs)(v.a.Title,{id:"cardBusinessTitle",children:["Total Reviews: ",e.totalReviews]}),Object(n.jsxs)(v.a.Text,{id:"cardBusinessText",children:["Address: ",e.address,Object(n.jsx)("br",{}),"Hours  : ",e.hours,Object(n.jsx)("br",{}),"Phone  : ",e.phone,Object(n.jsx)("br",{}),"Website: ",Object(n.jsx)("a",{href:e.link,children:e.website}),Object(n.jsx)("br",{}),Object(n.jsx)(p.a,{variant:"secondary",id:"reviewButton",onClick:function(){return a.handleAReview(e)},size:"sm",active:!0,children:"Write a Review"})]})]})]})})})},a.searchBars=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"formBody",children:Object(n.jsxs)("form",{className:"loginNow",onSubmit:a.handleSearchSubmitted,children:[Object(n.jsx)("input",{value:a.state.place,onChange:a.handleInputChange,id:"placeInput",type:"text",name:"place",placeholder:"restaurants, plumbers, or auto repairs"}),Object(n.jsx)("input",{value:a.state.location,onChange:a.handleInputChange,id:"addressInput",type:"text",name:"address",placeholder:"Tucson, AZ"}),Object(n.jsx)("button",{type:"submit",id:"loginNow",children:"Find"})]})})})},a.body=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"bodyContainer",children:[Object(n.jsxs)(C.a,{className:"justify-content-end",activeKey:"/home",children:[Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",onClick:a.handleOnClickWriteReview,children:"Write a Review"})}),Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",onClick:a.handleOnClickAddBusiness,children:"Add a Business"})}),Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",onClick:a.goToLogin,children:"Login"})})]}),Object(n.jsx)("div",{id:"welcome",children:"WELCOME TO FINDAPLACE"}),a.searchBars()]}),Object(n.jsx)("div",{className:"selectBusinesses",children:"Login is required to see the best businesses in Tucson, AZ below."})]})},a.signedIn=function(e,t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"bodyContainer",children:[Object(n.jsx)("div",{id:"logout",children:Object(n.jsx)(C.a,{className:"justify-content-end",activeKey:"/home",children:Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",onClick:a.goLogout,children:"Logout"})})})}),Object(n.jsxs)(C.a,{className:"justify-content-end",activeKey:"/home",children:[Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",href:"",children:"Write a Review"})}),Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",onClick:a.handleOnClickAddBusinessState,children:"Add a Business"})}),Object(n.jsx)(C.a.Item,{children:Object(n.jsx)(C.a.Link,{className:"navLinks",href:"",children:e})})]}),Object(n.jsx)("div",{id:"welcome",children:"WELCOME TO FINDAPLACE"}),a.searchBars()]})})},a.state={selected:!1,busineessType:"",place:"",address:"",addBusiness:!1,goToLogin:!1,newBusiness:{},entries:[]},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;k.fetchPlaces().then((function(t){return e.setState({entries:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e="",t="",s=this.props.location,a=this.state,i=a.addBusiness,c=a.entries;return s&&s.state&&s.state.user&&s.state.location&&(e=s.state.user,t=s.state.location),1==this.state.goToLogin?Object(n.jsx)(d.a,{to:{pathname:"/login"}}):e.length>0&&!0===i?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:this.signedIn(e,t)}),Object(n.jsx)("div",{children:this.addBusiness()}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"selectBusinesses",children:this.selectBusinesses(t)}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{id:"businessCards",children:Object(n.jsx)(f.a,{children:Object(n.jsx)(O.a,{children:c.map(this.getBusinesses)})})})]}):e.length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:this.signedIn(e,t)}),Object(n.jsx)("div",{className:"selectBusinesses",children:this.selectBusinesses(t)}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{id:"businessCards",children:Object(n.jsx)(f.a,{children:Object(n.jsx)(O.a,{children:c.map(this.getBusinesses)})})})]}):Object(n.jsx)("div",{children:this.body()})}}]),s}(i.a.Component),N=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){return Object(j.a)(this,s),t.call(this,e)}return Object(h.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"This is Places"})}}]),s}(i.a.Component),A=s(16),R=(s(49),{}),T=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleOnSubmit=function(e){var t=a.state,s=t.username,n=t.review;R.reviews.push({username:s,review:n}),R.totalReviews+=1,a.setState({username:"",review:""}),e.preventDefault()},a.getAllReviews=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"aReview",children:['"',e.review,'" - ',e.username]})})},a.handleInputChange=function(e){var t=e.target.value,s=e.target.name;a.setState(Object(A.a)({},s,t))},a.state={username:"",review:"",data:{},render:!0},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.location.details),console.log(this.props.location.details.id);k.fetchReviews(this.props.location.details.id).then((function(t){return e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.data;if(console.log(this.props.location.details),void 0!=e.name){var t=e.name,s=e.address,a=e.phone,i=e.cost,c=e.categories,r=e.totalReviews;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"bussinessDescription",children:[Object(n.jsx)("h1",{children:t}),Object(n.jsxs)("p",{children:[s,Object(n.jsx)("br",{}),a,Object(n.jsx)("br",{}),i," - ",c,Object(n.jsx)("br",{}),Object(n.jsxs)("span",{id:"totalReviews",children:["Total reviews: ",r]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(x.a,{id:"textArea",onSubmit:this.handleOnSubmit,children:[Object(n.jsx)(x.a.Control,{value:this.state.username,onChange:this.handleInputChange,name:"username",placeholder:"username"})," ",Object(n.jsx)("br",{}),Object(n.jsx)(x.a.Control,{as:"textarea",placeholder:"Write your review here ... ",rows:3,value:this.state.review,onChange:this.handleInputChange,name:"review"}),Object(n.jsx)("br",{}),Object(n.jsx)(p.a,{as:"input",id:"textSubmit",type:"submit"})]}),Object(n.jsxs)("div",{id:"allReviews",children:[Object(n.jsx)("h5",{children:"Recent Reviews:"}),e.reviews.map(this.getAllReviews)]})]})}return Object(n.jsx)("div",{children:"Data is loading..."})}}]),s}(i.a.Component),P=s(57),E=(s(50),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleAReview=function(e){a.props.history.push({pathname:"/place",details:e})},a.getBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(v.a,{className:"cardBusiness",style:{width:"12rem"},children:[Object(n.jsx)(v.a.Header,{children:e.name}),Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(g.a,{id:"imageBusiness",src:B,fluid:!0}),Object(n.jsxs)(v.a.Title,{id:"cardBusinessTitle",children:["Total Reviews: ",e.totalReviews]}),Object(n.jsxs)(v.a.Text,{id:"cardBusinessText",children:["Address: ",e.address,Object(n.jsx)("br",{}),"Hours  : ",e.hours,Object(n.jsx)("br",{}),"Phone  : ",e.phone,Object(n.jsx)("br",{}),"Website: ",Object(n.jsx)("a",{href:e.link,children:e.website}),Object(n.jsx)("br",{}),Object(n.jsx)(p.a,{variant:"secondary",id:"reviewButton",onClick:function(){return a.handleAReview(e)},size:"sm",active:!0,children:"Write a Review"})]})]})]})})})},a.state={entries:[]},a}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;k.fetchPlaces().then((function(t){return e.setState({entries:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.entries;return console.log(e),e.length>0?(console.log(e),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"brandName",children:"FINDAPLACE"}),Object(n.jsxs)(x.a.Row,{id:"searchForm",children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(x.a.Control,{width:"10px",placeholder:"Under Construction ... "})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(p.a,{id:"buttonForm",type:"submit",children:"Find"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(P.a,{id:"headerJumbotron",fluid:!0,children:Object(n.jsx)(f.a,{id:"headerContainer",children:Object(n.jsxs)("h1",{id:"header",children:["The Best ",""," in ",""]})})})}),Object(n.jsx)("div",{id:"businessCards",children:Object(n.jsx)(f.a,{children:Object(n.jsx)(O.a,{children:e.map(this.getBusinesses)})})})]})):Object(n.jsx)("div",{children:"Data is loading..."})}}]),s}(i.a.Component)),G=(s(51),s.p+"static/media/resto2.ba9d340a.jpg"),z=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).logInSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.hadleChange=function(e){var t=e.target.value,s=e.target.name;n.setState(Object(A.a)({},s,t))},n.state={username:"",authenticated:!1,location:""},n}return Object(h.a)(s,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username,location:this.state.location}};return this.state.authenticated?Object(n.jsx)(d.a,{to:e}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"headerTitle",children:"FINDAPLACE"}),Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("form",{className:"form",onSubmit:this.logInSubmit,children:[Object(n.jsx)("input",{type:"text",value:this.state.username,onChange:this.hadleChange,name:"username",placeholder:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:this.state.location,onChange:this.hadleChange,name:"location",placeholder:"ex: Tucson, AZ"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(p.a,{as:"input",type:"submit",id:"loginButton",value:"Login"})]})}),Object(n.jsx)("img",{src:G,id:"restoImg",height:"350px",width:"500px",alt:"resto2"})]})}}]),s}(i.a.Component);var D=function(){return Object(n.jsx)(o.a,{basename:"/mynearbyplaces",children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(S,Object(l.a)({},e))}}),Object(n.jsx)(d.b,{path:"/places",children:Object(n.jsx)(N,{})}),Object(n.jsx)(d.b,{path:"/place",render:function(e){return Object(n.jsx)(T,Object(l.a)({},e))}}),Object(n.jsx)(d.b,{path:"/login",render:function(e){return Object(n.jsx)(z,Object(l.a)({},e))}}),Object(n.jsx)(d.b,{path:"/businesses",render:function(e){return Object(n.jsx)(E,Object(l.a)({},e))}})]})})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.4d877224.chunk.js.map