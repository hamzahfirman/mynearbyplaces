(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,s,t){},38:function(e,s,t){},39:function(e,s,t){},49:function(e,s,t){},50:function(e,s,t){},51:function(e,s,t){},52:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t(0),i=t.n(a),r=t(29),c=t.n(r),o=(t(37),t(17)),l=(t.p,t(38),t(19)),d=t(6),h=t(12),u=t(13),j=t(15),b=t(14),m=t(59),p=t(53),x=t(30),O=t(54),v=t(60),g=t(58),w=(t(39),t.p+"static/media/plumbing1.0af04adf.jpg"),C=t.p+"static/media/auto1.924f1c52.jpg",f=t.p+"static/media/resto3.a4f8ff41.jpg",y=[{type:"restaurants",businesses:[{name:"Pizza Luna",town:"Tucson",state:"AZ",address:"1101 N Wilmot Rd, Tucson, AZ 85712",phone:"(520) 344-7637",image:"",categories:"Pizza",cost:"$$",hours:"12:00 PM - 8:00 PM",totalReviews:3,price:"standard",website:"pizza-luna.com",link:"https://pizza-luna.com/",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Culinary Dropout",town:"Tucson",state:"AZ",address:"2543 E Grant Rd Tucson, AZ 85716",phone:"(520) 203-0934",image:"",categories:"American",cost:"$$",hours:"10:00 AM - 9:00 PM",totalReviews:3,price:"standard",website:"culinarydropout.com",link:"https://culinarydropout.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Noodleholics",town:"Tucson",state:"AZ",address:"3502 E Grant Rd Tucson, AZ 85716",phone:"(520) 305-4262",image:"",categories:"Noodles",cost:"$$",hours:"12:00 PM - 9:00 PM",totalReviews:3,price:"standard",website:"noodleholics.com",link:"https://noodleholics.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]}]},{type:"plumbers",businesses:[{name:"Cal's Plumbing",town:"Tucson",state:"AZ",address:"5959 S Country Club Rd, Tucson, AZ 85706",phone:"(520) 622-2257",image:"",categories:"Plumbing",cost:"$$",hours:"24 hours",totalReviews:3,price:"standard",website:"calsplumbing.com",link:"https://calsplumbing.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Silverado Rooter & Plumbing",town:"Tucson",state:"AZ",address:"1208 W Roger Rd Tucson, AZ 85705",phone:"(520) 696-0000",image:"",categories:"Plumbing",cost:"$",hours:"24 hours",totalReviews:3,price:"standard",website:"silveradoplumbing.com",link:"https://calsplumbing.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Quality Plumbing Pros",town:"Tucson",state:"AZ",address:"1101 N Wilmot Rd, Tucson, AZ 85712",phone:"(520) 599-9169",image:"",categories:"Plumbing",cost:"$$$",hours:"24 hours",totalReviews:3,price:"standard",website:"tucsonplumbingpros.com",link:"https://tucsonplumbingpros.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]}]},{type:"auto repairs",businesses:[{name:"JT Auto",town:"Tucson",state:"AZ",address:"2530 E Fort Lowell Rd Tucson, AZ 85716",phone:"(520) 623-7066",image:"",categories:"Auto Repair",cost:"$$",hours:"8:30 AM - 5:00 PM",totalReviews:3,price:"standard",website:"1jtauto.com",link:"https://1jtauto.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"Sooter's Auto Service",town:"Tucson",state:"AZ",address:"429 E. 6th St. Tucson, AZ 85705",phone:"(520) 623-1002",image:"",categories:"Auto Repair",cost:"$$$",hours:"7:30 AM - 5:30 PM",totalReviews:3,price:"standard",website:"sootersauto.com",link:"https://sootersauto.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]},{name:"GIBBS Automative Service",town:"Tucson",state:"AZ",address:"1132 N. Belvedere Ave. Tucson, AZ 85712",phone:"(520) 325-1431",image:"",categories:"Auto Repair",cost:"$",hours:"7:30 AM - 5:00 PM",totalReviews:3,price:"standard",website:"gibbsautomotivetucson.com",link:"https://gibbsautomotivetucson.com",reviews:[{username:"hamzahfirman",review:"The BEST pizza place in town!"},{username:"andyle",review:"Standard taste ... "},{username:"antony123",review:"Trying the cheese one is a MUST~"}]}]}],T={totalReviews:0,reviews:[]},S=function(e){Object(j.a)(t,e);var s=Object(b.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=s.call(this,e)).handleSearchSubmitted=function(){var e=a.state,s=e.place,t=e.address.split(", "),n=t[0][0].toUpperCase()+t[0].substring(1).toLowerCase(),i=t[1].toUpperCase(),r=s.toLowerCase();"restaurants"===r||"plumbers"===r||"auto repairs"===r?a.props.history.push({pathname:"/businesses",business:r[0].toUpperCase()+r.substring(1),address:n+", "+i}):a.props.history.push({pathname:"/businesses",business:a.state.place,address:a.state.address})},a.handleInputChange=function(e){var s=e.target.value,t=e.target.name;T[t]=s,a.setState({newBusiness:T})},a.handleOnClickAddBusiness=function(){alert("Login is required")},a.handleOnClickWriteReview=function(){alert("Login is required")},a.handleOnClickAddBusinessState=function(){a.setState({addBusiness:!0})},a.handleOnClick=function(e,s){a.props.history.push({pathname:"/businesses",business:e,address:s})},a.addBusinessSubmit=function(e){y[{restaurants:0,plumbers:1,"auto pairs":2}[a.state.newBusiness.type]].businesses.push(a.state.newBusiness),console.log(y),T={totalReviews:0,reviews:[]},a.setState({newBusiness:T}),a.setState({addBusiness:!1}),e.preventDefault()},a.goToLogin=function(){a.props.history.push({pathname:"/login"})},a.goLogout=function(){a.props.history.push({pathname:"/"})},a.selectBusinesses=function(e){return Object(n.jsxs)("div",{children:["The Best Businesses in ",e]})},a.addBusiness=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"titleNewBusiness",children:"Add a Business"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{id:"addBusinessForm",children:Object(n.jsxs)(m.a,{onSubmit:a.addBusinessSubmit,children:[Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Place Name"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"name",placeholder:"Place Name"})})]}),Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalPassword",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Address"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"address",placeholder:"Street Name"})})]}),Object(n.jsxs)(m.a.Row,{children:[Object(n.jsxs)(m.a.Group,{as:x.a,controlId:"formGridCity",children:[Object(n.jsx)(m.a.Label,{children:"City"}),Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"zip"})]}),Object(n.jsxs)(m.a.Group,{as:x.a,controlId:"formGridState",children:[Object(n.jsx)(m.a.Label,{children:"State"}),Object(n.jsxs)(m.a.Control,{as:"select",defaultValue:"State",name:"state",onChange:a.handleInputChange,children:[Object(n.jsx)("option",{children:"State"}),Object(n.jsx)("option",{children:"AZ"})]})]}),Object(n.jsxs)(m.a.Group,{as:x.a,controlId:"formGridZip",children:[Object(n.jsx)(m.a.Label,{children:"Zip"}),Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"zip",placeholder:"xxxxx"})]})]}),Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Hours"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"hours",placeholder:"Ex: xx:xx AM - xx:xx PM "})})]}),Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Phone"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"phone",placeholder:"Ex: (xxx) xxx-xxxx"})})]}),Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Category"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"categories",placeholder:"Ex: Pizza, Plumbing, Noodles, etc,."})})]}),Object(n.jsxs)(m.a.Group,{as:p.a,children:[Object(n.jsx)(m.a.Label,{as:"legend",column:!0,sm:2,children:"Cost"}),Object(n.jsxs)(x.a,{sm:10,children:[Object(n.jsx)(m.a.Check,{type:"radio",onChange:a.handleInputChange,value:"$",label:"$",name:"cost"}),Object(n.jsx)(m.a.Check,{type:"radio",onChange:a.handleInputChange,value:"$$",label:"$$",name:"cost"}),Object(n.jsx)(m.a.Check,{type:"radio",onChange:a.handleInputChange,value:"$$$",label:"$$$",name:"cost"})]})]}),Object(n.jsxs)(m.a.Group,{as:p.a,children:[Object(n.jsx)(m.a.Label,{as:"legend",column:!0,sm:2,children:"Business"}),Object(n.jsxs)(x.a,{sm:10,children:[Object(n.jsx)(m.a.Check,{type:"radio",onChange:a.handleInputChange,value:"restaurants",label:"Restaurant",name:"type"}),Object(n.jsx)(m.a.Check,{type:"radio",onChange:a.handleInputChange,value:"plumbers",label:"Plumbing",name:"type"}),Object(n.jsx)(m.a.Check,{type:"radio",onChange:a.handleInputChange,value:"auto pairs",label:"Auto Pairs",name:"type"})]})]}),Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Website"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"website",placeholder:"Ex: test123.com"})})]}),Object(n.jsxs)(m.a.Group,{as:p.a,controlId:"formHorizontalEmail",children:[Object(n.jsx)(m.a.Label,{column:!0,sm:2,children:"Link"}),Object(n.jsx)(x.a,{sm:5,children:Object(n.jsx)(m.a.Control,{onChange:a.handleInputChange,name:"link",placeholder:"Ex: https://test123.com"})})]}),Object(n.jsx)(O.a,{as:"input",id:"textSubmit",placeholder:"Submit",type:"submit"})]})})]})},a.tableBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("table",{className:"tableBusinesses",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsxs)(v.a,{style:{width:"10rem"},children:[Object(n.jsx)(v.a.Img,{variant:"top",src:f}),Object(n.jsx)(v.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(O.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Restaurants",e)},children:"Restaurants"})})})]})}),Object(n.jsx)("td",{children:Object(n.jsxs)(v.a,{style:{width:"10rem"},children:[Object(n.jsx)(v.a.Img,{variant:"top",src:w}),Object(n.jsx)(v.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(O.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Plumbers",e)},children:"Plumbers"})})})]})}),Object(n.jsx)("td",{children:Object(n.jsxs)(v.a,{style:{width:"10rem"},children:[Object(n.jsx)(v.a.Img,{variant:"top",src:C}),Object(n.jsx)(v.a.Body,{children:Object(n.jsx)("div",{className:"buttonContainer",children:Object(n.jsx)(O.a,{id:"buttonBusinesses",onClick:function(){return a.handleOnClick("Auto Repairs",e)},children:"Auto Repairs"})})})]})})]})})})},a.searchBars=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"formBody",children:Object(n.jsxs)("form",{className:"loginNow",onSubmit:a.handleSearchSubmitted,children:[Object(n.jsx)("input",{value:a.state.place,onChange:a.handleInputChange,id:"placeInput",type:"text",name:"place",placeholder:"restaurants, plumbers, or auto repairs"}),Object(n.jsx)("input",{value:a.state.location,onChange:a.handleInputChange,id:"addressInput",type:"text",name:"address",placeholder:"Tucson, AZ"}),Object(n.jsx)("button",{type:"submit",id:"loginNow",children:"Find"})]})})})},a.body=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"bodyContainer",children:[Object(n.jsxs)(g.a,{className:"justify-content-end",activeKey:"/home",children:[Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.handleOnClickWriteReview,children:"Write a Review"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.handleOnClickAddBusiness,children:"Add a Business"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.goToLogin,children:"Login"})})]}),Object(n.jsx)("div",{id:"welcome",children:"WELCOME TO FINDAPLACE"}),a.searchBars()]}),Object(n.jsx)("div",{className:"selectBusinesses",children:"Login is required to see the best businesses in Tucson, AZ below."})]})},a.signedIn=function(e,s){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"bodyContainer",children:[Object(n.jsx)("div",{id:"logout",children:Object(n.jsx)(g.a,{className:"justify-content-end",activeKey:"/home",children:Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.goLogout,children:"Logout"})})})}),Object(n.jsxs)(g.a,{className:"justify-content-end",activeKey:"/home",children:[Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",href:"",children:"Write a Review"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",onClick:a.handleOnClickAddBusinessState,children:"Add a Business"})}),Object(n.jsx)(g.a.Item,{children:Object(n.jsx)(g.a.Link,{className:"navLinks",href:"",children:e})})]}),Object(n.jsx)("div",{id:"welcome",children:"WELCOME TO FINDAPLACE"}),a.searchBars()]})})},a.state={selected:!1,busineessType:"",place:"",address:"",addBusiness:!1,goToLogin:!1,newBusiness:{}},a}return Object(u.a)(t,[{key:"render",value:function(){var e="",s="",t=this.props.location,a=this.state.addBusiness;return t&&t.state&&t.state.user&&t.state.location&&(e=t.state.user,s=t.state.location),console.log(a),console.log(e),1==this.state.goToLogin?Object(n.jsx)(d.a,{to:{pathname:"/login"}}):e.length>0&&!0===a?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:this.signedIn(e,s)}),Object(n.jsx)("div",{children:this.addBusiness()}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"selectBusinesses",children:this.selectBusinesses(s)}),Object(n.jsx)("div",{children:this.tableBusinesses(s)})]}):e.length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:this.signedIn(e,s)}),Object(n.jsx)("div",{className:"selectBusinesses",children:this.selectBusinesses(s)}),this.tableBusinesses(s)]}):Object(n.jsx)("div",{children:this.body()})}}]),t}(i.a.Component),B=function(e){Object(j.a)(t,e);var s=Object(b.a)(t);function t(e){return Object(h.a)(this,t),s.call(this,e)}return Object(u.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"This is Places"})}}]),t}(i.a.Component),k=t(16),A=(t(49),{business:"",location:""}),I={},L="",R=function(e){Object(j.a)(t,e);var s=Object(b.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=s.call(this,e)).handleOnSubmit=function(e){var s=a.state,t=s.username,n=s.review;I.reviews.push({username:t,review:n}),I.totalReviews+=1,a.setState({username:"",review:""}),e.preventDefault()},a.getAllReviews=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"aReview",children:['"',e.review,'" - ',e.username]})})},a.handleInputChange=function(e){var s=e.target.value,t=e.target.name;a.setState(Object(k.a)({},t,s))},a.state={username:"",review:"",data:{},render:!0},a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){if(void 0===this.props.location.details){var e=L=I;this.setState({data:e})}else{L=this.props.location.details,I=L;var s=L;this.setState({data:s})}}},{key:"render",value:function(){var e=this.state.data;if(console.log(this.props.location.details),void 0!=e.name){var s=e.name,t=e.address,a=e.phone,i=e.cost,r=e.categories,c=e.totalReviews;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{id:"bussinessDescription",children:[Object(n.jsx)("h1",{children:s}),Object(n.jsxs)("p",{children:[t,Object(n.jsx)("br",{}),a,Object(n.jsx)("br",{}),i," - ",r,Object(n.jsx)("br",{}),Object(n.jsxs)("span",{id:"totalReviews",children:["Total reviews: ",c]})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(m.a,{id:"textArea",onSubmit:this.handleOnSubmit,children:[Object(n.jsx)(m.a.Control,{value:this.state.username,onChange:this.handleInputChange,name:"username",placeholder:"username"})," ",Object(n.jsx)("br",{}),Object(n.jsx)(m.a.Control,{as:"textarea",placeholder:"Write your review here ... ",rows:3,value:this.state.review,onChange:this.handleInputChange,name:"review"}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{as:"input",id:"textSubmit",type:"submit"})]}),Object(n.jsxs)("div",{id:"allReviews",children:[Object(n.jsx)("h5",{children:"Recent Reviews:"}),e.reviews.map(this.getAllReviews)]})]})}return Object(n.jsx)("div",{children:"Data is loading..."})}}]),t}(i.a.Component),z=t(55),N=t(56),E=t(57),P=(t(50),{fetchEntries:function(e){return y.find((function(s){return s.type===e.toLowerCase()}))}}),$="",M="",Z=function(e){Object(j.a)(t,e);var s=Object(b.a)(t);function t(e){var a;return Object(h.a)(this,t),(a=s.call(this,e)).handleAReview=function(e){a.props.history.push({pathname:"/place",details:e})},a.getBusinesses=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(v.a,{className:"cardBusiness",style:{width:"12rem"},children:[Object(n.jsx)(v.a.Header,{children:e.name}),Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(z.a,{id:"imageBusiness",src:f,fluid:!0}),Object(n.jsxs)(v.a.Title,{id:"cardBusinessTitle",children:["Total Reviews: ",e.totalReviews]}),Object(n.jsxs)(v.a.Text,{id:"cardBusinessText",children:["Address: ",e.address,Object(n.jsx)("br",{}),"Hours  : ",e.hours,Object(n.jsx)("br",{}),"Phone  : ",e.phone,Object(n.jsx)("br",{}),"Website: ",Object(n.jsx)("a",{href:e.link,children:e.website}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{variant:"secondary",id:"reviewButton",onClick:function(){return a.handleAReview(e)},size:"sm",active:!0,children:"Write a Review"})]})]})]})})})},a.state={entries:[]},a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){if(""==A.business){var e=this.props.location;M=e.business,$=e.address,A.business=M,A.location=$;var s=P.fetchEntries(M);this.setState({entries:s.businesses})}else{if(void 0!=this.props.location.business&&this.props.location.business!=M&&this.props.location.address!=$&&void 0!=this.props.location.address||this.props.location.address==$&&void 0!=this.props.location.address){var t=this.props.location;M=t.business,$=t.address,A.business=M,A.location=$}else $=A.location,M=A.business;var n=P.fetchEntries(M);console.log(n.businesses),this.setState({entries:n.businesses})}}},{key:"render",value:function(){var e=this.state.entries;return console.log(e),e.length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"brandName",children:"FINDAPLACE"}),Object(n.jsxs)(m.a.Row,{id:"searchForm",children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(m.a.Control,{width:"10px",placeholder:"Under Construction ... "})}),Object(n.jsx)(x.a,{children:Object(n.jsx)(O.a,{id:"buttonForm",type:"submit",children:"Find"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{id:"headerJumbotron",fluid:!0,children:Object(n.jsx)(E.a,{id:"headerContainer",children:Object(n.jsxs)("h1",{id:"header",children:["The Best ",M," in ",$]})})})}),Object(n.jsx)("div",{id:"businessCards",children:Object(n.jsx)(E.a,{children:Object(n.jsx)(p.a,{children:e.map(this.getBusinesses)})})})]}):Object(n.jsx)("div",{children:"Data is loading..."})}}]),t}(i.a.Component),G=(t(51),t.p+"static/media/resto2.ba9d340a.jpg"),D=function(e){Object(j.a)(t,e);var s=Object(b.a)(t);function t(e){var n;return Object(h.a)(this,t),(n=s.call(this,e)).logInSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.hadleChange=function(e){var s=e.target.value,t=e.target.name;n.setState(Object(k.a)({},t,s))},n.state={username:"",authenticated:!1,location:""},n}return Object(u.a)(t,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username,location:this.state.location}};return this.state.authenticated?Object(n.jsx)(d.a,{to:e}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{id:"headerTitle",children:"FINDAPLACE"}),Object(n.jsx)("div",{className:"login",children:Object(n.jsxs)("form",{className:"form",onSubmit:this.logInSubmit,children:[Object(n.jsx)("input",{type:"text",value:this.state.username,onChange:this.hadleChange,name:"username",placeholder:"username"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",value:this.state.location,onChange:this.hadleChange,name:"location",placeholder:"ex: Tucson, AZ"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{as:"input",type:"submit",id:"loginButton",value:"Login"})]})}),Object(n.jsx)("img",{src:G,id:"restoImg",height:"350px",width:"500px",alt:"resto2"})]})}}]),t}(i.a.Component);var F=function(){return Object(n.jsx)(l.a,{basename:"/mynearbyplaces",children:Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(S,Object(o.a)({},e))}}),Object(n.jsx)(d.b,{path:"/places",children:Object(n.jsx)(B,{})}),Object(n.jsx)(d.b,{path:"/place",render:function(e){return Object(n.jsx)(R,Object(o.a)({},e))}}),Object(n.jsx)(d.b,{path:"/login",render:function(e){return Object(n.jsx)(D,Object(o.a)({},e))}}),Object(n.jsx)(d.b,{path:"/businesses",render:function(e){return Object(n.jsx)(Z,Object(o.a)({},e))}})]})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,i=s.getLCP,r=s.getTTFB;t(e),n(e),a(e),i(e),r(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),U()}},[[52,1,2]]]);
//# sourceMappingURL=main.c2152bdc.chunk.js.map