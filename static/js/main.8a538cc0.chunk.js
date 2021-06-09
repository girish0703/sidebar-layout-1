(this["webpackJsonp18-glass-portfolio-design"]=this["webpackJsonp18-glass-portfolio-design"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(7),s=n.n(c),r=n(2),o=n(3),l=n(5),m=n(4),d=(n(12),n(0)),j=[{id:0,name:"HTML"},{id:1,name:"Java Script"},{id:2,name:"CSS"},{id:3,name:"Java"},{id:4,name:"Python"},{id:5,name:"React"},{id:6,name:"Node"},{id:7,name:"Bootstrap"}],p=[{id:0,qualification:"Graduation",qualificationSource:"B.Tech (Computer Science)"},{id:1,qualification:"Intermediate",qualificationSource:"St.Ann\u2019s Jr College"},{id:2,qualification:"High School",qualificationSource:"Kimberley EM School"}],u=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderSkillsList=function(){return Object(d.jsx)("ul",{className:"skills-list",children:j.map((function(e){return Object(d.jsx)("li",{className:"skill-item",children:Object(d.jsx)("p",{className:"skill",children:e.name})},e.id)}))})},e.renderEducationDetailsList=function(){return p.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"qualification",children:e.qualification}),Object(d.jsx)("p",{className:"education-place",children:e.qualificationSource})]})},e.id)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"about-section-heading",children:"About"}),Object(d.jsx)("p",{className:"about-section-description",children:"I started my journey in the world of computers from a young age, now I\u2019m 21 years old, pursuing my Computer Science majors at Santa Clara University, USA. Web development is my center of interest."}),Object(d.jsxs)("div",{className:"education-and-skills-container",children:[Object(d.jsxs)("div",{className:"education-details-container",children:[Object(d.jsx)("h1",{className:"education-and-skills-heading",children:"Education"}),Object(d.jsx)("ul",{className:"education-details-list",children:this.renderEducationDetailsList()})]}),Object(d.jsxs)("div",{className:"skills-container",children:[Object(d.jsx)("h1",{className:"education-and-skills-heading",children:"Skills"}),this.renderSkillsList()]})]})]})}}]),n}(a.Component),h=(n(14),function(){return Object(d.jsxs)("div",{className:"home-section",children:[Object(d.jsx)("h1",{className:"username",children:"Sophie Millers"}),Object(d.jsx)("p",{className:"designation",children:"Full Stack Developer"}),Object(d.jsx)("p",{className:"experience-description",children:"Experienced in MongoDB, Express, ReactJS and Node.js, Bootstrap, HTML, CSS, SQL and Python."}),Object(d.jsx)("button",{type:"button",className:"view-resume-btn",children:"View Resume"})]})}),b=(n(15),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderNavItemsList=function(){var t=e.props,n=t.navBarItems,a=t.activeNavBarItem,i=t.changeActiveNavBarItem;return n.map((function(e){var t=a===e.name?"active-item":"";return Object(d.jsxs)("li",{className:"nav-item ".concat(t),onClick:function(){return i(e.name)},children:[Object(d.jsx)("img",{className:"item-image",src:e.iconUrl,alt:e.name}),Object(d.jsx)("p",{className:"item-name",children:e.name})]},e.id)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("img",{className:"profile-image",src:"https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png",alt:"profile"}),Object(d.jsx)("ul",{className:"nav-items-list",children:this.renderNavItemsList()})]})}}]),n}(a.Component)),f=(n(16),[{id:0,imageUrl:"https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png",name:"Advanced Technologies"},{id:1,imageUrl:"https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png",name:"Your Moment Is Complete"},{id:2,imageUrl:"https://assets.ccbp.in/frontend/react-js/robotics-img.png",name:"Robotics"},{id:3,imageUrl:"https://assets.ccbp.in/frontend/react-js/happy-meals-img.png",name:"Happy Meals"}]),g=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderProjectsList=function(){return f.map((function(e){return Object(d.jsxs)("li",{className:"project-item",children:[Object(d.jsx)("img",{className:"project-image",src:e.imageUrl,alt:"work"}),Object(d.jsx)("p",{className:"project-name",children:e.name})]},e.id)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"projects-heading",children:"My Work"}),Object(d.jsx)("ul",{className:"projects-list",children:this.renderProjectsList()})]})}}]),n}(a.Component),v=(n(17),[{id:0,imageUrl:"https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png",name:"linkedIn",siteUrl:"https://www.linkedin.com/"},{id:1,imageUrl:"https://assets.ccbp.in/frontend/react-js/reddit-logo-img.png",name:"reddit",siteUrl:"https://www.reddit.com/"},{id:2,imageUrl:"https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png",name:"instagram",siteUrl:"https://www.instagram.com/"},{id:3,imageUrl:"https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png",name:"facebook",siteUrl:"https://www.facebook.com/"},{id:4,imageUrl:"https://assets.ccbp.in/frontend/react-js/pintrest-logo-img.png",name:"pinterest",siteUrl:"https://www.pinterest.com/"}]),O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderSocialMediaAppsList=function(){return v.map((function(e){return Object(d.jsx)("a",{href:e.siteUrl,children:Object(d.jsx)("img",{className:"app-logo",src:e.imageUrl,alt:e.name})},e.id)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"social-media-section",children:this.renderSocialMediaAppsList()})}}]),n}(a.Component),x=(n(18),[{id:0,iconUrl:"https://assets.ccbp.in/frontend/react-js/home-img.png",name:"HOME"},{id:1,iconUrl:"https://assets.ccbp.in/frontend/react-js/about-img.png",name:"ABOUT"},{id:2,iconUrl:"https://assets.ccbp.in/frontend/react-js/projects-img.png",name:"PROJECTS"}]),N=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={activeNavBarItem:x[0].name},e.renderComponent=function(){switch(e.state.activeNavBarItem){case x[1].name:return Object(d.jsx)(u,{});case x[2].name:return Object(d.jsx)(g,{});default:return Object(d.jsx)(h,{})}},e.changeActiveNavBarItem=function(t){e.setState({activeNavBarItem:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.activeNavBarItem;return Object(d.jsxs)("div",{className:"portfolio-container",children:[Object(d.jsx)(b,{activeNavBarItem:e,changeActiveNavBarItem:this.changeActiveNavBarItem,navBarItems:x}),Object(d.jsxs)("div",{className:"portfolio-body",children:[Object(d.jsx)("div",{className:"active-section",children:this.renderComponent()}),Object(d.jsx)(O,{})]})]})}}]),n}(a.Component),y=(n(19),function(){return Object(d.jsx)("div",{className:"app-container",children:Object(d.jsx)(N,{})})});s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8a538cc0.chunk.js.map