var mainScriptPath=document.body.getAttribute("data-script"),jsBaseUrl=document.body.getAttribute("data-js-path");requirejs.config({baseUrl:"js",paths:{layout:"layout",config:"app/config",dialog:"app/ui/dialog",templates:"../../templates",img:"../../img",login:"./app/login",mappage:"./app/mappage",setup:"./app/setup",admin:"./app/admin",jquery:"lib/jquery-3.1.1.min",bootstrap:"lib/bootstrap.min",text:"lib/requirejs/text",mustache:"lib/mustache.min",localForage:"lib/localforage.min",velocity:"lib/velocity.min",velocityUI:"lib/velocity.ui.min",slidebars:"lib/slidebars",jsPlumb:"lib/dom.jsPlumb-1.7.6",farahey:"lib/farahey-0.5",customScrollbar:"lib/jquery.mCustomScrollbar.min",mousewheel:"lib/jquery.mousewheel.min",xEditable:"lib/bootstrap-editable.min",morris:"lib/morris.min",raphael:"lib/raphael-min",bootbox:"lib/bootbox.min",easyPieChart:"lib/jquery.easypiechart.min",peityInlineChart:"lib/jquery.peity.min",dragToSelect:"lib/jquery.dragToSelect",hoverIntent:"lib/jquery.hoverIntent.minified",fullScreen:"lib/jquery.fullscreen.min",select2:"lib/select2.min",validator:"lib/validator.min",lazylinepainter:"lib/jquery.lazylinepainter-1.5.1.min",blueImpGallery:"lib/blueimp-gallery",blueImpGalleryHelper:"lib/blueimp-helper",blueImpGalleryBootstrap:"lib/bootstrap-image-gallery",bootstrapConfirmation:"lib/bootstrap-confirmation",bootstrapToggle:"lib/bootstrap2-toggle.min",lazyload:"lib/jquery.lazyload.min",easePack:"lib/EasePack.min",tweenLite:"lib/TweenLite.min","datatables.net":"lib/datatables/DataTables-1.10.12/js/jquery.dataTables.min","datatables.net-buttons":"lib/datatables/Buttons-1.2.1/js/dataTables.buttons.min","datatables.net-buttons-html":"lib/datatables/Buttons-1.2.1/js/buttons.html5.min","datatables.net-responsive":"lib/datatables/Responsive-2.1.0/js/dataTables.responsive.min","datatables.net-select":"lib/datatables/Select-1.2.0/js/dataTables.select.min",pnotify:"lib/pnotify/pnotify","pnotify.buttons":"lib/pnotify/pnotify.buttons","pnotify.confirm":"lib/pnotify/pnotify.confirm","pnotify.nonblock":"lib/pnotify/pnotify.nonblock","pnotify.desktop":"lib/pnotify/pnotify.desktop","pnotify.history":"lib/pnotify/pnotify.history","pnotify.callbacks":"lib/pnotify/pnotify.callbacks","pnotify.reference":"lib/pnotify/pnotify.reference"},shim:{bootstrap:{deps:["jquery"]},farahey:{deps:["jsPlumb"]},velocity:{deps:["jquery"]},velocityUI:{deps:["velocity"]},slidebars:{deps:["jquery"]},customScrollbar:{deps:["jquery","mousewheel"]},"datatables.net":{deps:["jquery"]},"datatables.net-buttons":{deps:["datatables.net"]},"datatables.net-buttons-html":{deps:["datatables.net-buttons"]},"datatables.net-responsive":{deps:["datatables.net"]},"datatables.net-select":{deps:["datatables.net"]},xEditable:{deps:["bootstrap"]},bootbox:{deps:["jquery","bootstrap"],exports:"bootbox"},morris:{deps:["jquery","raphael"],exports:"Morris"},pnotify:{deps:["jquery"]},easyPieChart:{deps:["jquery"]},peityInlineChart:{deps:["jquery"]},dragToSelect:{deps:["jquery"]},hoverIntent:{deps:["jquery"]},fullScreen:{deps:["jquery"]},select2:{deps:["jquery"],exports:"Select2"},validator:{deps:["jquery","bootstrap"]},lazylinepainter:{deps:["jquery","bootstrap"]},blueImpGallery:{deps:["jquery"]},bootstrapConfirmation:{deps:["bootstrap"]},bootstrapToggle:{deps:["jquery"]},lazyload:{deps:["jquery"]}}});require.config({baseUrl:jsBaseUrl});requirejs([mainScriptPath]);
//# sourceMappingURL=app.js.map