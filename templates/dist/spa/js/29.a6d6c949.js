(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"0a26":function(e,t){},"9dea":function(e,t,a){"use strict";var o=a("0a26"),n=a.n(o);t["default"]=n.a},a9ea:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"dn_code",attrs:{props:t}},[e._v("\n             "+e._s(t.row.dn_code)+"\n           ")]),a("q-td",{key:"goods_code",attrs:{props:t}},[e._v("\n             "+e._s(t.row.goods_code)+"\n           ")]),a("q-td",{key:"goods_qty",attrs:{props:t}},[e._v("\n             "+e._s(t.row.goods_qty)+"\n           ")]),a("q-td",{key:"customer",attrs:{props:t}},[e._v("\n           "+e._s(t.row.customer)+"\n         ")]),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),a("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:t}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==e.$q.localStorage.getItem("staff_type")&&"Customer"!==e.$q.localStorage.getItem("staff_type")&&"Inbound"!==e.$q.localStorage.getItem("staff_type")&&"Outbound"!==e.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                          $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                          $q.localStorage.getItem('staff_type') !== 'Inbound' &&\n                          $q.localStorage.getItem('staff_type') !== 'Outbound'\n                         "}],attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return e.deleteData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n               "+e._s(e.$t("deletebackorder"))+"\n            ")])],1)],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n       "+e._s(e.$t("deletetip"))+"\n     ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},n=[],s=(a("5319"),a("3004")),i={name:"Pagednbackorder",data(){return{openid:"",login_name:"",authin:"0",pathname:"dn/detail/?dn_status=2&back_order_label=true",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],warehouse_list:[],columns:[{name:"dn_code",required:!0,label:this.$t("outbound.view_dn.dn_code"),align:"left",field:"dn_code"},{name:"goods_code",label:this.$t("goods.view_goodslist.goods_code"),field:"goods_code",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.back_order_stock"),field:"goods_qty",align:"center"},{name:"customer",label:this.$t("baseinfo.view_customer.customer_name"),field:"customer",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],deleteForm:!1,filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var e=this;e.$q.localStorage.has("auth")&&Object(s["d"])(e.pathname,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],o=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=o}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;e.$q.localStorage.has("auth")&&Object(s["d"])(e.pathname+"&dn_code__icontains="+e.filter,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],o=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=o}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;e.$q.localStorage.has("auth")&&Object(s["d"])(e.pathname_previous,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],o=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=o}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;e.$q.localStorage.has("auth")&&Object(s["d"])(e.pathname_next,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],o=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=o}else e.pathname_previous=t.previous;if(t.next){var n=t.next.split(":")[0],s=t.next.replace(n,window.location.href.split(":")[0]);e.pathname_next=s}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},deleteData(e){var t=this;2!==e.dn_status&&"true"!==e.back_order_label?t.$q.notify({message:e.dn_code+" Not A Back Order",icon:"close",color:"negative"}):(t.deleteForm=!0,t.deleteid=e.id)},deleteDataSubmit(){var e=this;Object(s["c"])("dn/detail/"+e.deleteid+"/").then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0}},created(){var e=this;e.$q.localStorage.has("openid")?e.openid=e.$q.localStorage.getItem("openid"):(e.openid="",e.$q.localStorage.set("openid","")),e.$q.localStorage.has("login_name")?e.login_name=e.$q.localStorage.getItem("login_name"):(e.login_name="",e.$q.localStorage.set("login_name","")),e.$q.localStorage.has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated(){},destroyed(){}},r=i,l=a("2877"),c=a("9dea"),p=a("eaac"),d=a("e7a9"),u=a("9c40"),h=a("05c0"),_=a("2c91"),g=a("27f9"),m=a("0016"),f=a("bd08"),v=a("db86"),b=a("24e8"),q=a("f09f"),x=a("d847"),y=a("a370"),w=a("7f67"),$=a("eebe"),k=a.n($),S=Object(l["a"])(r,o,n,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(S);t["default"]=S.exports;k()(S,"components",{QTable:p["a"],QBtnGroup:d["a"],QBtn:u["a"],QTooltip:h["a"],QSpace:_["a"],QInput:g["a"],QIcon:m["a"],QTr:f["a"],QTd:v["a"],QDialog:b["a"],QCard:q["a"],QBar:x["a"],QCardSection:y["a"]}),k()(S,"directives",{ClosePopup:w["a"]})}}]);