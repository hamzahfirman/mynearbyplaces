(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,s,t){},38:function(e,s,t){},39:function(e,s,t){},43:function(e,s,t){},44:function(e,s,t){},45:function(e,s,t){},52:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t(0),i=t.n(a),r=t(29),c=t.n(r),o=(t(37),t(21)),d=(t.p,t(38),t(18)),l=t(6),u=t(16),h=t(12),j=t(13),b=t(15),m=t(14),p=t(59),O=t(53),v=t(30),x=t(54),w=t(60),g=t(58),f=(t(39),t.p+"static/media/plumbing1.0af04adf.jpg"),y=t.p+"static/media/auto1.924f1c52.jpg",C=t.p+"static/media/resto3.a4f8ff41.jpg",T=function(e){Object(b.a)(t,e);var s=Object(m.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=s.call(this,e)).handleSearchSubmitted=function(){var e=a.state,s=e.place,t=e.address.split(", "),n=t[0][0].toUpperCase()+t[0].substring(1).toLowerCase(),i=t[1].toUpperCase(),r=s.toLowerCase();"restaurants"===r||"plumbers"===r||"auto repairs"===r?a.props.history.push({pathname:"/businesses",business:r[0].toUpperCase()+r.substring(1),address:n+", "+i}):a.props.history.push({pathname:"/businesses",business:a.state.place,address:a.state.address})},a.handleInputChange=function(e){var s=e.target.value,t=e.target.name;a.setState(Object(u.a)({},t,s))},a.handleOnClickAddBusiness=function(){alert("Login is required")},a.handleOnClickWriteReview=function(){alert("Login is required")},a.handleOnClickAddBusinessState=function(){a.setState({addBusiness:!0})},a.handleOnClick=function(e,s){a.props.history.push({pathname:"/businesses",business:e,address:s})},a.selectBusinesses=function(e){return Object(n.jsxs)("div",{children:["The Best Businesses in ",e]})},a.addBusiness=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"titleNewBusiness",children:"Add a Business"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{id:"addBusinessForm",children:Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(p.a.Group,{as:O.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(p.a.Label,{column:!0,sm:2,children:"Place Name"}),Object(n.jsx)(v.a,{sm:5,children:Object(n.jsx)(p.a.Control,{type:"email",placeholder:"Place Name"})})]}),Object(n.jsxs)(p.a.Group,{as:O.a,controlId:"formHorizontalPassword",children:[Object(n.jsx)(p.a.Label,{column:!0,sm:2,children:"Address"}),Object(n.jsx)(v.a,{sm:5,children:Object(n.jsx)(p.a.Control,{type:"password",placeholder:"Address"})})]}),Object(n.jsx)("fieldset",{children:Object(n.jsxs)(p.a.Group,{as:O.a,children:[Object(n.jsx)(p.a.Label,{as:"legend",column:!0,sm:2,children:"Category"}),Object(n.jsxs)(v.a,{sm:10,children:[Object(n.jsx)(p.a.Check,{type:"radio",label:"Restaurant",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),Object(n.jsx)(p.a.Check,{type:"radio",label:"Plumbing",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),Object(n.jsx)(p.a.Check,{type:"radio",label:"Auto Repairs",name:"formHorizontalRadios",id:"formHorizontalRadios3"})]})]})}),Object(n.jsx)(x.a,{as:"input",id:"textSubmit",placeholder:"Submit",type:"submit"})]})})]})},a.tableBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("table",{className:"tableBusinesses",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsxs)(w.a,{style:{width:"10rem"},children:[Object(n.jsx)(w.a.Img,{variant:"top",src:C}),Object(n.jsx)(w.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(x.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Restaurants",e)},children:"Restaurants"})})})]})}),Object(n.jsx)("td",{children:Object(n.jsxs)(w.a,{style:{width:"10rem"},children:[Object(n.jsx)(w.a.Img,{variant:"top",src:f}),Object(n.jsx)(w.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(x.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Plumbers",e)},children:"Plumbers"})})})]})}),Object(n.jsx)("td",{children:Object(n.jsxs)(w.a,{style:{width:"10rem"},children:[Object(n.jsx)(w.a.Img,{variant:"top",src:y}),Object(n.jsx)(w.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(x.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Auto Repairs",e)},children:"Auto Repairs"})})})]})})]})})})},a.searchBars=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"formBody",children:Object(n.jsxs)("form",{className:"loginNow",onSubmit:a.handleSearchSubmitted,children:[Object(n.jsx)("input",{value:a.state.place,onChange:a.handleInputChange,id:"placeInput",type:"text",name:"place",placeholder:"restaurants, plumbers, or auto repairs"}),Object(n.jsx)("input",{value:a.state.location,onChange:a.handleInputChange,id:"addressInput",type:"text",name:"address",placeholder:"Tucson, AZ"}),Object(n.jsx)("button",{type:"submit",id:"loginNow",children:"Find"})]})})})},a.body=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"bodyContainer",children:[Object(n.jsxs)(g.a,{className:"justify-content-end",activeKey:"/home",children:[Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.handleOnClickWriteReview,children:"Write a Review"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.handleOnClickAddBusiness,children:"Add a Business"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",href:"/login",children:"Login"})})]}),Object(n.jsx)("div",{id:"welcome",children:"WELCOME TO FINDAPLACE"}),a.searchBars()]}),Object(n.jsx)("div",{className:"selectBusinesses",children:"Login is required to see the best businesses in Tucson, AZ below."})]})},a.signedIn=function(e,s){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"bodyContainer",children:[Object(n.jsx)("div",{id:"logout",children:Object(n.jsx)(g.a,{className:"justify-content-end",activeKey:"/home",children:Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",href:"/",children:"Logout"})})})}),Object(n.jsxs)(g.a,{className:"justify-content-end",activeKey:"/home",children:[Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",href:"",children:"Write a Review"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.handleOnClickAddBusinessState,children:"Add a Business"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",href:"",children:e})})]}),Object(n.jsx)("div",{id:"welcome",children:"WELCOME TO FINDAPLACE"}),a.searchBars()]}),Object(n.jsx)("div",{className:"selectBusinesses",children:a.selectBusinesses(s)}),Object(n.jsxs)("div",{children:[" ",a.tableBusinesses(s)]})]})},a.state={selected:!1,busineessType:"",place:"",address:"",addBusiness:!1},a}return Object(j.a)(t,[{key:"render",value:function(){var e="",s="",t=this.props.location,a=this.state.addBusiness;return t&&t.state&&t.state.user&&t.state.location&&(e=t.state.user,s=t.state.location),e.length>0&&!0===a?Object(n.jsxs)("div",{children:[this.signedIn(e,s),Object(n.jsx)("div",{children:this.addBusiness()})]}):e.length>0?Object(n.jsx)("div",{children:this.signedIn(e,s)}):Object(n.jsx)("div",{children:this.body()})}}]),t}(i.a.Component),S=function(e){Object(b.a)(t,e);var s=Object(m.a)(t);function t(e){return Object(h.a)(this,t),s.call(this,e)}return Object(j.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"This is Places"})}}]),t}(i.a.Component),A=(t(43),{business:"",location:""}),B={},k="",R=function(e){Object(b.a)(t,e);var s=Object(m.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=s.call(this,e)).handleOnSubmit=function(e){var s=a.state,t=s.username,n=s.review;B.reviews.push({username:t,review:n}),a.setState({username:"",review:""}),e.preventDefault()},a.getAllReviews=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"aReview",children:['"',e.review,'" - ',e.username]})})},a.handleInputChange=function(e){var s=e.target.value,t=e.target.name;a.setState(Object(u.a)({},t,s))},a.state={username:"",review:"",data:{},render:!0},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){if(void 0===this.props.location.details){var e=k=B;this.setState({data:e})}else{k=this.props.location.details,B=k;var s=k;this.setState({data:s})}}},{key:"render",value:function(){var e=this.state.data;if(console.log(this.props.location.details),void 0!=e.name){var s=e.name,t=e.address,a=e.phone,i=e.cost,r=e.categories,c=e.totalReviews;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"bussinessDescription",children:[Object(n.jsx)("h1",{children:s}),Object(n.jsxs)("p",{children:[t,Object(n.jsx)("br",{}),a,Object(n.jsx)("br",{}),i," - ",r,Object(n.jsx)("br",{}),Object(n.jsxs)("span",{id:"totalReviews",children:["Total reviews: ",c]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{id:"textArea",onSubmit:this.handleOnSubmit,children:[Object(n.jsx)(p.a.Control,{value:this.state.username,onChange:this.handleInputChange,name:"username",placeholder:"username"})," ",Object(n.jsx)("br",{}),Object(n.jsx)(p.a.Control,{as:"textarea",placeholder:"Write your review here ... ",rows:3,value:this.state.review,onChange:this.handleInputChange,name:"review"}),Object(n.jsx)("br",{}),Object(n.jsx)(x.a,{as:"input",id:"textSubmit",type:"submit"})]}),Object(n.jsxs)("div",{id:"allReviews",children:[Object(n.jsx)("h5",{children:"Recent Reviews:"}),e.reviews.map(this.getAllReviews)]})]})}return Object(n.jsx)("div",{children:"Data is loading..."})}}]),t}(i.a.Component),z=t(55),N=t(56),L=t(57),I=(t(44),[{type:"restaurants",businesses:[{name:"Pizza Luna",town:"Tucson",state:"AZ",address:"1101 N Wilmot Rd, Tucson, AZ 85712",phone:"(520) 344-7637",image:"",categories:"Pizza",cost:"$$",hours:"12:00 PM - 8:00 PM",totalReviews:"3",price:"standard",website:"pizza-luna.com",link:"https://pizza-luna.com/",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Culinary Dropout",town:"Tucson",state:"AZ",address:"2543 E Grant Rd Tucson, AZ 85716",phone:"(520) 203-0934",image:"",categories:"American",cost:"$$",hours:"10:00 AM - 9:00 PM",totalReviews:"3",price:"standard",website:"culinarydropout.com",link:"https://culinarydropout.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Noodleholics",town:"Tucson",state:"AZ",address:"3502 E Grant Rd Tucson, AZ 85716",phone:"(520) 305-4262",image:"",categories:"Noodles",cost:"$$",hours:"12:00 PM - 9:00 PM",totalReviews:"3",price:"standard",website:"noodleholics.com",link:"https://noodleholics.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]}]},{type:"plumbers",businesses:[{name:"Cal's Plumbing",town:"Tucson",state:"AZ",address:"5959 S Country Club Rd, Tucson, AZ 85706",phone:"(520) 622-2257",image:"",categories:"Plumbing",cost:"$$",hours:"24 hours",totalReviews:"3",price:"standard",website:"calsplumbing.com",link:"https://calsplumbing.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Silverado Rooter & Plumbing",town:"Tucson",state:"AZ",address:"1208 W Roger Rd Tucson, AZ 85705",phone:"(520) 696-0000",image:"",categories:"Plumbing",cost:"$",hours:"24 hours",totalReviews:"3",price:"standard",website:"silveradoplumbing.com",link:"https://calsplumbing.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Quality Plumbing Pros",town:"Tucson",state:"AZ",address:"1101 N Wilmot Rd, Tucson, AZ 85712",phone:"(520) 599-9169",image:"",categories:"Plumbing",cost:"$$$",hours:"24 hours",totalReviews:"3",price:"standard",website:"tucsonplumbingpros.com",link:"https://tucsonplumbingpros.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]}]},{type:"auto repairs",businesses:[{name:"JT Auto",town:"Tucson",state:"AZ",address:"2530 E Fort Lowell Rd Tucson, AZ 85716",phone:"(520) 623-7066",image:"",categories:"Auto Repair",cost:"$$",hours:"8:30 AM - 5:00 PM",totalReviews:"3",price:"standard",website:"1jtauto.com",link:"https://1jtauto.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Sooter's Auto Service",town:"Tucson",state:"AZ",address:"429 E. 6th St. Tucson, AZ 85705",phone:"(520) 623-1002",image:"",categories:"Auto Repair",cost:"$$$",hours:"7:30 AM - 5:30 PM",totalReviews:"3",price:"standard",website:"sootersauto.com",link:"https://sootersauto.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"GIBBS Automative Service",town:"Tucson",state:"AZ",address:"1132 N. Belvedere Ave. Tucson, AZ 85712",phone:"(520) 325-1431",image:"",categories:"Auto Repair",cost:"$",hours:"7:30 AM - 5:00 PM",totalReviews:"3",price:"standard",website:"gibbsautomotivetucson.com",link:"https://gibbsautomotivetucson.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]}]}]),P={fetchEntries:function(e){return I.find((function(s){return s.type===e.toLowerCase()}))}},E="",M="",Z=function(e){Object(b.a)(t,e);var s=Object(m.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=s.call(this,e)).handleAReview=function(e){a.props.history.push({pathname:"/place",details:e})},a.getBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(v.a,{children:Object(n.jsxs)(w.a,{className:"cardBusiness",style:{width:"12rem"},children:[Object(n.jsx)(w.a.Header,{children:e.name}),Object(n.jsxs)(w.a.Body,{children:[Object(n.jsx)(z.a,{id:"imageBusiness",src:C,fluid:!0}),Object(n.jsxs)(w.a.Title,{id:"cardBusinessTitle",children:["Total Reviews: ",e.totalReviews]}),Object(n.jsxs)(w.a.Text,{id:"cardBusinessText",children:["Address: ",e.address,Object(n.jsx)("br",{}),"Hours  : ",e.hours,Object(n.jsx)("br",{}),"Phone  : ",e.phone,Object(n.jsx)("br",{}),"Website: ",Object(n.jsx)("a",{href:e.link,children:e.website}),Object(n.jsx)("br",{}),Object(n.jsx)(x.a,{variant:"secondary",id:"reviewButton",onClick:function(){return a.handleAReview(e)},size:"sm",active:!0,children:"Write a Review"})]})]})]})})})},a.state={entries:[]},a}return Object(j.a)(t,[{key:"componentDidMount",value:function(){if(""==A.business){var e=this.props.location;M=e.business,E=e.address,A.business=M,A.location=E;var s=P.fetchEntries(M);this.setState({entries:s.businesses})}else{if(void 0!=this.props.location.business&&this.props.location.business!=M&&this.props.location.address!=E&&void 0!=this.props.location.address||this.props.location.address==E&&void 0!=this.props.location.address){var t=this.props.location;M=t.business,E=t.address,A.business=M,A.location=E}else E=A.location,M=A.business;var n=P.fetchEntries(M);this.setState({entries:n.businesses})}}},{key:"render",value:function(){var e=this.state.entries;return e.length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"brandName",children:"FINDAPLACE"}),Object(n.jsxs)(p.a.Row,{id:"searchForm",children:[Object(n.jsx)(v.a,{children:Object(n.jsx)(p.a.Control,{width:"10px",placeholder:"Under Construction ... "})}),Object(n.jsx)(v.a,{children:Object(n.jsx)(x.a,{id:"buttonForm",type:"submit",children:"Find"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{id:"headerJumbotron",fluid:!0,children:Object(n.jsx)(L.a,{id:"headerContainer",children:Object(n.jsxs)("h1",{id:"header",children:["The Best ",M," in ",E]})})})}),Object(n.jsx)("div",{id:"businessCards",children:Object(n.jsx)(L.a,{children:Object(n.jsx)(O.a,{children:e.map(this.getBusinesses)})})})]}):Object(n.jsx)("div",{children:"Data is loading..."})}}]),t}(i.a.Component),$=(t(45),t.p+"static/media/resto2.ba9d340a.jpg"),F=function(e){Object(b.a)(t,e);var s=Object(m.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=s.call(this,e)).logInSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.hadleChange=function(e){var s=e.target.value,t=e.target.name;n.setState(Object(u.a)({},t,s))},n.state={username:"",authenticated:!1,location:""},n}return Object(j.a)(t,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username,location:this.state.location}};return this.state.authenticated?Object(n.jsx)(l.a,{to:e}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"headerTitle",children:"FINDAPLACE"}),Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("form",{className:"form",onSubmit:this.logInSubmit,children:[Object(n.jsx)("input",{type:"text",value:this.state.username,onChange:this.hadleChange,name:"username",placeholder:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:this.state.location,onChange:this.hadleChange,name:"location",placeholder:"ex: Tucson, AZ"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(x.a,{as:"input",type:"submit",id:"loginButton",value:"Login"})]})}),Object(n.jsx)("img",{src:$,id:"restoImg",height:"350px",width:"500px",alt:"resto2"})]})}}]),t}(i.a.Component);var D=function(){return Object(n.jsx)(d.a,{basename:"/mynearbyplaces",children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(T,Object(o.a)({},e))}}),Object(n.jsx)(l.b,{path:"/places",children:Object(n.jsx)(S,{})}),Object(n.jsx)(l.b,{path:"/place",render:function(e){return Object(n.jsx)(R,Object(o.a)({},e))}}),Object(n.jsx)(l.b,{path:"/login",children:Object(n.jsx)(F,{})}),Object(n.jsx)(l.b,{path:"/businesses",render:function(e){return Object(n.jsx)(Z,Object(o.a)({},e))}})]})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,i=s.getLCP,r=s.getTTFB;t(e),n(e),a(e),i(e),r(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),U()}},[[52,1,2]]]);
//# sourceMappingURL=main.935563f0.chunk.js.map