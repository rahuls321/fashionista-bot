(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(37),r=a.n(i),o=(a(75),a(13)),l=a(14),c=a(2),m=a(16),u=a(15),p=(a(76),a(67)),d=a.n(p),h=(a(246),function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 pa3 dim pointer black underline link"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 pa3 dim pointer black underline link"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 pa3 dim pointer black underline link"},"Register"))}),g=a(68),b=a.n(g),A=a(69),f=a.n(A),w=(a(247),function(){return s.a.createElement("div",{className:"ma4 mt4"},s.a.createElement(f.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner"},s.a.createElement("img",{style:{paddingTop:"6px"},alt:"logo",src:b.a}))))}),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onSignInEmail=function(e){n.setState({signInEmail:e.target.value})},n.onSignInPassword=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://serene-wildwood-48633.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?n.props.onRouteChange("home"):alert("Incorrect Email & password")}))},n.state={signInEmail:"",signInPassword:""},n.onSubmitSignIn=n.onSubmitSignIn.bind(Object(c.a)(n)),n.onSignInEmail=n.onSignInEmail.bind(Object(c.a)(n)),n.onSignInPassword=n.onSignInPassword.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",{className:"pa4"},s.a.createElement("article",{className:"br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onSignInEmail})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onSignInPassword}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register"))))))}}]),a}(s.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("https://serene-wildwood-48633.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUsers(e),n.props.onRouteChange("home")):alert("Invalid Submission")}))},n.state={name:"",email:"",password:""},n.onNameChange=n.onNameChange.bind(Object(c.a)(n)),n.onEmailChange=n.onEmailChange.bind(Object(c.a)(n)),n.onPasswordChange=n.onPasswordChange.bind(Object(c.a)(n)),n.onSubmitRegister=n.onSubmitRegister.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"pa4"},s.a.createElement("article",{className:"br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"name",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))))}}]),a}(s.a.Component),v=(a(248),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:" form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Enter image url",onChange:t}),s.a.createElement("button",{className:"w-30 link pointer grow f4 ph3 pv2 white bg-light-purple",onClick:a},"Detect")))}),C=(a(249),function(e){e.imageUrl;var t=e.box;return s.a.createElement("div",null,s.a.createElement("div",{className:"box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}},s.a.createElement("p",{className:"f5 dark-blue b"},t.apparelName)))}),I=(a(250),function(e){var t=e.imageUrl,a=e.box,n=a.map((function(e,a){return s.a.createElement(C,{key:a,imageUrl:t,box:e})}));return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute pa3"},n,s.a.createElement("img",{id:a.id,alt:"",src:t,width:"500px",height:"700px"})))}),S=(a(251),{particles:{number:{value:50,density:{enable:!0,area:800,factor:1e3}}}}),k={input:"",imageUrl:"",box:[],route:"signin",isSignedIn:!1,user:{name:"",email:"",password:"",enteries:0,joined:""}},y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUsers=function(t){e.setState({user:{name:t.name,email:t.email,password:t.password,enteries:t.enteries,joined:t.joined}})},e.state=k,e.onInputChange=e.onInputChange.bind(Object(c.a)(e)),e.onButtonSubmit=e.onButtonSubmit.bind(Object(c.a)(e)),e.calculateApparelDetection=e.calculateApparelDetection.bind(Object(c.a)(e)),e.showBox=e.showBox.bind(Object(c.a)(e)),e.onRouteChange=e.onRouteChange.bind(Object(c.a)(e)),e.loadUsers=e.loadUsers.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"calculateApparelDetection",value:function(e){for(var t=e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})),a=e.outputs[0].data.regions.map((function(e){return e.data.concepts[0].name})),n=e.outputs[0].data.regions.map((function(e){return e.id})),s=[],i=0;i<t.length;i++)s.push({leftCol:500*t[i].left_col,topRow:700*t[i].top_row,rightCol:500-500*t[i].right_col,bottomRow:700-700*t[i].bottom_row,apparelName:a[i],id:n[i]});return s}},{key:"showBox",value:function(e){this.setState({box:e})}},{key:"onInputChange",value:function(e){this.setState({input:e.target.value})}},{key:"onButtonSubmit",value:function(){var e=this;this.setState({imageUrl:this.state.input}),fetch("https://serene-wildwood-48633.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:this.state.input})}).then((function(e){return e.json()})).then((function(t){return e.showBox(e.calculateApparelDetection(t))})).catch((function(e){return console.log(e)}))}},{key:"onRouteChange",value:function(e){"signout"===e?this.setState(k):"home"===e&&this.setState({isSignedIn:!0}),this.setState({route:e})}},{key:"render",value:function(){var e="home"===this.state.route?s.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("div",{className:"w-30"},s.a.createElement(w,null)),s.a.createElement("div",{className:"w-70"},s.a.createElement(h,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}))):s.a.createElement(h,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange});return s.a.createElement("div",{className:"App"},s.a.createElement(d.a,{className:"particles",params:S}),e,"home"===this.state.route?s.a.createElement("div",null,s.a.createElement("h1",{className:"fashion"},"Fashionista Bot"),s.a.createElement("p",{className:"para white f3"},"This Bot can detect different clothing items in an image. Give it a try!"),s.a.createElement(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),s.a.createElement(I,{imageUrl:this.state.imageUrl,box:this.state.box})):"signin"===this.state.route?s.a.createElement(N,{onRouteChange:this.onRouteChange}):s.a.createElement(E,{loadUsers:this.loadUsers,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t){e.exports="data:image/png;base64,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"},70:function(e,t,a){e.exports=a(252)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.997b439d.chunk.js.map