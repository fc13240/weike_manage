webpackJsonp([17],{1006:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={components:{},data:function(){return{dialogVisible:!1,dialogVisible2:!1,list:[],defaultProps:{children:"_data",label:"name"},menu_name:"",menu_mca:"",menu_id:"",menu_url:"",name:"",mca:"",father_id:"",url:""}},methods:{getList:function(){var e=this;this.$ajax.post("/api/Menu/totalMenu").then(function(t){"200"==t.data.code&&(e.list=t.data.data.menu)},function(e){console.log(e)})},handleClose:function(e){var t=this;this.$confirm("确认关闭？").then(function(a){t.menu_name="",t.menu_id="",t.menu_mca="",t.name="",t.mca="",t.father_id="",e()}).catch(function(e){})},add:function(){var e=this;this.$ajax.post("/api/menu/editmenu",{menu_name:this.menu_name,menu_id:this.menu_id,menu_mca:this.menu_mca,url:this.menu_url}).then(function(t){"200"==t.data.code?(e.dialogVisible=!1,e.$message({message:t.data.data.message,type:"success"}),e.menu_name="",e.menu_id="",e.menu_mca="",e.menu_url="",e.getList()):e.$message({message:t.data.error,type:"error"})},function(e){console.log(e)})},add2:function(){var e=this;this.$ajax.post("/api/Menu/addChildMenu",{menu_name:this.name,menu_id:this.father_id,menu_mca:this.mca,url:this.url}).then(function(t){"200"==t.data.code?(e.dialogVisible2=!1,e.$message({message:t.data.data.message,type:"success"}),e.name="",e.mca="",e.father_id="",e.url="",e.getList()):e.$message({message:t.data.error,type:"error"})},function(e){console.log(e)})},modify:function(){this.dialogVisible=!0},renderContent:function(e,t){var a=t.node,i=t.data,n=(t.store,this);return e("span",[e("span",a.label),e("span",{attrs:{style:"float: right; margin-right: 20px"}},[e("el-button",{attrs:{size:"mini"},on:{click:function(){n.dialogVisible2=!0,n.father_id=i.id}}},"添加子菜单"),e("el-button",{attrs:{size:"mini"},on:{click:function(){var e=this;n.$confirm("此操作将永久删除该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.$ajax.post("/api/Menu/delmenu",{menu_id:i.id}).then(function(e){"200"==e.data.code?(n.dialogVisible2=!1,n.$message({message:e.data.data.message,type:"success"}),n.getList()):n.$message({message:e.data.error,type:"error"})},function(e){console.log(e)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},"删除"),e("el-button",{attrs:{size:"mini"},on:{click:function(){n.dialogVisible=!0,n.menu_name=i.name,n.menu_id=i.id,n.menu_mca=i.mca,n.menu_url=i.url}}},"修改")])])},close1:function(){this.dialogVisible=!1,this.menu_name="",this.menu_id="",this.menu_mca="",this.menu_url=""},close2:function(){this.dialogVisible2=!1,this.name="",this.mca="",this.father_id="",this.url=""}},mounted:function(){},created:function(){this.getList()}}},1044:function(e,t,a){t=e.exports=a(86)(void 0),t.push([e.i,".ms-doc[data-v-aeb6516c]{max-width:980px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;background-color:#fff;padding:40px;color:#54667a;margin-bottom:54px}.ms-doc_main[data-v-aeb6516c]{padding:20px;border-top:1px solid #e9f1f3}.lead_out img[data-v-aeb6516c]{margin:0 10px -3px 0;width:16px;height:18px}.pro[data-v-aeb6516c]{color:#0f8edd;padding:0 10px;cursor:pointer}.proB[data-v-aeb6516c]{border-left:1px solid #bfbfbf;border-right:1px solid #bfbfbf}.model_name[data-v-aeb6516c]{width:50px;text-align:right;display:inline-block;margin-right:10px}.table_header[data-v-aeb6516c]{width:50%;display:inline-block;font-size:14px;line-height:40px;border:1px solid #e9f1f3;box-sizing:border-box}",""])},1075:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[e._v("菜单设置")])],1)],1),e._v(" "),a("div",{staticClass:"ms-doc"},[a("el-button",{staticStyle:{"margin-bottom":"14px"},attrs:{type:"primary",round:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加菜单\n          ")]),e._v(" "),a("div",{staticClass:"ms-doc_main"},[e._m(0,!1,!1),e._v(" "),a("el-tree",{staticStyle:{"font-size":"14px"},attrs:{data:e.list,props:e.defaultProps,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderContent}})],1)],1),e._v(" "),a("el-dialog",{staticStyle:{width:"1000px",margin:"100px auto"},attrs:{title:"添加菜单",visible:e.dialogVisible,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("p",[a("span",{staticClass:"model_name"},[e._v("菜单名:")]),a("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:e.menu_name,callback:function(t){e.menu_name=t},expression:"menu_name"}})],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("连接:")]),a("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:e.menu_mca,callback:function(t){e.menu_mca=t},expression:"menu_mca"}}),e._v(" "),a("span",{staticStyle:{color:"#a6afbb","margin-left":"10px"}},[e._v("输入模块/控制器/方法即可")])],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("连接:")]),a("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:e.menu_url,callback:function(t){e.menu_url=t},expression:"menu_url"}}),e._v(" "),a("span",{staticStyle:{color:"#a6afbb","margin-left":"10px"}},[e._v("路由名称")])],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.close1()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add()}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{staticStyle:{width:"1000px",margin:"100px auto"},attrs:{title:"添加子菜单",visible:e.dialogVisible2,"before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible2=t}}},[a("div",[a("p",[a("span",{staticClass:"model_name"},[e._v("权限名:")]),a("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("链接:")]),a("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:e.mca,callback:function(t){e.mca=t},expression:"mca"}}),e._v(" "),a("span",{staticStyle:{color:"#a6afbb","margin-left":"10px"}},[e._v("输入模块/控制器/方法即可")])],1),e._v(" "),a("p",[a("span",{staticClass:"model_name"},[e._v("连接:")]),a("el-input",{staticStyle:{width:"150px",margin:"10px 0 20px"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),e._v(" "),a("span",{staticStyle:{color:"#a6afbb","margin-left":"10px"}},[e._v("路由名称")])],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.close2()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.add2()}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%","text-align":"center","font-size":"0","background-color":"#f2f7f8"}},[a("div",{staticClass:"table_header"},[e._v("菜单名")]),e._v(" "),a("div",{staticClass:"table_header"},[e._v("操作")])])}]}},1109:function(e,t,a){var i=a(1044);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(196)("a62f41dc",i,!0)},524:function(e,t,a){a(1109);var i=a(197)(a(1006),a(1075),"data-v-aeb6516c",null);e.exports=i.exports}});