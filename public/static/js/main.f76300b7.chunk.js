(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a(9),o=a(24),i=a.n(o),u=(a(80),a(81),a(6)),s=(a(82),a(83),a(114)),m=a(113),d=a(120),h=a(115),p=a(69),E=a(118),g=a(17),v=a(18),f=a(19),b=a.n(f),j=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/auth/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(v.a)(e,[{key:"login",value:function(e){var t=e.username,a=e.email,n=e.password;return this.service.post("login",{username:t,email:a,password:n}).then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}},{key:"signup",value:function(e){var t=e.username,a=e.email,n=e.password;return this.service.post("signup",{username:t,email:a,password:n}).then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}},{key:"logout",value:function(){return this.service.post("logout").then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}},{key:"loggedin",value:function(){return this.service.get("loggedin").then((function(e){return e.data})).catch((function(e){return console.log({err:e})}))}}]),e}();var y=function(e){var t=e.loggedInUser,a=e.showLogin,n=e.showSignup,l=e.logout;return!1===t?r.a.createElement(m.a,null):null===t?r.a.createElement(s.a,{fluid:!0},r.a.createElement("div",{className:"navbar"},r.a.createElement(d.a,{variant:"pills"},r.a.createElement(h.a,{className:"justify-content-between",style:{width:"100vw"}},r.a.createElement(p.a,{lg:5,style:{display:"flex"}},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{onClick:a},"Login")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{onClick:n},"Signup"))),r.a.createElement(p.a,{lg:2},r.a.createElement(E.a,{title:"Mi perfil",id:"nav-dropdown",drop:"left"},r.a.createElement(E.a.Item,{eventKey:"4.1"},"Action"),r.a.createElement(E.a.Item,{eventKey:"4.2"},"Another action"),r.a.createElement(E.a.Item,{eventKey:"4.3"},"Something else here"),r.a.createElement(E.a.Divider,null),r.a.createElement(E.a.Item,{eventKey:"4.4"},"Separated link"))))))):r.a.createElement(s.a,{fluid:!0},r.a.createElement("div",{className:"navbar"},r.a.createElement(d.a,{variant:"pills"},r.a.createElement(h.a,{className:"justify-content-between",style:{width:"100vw"}},r.a.createElement(p.a,{lg:5,style:{display:"flex"}},r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/myGames"},"Mis Partidas")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/myCharacters"},"Mis personajes")),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Link,{as:c.c,to:"/newGame"},"Crear Partida"))),r.a.createElement(p.a,{lg:2},r.a.createElement(E.a,{title:"Mi perfil",id:"nav-dropdown",drop:"left"},r.a.createElement(E.a.Item,{eventKey:"4.1",onClick:l},"LogOut"),r.a.createElement(E.a.Item,{eventKey:"4.2"},"Another action"),r.a.createElement(E.a.Item,{eventKey:"4.3"},"Something else here"),r.a.createElement(E.a.Divider,null),r.a.createElement(E.a.Item,{eventKey:"4.4"},"Separated link")))))))};var C=function(e){var t=e.games,a=e.loggedInUser;return t.map((function(e,t){return r.a.createElement("div",{className:"centered",key:t},r.a.createElement("h3",null,r.a.createElement(c.b,{to:a&&a._id===e.creator?"/modify/".concat(e._id):"/read/".concat(e._id)},e.title)),r.a.createElement("em",null,"Nivel minimo: ",e.minLevel),r.a.createElement("p",null,e.description.slice(0,350)))}))};var O=function(){return r.a.createElement(s.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{lg:6},"Imagen"),r.a.createElement(p.a,{lg:6},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique pariatur magni nesciunt soluta expedita molestiae suscipit deleniti consequuntur dolor impedit. Itaque iure libero perspiciatis, cum asperiores eveniet non error totam?")))},I=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/games/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(v.a)(e,[{key:"getOneGame",value:function(e){return this.service.get("/?gameId=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"getLastGames",value:function(){return this.service.get("/last?limit=5").then((function(e){return e.data.gamesFound})).catch((function(e){return console.log(e)}))}},{key:"createGame",value:function(e){var t=e.creator,a=e.title,n=e.minLevel,r=e.description;return this.service.post("",{creator:t,title:a,minLevel:n,description:r}).then((function(e){return e.data.createdGame})).catch((function(e){return console.log(e)}))}}]),e}(),w=a(117),L=a(71);var k=function(e){var t=e.setUser,a=e.onHide,c=new j,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),h=d[0],p=d[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),v=g[0],f=g[1];function b(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"username":s(n);break;case"email":p(n);break;case"password":f(n);break;default:throw Error("no correct value")}}return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),c.login({username:i,email:h,password:v}).then((function(e){return t(e)})),s(""),p(""),f(""),a&&a()}},r.a.createElement(w.a.Group,{controlId:"username"},r.a.createElement(w.a.Label,null,"Username"),r.a.createElement(w.a.Control,{onChange:b,name:"username",value:i,type:"text",placeholder:"Enter username"}),r.a.createElement(w.a.Text,{className:"text-muted"},"Choose an username.")),r.a.createElement(w.a.Group,{controlId:"email",value:h},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{onChange:b,name:"email",type:"email",placeholder:"Enter email"}),r.a.createElement(w.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(w.a.Group,{controlId:"password",value:v},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{onChange:b,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(L.a,{variant:"primary",type:"submit"},"Submit"))};var S=function(e){var t=e.setUser,a=e.onHide,c=new j,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),h=d[0],p=d[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),v=g[0],f=g[1];function b(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"username":s(n);break;case"email":p(n);break;case"password":f(n);break;default:throw Error("no correct value")}}return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),c.signup({username:i,email:h,password:v}).then((function(e){return t(e)})),a&&a()}},r.a.createElement(w.a.Group,{controlId:"username"},r.a.createElement(w.a.Label,null,"Username"),r.a.createElement(w.a.Control,{onChange:b,name:"username",value:i,type:"text",placeholder:"Enter username"}),r.a.createElement(w.a.Text,{className:"text-muted"},"Choose an username.")),r.a.createElement(w.a.Group,{controlId:"email",value:h},r.a.createElement(w.a.Label,null,"Email address"),r.a.createElement(w.a.Control,{onChange:b,name:"email",type:"email",placeholder:"Enter email"}),r.a.createElement(w.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(w.a.Group,{controlId:"password",value:v},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{onChange:b,name:"password",type:"password",placeholder:"Password"})),r.a.createElement(L.a,{variant:"primary",type:"submit"},"Submit"))},U=a(116);var G=function(e){var t=e.show,a=e.children,c=e.onHide,l=e.title;return r.a.createElement(U.a,{show:t,onHide:c,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,autoFocus:!0},r.a.createElement(U.a.Header,{closeButton:!0,onHide:c},r.a.createElement(U.a.Title,{id:"contained-modal-title-vcenter"},l)),r.a.createElement(U.a.Body,null,Object(n.cloneElement)(a,{show:t,onHide:c})))};var x=Object(l.f)((function(e){var t=e.loggedInUser,a=e.updateLastGames,c=(e.match,e.location,e.history),l=new I,o=Object(n.useState)(""),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(1),h=Object(u.a)(d,2),p=h[0],E=h[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),f=v[0],b=v[1];function j(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"title":m(n);break;case"description":b(n);break;case"minLevel":E(n);break;default:throw Error("Algo ha ido mal con el formulario")}}return r.a.createElement("div",null,r.a.createElement("h2",null,"Crear un nuevo juego es muy sencillo tan solo necesitas..."),r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),l.createGame({creator:t._id,title:s,minLevel:p,description:f}).then((function(e){a(),console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){return c.push("/")}))}},r.a.createElement(w.a.Group,{controlId:"title"},r.a.createElement(w.a.Label,null,"Elegir un titulo:"),r.a.createElement(w.a.Control,{name:"title",onChange:j,value:s,type:"text",placeholder:"El titulo de tu historia!"})),r.a.createElement(w.a.Group,{controlId:"minLevel"},r.a.createElement(w.a.Label,null,"Un nivel m\xednimo para comenzar la aventura:"),r.a.createElement("p",null,p),r.a.createElement(w.a.Control,{name:"minLevel",onChange:j,value:p,type:"range",min:"1",max:"20",step:"1",placeholder:"Ej: 5"}),r.a.createElement(w.a.Text,{className:"text-muted"},"Las aventuras b\xe1sicas comienzan en nivel 1, de 8 a 14 ya son todo un reto, a partir de ah\xed los heroes pueden luchar contra los mismos dioses.")),r.a.createElement(w.a.Group,{controlId:"description"},r.a.createElement(w.a.Label,null,"El resumen de tu aventura! Hazlo atractivo de forma que la gente quiera jugarla ;)"),r.a.createElement(w.a.Control,{name:"description",onChange:j,value:f,type:"text",placeholder:"El titulo de tu historia!"})),r.a.createElement(L.a,{type:"submit"},"Crear")))}));a(55),a(119);var F=function(e){var t=e.loggedInUser,a=e.updateLastGames;return r.a.createElement(x,{updateLastGames:a,loggedInUser:t})},T=a(56),R=a(121),N=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/choices/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(v.a)(e,[{key:"getChoicesFromChapter",value:function(e){return this.service.get("/?chapterId=".concat(e)).then((function(e){return e.data.choicesFound})).catch((function(e){return console.log(e)}))}},{key:"createChoice",value:function(e){var t=e.description,a=e.trial,n=e.successTargetChapter,r=e.failureTargetChapter,c=e.pxGranted;return this.service.post("",{description:t,trial:a,successTargetChapter:n,failureTargetChapter:r,pxGranted:c}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"deleteChoice",value:function(e){return this.service.delete("",{choiceId:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}();var A=function(e){e.className;var t=e.retrieveChoicesIds,a=new N,c=Object(n.useState)(""),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(10),m=Object(u.a)(s,2),d=m[0],h=m[1],p=Object(n.useState)("str"),E=Object(u.a)(p,2),g=E[0],v=E[1],f=Object(n.useState)(0),b=Object(u.a)(f,2),j=b[0],y=b[1];function C(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"description":i(n);break;case"difficulty":h(n);break;case"characteristic":console.log(n),v(n);break;case"pxGranted":console.log(n),y(n);break;default:throw Error("Algo ha ido mal con el formulario")}}return r.a.createElement(R.a,null,r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault();var n={difficulty:d,characteristic:g};a.createChoice({description:o,trial:n,pxGranted:j}).then((function(e){t(e._id)}))},className:"choiceForm"},r.a.createElement(R.a.Body,null,r.a.createElement(w.a.Group,{controlId:"choice"},r.a.createElement(w.a.Label,null,"Describe la elecci\xf3n:"),r.a.createElement(w.a.Control,{name:"description",onChange:C,value:o,placeholder:"Fuerzo la puerta"}),r.a.createElement(w.a.Label,null,"\xbfQue dificultad tiene?"),r.a.createElement(w.a.Control,{type:"number",name:"difficulty",onChange:C,value:d,placeholder:"Fuerzo la puerta"}),r.a.createElement(w.a.Text,null,"Dificultades de 10 son adecuadas para una persona media, 15 son para expertos y 20 para verdaderos prod\xedgios."),r.a.createElement(w.a.Label,null,"\xbfQu\xe9 caracteristica es necesaria para superarla?"),r.a.createElement(w.a.Control,{onChange:C,name:"characteristic",as:"select",custom:!0},r.a.createElement("option",{value:"str"},"Fuerza"),r.a.createElement("option",{value:"des"},"Destreza"),r.a.createElement("option",{value:"agi"},"Agilidad, velocidad"),r.a.createElement("option",{value:"con"},"Constituci\xf3n f\xedsica"),r.a.createElement("option",{value:"int"},"Inteligencia"),r.a.createElement("option",{value:"wis"},"Sabidur\xeda"),r.a.createElement("option",{value:"char"},"Carisma"))),r.a.createElement(w.a.Group,{controlId:"choice"},r.a.createElement(w.a.Label,null,"Cuanta experiencia da el \xe9xito:"),r.a.createElement(w.a.Control,{name:"pxGranted",onChange:C,value:j,placeholder:"100",type:"number"}))),r.a.createElement(R.a.Footer,null,r.a.createElement(L.a,{type:"submit",size:"sm"},"Finalizar"))))},D=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/chapters/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(v.a)(e,[{key:"getChaptersFromGame",value:function(e){return this.service.get("/?gameId=".concat(e)).then((function(e){return e.data.chaptersFound})).catch((function(e){return console.log(e)}))}},{key:"createChapter",value:function(e){var t=e.description,a=e.choices,n=e.gameId;return this.service.post("",{description:t,choices:a,gameId:n}).then((function(e){return e.data.createdChapter})).catch((function(e){return console.log(e)}))}}]),e}();var z=Object(l.f)((function(e){e.loggedInUser;var t=e.updateLastGames,a=e.match,c=(e.location,e.history),l=(new I,new D),o=a.params.gameId,i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],d=s[1],E=Object(n.useState)([]),g=Object(u.a)(E,2),v=g[0],f=g[1],b=Object(n.useState)([]),j=Object(u.a)(b,2),y=j[0],C=j[1];function O(e){var t=Object(T.a)(v);if(t.includes(e)){var a=t.indexOf(e);t.splice(a,1)}else t.push(e),f(t)}return r.a.createElement("div",null,r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault(),l.createChapter({description:m,choices:v,gameId:o}).then((function(e){t(),console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){return c.push("/")}))}},r.a.createElement(w.a.Group,{controlId:"description"},r.a.createElement(w.a.Label,null,"Escribe tu nuevo capitulo:"),r.a.createElement(w.a.Control,{as:"textarea",name:"description",onChange:function(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"description":d(n);break;default:throw Error("Algo ha ido mal con el formulario")}},value:m,placeholder:"En un lugar de la Costa de la Espada, de cuyo nombre no quiero acordarme..."})),r.a.createElement(L.a,{type:"submit"},"Crear")),r.a.createElement(L.a,{onClick:function(){var e=Object(T.a)(y);e.push(r.a.createElement(A,{retrieveChoicesIds:O})),C(e)}},"A\xf1adir elecci\xf3n"),r.a.createElement(h.a,null,y.map((function(e,t){return r.a.createElement(p.a,{key:t,lg:4},e)}))))}));var H=function(e){var t=e.loggedInUser;return r.a.createElement(z,{loggedInUser:t})},_=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/characters/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(v.a)(e,[{key:"getCharactersFromUser",value:function(e){return this.service.get("/?userId=".concat(e)).then((function(e){return e.data.characters})).catch((function(e){return console.log(e)}))}},{key:"createCharacter",value:function(e){return this.service.post("",{character:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"assignCharacterToUser",value:function(e,t){return this.service.post("assign",{userId:e,characterId:t}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}();var K=function(e){e.setCharacter;var t=e.hideForm,a=e.setUser,c=e.loggedInUser,l=new _;console.log(_);var o=Object(n.useState)(""),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(100),h=Object(u.a)(d,2),p=h[0],E=(h[1],Object(n.useState)(10)),g=Object(u.a)(E,2),v=g[0],f=g[1],b=Object(n.useState)(10),j=Object(u.a)(b,2),y=j[0],C=j[1],O=Object(n.useState)(10),I=Object(u.a)(O,2),k=I[0],S=I[1],U=Object(n.useState)(10),G=Object(u.a)(U,2),x=G[0],F=G[1],T=Object(n.useState)(10),R=Object(u.a)(T,2),N=R[0],A=R[1],D=Object(n.useState)(10),z=Object(u.a)(D,2),H=z[0],K=z[1];function q(e){var t=e.currentTarget,a=t.name,n=t.value;switch(a){case"name":m(n);break;case"str":f(n);break;case"des":C(n);break;case"agi":S(n);break;case"int":F(n);break;case"wis":A(n);break;case"char":K(n);break;default:throw Error("Algo fue mal con el formulario")}}return r.a.createElement(w.a,{onSubmit:function(e){e.preventDefault();var n={name:s,hp:p,str:v,des:y,agi:k,int:x,wis:N,char:H};l.createCharacter(n).then((function(e){l.assignCharacterToUser(c._id,e._id).then((function(e){a(e)})),m(""),t()}))}},r.a.createElement(w.a.Group,{controlId:"name"},r.a.createElement(w.a.Label,null,"Nombre del personaje"),r.a.createElement(w.a.Control,{onChange:q,value:s,name:"name",type:"text",placeholder:"Aragor, hijo de Arathorn"})),r.a.createElement(w.a.Group,{controlId:"str"},r.a.createElement(w.a.Label,null,"Fuerza"),r.a.createElement(w.a.Control,{onChange:q,value:v,name:"str",type:"number"})),r.a.createElement(w.a.Group,{controlId:"des"},r.a.createElement(w.a.Label,null,"Destreza"),r.a.createElement(w.a.Control,{onChange:q,value:y,name:"des",type:"number"})),r.a.createElement(w.a.Group,{controlId:"agi"},r.a.createElement(w.a.Label,null,"Agilidad, velocidad"),r.a.createElement(w.a.Control,{onChange:q,value:k,name:"agi",type:"number"})),r.a.createElement(w.a.Group,{controlId:"int"},r.a.createElement(w.a.Label,null,"Inteligencia"),r.a.createElement(w.a.Control,{onChange:q,value:x,name:"int",type:"number"})),r.a.createElement(w.a.Group,{controlId:"wis"},r.a.createElement(w.a.Label,null,"Sabidur\xeda, astucia"),r.a.createElement(w.a.Control,{onChange:q,value:N,name:"wis",type:"number"})),r.a.createElement(w.a.Group,{controlId:"char"},r.a.createElement(w.a.Label,null,"Carisma"),r.a.createElement(w.a.Control,{onChange:q,value:H,name:"char",type:"number"})),r.a.createElement(L.a,{variant:"primary",type:"submit"},"Crear"))};var q=function(e){var t=e.characters;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("button",null,e.name,". Nivel: ",e.level," ")),r.a.createElement("small",null,"Fue: ",e.str," Des: ",e.des," Agi: ",e.agi," Int: ",e.int," Sab: ",e.wis," Car: ",e.char))})))};var P=function(e){var t=e.loggedInUser,a=e.setUser,c=Object(n.useState)(null),l=Object(u.a)(c,2),o=(l[0],l[1]),i=Object(n.useState)(!1),s=Object(u.a)(i,2),m=s[0],d=s[1];function h(){d(!m)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Elige un personaje para jugar: "),t.characters.length>0&&r.a.createElement(q,{characters:t.characters}),r.a.createElement("button",{onClick:h},"Tambi\xe9n puedes crear un nuevo personaje"),m&&r.a.createElement(K,{hideForm:h,setUser:a,loggedInUser:t,setCharacter:o}))};var B=Object(l.f)((function(e){var t=new I,a=Object(n.useState)(null),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){t.getOneGame(e.match.params.gameId).then((function(e){return o(e)}))}),[]),l?r.a.createElement("section",null,r.a.createElement("article",null,r.a.createElement("h1",null,l.title),r.a.createElement("p",null,l.description),r.a.createElement("button",{disabled:!0},"Continuar la aventura!"))):r.a.createElement("p",null,"loading game")})),M=function(){function e(){Object(g.a)(this,e),this.baseURL="".concat("https://tellmaster.herokuapp.com/api","/savedGames/"),this.service=b.a.create({baseURL:this.baseURL,withCredentials:!0})}return Object(v.a)(e,[{key:"getUserSaves",value:function(e){return this.service.get("/?userId=".concat(e)).then((function(e){return e.data.savedGamesFound})).catch((function(e){return console.log(e)}))}},{key:"createSavedGame",value:function(e){var t=e.gameId,a=e.currentChapter,n=e.character;return this.service.post("",{gameId:t,currentChapter:a,character:n}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}},{key:"updateSavedGame",value:function(e){var t=e.savedGameId,a=e.gameId,n=e.currentChapter,r=e.character;return this.service.patch("",{savedGameId:t,gameId:a,currentChapter:n,character:r}).then((function(e){return e.data}))}},{key:"deleteSave",value:function(e){return this.service.delete("",{savedGameId:e}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}}]),e}();var W=Object(l.f)((function(e){new M;var t=e.match,a=(e.location,e.history,e.loggedInUser),n=e.setUser;return t.params.gameId,r.a.createElement(h.a,{style:{justifyContent:"space-between"}},r.a.createElement(p.a,{lg:5},r.a.createElement(P,{setUser:n,loggedInUser:a})),r.a.createElement(p.a,{lg:5},r.a.createElement(B,null)))}));var J=function(){var e=new I,t=new j,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),h=d[0],p=d[1];function E(e){p(e)}function g(){e.getLastGames().then((function(e){Array.isArray(e)&&!e.every((function(e){return o.find((function(t){return t._id==e._id}))}))&&i(e)}))}Object(n.useEffect)((function(){return g(),function(){i([])}}),[]),Object(n.useEffect)((function(){return 0==h&&t.loggedin().then((function(e){p(e||null)})),function(){}}),[h]);var v=Object(n.useState)(!1),f=Object(u.a)(v,2),b=f[0],w=f[1],L=Object(n.useState)(!1),U=Object(u.a)(L,2),x=U[0],T=U[1];return r.a.createElement(l.c,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{logout:function(){t.logout().then((function(e){return p(null)}))},showSignup:function(){return T(!0)},showLogin:function(){return w(!0)},loggedInUser:h}),r.a.createElement(s.a,null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(C,{loggedInUser:h,games:o})}}),h?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{exact:!0,path:"/myGames",render:function(){return r.a.createElement(O,{loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/newGame",render:function(){return r.a.createElement(F,{updateLastGames:g,loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/myCharacters",render:function(){return r.a.createElement(q,{characters:h.characters})}}),r.a.createElement(l.a,{exact:!0,path:"/modify/:gameId",render:function(){return r.a.createElement(H,{updateLastGames:g,loggedInUser:h})}}),r.a.createElement(l.a,{exact:!0,path:"/read/:gameId",render:function(){return r.a.createElement(W,{setUser:E,loggedInUser:h})}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{title:"Login",show:b,onHide:function(){return w(!1)}},r.a.createElement(k,{setUser:E})),r.a.createElement(G,{title:"Signup",show:x,onHide:function(){return T(!1)}},r.a.createElement(S,{setUser:E}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/",render:function(e){return r.a.createElement(J,e)}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(108)},81:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},83:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.f76300b7.chunk.js.map