webpackJsonp([23],{1023:function(t,e,a){e=t.exports=a(86)(void 0),e.push([t.i,'.ms-doc[data-v-3135d526]{width:980px;background-color:#fff;padding:0 40px;color:#54667a}.m_title[data-v-3135d526]{font-size:20px;color:#54667a;line-height:60px;border-bottom:1px solid #e9f1f3}.ms-doc_main[data-v-3135d526]{padding:20px}.sort[data-v-3135d526]{margin:20px 0 54px}.upload_img[data-v-3135d526]{width:375px;height:130px;background-image:url("/static/img/upload_img_bd.png");background-size:100% 100%;background-repeat:no-repeat;display:inline-block;margin:25px 20px 25px 5px}.upload_btn[data-v-3135d526]{font-size:14px;background-color:#0f8edd;border-color:#0f8edd;position:absolute;padding:8px 15px;color:#fff;border-radius:5px;top:45px}.pros[data-v-3135d526]{background-color:#dfeceb;padding:0 10px;cursor:pointer;color:#54667a;line-height:24px}',""])},1058:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[t._v("粉丝福利管理")])],1)],1),t._v(" "),a("div",{staticClass:"ms-doc"},[a("p",{staticClass:"m_title"},[t._v("粉丝福利商品")]),t._v(" "),a("div",{staticClass:"ms-doc_main"},[a("div",[a("el-select",{staticStyle:{width:"160px","margin-right":"20px"},attrs:{placeholder:"全部商品"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.options1,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.getGoodsList()}}},[t._v("筛选")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","text-align":"center",margin:"20px 0"},attrs:{data:t.product_list,"tooltip-effect":"dark",border:"",height:"480"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50",height:"95"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品",height:"95",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"60px",height:"60px","margin-top":"5px"},attrs:{src:t.row.pict_url,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"标题",width:"200","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.title))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"zk_final_price",label:"折后/元"}}),t._v(" "),a("el-table-column",{attrs:{prop:"coupon_number",label:"券额/元","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存量/件","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{textContent:t._s(1==e.row.on_sale?"上架":"下架")}},[t._v("下架")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"返元宝值",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.row.fans_acer,expression:"scope.row.fans_acer"}],staticStyle:{width:"72px",height:"24px"},attrs:{type:"text"},domProps:{value:e.row.fans_acer},on:{input:function(a){a.target.composing||t.$set(e.row,"fans_acer",a.target.value)}}}),t._v(" "),a("el-button",{staticClass:"pros",staticStyle:{"margin-left":"10px"},attrs:{type:"text",size:"small"},on:{click:function(a){t.save(e.$index)}}},[t._v("保存")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"pros",attrs:{type:"text",size:"small"},domProps:{textContent:t._s(1==e.row.on_sale?"下架":"上架")},on:{click:function(a){t.change(e.row.id,e.row.on_sale)}}},[t._v("上架")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{staticStyle:{"margin-bottom":"30px"},attrs:{"page-size":t.limit,layout:"prev, pager, next, jumper","page-count":t.totalPage},on:{"current-change":t.handleCurrentChange}}),t._v(" "),a("el-select",{staticStyle:{width:"160px","margin-right":"20px"},attrs:{placeholder:"全部商品"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary",round:""},on:{click:function(e){t.setAcer()}}},[t._v("确认\n                ")]),t._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary",round:""},on:{click:function(e){t.changeAll(1)}}},[t._v("批量上架 ")]),t._v(" "),a("el-button",{attrs:{type:"danger",round:""},on:{click:function(e){t.changeAll(2)}}},[t._v("批量下架")])],1)],1)]),t._v(" "),a("div",{staticClass:"ms-doc sort"},[a("p",{staticClass:"m_title"},[t._v("粉丝福利banner图")]),t._v(" "),a("div",{staticClass:"ms-doc_main"},[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("div",{staticStyle:{display:"inline-block",width:"500px"}},[a("p",[t._v("图片上传：")]),t._v(" "),a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"upload_img",attrs:{id:"upload_img1"}},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.imgUrl1,alt:""}})]),t._v(" "),a("p",[t._v("750*180像素尺寸；格式jpg,png,3M内大小。")]),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{id:"file1",type:"file",multiple:"",accept:"image/*"},on:{change:function(e){t.uploadImg1(e)}}}),t._v(" "),a("label",{staticClass:"upload_btn",staticStyle:{right:"0"},attrs:{for:"file1"}},[t._v("上传")])])]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("p",[t._v("banner跳转链接：")]),t._v(" "),a("el-input",{staticStyle:{width:"300px",margin:"20px 20px 20px 0"},attrs:{placeholder:"请输入链接"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},[a("template",{slot:"prepend"},[t._v("http://")])],2),t._v(" "),a("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary",round:""},on:{click:function(e){t.saveBanner()}}},[t._v("确认\n                    ")])],1)])])])])},staticRenderFns:[]}},1088:function(t,e,a){var o=a(1023);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(196)("61d13084",o,!0)},516:function(t,e,a){a(1088);var o=a(197)(a(998),a(1058),"data-v-3135d526",null);t.exports=o.exports},998:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{page:1,limit:15,totalPage:1,input:"",options1:[{value:"0",label:"全部商品"},{value:"1",label:"最新"}],value1:"0",options2:[{value:"0",label:"批量返元宝"},{value:"10",label:"10元宝"},{value:"20",label:"20元宝"},{value:"50",label:"50元宝"},{value:"100",label:"100元宝"},{value:"200",label:"200元宝"},{value:"500",label:"500元宝"}],value2:"0",dateValue1:"",product_id:[],textarea:"",product_list:[],imgUrl1:"",url:""}},methods:{getGoodsList:function(){var t=this;this.$ajax.post("/api/Fanswelfare/productList",{is_new:this.value1,page:this.page,limit:this.limit}).then(function(e){"200"==e.data.code&&(t.product_list=e.data.data.product_list,t.totalPage=e.data.data.total_page)},function(t){console.log(t)})},change:function(t,e){var a=this;e=1==e?2:1,this.$ajax.post("/api/Fanswelfare/changeSale",{product_id:t,on_sale:e}).then(function(t){"200"==t.data.code?(a.$message({message:t.data.data.message,type:"success"}),a.getGoodsList()):a.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})},changeAll:function(t){var e=this;this.$ajax.post("/api/Fanswelfare/changeSale",{product_id:this.product_id,on_sale:t}).then(function(t){"200"==t.data.code?(e.$message({message:t.data.data.message,type:"success"}),e.getGoodsList()):e.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})},setAcer:function(){var t=this;if("0"==this.value2)return void this.$message({message:"请选择批量处理元宝数量",type:"warning"});var e={product_id:this.product_id,acer_number:this.value2};this.$ajax.post("/api/Fanswelfare/batchSetAcer",e).then(function(e){"200"==e.data.code?(t.$message({message:e.data.data.message,type:"success"}),t.getGoodsList()):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})},save:function(t){var e=this,a=[];a.push(this.product_list[t].id);var o={product_id:a,acer_number:this.product_list[t].fans_acer};this.$ajax.post("/api/Fanswelfare/batchSetAcer",o).then(function(t){"200"==t.data.code?e.$message({message:t.data.data.message,type:"success"}):e.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})},uploadImg1:function(t){var e=this,a=new FormData;a.append("images",t.target.files[0]);var o={headers:{"Content-Type":"multipart/form-data"}};this.$ajax.post("api/Index/upload",a,o).then(function(t){"200"==t.data.code&&(e.imgUrl1=t.data.data.image_url)},function(t){})},getBanner:function(){var t=this;this.$ajax.post("/api/Fanswelfare/banner").then(function(e){"200"==e.data.code&&(t.imgUrl1=e.data.data.banner,t.url=e.data.data.url)},function(t){console.log(t)})},saveBanner:function(){var t=this;this.$ajax.post("/api/Fanswelfare/editBanner",{banner_image:this.imgUrl1,banner_url:this.url}).then(function(e){"200"==e.data.code?t.$message({message:e.data.data.message,type:"success"}):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})},handleSelectionChange:function(t){console.log(t);for(var e=[],a=0;a<t.length;a++)e.push(t[a].id);this.product_id=e},handleCurrentChange:function(t){this.page=t,this.getGoodsList()}},mounted:function(){},created:function(){this.getGoodsList(),this.getBanner()}}}});