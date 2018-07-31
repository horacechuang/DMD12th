fullscreen();
$(window).resize(fullscreen);

function fullscreen() {
	var page1 = $('#stage1');
    var page2 = $('#stage2');
    var page3 = $('#stage3');
    var page4 = $('#stage4');
    var page5 = $('#stage5');
    /* var page6 = $('#stage6'); */
    var page7 = $('#stage7');
    var page8 = $('#stage8');
    var page9 = $('#stage9');
    var maps = $('.google-maps iframe');
	var windowH = $(window).height();
	var windowW = $(window).width();

	page1.width(windowW);
	page1.height(windowH);
    page2.width(windowW);
	page2.height(windowH);
    page3.width(windowW);
	page3.height(windowH);
    page4.width(windowW);
	page4.height(windowH);
    page5.width(windowW);
	page5.height(windowH);
    /* page6.width(windowW);
	page6.height(windowH); */
    page7.width(windowW);
	page7.height(windowH);
    page9.width(windowW);
	page9.height(windowH);
    maps.width(windowW);
	maps.height(windowH);
}