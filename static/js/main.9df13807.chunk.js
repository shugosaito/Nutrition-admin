(this.webpackJsonpnutrition=this.webpackJsonpnutrition||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(9),s=t.n(c),r=(t(15),t(7)),i=t(2),o=(t(16),t(17),t(18),t(0));var j=function(){return Object(o.jsx)("nav",{className:"header__nav",children:Object(o.jsxs)("ul",{className:"header__list",children:[Object(o.jsx)("li",{className:"header__item",children:"Meal Admin"}),Object(o.jsx)("li",{className:"header__item",children:"Workout Admin"}),Object(o.jsx)("li",{className:"header__item",children:"Connect"})]})})};var u=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{className:"header__title",children:"Nutrition Admin"}),Object(o.jsx)(j,{})]})};t(20),t(21);var b=function(e){var a=e.month,t=e.monthFilterHandler;return Object(o.jsxs)("div",{className:"mealsFilter",children:[Object(o.jsx)("lable",{className:"mealsFilter__label",htmlFor:"month",children:"Select Month"}),Object(o.jsxs)("select",{value:a,onChange:function(e){t(e.target.value)},children:[Object(o.jsx)("option",{name:"month",value:"1",children:"1"}),Object(o.jsx)("option",{name:"month",value:"2",children:"2"}),Object(o.jsx)("option",{name:"month",value:"3",children:"3"}),Object(o.jsx)("option",{name:"month",value:"4",children:"4"}),Object(o.jsx)("option",{name:"month",value:"5",children:"5"}),Object(o.jsx)("option",{name:"month",value:"6",children:"6"}),Object(o.jsx)("option",{name:"month",value:"7",children:"7"}),Object(o.jsx)("option",{name:"month",value:"8",children:"8"}),Object(o.jsx)("option",{name:"month",value:"9",children:"9"}),Object(o.jsx)("option",{name:"month",value:"10",children:"10"}),Object(o.jsx)("option",{name:"month",value:"11",children:"11"}),Object(o.jsx)("option",{name:"month",value:"12",children:"12"})]})]})};t(22),t(23);var d=function(e){var a=e.meal,t=a.date.getMonth()+1,l=a.date.getDate(),n=a.date.getHours();return Object(o.jsxs)("div",{className:"mealItem",children:[Object(o.jsxs)("div",{className:"mealItem__date",children:[Object(o.jsxs)("div",{className:"mealItem__date-flexWrapper",children:[Object(o.jsx)("span",{className:"mealItem__month",children:"".concat(t,"\u6708")}),Object(o.jsx)("span",{className:"mealItem__day",children:"".concat(l,"\u65e5")})]}),Object(o.jsx)("span",{className:"mealItem__hour",children:"".concat(n,"\u6642")})]}),Object(o.jsx)("p",{className:"mealItem__food",children:a.food}),Object(o.jsx)("p",{className:"mealItem__calorie",children:"".concat(a.calorie," kcal")})]})};var m=function(e){var a=e.meals;return 0===a.length?Object(o.jsx)("p",{className:"mealsList-error",children:"No meals added yet"}):Object(o.jsx)("ul",{className:"mealsList",children:a.map((function(e){return Object(o.jsx)(d,{meal:e},e.id)}))})},h=t(10);t(24),t(25),t(26);var v=function(e){var a=e.calorieData,t=e.maxValue,l="0%";return t>0&&(l=Math.round(a.value/t*100)+"%"),Object(o.jsxs)("div",{className:"chartBar",children:[Object(o.jsx)("label",{className:"chartBar__label",children:a.label}),Object(o.jsx)("div",{className:"chartBar__inner",children:Object(o.jsx)("span",{className:"chartBar__content",style:{width:l}})})]})};var O=function(e){var a=e.calorieData,t=a.map((function(e){return e.value})),l=Math.max.apply(Math,Object(r.a)(t));return Object(o.jsx)("div",{className:"chart",children:a.map((function(e){return Object(o.jsx)(v,{calorieData:e,maxValue:l},e.label)}))})};var x=function(e){var a,t=e.meals,l=[{label:1,value:0},{label:2,value:0},{label:3,value:0},{label:4,value:0},{label:5,value:0},{label:6,value:0},{label:7,value:0},{label:8,value:0},{label:9,value:0},{label:10,value:0},{label:11,value:0},{label:12,value:0},{label:13,value:0},{label:14,value:0},{label:15,value:0},{label:16,value:0},{label:17,value:0},{label:18,value:0},{label:19,value:0},{label:20,value:0},{label:21,value:0},{label:22,value:0},{label:23,value:0},{label:24,value:0},{label:25,value:0},{label:26,value:0},{label:27,value:0},{label:28,value:0},{label:29,value:0},{label:30,value:0},{label:31,value:0}],n=Object(h.a)(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;l[c.date.getDate()-1].value=c.calorie}}catch(s){n.e(s)}finally{n.f()}return console.log(l),Object(o.jsx)(O,{calorieData:l})};var _=function(e){var a=e.meals,t=((new Date).getMonth()+1).toString(),n=Object(l.useState)(t),c=Object(i.a)(n,2),s=c[0],r=c[1],j=a.filter((function(e){return(e.date.getMonth()+1).toString()===s}));return Object(o.jsxs)("div",{className:"meals",children:[Object(o.jsx)(b,{month:s,monthFilterHandler:function(e){r(e)}}),Object(o.jsx)(m,{meals:j}),Object(o.jsx)(x,{meals:j})]})},f=t(4),p=(t(27),t(6));t(28),t(29);var N=function(e){var a=e.alertHandler;return Object(o.jsx)("div",{className:"alert",children:Object(o.jsxs)("div",{className:"alert-bg",children:[Object(o.jsx)("p",{className:"alert__message",children:"Please Fill out Everything!!!"}),Object(o.jsx)("button",{className:"alert__button",onClick:a,children:"Back"})]})})};var M=function(e){var a=e.saveMealData,t=e.stopEditing,n=Object(l.useState)({food:"",calorie:"",date:""}),c=Object(i.a)(n,2),s=c[0],r=c[1],j=Object(l.useState)(!1),u=Object(i.a)(j,2),b=u[0],d=u[1],m=function(e){var a=e.target,t=a.name,l=a.value;r((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(p.a)({},t,l))}))};return Object(o.jsxs)("div",{className:"newMeal__wrapper",children:[b&&Object(o.jsx)(N,{alertHandler:function(){d(!1)}}),!b&&Object(o.jsxs)("form",{className:"newMeal__form",method:"POST",onSubmit:function(e){e.preventDefault(),s.food&&s.calorie&&s.date?(a({food:s.food,calorie:s.calorie,date:new Date(s.date)}),r({food:"",calorie:"",date:""})):d("true")},children:[Object(o.jsxs)("div",{className:"newMeal__container",children:[Object(o.jsx)("label",{className:"newMeal__label",htmlFor:"food",children:"Food"}),Object(o.jsx)("input",{className:"newMeal__input",type:"text",name:"food",value:s.food,onChange:m})]}),Object(o.jsxs)("div",{className:"newMeal__container",children:[Object(o.jsx)("label",{className:"newMeal__label",htmlFor:"calorie",children:"Calorie"}),Object(o.jsx)("input",{className:"newMeal__input",type:"number",min:"0",step:"1",name:"calorie",value:s.calorie,onChange:m})]}),Object(o.jsxs)("div",{className:"newMeal__container",children:[Object(o.jsx)("label",{className:"newMeal__label",htmlFor:"date",children:"Date"}),Object(o.jsx)("input",{className:"newMeal__input",type:"date",min:"2021-01-01",max:"2021-12-31",name:"date",value:s.date,onChange:m})]}),Object(o.jsxs)("div",{className:"newMeal__actions",children:[Object(o.jsx)("button",{className:"newMeal__actions-cancel",type:"button",onClick:t,children:"\xd7"}),Object(o.jsx)("button",{className:"newMeal__actions-add",type:"submit",children:"Add New Meal"})]})]})]})};var w=function(e){var a=e.addMeal,t=Object(l.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)("div",{className:"newMeal",children:[!c&&Object(o.jsx)("button",{className:"newMeal__edit",onClick:function(){s(!0)},children:"Add New Meal"}),c&&Object(o.jsx)(M,{saveMealData:function(e){var t=Object(f.a)(Object(f.a)({},e),{},{id:Date.now().toString()});a(t),s(!1)},stopEditing:function(){s(!1)}})]})};var g=function(){var e=Object(l.useState)([]),a=Object(i.a)(e,2),t=a[0],n=a[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)(w,{addMeal:function(e){n((function(a){return[].concat(Object(r.a)(a),[e])}))}}),Object(o.jsx)(_,{meals:t})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.9df13807.chunk.js.map