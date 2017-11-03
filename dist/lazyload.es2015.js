(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function query(selector) {
    return Array.from(document.querySelectorAll(selector));
}

var observer = new IntersectionObserver(
    function (changes) {
        changes.forEach(function (change) {
            if (change.isIntersecting) {
                var elem = change.target;
                elem.setAttribute('src', elem.getAttribute("data-src"));
                observer.unobserve(elem);
            }

        });
    }
);

query('.lazy-loaded').forEach(function (item) {
    observer.observe(item);
});

})));
