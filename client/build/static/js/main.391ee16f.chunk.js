(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(26),r=c.n(n),i=(c(50),c(51),c(7)),l=c(6),o=c(13),j=c(8),u=c(16),d=c(22),p=c(19),b="ADD_RECIPE",m="ADD_TYPE",h="GET_RECIPES",O="DIET_TYPE_FILTER",x="GET_RECIPE_DETAILS",v="ALPHABETICAL_SORT",f="SCORE_SORT",N="SEARCH_RECIPE",y="GET_DIET_TYPES";function g(){return function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:3001/api/types");case 3:return c=e.sent,e.abrupt("return",t({type:y,payload:c.data.map((function(e){return e.name}))}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}c(60);var T=c(0),S=1;function w(e){var t=e.image,c=e.name,a=e.dietTypes,s=e.score;return Object(T.jsxs)("div",{className:"recipe",children:[Object(T.jsx)("div",{className:"zonaReciImg",children:Object(T.jsx)("img",{className:"recipeImg",src:t,alt:"IMAGEN DE LA RECETA"})}),Object(T.jsx)("div",{className:"zonaRecipeName",children:Object(T.jsx)("h4",{className:"recipeName",children:c})}),Object(T.jsx)("div",{className:"zonaScore",children:Object(T.jsxs)("h5",{className:"recipeScore",children:["Health Score:  ",s]})}),Object(T.jsx)("div",{className:"listaTiposDieta",children:Object(T.jsx)("ul",{children:null===a||void 0===a?void 0:a.map((function(e){return Object(T.jsxs)("li",{className:"diets",children:["|",e,"|"]},S++)}))})})]})}c(62);function C(e){for(var t=e.recipesPage,c=e.allRecipes,a=e.paged,s=[],n=1;n<=Math.ceil(c/t);n++)s.push(n);return Object(T.jsx)("div",{children:s.length<=1?Object(T.jsx)(T.Fragment,{}):Object(T.jsx)("nav",{className:"pagination",children:Object(T.jsx)("ul",{className:"pages",children:null===s||void 0===s?void 0:s.map((function(e){return Object(T.jsx)("li",{className:"page",children:Object(T.jsx)("button",{className:"pageBtn",onClick:function(){return a(e)},style:{width:"30px"},children:e})},e)}))})})})}c(63);function E(){var e=Object(j.b)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1];function r(t){t.preventDefault();try{e((c=s,function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:3001/api/recipes?name=".concat(c));case 3:return a=e.sent,e.abrupt("return",t({type:N,payload:a.data}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",alert("Recipe Not Found !"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}catch(a){return a}var c;n("")}return Object(T.jsxs)("div",{className:"search",children:[Object(T.jsx)("input",{type:"text",className:"searchInput",placeholder:"Search recipe by name",value:s,onChange:function(e){return function(e){e.preventDefault(),n(e.target.value)}(e)}}),Object(T.jsx)("button",{className:"searchButton",type:"submit",onClick:function(e){return r(e)},children:"Search"})]})}c(64);function R(){return Object(T.jsx)("div",{className:"bb",children:Object(T.jsx)("div",{className:"aa"})})}c(65);var D=c.p+"static/media/LogoHenryFood.e192822a.png",P=c.p+"static/media/LogoHenryFood_grande.30eeb66d.png",k=1;function L(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.recipes})),c=Object(j.c)((function(e){return e.dietTypes})),s=Object(a.useState)(""),n=Object(o.a)(s,2),r=(n[0],n[1]),l=Object(a.useState)(1),u=Object(o.a)(l,2),d=u[0],b=u[1],m=Object(a.useState)(9),x=Object(o.a)(m,1)[0],N=d*x,y=N-x,S=t.slice(y,N),L=function(e){b(e)};function I(t){var c;t.preventDefault(),e((c=t.target.value,{type:O,payload:c})),b(1)}function A(t){var c;t.preventDefault(),e((c=t.target.value,{type:v,payload:c})),b(1),r("Order ".concat(t.target.value))}function B(t){var c;t.preventDefault(),e((c=t.target.value,{type:f,payload:c})),b(1),r("Order ".concat(t.target.value))}return Object(a.useEffect)((function(){e((function(e){p.a.get("http://localhost:3001/api/recipes").then((function(t){return e({type:h,payload:t.data})})).catch((function(e){console.log(e)}))}))}),[e]),Object(a.useEffect)((function(){e(g())}),[e]),t.length>0&&void 0!==t?Object(T.jsxs)("div",{className:"home",children:[Object(T.jsxs)("div",{className:"Presentation",children:[Object(T.jsx)("img",{src:D,alt:"Logo de Henry Food"}),Object(T.jsx)("h1",{className:"initialMsg",children:"Let's do it!"})]}),Object(T.jsxs)("div",{className:"zonaBotones",children:[Object(T.jsx)("div",{children:Object(T.jsx)(E,{})}),Object(T.jsx)("div",{className:"zonaRecipeAdd",children:Object(T.jsx)(i.b,{to:"/recipe",children:Object(T.jsx)("button",{className:"addButton",children:"Add new Recipe"})})}),Object(T.jsx)("div",{className:"zonaTypeAdd",children:Object(T.jsx)(i.b,{to:"/type",children:Object(T.jsx)("button",{className:"addTypeButton",children:"Add new Type of Recipe"})})})]}),Object(T.jsxs)("div",{className:"zonaMain ",children:[Object(T.jsxs)("div",{className:"zonaSelectOrder",children:[Object(T.jsx)("label",{className:"filters",children:"Sort:"}),Object(T.jsxs)("select",{className:"selectSort",name:"alphabetical",onChange:function(e){return A(e)},children:[Object(T.jsx)("option",{disabled:!0,selected:!0,children:"Alphabetical"}),Object(T.jsx)("option",{value:"atoz",children:"A to Z"}),Object(T.jsx)("option",{value:"ztoa",children:"Z to A"})]}),Object(T.jsxs)("select",{className:"selectSort",name:"numerical",onChange:function(e){return B(e)},children:[Object(T.jsx)("option",{disabled:!0,selected:!0,children:"Score"}),Object(T.jsx)("option",{value:"asc",children:"From Min to Max"}),Object(T.jsx)("option",{value:"desc",children:"From Max to Min"})]}),Object(T.jsx)("br",{}),Object(T.jsx)("label",{className:"filters",children:"Diet Types:"}),Object(T.jsxs)("select",{className:"selectSort",name:"diets",onChange:function(e){return I(e)},children:[Object(T.jsx)("option",{disabled:!0,selected:!0,children:"Select..."}),Object(T.jsx)("option",{value:"all",children:"All"}),c.map((function(e){return Object(T.jsx)("option",{value:e,children:e},e)}))]})]}),Object(T.jsxs)("div",{className:"zonaMostrar",children:[Object(T.jsx)(C,{recipesPage:x,allRecipes:t.length,paged:L}),Object(T.jsx)("div",{className:"allrecipes",children:null===S||void 0===S?void 0:S.map((function(e){return Object(T.jsx)("div",{className:"eachRecipe",children:Object(T.jsx)(i.b,{className:"linkRecetas",to:"home/".concat(e.id),children:Object(T.jsx)(w,{image:e.image?e.image:P,name:e.name,dietTypes:e.dietTypes,score:e.score})})},k++)}))}),Object(T.jsx)(C,{recipesPage:x,allRecipes:t.length,paged:L})]})]})]}):Object(T.jsx)(R,{})}c(71);var I=c.p+"static/media/background_first.2a2dc655.png";function A(){return Object(T.jsxs)("div",{className:"contenedor",children:[Object(T.jsx)("div",{className:"Presentation",children:Object(T.jsx)("img",{src:D,alt:"Logo de Henry Food"})}),Object(T.jsxs)("div",{className:"landing",children:[Object(T.jsx)("div",{className:"ingLandPage",children:Object(T.jsx)("img",{id:"foto",src:I,alt:"Muestra foto de food "})}),Object(T.jsxs)("div",{className:"textoLandPage",children:[Object(T.jsx)("h2",{className:"welcomeMsg",children:"What do you like to cook?"}),Object(T.jsx)("h3",{className:"welcomeMsg2",children:"What type of recipes do you need?"}),Object(T.jsx)("h3",{className:"welcomeMsg2",children:"You are in the right place!"}),Object(T.jsx)(i.b,{to:"/home",id:"click",children:Object(T.jsx)("button",{className:"homeButton",children:"Let's go !"})})]})]})]})}var B=c(21),F=c(5);c(72);function M(e){var t={};return e.name||(t.name="Please complete with a recipe name"),e.summary||(t.summary="Please add some comments about your recipe"),(e.score<1||e.score>100)&&(t.score="The score must be a number between 1 and 100"),(e.healthScore<1||e.healthScore>100)&&(t.healthScore="The score must be a number between 1 and 100"),e.steps.length||(t.steps="Please detail the steps for your recipe"),e.dietTypes.length||(t.dietTypes="You must select at least one diet type"),t}function _(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.dietTypes})),c=Object(l.f)(),s=Object(a.useState)({}),n=Object(o.a)(s,2),r=n[0],b=n[1],m=Object(a.useState)({name:"",summary:"",score:"",steps:"",dietTypes:[]}),h=Object(o.a)(m,2),O=h[0],x=h[1];function v(e){e.preventDefault(),x((function(t){var c=Object(F.a)(Object(F.a)({},t),{},Object(B.a)({},e.target.name,e.target.value)),a=M(c);return b(a),c}))}function f(t){var a;t.preventDefault(),Object.values(r).length>0?alert("Please complete the information required"):""!==O.name||""!==O.summary||""!==O.score||""!==O.steps||O.dietTypes.length?(e((a=O,function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("http://localhost:3001/api/recipe",a);case 3:return c=e.sent,e.abrupt("return",c);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),alert("New recipe added successfully!"),x({name:"",summary:"",score:"",steps:[],dietTypes:[]}),c.push("/home")):alert("Please complete the form")}return Object(a.useEffect)((function(){e(g())}),[e]),Object(T.jsxs)("div",{className:"addRecipe",children:[Object(T.jsx)("h1",{className:"msg",children:"Creat your own recipe!"}),Object(T.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(T.jsxs)("div",{className:"form",children:[Object(T.jsxs)("div",{className:"prettierForm",children:[Object(T.jsxs)("div",{className:"nameInput",children:[Object(T.jsx)("label",{className:"msgs",children:"Name:"}),Object(T.jsx)("input",{className:"inputs",name:"name",type:"text",value:O.name,onChange:function(e){return v(e)}}),r.name&&Object(T.jsx)("span",{className:"errors",children:r.name})]}),Object(T.jsxs)("div",{className:"nameInput",children:[Object(T.jsx)("label",{className:"msgs",children:"Summary:"}),Object(T.jsx)("textarea",{name:"summary",type:"text",rows:"4",cols:"30",value:O.summary,onChange:function(e){return v(e)}}),r.summary&&Object(T.jsx)("span",{className:"errors",children:r.summary})]}),Object(T.jsxs)("div",{className:"nameInput",children:[Object(T.jsx)("label",{className:"msgs",children:"Score:"}),Object(T.jsx)("input",{name:"score",type:"number",value:O.score,onChange:function(e){return v(e)}}),r.score&&Object(T.jsx)("span",{className:"errors",children:r.score})]}),Object(T.jsxs)("div",{className:"nameInput",children:[Object(T.jsx)("label",{className:"msgs",children:"Steps:"}),Object(T.jsx)("textarea",{name:"steps",type:"text",rows:"4",cols:"40",value:O.steps,onChange:function(e){return v(e)}}),r.steps&&Object(T.jsx)("span",{className:"errors",children:r.steps})]})]}),Object(T.jsx)("div",{className:"checkSelect",children:Object(T.jsxs)("div",{className:"nameInput",children:[Object(T.jsx)("label",{className:"msgs",children:"Diet Types:  "}),t.map((function(e){return Object(T.jsxs)("div",{className:"checks",children:[Object(T.jsx)("input",{className:"check",type:"checkbox",name:e,value:e,selected:O.dietTypes.includes(e),onChange:function(e){return function(e){var t=O.dietTypes,c=t.indexOf(e.target.value);c>=0?t.splice(c,1):t.push(e.target.value),x(Object(F.a)(Object(F.a)({},O),{},{dietTypes:t}));var a=M(O);b(a)}(e)}}),Object(T.jsx)("label",{className:"dietTyp",children:e})]},e)})),r.dietTypes&&Object(T.jsx)("span",{className:"errors",children:r.dietTypes})]})})]}),Object(T.jsx)("button",{className:"submitButton",type:"submit",children:"Submit Recipe"}),Object(T.jsx)(i.b,{to:"/home",children:Object(T.jsx)("button",{className:"goBackButton",children:"Go back"})})]})]})}c(73);function z(e){var t,c,s,n=Object(j.b)(),r=e.match.params.id;Object(a.useEffect)((function(){var e;n((e=r,function(){var t=Object(d.a)(Object(u.a)().mark((function t(c){var a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("http://localhost:3001/api/recipes/".concat(e));case 3:return a=t.sent,t.abrupt("return",c({type:x,payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[n,r]);var l=Object(j.c)((function(e){return e.recipeDetails}));return Object(T.jsxs)("div",{className:"contenedor2",children:[Object(T.jsx)("div",{className:"imagenRecipe2",children:Object(T.jsx)("img",{className:"detailImg2",src:l.image?l.image:P,alt:"Pic not found"})}),Object(T.jsxs)("div",{className:"details",children:[Object(T.jsx)("h1",{className:"texts",children:l.name}),l.dishTypes?Object(T.jsxs)("div",{className:"ddsh",children:[Object(T.jsx)("h3",{className:"texts2",children:"Dish Type: "}),null===(t=l.dishTypes)||void 0===t?void 0:t.map((function(e){return Object(T.jsxs)("p",{className:"dishesanddiets",children:[e," "]},e)}))]}):Object(T.jsx)("br",{}),Object(T.jsxs)("div",{className:"ddsh",children:[Object(T.jsx)("h3",{className:"texts2",children:"Diet Type: "}),l.dietTypes?l.dietTypes.map((function(e){return Object(T.jsxs)("p",{className:"dishesanddiets",children:[e," "]},e)})):null===(c=l.diets)||void 0===c?void 0:c.map((function(e){return Object(T.jsxs)("p",{className:"dishesanddiets",children:[e.name," "]},e.name)}))]}),Object(T.jsxs)("div",{className:"ddsh",children:[Object(T.jsx)("h3",{className:"texts2",children:"Summary: "}),Object(T.jsx)("p",{className:"summary",children:null===(s=l.summary)||void 0===s?void 0:s.replace(/<[^>]*>/g,"")})]}),Object(T.jsxs)("div",{className:"ddsh",children:[Object(T.jsx)("h3",{className:"scores",children:"Score: "}),Object(T.jsx)("p",{className:"dishesanddiets",children:l.score})]}),Object(T.jsxs)("div",{className:"ddsh",children:[Object(T.jsx)("h3",{className:"texts2",children:"Steps: "}),Object(T.jsx)("ul",{className:"steps",children:Array.isArray(l.steps)?l.steps.map((function(e){return Object(T.jsxs)("li",{children:[" ",e.number,"- ",e.step]},e.number)})):Object(T.jsx)("li",{children:l.steps})})]}),Object(T.jsx)(i.b,{to:"/home",children:Object(T.jsx)("button",{className:"backButton2",children:"Go back to see Recipes"})})]},r)]})}c(74);function G(){var e=Object(j.b)(),t=Object(a.useState)({}),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)({name:""}),l=Object(o.a)(r,2),b=l[0],m=l[1];function h(t){var c;t.preventDefault(),Object.values(s).length>0?alert("Please complete the information required"):""===b.name?alert("Please complete the form"):(e((c=b,function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("http://localhost:3001/api/type",c);case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),alert("New type of recipe added successfully!"),m({name:""}))}return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{className:"msg",children:"Creat your own Type of Recipe!"}),Object(T.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(T.jsx)("div",{className:"form",children:Object(T.jsx)("div",{className:"prettierForm",children:Object(T.jsxs)("div",{className:"nameInput",children:[Object(T.jsx)("label",{className:"msgs",children:"Name:"}),Object(T.jsx)("input",{className:"inputs",name:"name",type:"text",value:b.name,onChange:function(e){return function(e){e.preventDefault(),m((function(t){var c=Object(F.a)(Object(F.a)({},t),{},Object(B.a)({},e.target.name,e.target.value)),a=function(e){var t={};return e.name||(t.name="Please complete with a type of recipe name"),t}(c);return n(a),c}))}(e)}}),s.name&&Object(T.jsx)("span",{className:"errors",children:s.name})]})})}),Object(T.jsx)("button",{className:"submitButton",type:"submit",children:"Submit type "}),Object(T.jsx)(i.b,{to:"/home",children:Object(T.jsx)("button",{className:"goBackButton",children:"Go back"})})]})]})}var H=function(){return Object(T.jsx)(i.a,{children:Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{exact:!0,path:"/",component:A}),Object(T.jsx)(l.a,{path:"/home",exact:!0,component:L}),Object(T.jsx)(l.a,{path:"/recipe",exact:!0,component:_}),Object(T.jsx)(l.a,{path:"/home/:id",component:z}),Object(T.jsx)(l.a,{exact:!0,path:"/type",component:G})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))},q=c(34),J=c(38),W={recipes:[],allRecipes:[],dietTypes:[],recipeDetails:[]};var Z=c(45),K=Object(q.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(F.a)(Object(F.a)({},e),{},{recipes:t.payload,allRecipes:t.payload});case O:var c=e.allRecipes,a="all"===t.payload?c:c.filter((function(e){return e.dietTypes.includes(t.payload.toLowerCase())}));return Object(F.a)(Object(F.a)({},e),{},{recipes:a});case v:var s=Object(J.a)(e.recipes);return s="atoz"===t.payload?e.recipes.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0})):e.recipes.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:e.name.toLowerCase()>t.name.toLowerCase()?-1:0})),Object(F.a)(Object(F.a)({},e),{},{recipes:s});case f:var n=Object(J.a)(e.recipes);return n="asc"===t.payload?e.recipes.sort((function(e,t){return e.score>t.score?1:e.score<t.score?-1:0})):e.recipes.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0})),Object(F.a)(Object(F.a)({},e),{},{recipes:n});case N:return Object(F.a)(Object(F.a)({},e),{},{recipes:t.payload});case x:return Object(F.a)(Object(F.a)({},e),{},{recipeDetails:t.payload});case b:case m:return Object(F.a)({},e);case y:return Object(F.a)(Object(F.a)({},e),{},{dietTypes:t.payload});default:return e}}),Object(q.b)(Object(q.a)(Z.a))),Q=K;r.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(j.a,{store:Q,children:Object(T.jsx)(i.a,{children:Object(T.jsx)(H,{})})})}),document.getElementById("root")),Y()}},[[75,1,2]]]);
//# sourceMappingURL=main.391ee16f.chunk.js.map