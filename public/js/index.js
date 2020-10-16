$(".navi-wrap > .navi").mouseenter(onEnter);
$(".navi-wrap > .navi").mouseleave(onLeave);
function onEnter() {
	$(".suv-wrap").hide();
	$(this).find(".sub-wrap").show();
}
function onLeave() {
	$(this).find(".sub-wrap").hide();
}