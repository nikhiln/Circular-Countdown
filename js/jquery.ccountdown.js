/*!jQuery Circular CountDown*/
/**
 * Downward compatible
 *
 * Version: 1.0.0 (26/04/2013)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2013 Nikhil Navadiya
 *
 * Thanks to http://www.javascriptkit.com/
 */
(function($) {
	$.fn.ccountdown = function(_yr, _m, _d, _t) {
		var $this = this;
		var _montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
		var _today = new Date();
		// calling function first time so that it wll setup remaining time
		var _changeTime = function() {
			var _today = new Date();
			var _todayy = _today.getYear();
			if (_todayy < 1000)
				_todayy += 1900;
			var _todaym = _today.getMonth();
			var _todayd = _today.getDate();
			var _todayh = _today.getHours();
			var _todaymin = _today.getMinutes();
			var _todaysec = _today.getSeconds();
			_todaysec = "0" + _todaysec;
			_todaysec = _todaysec.substr(_todaysec.length - 2);
			var _todaystring = _montharray[_todaym] + " " + _todayd + ", " + _todayy + " " + _todayh + ":" + _todaymin + ":" + _todaysec;
			var _futurestring = _montharray[_m - 1] + " " + _d + ", " + _yr + " " + _t;
			/* calculation of remaining days, hrs, min, and secs */
			_dd = Date.parse(_futurestring) - Date.parse(_todaystring);
			_dday = Math.floor(_dd / (60 * 60 * 1000 * 24) * 1);
			_dhour = Math.floor((_dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
			_dmin = Math.floor(((_dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
			_dsec = Math.floor((((_dd % (60 * 60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
			var el = $($this);
			var $ss = el.find(".second"), $mm = el.find(".minute"), $hh = el.find(".hour"), $dd = el.find(".days");
			$ss.val(_dsec).trigger("change");
			$mm.val(_dmin).trigger("change");
			$hh.val(_dhour).trigger("change");
			$dd.val(_dday).trigger("change");
		};
		
		_changeTime();

		setInterval(_changeTime, 1000);
	};
})(jQuery);
