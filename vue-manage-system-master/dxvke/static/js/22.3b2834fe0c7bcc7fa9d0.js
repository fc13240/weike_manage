webpackJsonp([22],{1030:function(t,e,o){e=t.exports=o(86)(void 0),e.push([t.i,".ms-doc[data-v-65f5fe97]{width:100%;max-width:980px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;background-color:#fff;padding:0 40px;color:#54667a;margin-bottom:54px}.m_title[data-v-65f5fe97]{font-size:20px;color:#54667a;line-height:60px;border-bottom:1px solid #e9f1f3}.ms-doc_main[data-v-65f5fe97]{padding:20px}",""])},1064:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[t._v("商品管理")])],1)],1),t._v(" "),o("div",{staticClass:"ms-doc"},[o("p",{staticClass:"m_title"},[t._v("商品管理")]),t._v(" "),o("div",{staticClass:"ms-doc_main"},[o("div",[o("el-select",{staticStyle:{width:"150px","margin-right":"20px"},attrs:{placeholder:"请选择"},model:{value:t.data.condition1,callback:function(e){t.$set(t.data,"condition1",e)},expression:"data.condition1"}},t._l(t.searchList.condition1,function(t){return o("el-option",{key:t.value,attrs:{label:t.key,value:t.value}})})),t._v(" "),o("el-select",{staticStyle:{width:"150px","margin-right":"20px"},attrs:{placeholder:"状态"},model:{value:t.data.condition2,callback:function(e){t.$set(t.data,"condition2",e)},expression:"data.condition2"}},t._l(t.searchList.condition2,function(t){return o("el-option",{key:t.value,attrs:{label:t.key,value:t.value}})})),t._v(" "),o("el-select",{staticStyle:{width:"150px","margin-right":"20px"},attrs:{placeholder:"佣金定位"},model:{value:t.data.condition3,callback:function(e){t.$set(t.data,"condition3",e)},expression:"data.condition3"}},t._l(t.searchList.condition3,function(t){return o("el-option",{key:t.id,attrs:{label:t.key,value:t.id}})})),t._v(" "),o("el-select",{staticStyle:{width:"150px","margin-right":"20px"},attrs:{placeholder:"券额"},model:{value:t.data.condition4,callback:function(e){t.$set(t.data,"condition4",e)},expression:"data.condition4"}},t._l(t.searchList.condition4,function(t){return o("el-option",{key:t.id,attrs:{label:t.key,value:t.id}})})),t._v(" "),o("el-select",{staticStyle:{width:"150px","margin-right":"20px"},attrs:{placeholder:"专场"},model:{value:t.data.condition5,callback:function(e){t.$set(t.data,"condition5",e)},expression:"data.condition5"}},t._l(t.searchList.condition5,function(t){return o("el-option",{key:t.id,attrs:{label:t.store_name,value:t.id}})})),t._v(" "),o("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.getGoodsList()}}},[t._v("筛选")])],1),t._v(" "),o("el-table",{ref:"multipleTable",staticStyle:{width:"100%","text-align":"center",margin:"20px 0"},attrs:{data:t.goodsList,"tooltip-effect":"dark",border:"",height:"480"},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"50",height:"95"}}),t._v(" "),o("el-table-column",{attrs:{label:"商品",height:"95"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("img",{staticStyle:{width:"76px",height:"76px","margin-top":"5px"},attrs:{src:t.row.pict_url,alt:""}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"标题",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.title))]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"brokerage",label:"佣金/元"}}),t._v(" "),o("el-table-column",{attrs:{prop:"reserve_price",label:"原价/元","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"zk_final_price",label:"折后/元","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"discount",label:"折扣",width:"70","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"coupon_number",label:"券额/元","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"volume",label:"销量/件","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"stock",label:"库存量/件","show-overflow-tooltip":""}})],1),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("el-select",{staticStyle:{width:"160px","margin-right":"20px"},attrs:{placeholder:"选择分类"},model:{value:t.cate_id,callback:function(e){t.cate_id=e},expression:"cate_id"}},t._l(t.cateList,function(t){return o("el-option",{key:t.id,attrs:{label:t.cate_name,value:t.id}})})),t._v(" "),o("el-select",{staticStyle:{width:"160px","margin-right":"20px"},attrs:{placeholder:"选择专场"},model:{value:t.store_id,callback:function(e){t.store_id=e},expression:"store_id"}},t._l(t.searchList.condition5,function(t){return o("el-option",{key:t.id,attrs:{label:t.store_name,value:t.id}})})),t._v(" "),o("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("确认")]),t._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(e){t.del()}}},[t._v("删除")])],1)],1)])])},staticRenderFns:[]}},1095:function(t,e,o){var a=o(1030);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(196)("613a6084",a,!0)},517:function(t,e,o){o(1095);var a=o(197)(o(999),o(1064),"data-v-65f5fe97",null);t.exports=a.exports},999:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},data:function(){return{searchList:{},goodsList:[],data:{condition1:"",condition2:"",condition3:"",condition4:"",condition5:""},cate_id:"",goods_id:[],cateList:[],store_id:""}},methods:{getSearchList:function(){var t=this;this.$ajax.post("/api/goods/goodsSearchList").then(function(e){"200"==e.data.code&&(t.searchList=e.data.data)},function(t){console.log(t)})},getCateList:function(){var t=this;this.$ajax.post("/api/goods/cateList").then(function(e){"200"==e.data.code&&(t.cateList=e.data.data.cate_list)},function(t){console.log(t)})},getGoodsList:function(){var t=this;this.$ajax.post("/api/Goods/goodslist",this.data).then(function(e){"200"==e.data.code&&(t.goodsList=e.data.data)},function(t){console.log(t)})},save:function(){var t=this;this.$ajax.post("/api/goods/storeCategory",{goods_id:this.goods_id,cate_id:this.cate_id,store_id:this.store_id}).then(function(e){"200"==e.data.code?(t.$message({message:e.data.data.message,type:"success"}),t.getGoodsList()):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})},handleSelectionChange:function(t){for(var e=[],o=0;o<t.length;o++)e.push(t[o].id);this.goods_id=e,console.log(this.goods_id)},del:function(){var t=this;this.$ajax.get("/api/Goods/delProduct",{params:{id:this.goods_id}}).then(function(e){"200"==e.data.code?(t.$message({message:e.data.data.message,type:"success"}),t.getGoodsList()):t.$message({message:e.data.error,type:"error"})},function(t){console.log(t)})}},mounted:function(){},created:function(){this.getSearchList(),this.getGoodsList(),this.getCateList()}}}});