(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o}),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),i=a(144);a(162);function o(e){var t=e.data,a=t.markdownRemark.html,n=t.markdownRemark.frontmatter,o=(n.tags,n.title),c=n.date,l=n.description;return r.a.createElement(i.a,null,r.a.createElement("div",{id:"blogArea"},r.a.createElement("div",{className:"blogHeader"},r.a.createElement("h1",null,o),c&&r.a.createElement("h6",{className:"blogDate"},"Posted on: ",c),l&&r.a.createElement("h6",{className:"blogDate"},l)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))}var c="271384521"},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(141),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(143),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},144:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(145),o=a(0),c=a.n(o),l=a(4),s=a.n(l),d=a(142),u=a(150),m=a.n(u),f=a(147),p=a.n(f),h=(a(148),function(e){var t=e.title;return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement(d.Link,{to:"/",className:"headerLink"},c.a.createElement("h1",null,t))))}),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={bannerColor:""},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.innerWidth<=750&&this.setState({bannerColor:"lightBg"})},a.render=function(){return c.a.createElement("div",{id:"socialBanner",className:this.state.bannerColor},c.a.createElement("ul",{id:"mediaIcons"},c.a.createElement("li",{className:"mediaIcon"},c.a.createElement("a",{href:"https://twitter.com/harri_etty",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-2x fa-twitter","aria-hidden":"true"}))),c.a.createElement("li",{className:"mediaIcon"},c.a.createElement("a",{href:"https://github.com/harrietty",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-2x fa-github","aria-hidden":"true"}))),c.a.createElement("li",{className:"mediaIcon"},c.a.createElement("a",{href:"https://www.linkedin.com/in/harriet-ryder-027516127/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-2x fa-linkedin-square","aria-hidden":"true"})))))},t}(c.a.Component),y=function(e){var t=e.children;return c.a.createElement(d.StaticQuery,{query:"3892401927",render:function(e){return c.a.createElement("div",null,c.a.createElement(m.a,{title:e.site.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/png",href:""+p.a},{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",integrity:"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"}],meta:[{name:"viewport",content:"width=device-width","initial-scale":"1.0"},{name:"description",content:"Personal blog and portfolio of Harriet Ryder"},{name:"keywords",content:"coding, javascript, learning, ReactJS, React, Python, Ruby, Rails, Node, NodeJS, programming, software development"}],script:[{src:"https://use.fontawesome.com/e835c50e09.js"}]}),c.a.createElement(h,{title:e.site.siteMetadata.title}),c.a.createElement(g,null),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})};y.propTypes={children:s.a.object},t.a=y},145:function(e){e.exports={data:{site:{siteMetadata:{title:"harriet ryder"}}}}},146:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),l=a(1),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,a){e.exports=a.p+"static/favicon-9ed63a3a5a49864b7fd65e57413173a4.ico"},148:function(e,t,a){},162:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cc77f87bdbae1e78d929.js.map