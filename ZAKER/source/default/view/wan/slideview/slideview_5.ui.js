/**********************************************************************************************************/
var app = sm("do_App");
var page = sm("do_Page");
var storage = sm("do_Storage");
var listview = ui("do_listview_1");
var listdata = mm("do_ListData");
var global = sm("do_Global");

listview.bindItems(listdata);// 建立ListView 与 ListData 的行数据关系;

storage.readFile("data://wan_5.json", function(data){// 读取文件
    listdata.addData(data); // 给ListData添加数据
    listview.refreshItems(); // 刷新ListView 行数据;
});
var nf = sm("do_Notification");
listview.on("touch", function(index) {
//	page.fire("wan-which", index);
	global.setMemory("key","4");
	app.openPage({source:"source://view/wan/wan_de.ui", data:index, animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
});