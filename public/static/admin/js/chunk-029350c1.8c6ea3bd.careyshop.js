(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-029350c1"],{"4a8f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-control",on:{click:t.handleShowDlg}},[t._t("control"),n("el-dialog",{attrs:{title:"账号选取",visible:t.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(e){t.visible=e},open:t.handleOpen}},[n("el-form",{staticStyle:{"margin-top":"-25px"},attrs:{model:t.form,size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",[n("el-radio-group",{on:{change:function(e){return t.handleSubmit(!0)}},model:{value:t.isSelection,callback:function(e){t.isSelection=e},expression:"isSelection"}},[n("el-radio-button",{attrs:{label:!1}},[t._v("全部")]),n("el-radio-button",{attrs:{label:!0}},[t._v("已选")])],1),n("el-button-group",{staticClass:"cs-ml-10"},[n("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:t.clearedSelection}},[t._v("清除")]),n("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:function(e){return t.handleSubmit(!0)}}},[t._v("刷新")])],1)],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{placeholder:"可输入账号/昵称进行搜索",clearable:!0,size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit(!0)}},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.handleSubmit(!0)}},slot:"append"})],1)],1)],1)],1)],1),n("el-table",{ref:"multipleTable",attrs:{data:t.tableData,"row-key":"client"===t.typeUser?"user_id":"admin_id"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{"reserve-selection":!0,align:"center",type:"selection",width:"50"}}),n("el-table-column",{attrs:{label:"账号",prop:"username","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-avatar",{staticClass:"cs-fl",attrs:{size:"medium",src:t._f("getPreviewUrl")(e.row.head_pic)}},[n("img",{attrs:{src:t.$publicPath+"image/setting/user.png",alt:""}})]),n("div",{staticClass:"user-info cs-ml-10"},[n("div",{staticClass:"username"},[t._v(t._s(e.row.username))]),"client"===t.typeUser?n("p",{staticClass:"level"},[e.row.get_user_level.icon?n("el-tooltip",{attrs:{content:e.row.get_user_level.name,placement:"top"}},[n("el-image",{staticClass:"level-icon",attrs:{src:e.row.get_user_level.icon,fit:"fill"}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])])],1):t._e()],1):t._e()])]}}])}),n("el-table-column",{attrs:{label:"昵称",prop:"nickname"}}),"client"===t.typeUser?n("el-table-column",{attrs:{label:"手机号",prop:"mobile"}}):n("el-table-column",{attrs:{label:"所属组",prop:"get_auth_group.name"}}),n("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t.statusMap[e.row.status].type,effect:"plain",size:"mini"}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])})],1),n("page-footer",{staticStyle:{margin:"0",padding:"20px 0 0 0"},attrs:{current:t.page.current,size:t.page.size,total:t.page.total,"is-size":!1},on:{change:t.handlePaginationChange}}),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleConfirm}},[t._v("确定")])],1)],1)],2)},i=[],l=(n("4160"),n("d3b7"),n("159b"),n("5530")),s=n("b85c"),r=n("ca00"),o=n("d221"),c=n("87e6"),u={name:"cs-user-select",components:{PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},props:{confirm:{type:Function},checkList:{type:Array,required:!1,default:function(){return[]}},typeUser:{type:String,required:!1,default:"client"}},data:function(){return{visible:!1,isCheck:!1,isSelection:!1,tableData:[],multipleSelection:[],statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"}},form:{account:void 0,client_id:void 0},page:{current:1,size:10,total:0}}},filters:{getPreviewUrl:function(t){return t?r["a"].getImageCodeUrl(t,"head_pic"):""}},methods:{handleShowDlg:function(){this.visible=!0},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.handleSubmit()}))},handleOpen:function(){var t=this;if(!this.isCheck&&this.checkList.length){var e,n=[],a=Object(s["a"])(this.checkList);try{for(a.s();!(e=a.n()).done;){var i=e.value,l="client"===this.typeUser?"user_id":"admin_id";Object.prototype.hasOwnProperty.call(i,l)&&n.push(i[l])}}catch(u){a.e(u)}finally{a.f()}this.checkList.length&&!n.length&&(n=this.checkList);var r="client"===this.typeUser?o["e"]:c["d"];r(n).then((function(e){t.$nextTick((function(){e.data&&e.data.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e,!0)}))}))})).then((function(){t.tableData.length||t.handleSubmit(!0)}))}else this.tableData.length||this.handleSubmit(!0);this.isCheck=!0},handleSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(this.page.current=1);var n=Object(l["a"])({},this.form);this.isSelection&&(n.client_id=[],this.multipleSelection.forEach((function(e){n.client_id.push(e["client"===t.typeUser?"user_id":"admin_id"])})));var a="client"===this.typeUser?o["d"]:c["c"];a(Object(l["a"])(Object(l["a"])({},n),{},{page_no:this.page.current,page_size:this.page.size})).then((function(e){t.tableData=e.data.items||[],t.page.total=e.data.total_result}))},handleSelectionChange:function(t){this.multipleSelection=t},clearedSelection:function(){var t=this;this.$nextTick((function(){t.$refs.multipleTable.clearSelection()}))},handleConfirm:function(){this.$emit("confirm",this.multipleSelection),this.visible=!1}}},d=u,p=(n("5fa3"),n("2877")),h=Object(p["a"])(d,a,i,!1,null,"542a6084",null);e["default"]=h.exports},"5fa3":function(t,e,n){"use strict";var a=n("f20d"),i=n.n(a);i.a},d221:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return l})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return d}));var a=n("bc07");function i(t){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"add.user.item"},data:t})}function l(t){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"set.user.item"},data:t})}function s(t,e){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"set.user.status"},data:{client_id:t,status:e}})}function r(t,e,n){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"set.user.password"},data:{client_id:t,password:e,password_confirm:n}})}function o(t){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"del.user.list"},data:{client_id:t}})}function c(t){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"get.user.info"},data:{client_id:t}})}function u(t){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"get.user.list"},data:t})}function d(t){return Object(a["a"])({url:"/v1/user",method:"post",params:{method:"get.user.select"},data:{client_id:t}})}},f20d:function(t,e,n){}}]);