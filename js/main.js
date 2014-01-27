window.onerror = function(message, url, lineNumber) {
	console.log('Line: ' + lineNumber +' m: ' + message + ' url: ' + url);
	return true;
};

function logging(msg){
	if (location.href.indexOf("#log") !== -1) {
		var uhr = new Date();
		var stunden = uhr.getHours();
		var minuten = uhr.getMinutes();
		var sekunden = uhr.getSeconds();
		var millisekunden = uhr.getMilliseconds();
		console.log(msg + ' ' + stunden+ ':' + minuten + ':' + sekunden + '::' + millisekunden);
	}
}/*----------------------------------------------------------------------------*/
jQuery.fn.inputHints = function() {
	// hides the input display text stored in the title on focus
	// and sets it on blur if the user hasn't changed it.

	// show the display text
	jQuery(this).each(function(i) {
		jQuery(this).val(jQuery(this).attr('title')).addClass('hint');
	});

	// hook up the blur & focus
	return jQuery(this).focus(function() {
		if (jQuery(this).val() == jQuery(this).attr('title')){
			jQuery(this).val('').removeClass('hint');
		}
	}).blur(function() {
		if (jQuery(this).val() === ''){
			jQuery(this).val(jQuery(this).attr('title')).addClass('hint');
		}
	});
};
/*----------------------------------------------------------------------------*/
jQuery.fn.wait = function(time, type) {
	time = time || 1000;
	type = type || "fx";
	return this.queue(type, function() {
		var self = this;
		setTimeout(function() {
			jQuery(self).dequeue();
		}, time);
	});
};
/*----------------------------------------------------------------------------*/
var TYPES = {
	'undefined'        : 'undefined',
	'number'           : 'number',
	'boolean'          : 'boolean',
	'string'           : 'string',
	'[object Function]': 'function',
	'[object RegExp]'  : 'regexp',
	'[object Array]'   : 'array',
	'[object Date]'    : 'date',
	'[object Error]'   : 'error'
},
TOSTRING = Object.prototype.toString;

function type(o) {
	return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
};
/*----------------------------------------------------------------------------*/
function jQueryUIAutoCompleteMustMatch(input) {
	var found = 0;
	var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( jQuery.trim($(input).val()) ) + "$", "i" );
	jQuery.each($('.ui-autocomplete li'), function(i, val) {
		if(jQuery.trim( $(val).text() ).match( matcher ) ) {
			found = 1;
		}
	});
	if (found) {
		return true;
	}
	else
	{
		$(input).val('');
		return false;
	}
}