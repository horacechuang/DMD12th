//<![CDATA[
document.ondragstart = function() { return false;}
/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Disable context menu on images by GreenLava Version 1.0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
function nocontext(e) {
    return false;
}
document.oncontextmenu = nocontext;
//]]>


var e = document.getElementsByTagName('body')[0];
e.setAttribute('disable-select-cilck',on);
			
	