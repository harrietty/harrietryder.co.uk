(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(130),o=a(132);function c(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("h4",null,"All Blog Posts:"),t.map(function(e,t){var a=e.node;return r.a.createElement("p",{key:t},r.a.createElement(i.Link,{to:a.fields.slug},a.frontmatter.title),r.a.createElement("span",{className:"postDate"},"(",a.frontmatter.date,")"))})))}var l="2432626436"},130:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(129),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(131),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},131:function(e,t,a){var n;e.exports=(n=a(134))&&n.default||n},132:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(133),o=a(0),c=a.n(o),l=a(4),s=a.n(l),u=a(130),d=a(137),m=a.n(d),f=a(135),p=a.n(f),h=(a(136),function(e){var t=e.title;return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement(u.Link,{to:"/",className:"headerLink"},c.a.createElement("h1",null,t))))}),y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={bannerColor:""},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.innerWidth<=750&&this.setState({bannerColor:"lightBg"})},a.render=function(){return c.a.createElement("div",{id:"socialBanner",className:this.state.bannerColor},c.a.createElement("ul",{id:"mediaIcons"},c.a.createElement("li",{className:"mediaIcon"},c.a.createElement("a",{href:"https://twitter.com/harri_etty",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-2x fa-twitter","aria-hidden":"true"}))),c.a.createElement("li",{className:"mediaIcon"},c.a.createElement("a",{href:"https://github.com/harrietty",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-2x fa-github","aria-hidden":"true"}))),c.a.createElement("li",{className:"mediaIcon"},c.a.createElement("a",{href:"https://www.linkedin.com/in/harriet-ryder-027516127/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fa fa-2x fa-linkedin-square","aria-hidden":"true"})))))},t}(c.a.Component),g=function(e){var t=e.children;return c.a.createElement(u.StaticQuery,{query:"3892401927",render:function(e){return c.a.createElement("div",null,c.a.createElement(m.a,{title:e.site.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/png",href:""+p.a},{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",integrity:"sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"}],meta:[{name:"viewport",content:"width=device-width","initial-scale":"1.0"},{name:"description",content:"Personal blog and portfolio of Harriet Ryder"},{name:"keywords",content:"coding, javascript, learning, ReactJS, React, Python, Ruby, Rails, Node, NodeJS, programming, software development"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@harri_etty"},{name:"twitter:title",content:"Harriet Ryder | Blog | Website"},{name:"twitter:image",content:"http://www.harrietryder.co.uk/me.png"}],script:[{src:"https://use.fontawesome.com/e835c50e09.js"}]}),c.a.createElement(h,{title:e.site.siteMetadata.title}),c.a.createElement(y,null),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})};g.propTypes={children:s.a.object},t.a=g},133:function(e){e.exports={data:{site:{siteMetadata:{title:"harriet ryder"}}}}},134:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(46),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},135:function(e,t,a){e.exports=a.p+"static/favicon-9ed63a3a5a49864b7fd65e57413173a4.ico"},136:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-blog-js-3bbe60bd41fd42de3c0a.js.map