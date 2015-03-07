///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///                               uCoz Template: Flatity+                               ///
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function bindReady(t){function n(){d||(d=!0,t())}function e(){if(!d&&document.body)try{document.documentElement.doScroll("left"),n()}catch(t){setTimeout(e,0)}}var d=!1;document.addEventListener?document.addEventListener("DOMContentLoaded",function(){n()},!1):document.attachEvent&&(document.documentElement.doScroll&&window==window.top&&e(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()})),window.addEventListener?window.addEventListener("load",n,!1):window.attachEvent&&window.attachEvent("onload",n)}function onReady(t){readyList.length||bindReady(function(){for(var t=0;t<readyList.length;t++)readyList[t]()}),readyList.push(t)}readyList=[];
function menuListener(e) {
	animateCSS(document.getElementById("main-sidebar-outer"), "left", -303, 0, "px", 500, .5);
}
function menuCloseListener(e) {
	animateCSS(document.getElementById("main-sidebar-outer"), "left", 0, -303, "px", 500, .5);
}
onReady(function() {
	document.getElementById("t-menu-button").addEventListener("click", menuListener, false);
	document.getElementById("t-menu-close-button").addEventListener("click", menuCloseListener, false);
});
function animateCSS(elem, prop, valueStart, valueEnd, suffix, duration, smoothing) {
	var smooth = smoothing;
	if(!smooth) smooth = .5;
	smooth = 1/smooth;
	var difference = valueEnd - valueStart;
	var ticks = Math.abs(Math.round(difference / smooth));
	var valueTick = difference / ticks;
	var currentValue = valueStart;
	elem.style[prop] = currentValue.toString() + suffix;
	var tickDuration = duration/ticks;
	var currentTick = 0;
	var timer = function() {
		if(currentTick<ticks) {
			currentValue += valueTick;
			elem.style[prop] = currentValue.toString() + suffix;
			currentTick++;
			setTimeout(timer, tickDuration);
		} else {
			elem.style[prop] = valueEnd.toString() + suffix;
		}
	}
	setTimeout(timer, tickDuration);
}