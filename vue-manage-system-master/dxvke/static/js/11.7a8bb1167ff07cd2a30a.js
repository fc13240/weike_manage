webpackJsonp([11],{1034:function(t,e,a){e=t.exports=a(86)(void 0),e.push([t.i,".el-upload--picture-card{border:none;border-radius:0}.el-upload--picture-card,.el-upload-list--picture-card .el-upload-list__item{background-color:#fff;box-sizing:border-box;width:130px;height:132px;margin:5px 3px}.el-upload-list--picture-card .el-upload-list__item{overflow:hidden;border:1px solid #e9f1f3;border-radius:0;display:inline-block}.el-dialog--small{min-width:600px}",""])},1035:function(t,e,a){e=t.exports=a(86)(void 0),e.push([t.i,".ms-doc[data-v-7545f748]{width:980px;background-color:#fff;padding:0 40px;color:#54667a}.m_title[data-v-7545f748]{font-size:20px;color:#54667a;line-height:60px;border-bottom:1px solid #e9f1f3}.ms-doc_main[data-v-7545f748]{padding:20px}.sort[data-v-7545f748]{margin:20px 0 54px}.imgList[data-v-7545f748]{font-size:0;margin:20px 0}.tab[data-v-7545f748]{width:130px;height:132px;margin:5px 3px;border:1px solid #e9f1f3;text-align:center;box-sizing:border-box;position:relative}.model_title[data-v-7545f748]{font-size:16px;color:#54667a;margin-bottom:24px}.model_title small[data-v-7545f748]{font-size:12px;color:#a6afbb;margin-left:20px}.model_name[data-v-7545f748]{font-size:14px;color:#54667a}.pros[data-v-7545f748]{background-color:#dfeceb;padding:0 10px;cursor:pointer;color:#54667a;line-height:24px}",""])},1067:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[t._v("兑换商城管理")])],1)],1),t._v(" "),a("div",{staticClass:"ms-doc"},[a("p",{staticClass:"m_title"},[t._v("商品列表")]),t._v(" "),a("div",{staticClass:"ms-doc_main"},[a("div",[a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.add()}}},[t._v("添加商品\n                  ")]),t._v(" "),a("el-select",{staticStyle:{width:"160px",margin:"0 20px"},attrs:{placeholder:"类型"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.options1,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-select",{staticStyle:{width:"160px","margin-right":"20px"},attrs:{placeholder:"状态"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.getGoodsList()}}},[t._v("筛选\n                  ")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","text-align":"center",margin:"20px 0"},attrs:{data:t.goodsList,"tooltip-effect":"dark",border:"",height:"480"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50",height:"95"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品",height:"95",width:"110"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"76px",height:"76px","margin-top":"5px"},attrs:{src:t.row.product_image,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"标题",width:"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.product_name))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"market_price",label:"市场价/元",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"exchange_acer",label:"元宝兑换价/个","show-overflow-tooltip":"",width:"130"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存量","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{textContent:t._s(1==e.row.product_type?"虚拟":"实物")}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{textContent:t._s(1==e.row.is_sale?"上架":"未上架")}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"pros",attrs:{type:"text",size:"small"},on:{click:function(a){t.edit(e.row.product_id)}}},[t._v("编辑\n                          ")]),t._v(" "),a("el-button",{staticClass:"pros",attrs:{type:"text",size:"small"},domProps:{textContent:t._s(1==e.row.is_sale?"下架":"上架")},on:{click:function(a){t.change(e.row.product_id,e.row.is_sale)}}},[t._v("上架\n                          ")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary",round:""},on:{click:function(e){t.changeAll(1)}}},[t._v("一键上架\n                  ")]),t._v(" "),a("el-button",{attrs:{type:"danger",round:""},on:{click:function(e){t.changeAll(2)}}},[t._v("一键下架")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.del()}}},[t._v("删除")])],1)],1)]),t._v(" "),a("div",{staticClass:"ms-doc sort"},[a("p",{staticClass:"m_title"},[t._v("兑换说明")]),t._v(" "),a("div",{staticClass:"ms-doc_main"},[a("div",[t._v("兑换页说明")]),t._v(" "),a("el-input",{staticStyle:{width:"488px",margin:"20px 20px 20px 0"},attrs:{type:"textarea",rows:6,placeholder:"请输入说明内容"},model:{value:t.exchangeBrief,callback:function(e){t.exchangeBrief=e},expression:"exchangeBrief"}}),t._v(" "),a("pre",{staticStyle:{"font-size":"14px",color:"#a6b7bf",display:"inline-block","padding-bottom":"50px"}},[t._v("例如：\n  成功提交后奖品将在1~3个工作日内发送至提交账户内。\n  实物奖品将在1~3个工作日内发货。请耐心等待并在我的兑换内查看。\n              ")]),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd","margin-left":"50px"},attrs:{type:"primary",round:""},on:{click:function(e){t.saveBrief()}}},[t._v("保存\n                  ")])],1)],1)]),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[a("p",{staticClass:"model_title"},[t._v("1.商城页展示图\n                  "),a("small",[t._v("尺寸建议：主图300*200像素，详情图680*454像素；类型要求：jpg,png,3M内大小。")])]),t._v(" "),a("div",{staticClass:"imgList"},[a("div",{staticClass:"tab"},[a("input",{staticStyle:{display:"none"},attrs:{id:"file1",type:"file",multiple:"",accept:"image/*"},on:{change:function(e){t.uploadImg1(e)}}}),t._v(" "),a("label",{staticStyle:{display:"inline-block"},attrs:{for:"file1"}},[a("div",{staticStyle:{width:"128px",height:"130px","background-image":"url('/static/img/exchange_add_img1.png')"}},[a("img",{staticStyle:{width:"128px",height:"130px"},attrs:{src:t.data.product_image,alt:""}})])])]),t._v(" "),a("el-upload",{attrs:{name:"images","file-list":t.small_images,action:t.upload,onError:t.uploadError,onSuccess:t.uploadSuccess,beforeUpload:t.beforeUpload,"list-type":"picture-card","on-remove":t.handleRemove}},[a("img",{staticStyle:{width:"128px",height:"130px"},attrs:{src:"/static/img/exchange_add_img2.png",alt:""}})])],1),t._v(" "),a("div",{staticStyle:{"font-size":"0",overflow:"hidden"}},[a("div",{staticStyle:{width:"40%",float:"left"}},[a("p",{staticClass:"model_title"},[t._v("2.商品价格及数量")]),t._v(" "),a("p",{staticClass:"model_name"},[t._v("市场价值/元")]),t._v(" "),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:t.data.market_price,callback:function(e){t.$set(t.data,"market_price",e)},expression:"data.market_price"}}),t._v(" "),a("p",{staticClass:"model_name"},[t._v("元宝兑换价/个")]),t._v(" "),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:t.data.exchange_acer,callback:function(e){t.$set(t.data,"exchange_acer",e)},expression:"data.exchange_acer"}}),t._v(" "),a("p",{staticClass:"model_name"},[t._v("上传数量/件")]),t._v(" "),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:t.data.stock,callback:function(e){t.$set(t.data,"stock",e)},expression:"data.stock"}})],1),t._v(" "),a("div",{staticStyle:{width:"60%",float:"right"}},[a("p",{staticClass:"model_title"},[t._v("3.商品详情")]),t._v(" "),a("div",{staticStyle:{display:"inline-block","margin-right":"10px"}},[a("p",{staticClass:"model_name"},[t._v("商品名称 ")]),t._v(" "),a("el-input",{staticStyle:{width:"180px",margin:"10px 0 20px"},model:{value:t.data.product_name,callback:function(e){t.$set(t.data,"product_name",e)},expression:"data.product_name"}})],1),t._v(" "),a("div",{staticStyle:{display:"inline-block"}},[a("p",{staticClass:"model_name"},[t._v("商品类型")]),t._v(" "),a("el-select",{staticStyle:{width:"180px",margin:"10px 0 20px"},attrs:{placeholder:"请选择"},model:{value:t.data.goods_type,callback:function(e){t.$set(t.data,"goods_type",e)},expression:"data.goods_type"}},t._l(t.options3,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("p",{staticClass:"model_name"},[t._v("商品详细介绍")]),t._v(" "),a("el-input",{staticStyle:{width:"100%",margin:"10px 0 20px"},attrs:{type:"textarea",rows:6,placeholder:"请输入说明内容"},model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}})],1)])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.close()}}},[t._v("取 消")]),t._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.addGoods()}}},[t._v("保存")])],1)])],1)},staticRenderFns:[]}},1099:function(t,e,a){var o=a(1034);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(196)("5e1744f0",o,!0)},1100:function(t,e,a){var o=a(1035);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(196)("4f3b9c48",o,!0)},515:function(t,e,a){a(1100),a(1099);var o=a(197)(a(997),a(1067),"data-v-7545f748",null);t.exports=o.exports},997:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{small_images:[],upload:"/api/Index/upload",goodsList:[],exchangeBrief:"",dialogVisible:!1,input:"",options1:[{value:"0",label:"全部"},{value:"1",label:"虚拟"},{value:"2",label:"实物"}],value1:"0",options2:[{value:"0",label:"全部"},{value:"1",label:"上架"},{value:"2",label:"未上架"}],value2:"0",dateValue1:"",product_id:[],options3:[{value:"0",label:"选择类型"},{value:"2",label:"虚拟-提现"},{value:"1",label:"虚拟-充值"},{value:"3",label:"实物"}],imgUrl:[],data:{small_images:[],goods_type:"0",product_name:"",content:"",stock:"",market_price:"",exchange_acer:"",product_image:"",product_id:""},title:"添加兑换商品"}},methods:{getGoodsList:function(){var t=this;this.$ajax.post("/api/Acerstore/acerList",{product_type:this.value1,is_sale:this.value2}).then(function(e){"200"==e.data.code&&(t.goodsList=e.data.data.acer_list)},function(t){console.log(t)})},getExchangeBrief:function(){var t=this;this.$ajax.get("/api/Acerstore/exchangeBrief").then(function(e){"200"==e.data.code&&(t.exchangeBrief=e.data.data.brief)},function(t){console.log(t)})},saveBrief:function(){var t=this;this.$ajax.post("/api/Acerstore/exchangeBrief",{brief:this.exchangeBrief}).then(function(e){"200"==e.data.code?t.$message({message:e.data.data.message,type:"success"}):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})},change:function(t,e){var a=this;e=1==e?2:1,this.$ajax.post("/api/Acerstore/changeSale",{product_id:t,is_sale:e}).then(function(t){"200"==t.data.code?(a.$message({message:t.data.data.message,type:"success"}),a.getGoodsList()):a.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})},changeAll:function(t){var e=this;this.$ajax.post("/api/Acerstore/changeSale",{product_id:this.product_id,is_sale:t}).then(function(t){"200"==t.data.code?(e.$message({message:t.data.data.message,type:"success"}),e.getGoodsList()):e.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})},addGoods:function(){var t=this;return"0"==this.data.goods_type?void this.$message({message:"请选择商品类型",type:"warning"}):""==this.data.product_image?void this.$message({message:"请上传图片",type:"warning"}):void this.$ajax.post("/api/Acerstore/editProductAcer",this.data).then(function(e){t.data={},t.small_images=[],"200"==e.data.code?(t.$message({message:e.data.data.message,type:"success"}),t.dialogVisible=!1,t.getGoodsList()):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})},add:function(){this.title="新增兑换商品",this.data={small_images:[],goods_type:"0",product_name:"",content:"",stock:"",market_price:"",exchange_acer:"",product_image:"",product_id:""},this.dialogVisible=!0},edit:function(t){var e=this;this.title="编辑兑换商品",this.data.product_id=t,this.$ajax.get("/api/Acerstore/editProductAcer",{params:{product_id:t}}).then(function(t){if("200"==t.data.code){e.data=t.data.data.product;for(var a=0;a<e.data.small_images.length;a++)e.small_images.push({url:e.data.small_images[a]});e.dialogVisible=!0}},function(t){console.log(t)})},uploadImg1:function(t){var e=this,a=new FormData;a.append("images",t.target.files[0]);var o={headers:{"Content-Type":"multipart/form-data"}};this.$ajax.post("api/Index/upload",a,o).then(function(t){"200"==t.data.code&&(console.log("成功"),e.data.product_image=t.data.data.image_url)},function(t){})},handleSelectionChange:function(t){for(var e=[],a=0;a<t.length;a++)e.push(t[a].product_id);this.product_id=e},handleClose:function(t){var e=this;this.$confirm("确认关闭？").then(function(a){e.small_images=[],t()}).catch(function(t){})},close:function(){this.small_images=[],this.data={small_images:[],goods_type:"0",product_name:"",content:"",stock:"",market_price:"",exchange_acer:"",product_image:"",product_id:""},this.dialogVisible=!1},handleRemove:function(t,e){t.response?this.removeByValue(this.data.small_images,t.response.data.image_url):this.removeByValue(this.data.small_images,t.url)},uploadSuccess:function(t,e,a){this.data.small_images.push(t.data.image_url)},uploadError:function(t,e,a){this.$message({message:"上传失败!",type:"error"})},beforeUpload:function(t){var e="jpg"===t.name.split(".")[1],a="png"===t.name.split(".")[1],o=t.size/1024/1024<3;return e||a||this.$message({message:"上传图片只能是jpg、png格式!",type:"error"}),o||this.$message({message:"上传图片大小不能超过 3M!",type:"error"}),e||a&&o},removeByValue:function(t,e){for(var a=0;a<t.length;a++)if(t[a]==e){t.splice(a,1);break}},del:function(){var t=this;this.$ajax.get("/api/Acerstore/delProduct",{params:{product_id:this.product_id}}).then(function(e){"200"==e.data.code?(t.$message({message:e.data.data.message,type:"success"}),t.getGoodsList()):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})}},mounted:function(){},created:function(){this.getGoodsList(),this.getExchangeBrief()}}}});