var app;
app = sm("do_App");

var nf = sm("do_Notification");
var imageview=ui("AlayoutRoot");

imageview.on("touch",function(data, e){
//    nf.alert("Photo 1");
    app.openPage({source:"source://view/ding/slideview/sli_de.ui", data:"1", animationType:"", isFullScreen:false, keyboardMode:"default", scriptType:""}, function(data, e){});
});