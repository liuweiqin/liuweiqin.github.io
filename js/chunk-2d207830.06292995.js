(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207830"],{a19c:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"page page_choose_shop"},[s._m(0),e("div",{staticClass:"main"},[s.loadDataSuccess?s._e():e("div",{staticClass:"kui-loading"},[e("span",{staticClass:"loader-img"}),e("span",[s._v("正在加载...")])]),s.loadDataSuccess?[e("div",{staticClass:"choose_tips"},[s._v("请选择您要预约的门店")]),e("div",{staticClass:"city_box"},[e("div",{staticClass:"select"},[e("select",{ref:"select"},[s._l(s.shop,(function(t,a){return[e("option",{key:a,domProps:{value:t.id}},[s._v(s._s(t.shopName))])]}))],2)])]),e("a",{staticClass:"btn_next",on:{click:s.next}},[s._v("下一步")])]:s._e()],2)])},o=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"header"},[e("a",{staticClass:"back",attrs:{href:"javascript:history.go(-1)"}}),e("div",{staticClass:"title"},[s._v("选择门店地址")])])}],c=e("4ec3"),i={data:function(){return{loadDataSuccess:!1,shop:[],shopInfo:{latitude:"22.559175762939453",longitude:"113.89689636230469"}}},methods:{next:function(){var s,t=this.$route.query.type,e=this.$route.query.course,a=this.$refs.select.value,o=this.$refs.select.selectedIndex,c=this.$refs.select.options[o].text;this.shopInfo.shopId=a,this.shopInfo.shopName=c,localStorage.setItem("shopInfo",JSON.stringify(this.shopInfo)),"cake"==t&&(s="/cake"),"course"==t&&(1==e&&(s="/course/list"),2==e&&(s="/course/member"),3==e&&(s="/course/quan"),4==e&&(s="/kefu")),this.$router.push(s)}},mounted:function(){var s=this;Object(c["c"])(this.shopInfo).then((function(t){0==t.code?(s.shop=t.data,s.loadDataSuccess=!0):alert(t.msg)})).catch((function(s){alert(s.msg)}))}},n=i,l=e("6691"),r=Object(l["a"])(n,a,o,!1,null,null,null);t["default"]=r.exports}}]);