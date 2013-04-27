/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#xe000;',
			'icon-twitter' : '&#xe001;',
			'icon-vimeo' : '&#xe002;',
			'icon-google-plus' : '&#xe003;',
			'icon-mail' : '&#xe004;',
			'icon-flickr' : '&#xe005;',
			'icon-github' : '&#xe006;',
			'icon-chrome' : '&#xe007;',
			'icon-firefox' : '&#xe008;',
			'icon-IE' : '&#xe009;',
			'icon-pinterest' : '&#xe00a;',
			'icon-feed' : '&#xe00b;',
			'icon-dribbble' : '&#xe00c;',
			'icon-heart-empty' : '&#xf08a;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};