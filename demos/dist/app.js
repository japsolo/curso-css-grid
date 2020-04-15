let body = document.body;

function setAttributes(el, attrs) {
	for (var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
}

let anchor = document.createElement('a');
anchor.innerHTML = 'Proudly by: <b>@tfsd</b>';
setAttributes(anchor, { 
	href: 'https://instagram.com/thefullstackdevs',
	target: '_blank',
	rel: 'noopener noreferrer',
	class: 'ribbon'
});

body.insertAdjacentElement('beforeend', anchor);