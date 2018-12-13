function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
	const ranked = document.getElementsByClassName('ranked-list');
	for (var i = 0; i < ranked.length; i++) {
		ranked[i].innerHTML = (i + 1);
		parseInt(ranked);
	}
}

function deepestChild() {
	return document.querySelector('#grand-node div div div div');
}