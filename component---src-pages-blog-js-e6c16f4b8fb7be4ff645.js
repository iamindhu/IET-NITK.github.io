(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[7],{516:function(e,t,a){"use strict";a.d(t,{Vt:function(){return r},u:function(){return i}});var l=a(5444),n=a(7294),r=function(e){var t={};return e&&e.forEach((function(e){t[e.name]=e.childImageSharp.fixed.srcWebp})),t},i=function(e,t){return e.map((function(t,a){return n.createElement(n.Fragment,null," ",n.createElement(l.rU,{key:"x"+a,to:"/members/"+t.toLowerCase().split(" ").join("")},t),a+2===e.length?" and":a+1!==e.length?",":"")}))}},277:function(e,t,a){"use strict";var l=a(18),n=a(7294),r=a(4260);function i(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,a=e.list,c=e.item,s=e.noneMessage,o=e.filterBy,m=e.filterLabel,u=(0,n.useState)({pno:1,list_state:a,filterType:null,filterCategories:(0,l.Z)(new Set(a.map((function(e){return e[o]}))))}),p=u[0],d=u[1];return p.list_state&&0===p.list_state.length?n.createElement("div",{className:"text-center"},s):n.createElement(n.Fragment,null,o&&p.list_state?n.createElement(r.Z,null,n.createElement(r.Z.Toggle,{className:"mr-4",variant:"outline-primary",id:"dropdown-"+o,size:"sm"},p.filterType?p.filterType:m),n.createElement(r.Z.Menu,null,p.filterCategories&&p.filterCategories.map((function(e,t){return n.createElement(r.Z.Item,{name:e,key:t,onClick:function(e){return d(Object.assign({},p,{list_state:a.filter((function(t){return t[o]===e.target.name})),filterType:e.target.name}))}},e)})),p.filterType?n.createElement(r.Z.Item,{onClick:function(e){d(Object.assign({},p,{list_state:a,filterType:null}))}},"Clear Filters"):null),p.list_state.length," Items",n.createElement("hr",null)):null,1!==p.pno?n.createElement(n.Fragment,null,n.createElement("h6",{className:"text-primary"},"Page ",p.pno),n.createElement("hr",null),n.createElement("br",null)):null,p.list_state&&p.list_state.slice((p.pno-1)*t,(p.pno-1)*t+t).map(c),n.createElement("nav",{"aria-label":"Page navigation example"},n.createElement("ul",{className:"pagination justify-content-center"},n.createElement("li",{className:"page-item "+(1===p.pno?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){i(),d(Object.assign({},p,{pno:p.pno-1}))}},"Previous")),p.list_state&&(0,l.Z)(Array(Math.ceil(p.list_state.length/t))).map((function(e,t){return n.createElement("li",{className:"page-item "+(p.pno===t+1?"active":""),key:t},n.createElement("button",{className:"page-link","data-toggle":"tooltip",title:"Page "+(t+1),onClick:function(){i(),d(Object.assign({},p,{pno:t+1}))}},t+1))})),n.createElement("li",{className:"page-item "+(p.list_state&&p.pno===Math.ceil(p.list_state.length/t)?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){i(),d(Object.assign({},p,{pno:p.pno+1}))}},"Next")))))}},223:function(e,t,a){"use strict";a.r(t);var l=a(5444),n=a(7294),r=a(1974),i=a(3751),c=a(516),s=a(277);t.default=function(e){var t=e.data,a=e.location;return n.createElement(r.Z,{location:a.pathname,title:"Main"},n.createElement(i.Z,{title:"Blog"}),n.createElement("main",{className:"page blog-post-list"},n.createElement("section",{className:"clean-block clean-blog-list dark"},n.createElement("div",{className:"container"},n.createElement("div",{className:"block-heading"},n.createElement("h2",{className:"text-primary"},"Official IET-NITK Blog"),n.createElement("p",null,"We post cool stuff. Subscribe to our Newsletter to stay updated!")),n.createElement("div",{className:"block-content"},n.createElement(s.Z,{max:5,list:t.allFile.nodes,item:function(e,a){var r=e.childMarkdownRemark.frontmatter.image;return r=r?r.childImageSharp?r.childImageSharp.fixed.srcWebp:r.publicURL:t.ietlogo.fixed.srcWebp,n.createElement("div",{key:a,className:"clean-blog-post"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-5"},n.createElement("img",{alt:e.childMarkdownRemark.frontmatter.title,className:"rounded img-fluid",src:r,style:{width:"100%",height:"auto"}})),n.createElement("div",{className:"col-lg-7"},n.createElement("h3",{"data-toggle":"tooltip",title:e.childMarkdownRemark.timeToRead+" minute read"},e.childMarkdownRemark.frontmatter.title),n.createElement("div",{className:"info"},n.createElement("span",{className:"text-muted"},"By ",(0,c.u)(e.childMarkdownRemark.frontmatter.authors,""),n.createElement("br",null),e.childMarkdownRemark.frontmatter.date)),n.createElement("p",null,e.childMarkdownRemark.excerpt),n.createElement(l.rU,{to:"/blog/"+e.relativeDirectory,className:"btn btn-outline-primary btn-sm",type:"button"},"Read More"))))}}))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-e6c16f4b8fb7be4ff645.js.map