webpackJsonp([13],{1024:function(e,t,a){t=e.exports=a(86)(void 0),t.push([e.i,"",""])},1025:function(e,t,a){t=e.exports=a(86)(void 0),t.push([e.i,".ms-doc[data-v-39b1eee3]{max-width:980px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;background-color:#fff;padding:40px;color:#54667a}.ms-doc_main[data-v-39b1eee3]{padding:20px;border-top:1px solid #e9f1f3}.lead_out img[data-v-39b1eee3]{margin:0 10px -3px 0;width:16px;height:18px}.pro[data-v-39b1eee3]{color:#0f8edd;padding:0 10px}.proB[data-v-39b1eee3]{border-left:1px solid #bfbfbf;border-right:1px solid #bfbfbf}.model_name[data-v-39b1eee3]{display:inline-block;width:80px;margin-right:10px;text-align:right}",""])},1059:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[e._v("管理员列表")])],1)],1),e._v(" "),a("div",{staticClass:"ms-doc"},[a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd","margin-bottom":"14px"},attrs:{type:"primary",round:""},on:{click:function(t){e.handleClick()}}},[e._v("添加管理员\n          ")]),e._v(" "),a("div",{staticClass:"ms-doc_main"},[a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:e.managerList,border:""}},[a("el-table-column",{attrs:{prop:"username",label:"用户名","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"用户组","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.group_name,function(t){return a("span",[e._v(e._s(t.title))])})}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"telephone",label:"手机号","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"last_login_time",label:"最后登录时间","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"pro",attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row.id)}}},[e._v("修改权限或密码")])]}}])})],1)],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"1100px",margin:"100px auto"},attrs:{title:e.title,visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{"font-size":"14px",color:"#54667a"}},[a("div",[a("span",{staticClass:"model_name",staticStyle:{float:"left"}},[e._v("管理组：")]),a("el-checkbox-group",{staticStyle:{"margin-left":"90px"},model:{value:e.user_info.group_id,callback:function(t){e.$set(e.user_info,"group_id",t)},expression:"user_info.group_id"}},e._l(e.groupList,function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.title))])}))],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("姓名：")]),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:e.user_info.username,callback:function(t){e.$set(e.user_info,"username",t)},expression:"user_info.username"}})],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("手机号：")]),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:e.user_info.telephone,callback:function(t){e.$set(e.user_info,"telephone",t)},expression:"user_info.telephone"}})],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("初始密码：")]),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:e.user_info.password,callback:function(t){e.$set(e.user_info,"password",t)},expression:"user_info.password"}}),e._v(" "),a("small",{staticStyle:{"margin-left":"10px"}},[e._v("如不修改密码，留空即可")])],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("状态：")]),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.user_info.status,callback:function(t){e.$set(e.user_info,"status",t)},expression:"user_info.status"}},[e._v("允许登录")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.user_info.status,callback:function(t){e.$set(e.user_info,"status",t)},expression:"user_info.status"}},[e._v("禁止登录")])],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.handleClose()}}},[e._v("取 消")]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(t){e.addManager()}}},[e._v("保存")])],1)])],1)},staticRenderFns:[]}},1089:function(e,t,a){var o=a(1024);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(196)("6e8d253e",o,!0)},1090:function(e,t,a){var o=a(1025);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(196)("7d3bdd58",o,!0)},506:function(e,t,a){a(1090),a(1089);var o=a(197)(a(988),a(1059),"data-v-39b1eee3",null);e.exports=o.exports},988:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{dialogVisible:!1,input:"",managerList:[],groupList:[],radio:"1",user_info:{username:"",telephone:null,password:"",group_id:[],status:"1",id:""},title:"添加管理员"}},methods:{getManageList:function(){var e=this;this.$ajax.get("/api/Rule/userList").then(function(t){"200"==t.data.code&&(e.managerList=t.data.data.user_list,console.log(e.managerList))},function(e){console.log(e)})},getManageGroup:function(){var e=this;this.$ajax.get("/api/Rule/addAdmin").then(function(t){"200"==t.data.code&&(e.groupList=t.data.data.group_list)},function(e){console.log(e)})},addManager:function(){var e=this;if(void 0===this.user_info.group_id||0==this.user_info.group_id.length)return void this.$message({message:"请选择管理组",type:"error"});this.$ajax.post("/api/Rule/editAdmin",this.user_info).then(function(t){"200"==t.data.code?(e.dialogVisible=!1,e.$message({message:t.data.data.message,type:"success"}),e.getManageList()):e.$message({message:t.data.error,type:"error"})},function(e){console.log(e)})},handleClose:function(e){var t=this;this.$confirm("确认关闭？").then(function(e){t.dialogVisible=!1}).catch(function(e){})},handleClick:function(e){var t=this;e?(this.title="修改权限或密码",this.$ajax.get("/api/Rule/editAdmin",{params:{admin_id:e}}).then(function(e){"200"==e.data.code&&(t.user_info=e.data.data.user_info,console.log(t.user_info),console.log(t.user_info.status),t.dialogVisible=!0)},function(e){console.log(e)})):(this.title="添加管理员",this.user_info={username:"",telephone:"",password:"",group_id:[],status:"1",id:""},this.dialogVisible=!0)}},mounted:function(){},created:function(){this.getManageList(),this.getManageGroup()}}}});